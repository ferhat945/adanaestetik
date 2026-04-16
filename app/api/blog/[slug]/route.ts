import { prisma } from "@/lib/prisma"

type RouteContext = {
  params: Promise<{
    slug: string
  }>
}

export async function GET(
  _request: Request,
  context: RouteContext
) {
  const { slug } = await context.params

  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
  })

  if (!blog || !blog.isPublished) {
    return Response.json(
      {
        ok: false,
        message: "Yazı bulunamadı.",
      },
      { status: 404 }
    )
  }

  return Response.json({
    ok: true,
    blog,
  })
}