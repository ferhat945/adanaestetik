"use client"

import Link from "next/link"

export function AdminBlogActions({ blogId }: { blogId: number }) {
  async function handleDelete() {
    const confirmed = window.confirm("Bu blog silinsin mi?")

    if (!confirmed) return

    try {
      const response = await fetch(`/api/admin/blog-admin/${blogId}`, {
        method: "DELETE",
        credentials: "include",
      })

      const result = await response.json()

      if (!response.ok) {
        alert(result.message || "Blog silinemedi.")
        return
      }

      window.location.reload()
    } catch {
      alert("Bir hata oluştu.")
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={`/admin/blogs/${blogId}`}
        className="rounded-full border border-[#cdb89c] px-5 py-2 text-sm font-medium text-[#1a1a1a] transition hover:bg-white"
      >
        Düzenle
      </Link>

      <button
        type="button"
        onClick={handleDelete}
        className="rounded-full bg-[#8f5f5f] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
      >
        Sil
      </button>
    </div>
  )
}