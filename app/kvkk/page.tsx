import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Dr. İnzia",
  description:
    "Kişisel verilerin korunması, işlenmesi ve saklanmasına ilişkin KVKK aydınlatma metni.",
}

export default function KvkkPage() {
  return (
    <main className="bg-[#f9f3ea]">
      <section className="border-b border-black/5 bg-[#f6efe6]">
        <div className="container-main py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9c8a73]">
            KVKK
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#1a1a1a] md:text-6xl">
            Kişisel Verilerin Korunması ve Aydınlatma Metni
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f675f]">
            Bu sayfa, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
            kişisel verilerinizin nasıl işlendiği hakkında sizi bilgilendirmek
            amacıyla hazırlanmıştır.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-sm md:p-12 space-y-8 text-sm leading-7 text-[#5f564d]">

            <div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">
                1. Veri Sorumlusu
              </h2>
              <p className="mt-3">
                Bu web sitesi kapsamında kişisel verileriniz, veri sorumlusu
                sıfatıyla Dr. İnzia tarafından işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">
                2. İşlenen Kişisel Veriler
              </h2>
              <p className="mt-3">
                Web sitesi üzerinden ilettiğiniz aşağıdaki veriler işlenebilir:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Ad ve soyad</li>
                <li>Telefon numarası</li>
                <li>E-posta adresi (varsa)</li>
                <li>Mesaj / danışma talebi içeriği</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">
                3. Kişisel Verilerin İşlenme Amacı
              </h2>
              <p className="mt-3">
                Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Danışma taleplerinin değerlendirilmesi</li>
                <li>Size geri dönüş sağlanması</li>
                <li>Talep ettiğiniz hizmet hakkında bilgilendirme yapılması</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">
                4. Verilerin Aktarılması
              </h2>
              <p className="mt-3">
                Kişisel verileriniz, açık rızanız olmaksızın üçüncü kişilerle
                paylaşılmaz. Verileriniz ticari amaçlarla kullanılmaz ve
                satılmaz.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">
                5. Veri Toplama Yöntemi
              </h2>
              <p className="mt-3">
                Kişisel verileriniz, web sitesi üzerindeki danışma formları
                aracılığıyla elektronik ortamda toplanmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">
                6. Veri Güvenliği
              </h2>
              <p className="mt-3">
                Kişisel verileriniz; yetkisiz erişim, kayıp veya kötüye
                kullanıma karşı korunmak amacıyla gerekli teknik ve idari
                önlemler alınarak saklanmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">
                7. KVKK Kapsamındaki Haklarınız
              </h2>
              <p className="mt-3">
                6698 sayılı KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenen veriler hakkında bilgi talep etme</li>
                <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
                <li>Verilerin silinmesini veya yok edilmesini talep etme</li>
                <li>İşleme faaliyetlerine itiraz etme</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#1a1a1a]">
                8. İletişim
              </h2>
              <p className="mt-3">
                KVKK kapsamında taleplerinizi iletmek için iletişim sayfasını
                kullanabilirsiniz.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}