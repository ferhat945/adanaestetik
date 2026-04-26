import Link from "next/link"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic" // 🔥 EKLENDİ

type HomeBlogPreviewItem = {
  id: number
  title: string
  slug: string
  excerpt: string
  createdAt: Date
}

export async function HomeBlogPreview() {
  const bloglar: HomeBlogPreviewItem[] = await prisma.blog.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      createdAt: true,
    },
  })

  return (
    <section className="bg-white section-space">
      <div className="container-main">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9c8a73]">
              Blog
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
              Son Yazılar
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-[#b69369] transition hover:opacity-80"
          >
            Tüm Blogları Gör
          </Link>
        </div>

        {bloglar.length === 0 ? (
          <div className="rounded-[32px] border border-[#eadfce] bg-[#fcfaf7] p-10 text-center">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">
              Henüz yayınlanmış blog yazısı bulunmuyor
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6f675f]">
              Yeni blog yazıları eklendiğinde burada görünecek.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bloglar.map((blog: HomeBlogPreviewItem) => (
              <article
                key={blog.id}
                className="rounded-[28px] border border-[#eee4d8] bg-[#faf6f0] p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(108,91,67,0.10)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#b69369]">
                  {new Date(blog.createdAt).toLocaleDateString("tr-TR")}
                </p>

                <h3 className="mt-4 text-2xl font-medium text-[#1a1a1a]">
                  {blog.title}
                </h3>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-[#6f675f]">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-6 inline-flex text-sm font-medium text-[#b69369]"
                >
                  Yazıyı Oku
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}