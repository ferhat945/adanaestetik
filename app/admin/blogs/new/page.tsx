"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

type BlogFormPayload = {
  title: string
  excerpt: string
  content: string
  metaTitle: string
  metaDescription: string
  isPublished: boolean
}

type BlogCreateResponse = {
  ok?: boolean
  message?: string
}

export default function NewBlogPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setErrorMessage("")
    setSuccessMessage("")

    const form = new FormData(e.currentTarget)

    const payload: BlogFormPayload = {
      title: String(form.get("title") ?? "").trim(),
      excerpt: String(form.get("excerpt") ?? "").trim(),
      content: String(form.get("content") ?? "").trim(),
      metaTitle: String(form.get("metaTitle") ?? "").trim(),
      metaDescription: String(form.get("metaDescription") ?? "").trim(),
      isPublished: form.get("isPublished") === "on",
    }

    try {
      const response = await fetch("/api/admin/blog-admin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const contentType = response.headers.get("content-type") || ""

      if (!contentType.includes("application/json")) {
        throw new Error("API JSON yerine hata sayfası döndürdü.")
      }

      const result: BlogCreateResponse = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Blog oluşturulamadı.")
      }

      setSuccessMessage("Blog başarıyla oluşturuldu.")
      e.currentTarget.reset()

      setTimeout(() => {
        router.push("/admin/blogs")
        router.refresh()
      }, 800)
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
          Yeni Blog
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
          Blog Yazısı Oluştur
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm"
      >
        <div className="grid gap-6">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-[#1a1a1a]"
            >
              Başlık
            </label>
            <input
              id="title"
              name="title"
              required
              className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
              placeholder="Örn: Göz Altı Kırışıklık Tedavisi"
            />
          </div>

          <div>
            <label
              htmlFor="excerpt"
              className="mb-2 block text-sm font-medium text-[#1a1a1a]"
            >
              Kısa Özet
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={4}
              required
              className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
              placeholder="Yazının kısa özeti"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-[#1a1a1a]"
            >
              İçerik
            </label>
            <textarea
              id="content"
              name="content"
              rows={14}
              required
              className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
              placeholder="Blog içeriği"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="metaTitle"
                className="mb-2 block text-sm font-medium text-[#1a1a1a]"
              >
                Meta Title
              </label>
              <input
                id="metaTitle"
                name="metaTitle"
                required
                className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                placeholder="SEO başlığı"
              />
            </div>

            <div>
              <label
                htmlFor="metaDescription"
                className="mb-2 block text-sm font-medium text-[#1a1a1a]"
              >
                Meta Description
              </label>
              <input
                id="metaDescription"
                name="metaDescription"
                required
                className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                placeholder="SEO açıklaması"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 text-sm text-[#1a1a1a]">
            <input type="checkbox" name="isPublished" className="h-4 w-4" />
            Yayınla
          </label>

          {successMessage ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {successMessage}
            </div>
          ) : null}

          {errorMessage ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-fit rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Kaydediliyor..." : "Blogu Kaydet"}
          </button>
        </div>
      </form>
    </div>
  )
}