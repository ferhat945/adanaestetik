import { prisma } from "@/lib/prisma"

export default async function AdminDashboardPage() {
  const [blogCount, leadCount, publishedBlogCount] = await Promise.all([
    prisma.blog.count(),
    prisma.lead.count(),
    prisma.blog.count({
      where: {
        isPublished: true,
      },
    }),
  ])

  return (
    <div className="space-y-8">
      <div className="rounded-[32px]border border-[#eadfce] bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
          Dashboard
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
          Yönetim Paneli
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#6f675f]">
          Blog yönetimi ve danışma taleplerini buradan takip edebilirsin.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-sm">
          <p className="text-sm text-[#6f675f]">Toplam Blog</p>
          <p className="mt-3 text-4xl font-semibold text-[#1a1a1a]">
            {blogCount}
          </p>
        </div>

        <div className="rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-sm">
          <p className="text-sm text-[#6f675f]">Yayındaki Blog</p>
          <p className="mt-3 text-4xl font-semibold text-[#1a1a1a]">
            {publishedBlogCount}
          </p>
        </div>

        <div className="rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-sm">
          <p className="text-sm text-[#6f675f]">Toplam Lead</p>
          <p className="mt-3 text-4xl font-semibold text-[#1a1a1a]">
            {leadCount}
          </p>
        </div>
      </div>
    </div>
  )
}