import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Dolgu Adana | Dr. İnzia",
  description:
    "Yüz ve dudak dolgusu hakkında güvenli ürün, doğal görünüm ve bilgilendirici içerik.",
}

export default function DolguAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Dolgu / Adana"
      title="Dolgu Adana"
      intro="Yüz ve dudak dolgusu uygulamalarında ürün kalitesi, güvenli yaklaşım ve doğal görünüm hedefi büyük önem taşır."
      descriptionTitle="Dolgu Hakkında"
      description={`Yüz ve dudak dolgusu uygulamalarında kullanılan ürünler; ABD FDA onaylı ve Türkiye Sağlık Bakanlığı onaylı, faturalı ve tamamen orijinal dolgular olmalıdır.

Kullanılan dolgunun formülasyonu; biyouyumluluk, güvenlik ve uzun süreli sonuç açısından önemlidir. Orijinal olmayan dolgular ise doku kaybı, enfeksiyon, damar tıkanıklığı ve kalıcı şekil bozukluğu gibi ciddi sorunlara yol açabilmektedir.

Dudak ve yüz dolgusu planlamasında amaç, doğal ve yüz oranlarıyla uyumlu sonuç elde etmektir. Dudak dolgusunda özel tekniklerle daha konforlu bir uygulama hedeflenebilir. Sağlık Bakanlığı sertifikalı uzman doktor güvencesiyle planlanan uygulamalara ait gerçek öncesi ve sonrası örnekler için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "FDA ve Türkiye Sağlık Bakanlığı onaylı ürün seçimi önemlidir.",
        "Doğal, biyouyumlu ve güvenli içerikler tercih edilir.",
        "Yüz oranlarına uygun, dengeli görünüm hedeflenir.",
      ]}
      faq={[
        {
          question: "Dolgu uygulamalarında ürün seçimi neden önemlidir?",
          answer:
            "Ürünün orijinal, onaylı ve güvenilir olması hem sonuç kalitesi hem de güvenlik açısından çok önemlidir.",
        },
        {
          question: "Dudak dolgusu doğal görünebilir mi?",
          answer:
            "Evet. Planlama doğru yapıldığında dudak yapısına uygun, doğal ve estetik sonuç hedeflenebilir.",
        },
        {
          question: "Öncesi ve sonrası örnekleri görebilir miyim?",
          answer:
            "Gerçek hasta örneklerini görmek için @dr.inza Instagram sayfasını inceleyebilirsiniz.",
        },
      ]}
    />
  )
}