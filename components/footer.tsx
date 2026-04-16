import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#f3ebdf]">
      <div className="container-main grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-[#1a1a1a]">
            Dr. İnzia
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6e675f]">
            Medikal estetik uygulamalar hakkında bilgilendirici içerikler ve
            danışma talepleri için hazırlanmış premium web sitesi.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]">
            Sayfalar
          </h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#6e675f]">
            <Link href="/">Ana Sayfa</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/iletisim">İletişim</Link>
            <Link href="/kvkk">KVKK</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]">
            İşlemler
          </h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#6e675f]">
            <Link href="/botoks-adana">Botoks</Link>
            <Link href="/dolgu-adana">Dolgu</Link>
            <Link href="/prp-adana">PRP</Link>
            <Link href="/russian-lip-adana">Russian Lip</Link>
            <Link href="/yuz-germe-adana">Yüz Germe</Link>
            <Link href="/genclik-asisi-adana">Gençlik Aşısı</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]">
            İletişim
          </h4>
          <div className="mt-4 space-y-3 text-sm text-[#6e675f]">
            <p>Adana ve Mersin danışma talepleri</p>
            <p>E-posta: info@adanaestetik.com</p>
            <p>Telefon: 0 (5xx) xxx xx xx</p>
            <p>Google Maps kullanılmamaktadır.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container-main flex flex-col gap-3 py-5 text-xs text-[#7b736b] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Adana Estetik. Tüm hakları saklıdır.</p>
          <p>Bilgilendirme ve danışma odaklı premium web sitesi.</p>
        </div>
      </div>
    </footer>
  )
}