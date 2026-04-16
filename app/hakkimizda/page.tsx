import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hakkımızda | Dr. İnzia",
  description:
    "Dr. İnzia hakkında bilgi, güvenli estetik uygulamalar ve uzman doktor yaklaşımı.",
}

export default function AboutPage() {
  return (
    <main className="bg-[#f9f3ea]">
      <section className="border-b border-black/5 bg-[#f6efe6]">
        <div className="container-main py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
            Hakkımızda
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#1a1a1a] md:text-6xl">
            Dr. İnzia
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f675f]">
            Medikal estetik uygulamalarda güvenli yaklaşım, orijinal ürün
            kullanımı ve doğal sonuç hedefiyle bilgi almak isteyen kullanıcılar
            için hazırlanmış bilgilendirici bir sayfadır.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_420px]">
          <div className="space-y-8">
            <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1a1a1a]">
                Güvenli ve bilinçli yaklaşım
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 text-[#6f675f]">
                <p>
                  Güzelleşmek herkesin hakkı ve hayali — ancak bu hayalin yanlış
                  ellerde, orijinal olmayan ürünlerle gerçeğe dönüşmeye
                  çalışılması; güzellik değil, kalıcı sağlık sorunları
                  getirebilir.
                </p>

                <p>
                  Yetkisiz kişiler tarafından uygulanan estetik işlemler;
                  enfeksiyon, doku hasarı, asimetri ve geri dönüşü olmayan
                  komplikasyonlara yol açabilmektedir.
                </p>

                <p>
                  Sağlık Bakanlığı onaylı, sertifikalı uzman bir doktor olarak
                  tüm işlemler; ecza deposundan temin edilen, faturalı ve
                  orijinal ürünlerle, klinik koşullarda ve tam sterilite içinde
                  planlanmaktadır.
                </p>

                <p>
                  Yıllarca süren eğitim ve deneyimin yanı sıra her hasta için
                  özel protokol belirlenerek en güvenli ve doğal sonucun
                  hedeflenmesi esas alınır.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1a1a1a]">
                Doğal sonuç anlayışı
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 text-[#6f675f]">
                <p>
                  Medikal estetik uygulamalarda amaç; yüz ile uyumlu, doğal ve
                  dengeli bir görünüm elde etmektir.
                </p>

                <p>
                  Her yüz yapısı, her cilt tipi ve her beklenti farklıdır. Bu
                  nedenle uygulamalar standart değil, kişiye özel planlama ile
                  değerlendirilir.
                </p>

                <p>
                  Güvenli uygulama, doğru ürün seçimi ve uzman yaklaşım; hem
                  sağlık hem de estetik sonuç açısından büyük önem taşır.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9c8a73]">
              Bilgilendirme
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1a1a1a]">
              Gerçek hasta örneklerini inceleyebilirsiniz
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6f675f]">
              Öncesi ve sonrası gerçek hasta örneklerini Instagram sayfasından
              inceleyerek uygulamalar hakkında daha fazla fikir edinebilirsiniz.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  Orijinal ürün kullanımı
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  Uygulamalarda faturalı ve orijinal ürün kullanımı esas alınır.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  Klinik sterilite
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  İşlemler klinik koşullarda ve hijyen kurallarına uygun şekilde
                  planlanır.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6efe6] p-5">
                <p className="text-sm font-semibold text-[#1a1a1a]">
                  Uzman doktor yaklaşımı
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                  Her hasta için yüz yapısına uygun ve kişiye özel değerlendirme
                  yapılır.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#eadfce] bg-[#fcfaf7] p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">
                Instagram
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                Gerçek hasta öncesi ve sonrası örnekleri için{" "}
                <span className="font-medium text-[#1a1a1a]">@dr.inza</span>
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/ucretsiz-danisma"
                className="inline-flex w-full justify-center rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
              >
                Danışma Talebi Oluştur
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}