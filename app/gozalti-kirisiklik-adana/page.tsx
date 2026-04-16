import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Göz Altı Kırışıklık Adana | Dr. İnzia",
  description:
    "Göz altı kırışıklıkları, ince çizgiler, sarkmalar ve gençleştirme hakkında bilgilendirici içerik.",
}

export default function GozaltiKirisiklikAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Göz Altı Kırışıklık / Adana"
      title="Göz Altı Kırışıklık Adana"
      intro="Göz altı bölgesi, yüzün en hassas ve yaşı en çok ele veren bölgelerinden biridir. İnce çizgiler, kırışıklıklar, sarkmalar ve morluklarla mücadelede ameliyatsız seçenekler hakkında bilgi alabilirsiniz."
      descriptionTitle="Göz Altı Kırışıklık Hakkında"
      description={`Göz altı bölgesi, yüzün en hassas ve yaşı en çok ele veren bölgelerinden biridir. İnce çizgiler, kırışıklıklar, sarkmalar ve morluklarla mücadelede artık cerrahi gerekmeyen yöntemler de değerlendirilebilmektedir.

High Dose Plex BR Plazma Teknolojisi ile deri yüzeyinde kontrollü bir yenileme süreci başlatılarak göz altı bölgesi gençleştirilebilmektedir. Plazma enerjisi; kolajen üretimini uyarır, deri sıkılığını artırır ve kırışıklıkları doğal yollarla azaltmaya yardımcı olur.

Uygulama, Sağlık Bakanlığı sertifikalı uzman doktor güvencesiyle; onaylı cihaz ve orijinal sarf malzemeleriyle planlanır. Gerçek hasta öncesi ve sonrası örnekleri görmek için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "Ameliyatsız gençleştirme seçenekleri değerlendirilebilir.",
        "Kolajen üretimini destekleyen yenileyici yaklaşım uygulanır.",
        "Onaylı cihaz ve orijinal sarf malzemeleri tercih edilir.",
      ]}
      faq={[
        {
          question: "Göz altı kırışıklıkları neden oluşur?",
          answer:
            "İnce deri yapısı, mimikler, yaş alma süreci ve çevresel faktörler göz altı bölgesinde çizgi ve kırışıklık görünümünü artırabilir.",
        },
        {
          question: "Her hasta için aynı yöntem mi uygulanır?",
          answer:
            "Hayır. Göz altı yapısı, deri kalınlığı ve ihtiyaçlara göre değerlendirme kişiye özel yapılır.",
        },
        {
          question: "Gerçek hasta örneklerini nerede görebilirim?",
          answer:
            "Öncesi ve sonrası örnekleri görmek için @dr.inza Instagram sayfasını inceleyebilirsiniz.",
        },
      ]}
    />
  )
}