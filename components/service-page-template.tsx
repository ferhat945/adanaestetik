import Link from "next/link"

type FAQItem = {
  question: string
  answer: string
}

type ServicePageTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  descriptionTitle: string
  description: string
  highlights: string[]
  faq: FAQItem[]
}

export function ServicePageTemplate({
  eyebrow,
  title,
  intro,
  descriptionTitle,
  description,
  highlights,
  faq,
}: ServicePageTemplateProps) {
  return (
    <main className="bg-[#f9f3ea]">
      <section className="border-b border-black/5 bg-[#f6efe6]">
        <div className="container-main py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#1a1a1a] md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f675f]">
            {intro}
          </p>

          <div className="mt-10">
            <Link
              href="/ucretsiz-danisma"
              className="rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
            >
              Danışma Talebi Oluştur
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-semibold text-[#1a1a1a]">
              {descriptionTitle}
            </h2>

            <div className="mt-5 whitespace-pre-line text-base leading-8 text-[#6f675f]">
              {description}
            </div>
          </div>

          <aside className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9c8a73]">
              Bilgilendirme
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#1a1a1a]">
              Uygulama hakkında bilgi almak için danışma bırakın.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6f675f]">
              Detaylı değerlendirme ve size uygun planlama için danışma formunu
              kullanabilirsiniz.
            </p>

            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6efe6] p-5">
                  <p className="text-sm leading-7 text-[#1a1a1a]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#eadfce] bg-[#fcfaf7] p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">
                Gerçek hasta örnekleri
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6f675f]">
                Öncesi ve sonrası örnekleri görmek için{" "}
                <span className="font-medium text-[#1a1a1a]">@dr.inza</span>{" "}
                Instagram sayfasını inceleyebilirsiniz.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/ucretsiz-danisma"
                className="inline-flex w-full justify-center rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
              >
                Danışma Formuna Git
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="container-main">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
              Sık Sorulan Sorular
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
              Merak Edilenler
            </h2>
          </div>

          <div className="grid gap-5">
            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-[28px] border border-[#eee4d8] bg-[#faf6f0] p-7"
              >
                <h3 className="text-xl font-medium text-[#1a1a1a]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6f675f]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6efe6] section-space">
        <div className="container-main">
          <div className="rounded-[36px] bg-[#1f1d1a] px-8 py-12 text-white md:px-12 md:py-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8bf9a]">
              Son Adım
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Uygulama hakkında bilgi almak için danışma talebi bırakın.
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
    </main>
  )
}