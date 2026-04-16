import { z } from "zod"
import slugify from "slugify"
import { prisma } from "@/lib/prisma"
import { isAdminAuthenticated } from "@/lib/admin-auth"

const createBlogSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalıdır."),
  excerpt: z.string().min(10, "Özet en az 10 karakter olmalıdır."),
  content: z.string().min(20, "İçerik en az 20 karakter olmalıdır."),
  metaTitle: z.string().min(3, "Meta title gereklidir."),
  metaDescription: z.string().min(10, "Meta description gereklidir."),
  isPublished: z.boolean(),
})

export async function GET() {
  try {
    const authenticated = await isAdminAuthenticated()

    if (!authenticated) {
      return Response.json(
        { ok: false, message: "Yetkisiz erişim." },
        { status: 401 }
      )
    }

    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return Response.json({
      ok: true,
      blogs,
    })
  } catch (error) {
    console.error("GET /api/blog-admin error:", error)

    return Response.json(
      { ok: false, message: "Sunucu hatası oluştu." },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const authenticated = await isAdminAuthenticated()

    if (!authenticated) {
      return Response.json(
        { ok: false, message: "Yetkisiz erişim." },
        { status: 401 }
      )
    }

    const body: unknown = await req.json()
    const parsed = createBlogSchema.safeParse(body)

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Form verileri geçersiz."

      return Response.json(
        { ok: false, message: firstError },
        { status: 400 }
      )
    }

    const data = parsed.data

    const slug = slugify(data.title, {
      lower: true,
      strict: true,
      trim: true,
      locale: "tr",
    })

    if (!slug) {
      return Response.json(
        { ok: false, message: "Geçerli bir slug üretilemedi." },
        { status: 400 }
      )
    }

    const exists = await prisma.blog.findUnique({
      where: { slug },
    })

    if (exists) {
      return Response.json(
        { ok: false, message: "Bu başlığa ait slug zaten mevcut." },
        { status: 400 }
      )
    }

    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        slug,
        excerpt: data.excerpt,
        content: data.content,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        isPublished: data.isPublished,
      },
    })

    return Response.json({
      ok: true,
      blog,
    })
  } catch (error) {
    console.error("POST /api/blog-admin error:", error)

    return Response.json(
      { ok: false, message: "Blog kaydedilirken sunucu hatası oluştu." },
      { status: 500 }
    )
  }
}