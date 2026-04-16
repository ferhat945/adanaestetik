import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "İletişim | Dr. İnzia",
  description:
    "Botoks, dolgu, PRP, yüz germe ve diğer uygulamalar hakkında bilgi almak için iletişim ve danışma sayfası.",
}

export default function ContactPage() {
  return (
    <main className="bg-[#f9f3ea]">
      <section className="border-b border-black/5 bg-[#f6efe6]">
        <div className="container-main py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
            İletişim
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#1a1a1a] md:text-6xl">
            Uygulamalar hakkında bilgi almak için iletişime geçin.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f675f]">
            Botoks, dolgu, PRP ve diğer uygulamalar hakkında bilgi almak için
            danışma formunu kullanabilirsiniz. Talebiniz değerlendirildikten
            sonra sizinle iletişime geçilecektir.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold text-[#1a1a1a]">
              İletişim Bilgileri
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#6f675f]">
              Danışma talepleri için aşağıdaki iletişim bilgilerini
              kullanabilirsiniz.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">E-posta</p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  info@adanaestetik.com
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">Telefon</p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  0 (5xx) xxx xx xx
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  Hizmet Verilen Bölgeler
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  Adana ve Mersin
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9c8a73]">
              Danışma
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1a1a1a]">
              Danışma formu üzerinden hızlıca bilgi isteyin.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6f675f]">
              İlgilendiğiniz uygulama hakkında bilgi almak için danışma formunu
              doldurabilirsiniz. Talebiniz alındıktan sonra uygunluk durumuna
              göre sizinle iletişime geçilir.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  Hızlı başvuru
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  Form ile kısa sürede danışma talebi oluşturabilirsiniz.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  Güvenli iletişim
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  Paylaştığınız bilgiler yalnızca iletişim ve bilgilendirme
                  amacıyla kullanılır.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/ucretsiz-danisma"
                className="inline-flex rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
              >
                Danışma Formuna Git
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}