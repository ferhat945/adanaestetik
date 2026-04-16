"use client"

import { FormEvent, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

type BlogDetail = {
  id: number
  title: string
  excerpt: string
  content: string
  metaTitle: string
  metaDescription: string
  isPublished: boolean
}

type BlogResponse = {
  ok?: boolean
  message?: string
  blog?: BlogDetail
}

type BlogFormPayload = {
  title: string
  excerpt: string
  content: string
  metaTitle: string
  metaDescription: string
  isPublished: boolean
}

export default function EditBlogPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [blog, setBlog] = useState<BlogDetail | null>(null)

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/admin/blog-admin/${params.id}`, {
          method: "GET",
          credentials: "include",
        })

        const result: BlogResponse = await response.json()

        if (!response.ok || !result.blog) {
          throw new Error(result.message || "Blog bulunamadı.")
        }

        setBlog(result.blog)
      } catch (error) {
        setErrorMessage(
          error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu."
        )
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchBlog()
    }
  }, [params.id])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSaving(true)
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
      const response = await fetch(`/api/admin/blog-admin/${params.id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result: BlogResponse = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Blog güncellenemedi.")
      }

      setSuccessMessage("Blog başarıyla güncellendi.")
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu."
      )
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm("Bu blog yazısını silmek istediğine emin misin?")

    if (!confirmed) {
      return
    }

    setDeleting(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      const response = await fetch(`/api/admin/blog-admin/${params.id}`, {
        method: "DELETE",
        credentials: "include",
      })

      const result: BlogResponse = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Blog silinemedi.")
      }

      router.push("/admin/blogs")
      router.refresh()
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu."
      )
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
        <p className="text-sm text-[#6f675f]">Yükleniyor...</p>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
        <p className="text-sm text-red-600">
          {errorMessage || "Blog bulunamadı."}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
          Blog Düzenle
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
          {blog.title}
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
              defaultValue={blog.title}
              className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
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
              defaultValue={blog.excerpt}
              className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
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
              defaultValue={blog.content}
              className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
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
                defaultValue={blog.metaTitle}
                className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
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
                defaultValue={blog.metaDescription}
                className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 text-sm text-[#1a1a1a]">
            <input
              type="checkbox"
              name="isPublished"
              defaultChecked={blog.isPublished}
              className="h-4 w-4"
            />
            Yayında
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

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
            </button>

            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="inline-flex rounded-full border border-red-200 bg-white px-7 py-4 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {deleting ? "Siliniyor..." : "Blogu Sil"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}