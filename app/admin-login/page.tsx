"use client"

import { FormEvent, useState } from "react"

type LoginPayload = {
  email: string
  password: string
}

type LoginResponse = {
  ok?: boolean
  message?: string
}

export default function AdminLoginPage() {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setErrorMessage("")

    const form = new FormData(e.currentTarget)

    const payload: LoginPayload = {
      email: String(form.get("email") ?? "").trim(),
      password: String(form.get("password") ?? "").trim(),
    }

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const contentType = response.headers.get("content-type") || ""

      if (!contentType.includes("application/json")) {
        throw new Error("Giriş API beklenmeyen bir yanıt döndürdü.")
      }

      const result: LoginResponse = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Giriş başarısız.")
      }

      window.location.href = "/admin"
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f9f3ea]">
      <section className="container-main flex min-h-screen items-center justify-center py-16">
        <div className="w-full max-w-md rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
            Admin Giriş
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
            Yönetim Paneli
          </h1>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#1a1a1a]"
              >
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                placeholder="admin@adanaestetik.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#1a1a1a]"
              >
                Şifre
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                placeholder="Şifre"
              />
            </div>

            {errorMessage ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full justify-center rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}