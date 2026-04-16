import { MetadataRoute } from "next"
import { prisma } from "@/lib/prisma"

type SitemapBlogItem = {
  slug: string
  updatedAt: Date
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://adanaestetik.com"

  const blogs: SitemapBlogItem[] = await prisma.blog.findMany({
    where: { isPublished: true },
    select: { slug: true, updatedAt: true },
  })

  const blogUrls = blogs.map((blog: SitemapBlogItem) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ucretsiz-danisma`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kvkk`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ]
}