import nodemailer from "nodemailer"
import { z } from "zod"
import { prisma } from "@/lib/prisma"

const contactSchema = z.object({
  name: z.string().min(2, "Ad Soyad en az 2 karakter olmalıdır."),
  phone: z.string().min(10, "Telefon bilgisi geçerli olmalıdır."),
  email: z.string().email("Geçerli bir e-posta girin.").or(z.literal("")),
  city: z.string().min(2, "Şehir bilgisi gereklidir."),
  service: z.string().min(2, "İşlem seçimi gereklidir."),
  message: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const json: unknown = await req.json()
    const parsed = contactSchema.safeParse(json)

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Form verileri geçersiz."
      return Response.json({ ok: false, message: firstError }, { status: 400 })
    }

    const data = parsed.data

    await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        city: data.city,
        service: data.service,
        message: data.message?.trim() ? data.message : null,
      },
    })

    const hasMailConfig =
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.MAIL_TO

    if (hasMailConfig) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: process.env.MAIL_TO,
        subject: "Yeni Danışma Talebi",
        text: [
          `Ad Soyad: ${data.name}`,
          `Telefon: ${data.phone}`,
          `E-posta: ${data.email || "-"}`,
          `Şehir: ${data.city}`,
          `İşlem: ${data.service}`,
          "",
          "Mesaj:",
          data.message || "-",
        ].join("\n"),
      })
    }

    return Response.json({
      ok: true,
      message: "Talep başarıyla gönderildi.",
    })
  } catch {
    return Response.json(
      {
        ok: false,
        message: "Sunucu tarafında bir hata oluştu.",
      },
      { status: 500 }
    )
  }
}