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

    const formElement = e.currentTarget // ✅ FIX

    setLoading(true)
    setErrorMessage("")
    setSuccessMessage("")

    const form = new FormData(formElement)

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
      formElement.reset() // ✅ FIX

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
      {/* ALT KISIM DEĞİŞMEDİ */}
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
          {/* form aynen devam */}
          <div>
            <label className="mb-2 block text-sm font-medium">Başlık</label>
            <input name="title" required className="w-full p-3 border rounded" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Özet</label>
            <textarea name="excerpt" required className="w-full p-3 border rounded" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">İçerik</label>
            <textarea name="content" required className="w-full p-3 border rounded" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Meta Title</label>
            <input name="metaTitle" required className="w-full p-3 border rounded" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Meta Description</label>
            <input name="metaDescription" required className="w-full p-3 border rounded" />
          </div>

          <label>
            <input type="checkbox" name="isPublished" /> Yayınla
          </label>

          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}

          <button type="submit">
            {loading ? "Kaydediliyor..." : "Kaydet"}
          </button>
        </div>
      </form>
    </div>
  )
}