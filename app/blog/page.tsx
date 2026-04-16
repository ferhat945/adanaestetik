import type { Metadata } from "next"
import Link from "next/link"
import { prisma } from "@/lib/prisma"

export const metadata: Metadata = {
  title: "Blog | Dr. İnzia",
  description:
    "Botoks, dolgu, PRP, yüz germe ve diğer uygulamalar hakkında bilgilendirici blog içerikleri.",
}

export default async function BlogPage() {
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
    },
  })

  return (
    <main className="bg-[#f9f3ea]">
      <section className="border-b border-black/5 bg-[#f6efe6]">
        <div className="container-main py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
            Blog
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#1a1a1a] md:text-6xl">
            Medikal estetik hakkında bilgilendirici yazılar
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f675f]">
            Botoks, dolgu, PRP, gençlik aşısı, russian lip ve diğer işlemler
            hakkında merak edilen konulara dair içerikler.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          {blogs.length === 0 ? (
            <div className="rounded-[32px] border border-[#eadfce] bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1a1a1a]">
                Henüz yayınlanmış blog yazısı bulunmuyor
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6f675f]">
                Admin panelden yayınlanan yazılar burada listelenecek.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="rounded-[28px] border border-[#eee4d8] bg-white p-7 shadow-sm"
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
    </main>
  )
}