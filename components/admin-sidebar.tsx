"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function AdminSidebar() {
  const pathname = usePathname()

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    })

    window.location.href = "/admin-login"
  }

  const items = [
    { href: "/admin", label: "Panel" },
    { href: "/admin/blogs", label: "Bloglar" },
    { href: "/admin/blogs/new", label: "Yeni Blog" },
    { href: "/admin/leads", label: "Leadler" },
  ]

  return (
    <aside className="rounded-[32px] bg-[#1f1d1a] p-6 text-white shadow-sm">
      <p className="text-xs uppercase tracking-[0.35em] text-[#d8bf9a]">
        Admin
      </p>

      <nav className="mt-6 flex flex-col gap-3">
        {items.map((item) => {
          const active = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-[#b69369] text-white shadow-[0_10px_24px_rgba(182,147,105,0.28)]"
                  : "bg-white/8 text-white hover:bg-white/14"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <button
        type="button"
        onClick={handleLogout}
        className="mt-6 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/12"
      >
        Çıkış Yap
      </button>
    </aside>
  )
}