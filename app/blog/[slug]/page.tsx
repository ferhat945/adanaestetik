import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"

type BlogDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params

  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
    select: {
      title: true,
      metaTitle: true,
      metaDescription: true,
      isPublished: true,
    },
  })

  if (!blog || !blog.isPublished) {
    return {
      title: "Yazı Bulunamadı | Dr. İnzia",
    }
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
  }
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params

  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
  })

  if (!blog || !blog.isPublished) {
    notFound()
  }

  return (
    <main className="bg-[#f9f3ea]">
      <section className="border-b border-black/5 bg-[#f6efe6]">
        <div className="container-main py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
            Blog Yazısı
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#1a1a1a] md:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-6 text-sm text-[#6f675f]">
            {new Date(blog.createdAt).toLocaleDateString("tr-TR")}
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <article className="mx-auto max-w-4xl rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm md:p-12">
            <p className="mb-8 text-lg leading-8 text-[#6f675f]">
              {blog.excerpt}
            </p>

            <div className="whitespace-pre-line text-base leading-8 text-[#3f3a35]">
              {blog.content}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}