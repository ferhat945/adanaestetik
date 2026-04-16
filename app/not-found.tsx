import Link from "next/link"

export default function NotFoundPage() {
  return (
    <main className="bg-[#f9f3ea]">
      <section className="section-space">
        <div className="container-main">
          <div className="rounded-[32px]borderborder-[#eadfce] bg-white p-10 text-center shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
              404
            </p>

            <h1 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
              Sayfa bulunamadı
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6f675f]">
              Aradığınız içerik kaldırılmış, taşınmış veya yanlış yazılmış olabilir.
            </p>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex rounded-full bg-[#b69369] px-7 py-4 text-sm font-medium text-white"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}