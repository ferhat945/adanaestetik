"use client"

import { FormEvent, useState } from "react"

type ContactPayload = {
  name: string
  phone: string
  email: string
  city: string
  service: string
  message: string
}

const services = [
  "Göz Altı Kırışıklık",
  "Botoks",
  "Dolgu",
  "PRP",
  "Örümcek Ağı",
  "Gamze Estetiği",
  "Gençlik Aşısı",
  "Russian Lip",
  "Yüz Germe",
]

export default function FreeConsultationPage() {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

    const form = new FormData(e.currentTarget)

    const payload: ContactPayload = {
      name: String(form.get("name") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      city: String(form.get("city") ?? "").trim(),
      service: String(form.get("service") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result: { ok?: boolean; message?: string } = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Form gönderilirken bir hata oluştu.")
      }

      setSuccessMessage("Talebiniz başarıyla gönderildi.")
      e.currentTarget.reset()
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Beklenmeyen bir hata oluştu."

      setErrorMessage(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-[#f9f3ea]">
      <section className="border-b border-black/5 bg-[#f6efe6]">
        <div className="container-main py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
            Ücretsiz Danışma
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#1a1a1a] md:text-6xl">
            Uygulamalar hakkında bilgi almak için danışma talebi bırakın.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f675f]">
            Botoks, dolgu, PRP ve diğer işlemler hakkında size uygun seçenekler
            için formu doldurabilirsiniz. Talebiniz değerlendirildikten sonra
            sizinle iletişime geçilecektir.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold text-[#1a1a1a]">
              Danışma Talep Formu
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#6f675f]">
              Adana ve Mersin için uygun uygulamalar hakkında bilgi almak üzere
              formu doldurabilirsiniz.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[#1a1a1a]"
                  >
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                    placeholder="Ad Soyad"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-[#1a1a1a]"
                  >
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                    placeholder="05xx xxx xx xx"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
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
                    className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                    placeholder="ornek@mail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-[#1a1a1a]"
                  >
                    Şehir
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                    defaultValue="Adana"
                  >
                    <option value="Adana">Adana</option>
                    <option value="Mersin">Mersin</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-[#1a1a1a]"
                >
                  İlgilendiğiniz İşlem
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    İşlem seçin
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#1a1a1a]"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-2xl border border-[#dfd2c2] bg-[#fcfaf7] px-4 py-3 outline-none transition focus:border-[#b69369]"
                  placeholder="Bilgi almak istediğiniz konuyu yazabilirsiniz."
                />
              </div>

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
                className="inline-flex rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Gönderiliyor..." : "Talebi Gönder"}
              </button>
            </form>
          </div>

          <aside className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9c8a73]">
              Bilgilendirme
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1a1a1a]">
              Danışma süreci nasıl işler?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6f675f]">
              Formu doldurduktan sonra talebiniz değerlendirilir ve uygunluk
              durumuna göre sizinle iletişime geçilir.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  1. Talebiniz alınır
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  Form üzerinden ilettiğiniz bilgiler incelenir.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  2. Size geri dönüş yapılır
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  Uygunluk ve talebinize göre sizinle iletişime geçilir.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  3. Detaylı bilgilendirme sağlanır
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  İlgilendiğiniz işlem hakkında gerekli bilgilendirme yapılır.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#eadfce] bg-[#fcfaf7] p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">
                Bilgileriniz gizli tutulur
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                Form üzerinden gönderilen bilgiler yalnızca iletişim ve
                bilgilendirme amacıyla kullanılır.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}