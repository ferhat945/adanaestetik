import { z } from "zod"
import slugify from "slugify"
import { prisma } from "@/lib/prisma"
import { isAdminAuthenticated } from "@/lib/admin-auth"

type RouteContext = {
  params: Promise<{
    id: string
  }>
}

const updateBlogSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalıdır."),
  excerpt: z.string().min(10, "Özet en az 10 karakter olmalıdır."),
  content: z.string().min(20, "İçerik en az 20 karakter olmalıdır."),
  metaTitle: z.string().min(3, "Meta title gereklidir."),
  metaDescription: z.string().min(10, "Meta description gereklidir."),
  isPublished: z.boolean(),
})

export async function GET(_request: Request, context: RouteContext) {
  try {
    const authenticated = await isAdminAuthenticated()

    if (!authenticated) {
      return Response.json(
        { ok: false, message: "Yetkisiz erişim." },
        { status: 401 }
      )
    }

    const { id } = await context.params
    const numericId = Number(id)

    if (Number.isNaN(numericId)) {
      return Response.json(
        { ok: false, message: "Geçersiz blog id." },
        { status: 400 }
      )
    }

    const blog = await prisma.blog.findUnique({
      where: { id: numericId },
    })

    if (!blog) {
      return Response.json(
        { ok: false, message: "Blog bulunamadı." },
        { status: 404 }
      )
    }

    return Response.json({
      ok: true,
      blog,
    })
  } catch (error) {
    console.error("GET /api/admin/blog-admin/[id] error:", error)

    return Response.json(
      { ok: false, message: "Sunucu hatası oluştu." },
      { status: 500 }
    )
  }
}

export async function PATCH(req: Request, context: RouteContext) {
  try {
    const authenticated = await isAdminAuthenticated()

    if (!authenticated) {
      return Response.json(
        { ok: false, message: "Yetkisiz erişim." },
        { status: 401 }
      )
    }

    const { id } = await context.params
    const numericId = Number(id)

    if (Number.isNaN(numericId)) {
      return Response.json(
        { ok: false, message: "Geçersiz blog id." },
        { status: 400 }
      )
    }

    const existingBlog = await prisma.blog.findUnique({
      where: { id: numericId },
    })

    if (!existingBlog) {
      return Response.json(
        { ok: false, message: "Blog bulunamadı." },
        { status: 404 }
      )
    }

    const body: unknown = await req.json()
    const parsed = updateBlogSchema.safeParse(body)

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

    const slugOwner = await prisma.blog.findUnique({
      where: { slug },
    })

    if (slugOwner && slugOwner.id !== numericId) {
      return Response.json(
        { ok: false, message: "Bu başlığa ait slug zaten mevcut." },
        { status: 400 }
      )
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: numericId },
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
      blog: updatedBlog,
    })
  } catch (error) {
    console.error("PATCH /api/admin/blog-admin/[id] error:", error)

    return Response.json(
      { ok: false, message: "Blog güncellenirken sunucu hatası oluştu." },
      { status: 500 }
    )
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const authenticated = await isAdminAuthenticated()

    if (!authenticated) {
      return Response.json(
        { ok: false, message: "Yetkisiz erişim." },
        { status: 401 }
      )
    }

    const { id } = await context.params
    const numericId = Number(id)

    if (Number.isNaN(numericId)) {
      return Response.json(
        { ok: false, message: "Geçersiz blog id." },
        { status: 400 }
      )
    }

    const existingBlog = await prisma.blog.findUnique({
      where: { id: numericId },
    })

    if (!existingBlog) {
      return Response.json(
        { ok: false, message: "Blog bulunamadı." },
        { status: 404 }
      )
    }

    await prisma.blog.delete({
      where: { id: numericId },
    })

    return Response.json({
      ok: true,
      message: "Blog silindi.",
    })
  } catch (error) {
    console.error("DELETE /api/admin/blog-admin/[id] error:", error)

    return Response.json(
      { ok: false, message: "Blog silinirken sunucu hatası oluştu." },
      { status: 500 }
    )
  }
}