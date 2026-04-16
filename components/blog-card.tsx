import Link from "next/link"

type BlogCardProps = {
  title: string
  slug: string
  excerpt: string
  createdAt: string
}

export function BlogCard({
  title,
  slug,
  excerpt,
  createdAt,
}: BlogCardProps) {
  return (
    <article className="rounded-[28px] border border-[#eee4d8] bg-white p-7 shadow-sm">
      <p className="text-xs uppercase tracking-[0.3em] text-[#b69369]">
        {createdAt}
      </p>

      <h3 className="mt-4 text-2xl font-medium text-[#1a1a1a]">
        {title}
      </h3>

      <p className="mt-4 line-clamp-4 text-sm leading-7 text-[#6f675f]">
        {excerpt}
      </p>

      <Link
        href={`/blog/${slug}`}
        className="mt-6 inline-flex text-sm font-medium text-[#b69369]"
      >
        Yazıyı Oku
      </Link>
    </article>
  )
}