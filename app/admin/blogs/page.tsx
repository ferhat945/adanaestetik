import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { AdminBlogActions } from "@/components/admin-blog-actions"

type AdminBlogListItem = {
  id: number
  title: string
  slug: string
  isPublished: boolean
  createdAt: Date
}

export default async function AdminBlogsPage() {
  const blogs: AdminBlogListItem[] = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      isPublished: true,
      createdAt: true,
    },
  })

  return (
    <div className="space-y-10">
      <div className="rounded-[32px] border border-[#eadfce] bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
              Admin Panel
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-[#1a1a1a]">
              Blog Yönetimi
            </h1>
            <p className="mt-2 text-sm text-[#6f675f]">
              Blog yazılarını buradan oluşturabilir, düzenleyebilir ve silebilirsin.
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center justify-center rounded-full bg-[#b69369] px-6 py-3 text-sm font-medium text-white shadow-md transition hover:scale-105 hover:opacity-90"
          >
            + Yeni Blog Ekle
          </Link>
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="rounded-[28px] border border-[#eadfce] bg-white p-12 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-[#1a1a1a]">
            Henüz blog yok
          </h2>
          <p className="mt-2 text-sm text-[#6f675f]">
            İlk blog yazını oluşturarak başlayabilirsin.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {blogs.map((blog: AdminBlogListItem) => (
            <div
              key={blog.id}
              className="group rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b69369]">
                    {new Date(blog.createdAt).toLocaleDateString("tr-TR")}
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-[#1a1a1a]">
                    {blog.title}
                  </h2>

                  <p className="mt-2 text-sm text-[#6f675f]">
                    /blog/{blog.slug}
                  </p>

                  <div className="mt-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        blog.isPublished
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.isPublished ? "Yayında" : "Taslak"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <AdminBlogActions blogId={blog.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}