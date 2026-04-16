import { z } from "zod"
import { setAdminSession } from "@/lib/admin-auth"

const loginSchema = z.object({
  email: z.string().email("Geçerli e-posta girin."),
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır."),
})

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json()
    const parsed = loginSchema.safeParse(body)

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Giriş bilgileri geçersiz."

      return Response.json(
        { ok: false, message: firstError },
        { status: 400 }
      )
    }

    const { email, password } = parsed.data

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return Response.json(
        { ok: false, message: "E-posta veya şifre hatalı." },
        { status: 401 }
      )
    }

    await setAdminSession()

    return Response.json({
      ok: true,
      message: "Giriş başarılı.",
    })
  } catch (error) {
    console.error("POST /api/admin/login error:", error)

    return Response.json(
      { ok: false, message: "Sunucu hatası oluştu." },
      { status: 500 }
    )
  }
}