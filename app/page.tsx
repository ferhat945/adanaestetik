import Link from "next/link"
import { HomeBlogPreview } from "@/components/home-blog-preview"

export const dynamic = "force-dynamic"

const services = [
  {
    title: "Göz Altı Kırışıklık",
    href: "/gozalti-kirisiklik-adana",
    icon: "👁️",
    description:
      "Göz altı kırışıklıkları, ince çizgiler ve sarkmalar için ameliyatsız gençleştirme odaklı bilgilendirme.",
  },
  {
    title: "Botoks",
    href: "/botoks-adana",
    icon: "💉",
    description:
      "Mimik çizgileri, alın kırışıklıkları ve kaş arası görünümü için doğal sonuç odaklı yaklaşım.",
  },
  {
    title: "Dolgu",
    href: "/dolgu-adana",
    icon: "💋",
    description:
      "Dudak ve yüz dolgusunda doğal görünüm, güvenli ürün seçimi ve uzman planlamaya odaklı içerik.",
  },
  {
    title: "PRP",
    href: "/prp-adana",
    icon: "🩸",
    description:
      "Cilt ve saç için kişinin kendi kanından elde edilen doğal yenileme sürecine yönelik bilgilendirme.",
  },
  {
    title: "Örümcek Ağı",
    href: "/orumcek-agi-adana",
    icon: "🕸️",
    description:
      "Sarkma ve doku gevşekliğine karşı ameliyatsız sıkılaştırma ve doğal toparlanma etkisi.",
  },
  {
    title: "Gamze Estetiği",
    href: "/gamze-estetigi-adana",
    icon: "😊",
    description:
      "Yüz yapısına uygun, doğal görünümlü gamze planlaması ve uzman yaklaşımı hakkında bilgiler.",
  },
  {
    title: "Gençlik Aşısı",
    href: "/genclik-asisi-adana",
    icon: "💫",
    description:
      "Cildi besleyen, nemlendiren ve canlılık kazandıran mezoterapi uygulamaları hakkında içerik.",
  },
  {
    title: "Russian Lip",
    href: "/russian-lip-adana",
    icon: "👄",
    description:
      "Dudakta yükseklik ve belirgin sınır oluşturan özel teknikle doğal ve estetik görünüm hedefi.",
  },
  {
    title: "Yüz Germe",
    href: "/yuz-germe-adana",
    icon: "🌟",
    description:
      "Cerrahi ve cerrahi olmayan yüz germe seçenekleri hakkında güvenli ve açıklayıcı bilgilendirme.",
  },
]

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#f6efe6]">
        <div className="container-main grid min-h-[760px] items-center gap-14 py-16 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
              Adana Estetik Doktoru
            </p>

            <h1 className="text-5xl font-semibold leading-[1.08] text-[#1a1a1a] md:text-7xl">
              Dr. İnzia ile doğal ve zarif görünüm.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#6f675f] md:text-lg">
              Botoks, dolgu, PRP, örümcek ağı, gamze estetiği, gençlik aşısı,
              russian lip ve yüz germe uygulamaları hakkında bilgi alın.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/ucretsiz-danisma"
                className="rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
              >
                Ücretsiz Danışma
              </Link>

              <Link
                href="/hakkimizda"
                className="rounded-full border border-[#c6b39c] px-7 py-4 text-sm font-medium text-[#1a1a1a] transition hover:bg-white"
              >
                Hakkımızda
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -top-8 right-8 hidden h-44 w-44 rounded-full bg-[#e6d8c7] blur-3xl lg:block" />
            <div className="absolute bottom-8 left-8 hidden h-36 w-36 rounded-full bg-[#d5bf9e] blur-3xl lg:block" />

            <div className="relative h-[620px] w-full max-w-[540px] overflow-hidden rounded-[38px] border border-white/40 shadow-[0_30px_80px_rgba(108,91,67,0.18)]">
              <img
                src="/hero.jpg"
                alt="Medikal estetik uygulamaları"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,20,15,0.04)_0%,rgba(25,20,15,0.14)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="container-main">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8a73]">
                İşlemler
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
                Uygulama Alanları
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#6f675f]">
              Her işlem için ayrı hazırlanmış sayfalarda bilgilendirici içerik
              ve danışma yönlendirmesi bir arada sunulur.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[28px] border border-[#eee4d8] bg-[#faf6f0] p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(108,91,67,0.10)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8d8c5] text-3xl">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-medium text-[#1a1a1a]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6f675f]">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-medium text-[#b69369]">
                  Detayları Gör
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6efe6] section-space">
        <div className="container-main">
          <div className="rounded-[36px] bg-[#1f1d1a] px-8 py-12 text-white md:px-12 md:py-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8bf9a]">
              Danışma
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Uygulamalar hakkında detaylı bilgi için danışma talebi bırakın.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75">
              Adana ve Mersin için bilgi almak isteyen kullanıcılar danışma
              formu üzerinden hızlıca başvuru oluşturabilir.
            </p>
            <div className="mt-8">
              <Link
                href="/ucretsiz-danisma"
                className="inline-flex rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white"
              >
                Danışma Formuna Git
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeBlogPreview />
    </main>
  )
}