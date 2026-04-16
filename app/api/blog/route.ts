import { prisma } from "@/lib/prisma"

export async function GET() {
  const blogs = await prisma.blog.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      createdAt: true,
      coverImage: true,
    },
  })

  return Response.json({ ok: true, blogs })
}