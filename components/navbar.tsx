"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
]

function BrandLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-[20px] bg-[linear-gradient(145deg,#f4e7d6_0%,#d7b48a_100%)] shadow-[0_14px_28px_rgba(182,147,105,0.28)]">
        <div className="absolute inset-[2px] rounded-[18px] bg-[linear-gradient(145deg,rgba(255,255,255,0.45),rgba(255,255,255,0.08))]" />
        <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_2px_6px_rgba(255,255,255,0.5),inset_0_-4px_10px_rgba(120,92,57,0.16)]" />

        <svg
          viewBox="0 0 64 64"
          className="relative z-10 h-8 w-8 text-[#8f6f49]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M32 11c6.8 0 12.3 5.5 12.3 12.3 0 4.4-2.2 7.9-5.2 10.8-2.4 2.2-4.4 4.2-4.4 7v1.3h6.4c5.9 0 10.6 4.8 10.6 10.6v.7H12.3V53c0-5.8 4.7-10.6 10.6-10.6h6.4v-1.3c0-2.8-2-4.8-4.4-7-3-2.9-5.2-6.4-5.2-10.8C19.7 16.5 25.2 11 32 11Z"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.5 48.5h13"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <path
            d="M27.8 54h8.4"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <path
            d="M32 17.5c2.9 0 5.3 2.4 5.3 5.3"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-[18px] font-semibold uppercase tracking-[0.34em] text-[#1a1a1a] md:text-[20px]">
          Adana Estetik
        </span>
        <span className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[#9c8a73] md:text-[12px]">
          Dr. İnzia
        </span>
      </div>
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee4d8] bg-white/80 backdrop-blur-md">
      <div className="container-main flex h-24 items-center justify-between">
        <Link href="/" className="ml-4 flex items-center">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#5f5a53] transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/ucretsiz-danisma"
            className="rounded-full border border-[#b69369] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition hover:bg-[#b69369] hover:text-white"
          >
            Danışma Talebi
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7c7b3] bg-white text-[#1a1a1a] shadow-sm md:hidden"
          aria-label="Menüyü aç"
        >
          <span className="text-lg">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-black/5 bg-[#f8f2ea] md:hidden">
          <div className="container-main flex flex-col gap-3 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl bg-white px-4 py-3 text-sm text-[#1a1a1a] shadow-sm"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/ucretsiz-danisma"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-[#b69369] px-5 py-3 text-sm font-medium text-white"
            >
              Danışma Talebi
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}