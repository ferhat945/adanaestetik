import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Russian Lip Adana | Dr. İnzia",
  description:
    "Russian Lip tekniği hakkında doğal dudak görünümü ve uzman yaklaşım odaklı içerik.",
}

export default function RussianLipAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Russian Lip / Adana"
      title="Russian Lip Adana"
      intro="Russian Lip tekniği, dudaklara yükseklik, belirginlik ve estetik bir çerçeve kazandırmayı hedefleyen ileri düzey dolgu uygulamalarından biridir."
      descriptionTitle="Russian Lip Hakkında"
      description={`Russian Lip tekniği; dudaklara yükseklik, hacim ve belirgin bir sınır kazandırırken doğal ve estetik bir görünüm sunmayı hedefleyen özel bir dolgu yaklaşımıdır.

Klasik dudak dolgusundan farklı olarak özel dikey enjeksiyon tekniği ile uygulanır. Bu nedenle deneyim, anatomik bilgi ve estetik bakış açısı gerektirir. Yanlış uygulamalarda dudakta sertlik, şekil bozukluğu ve orantısız görünüm gelişebilir.

FDA ve Türkiye Sağlık Bakanlığı onaylı, orijinal ve faturalı dolgu malzemeleriyle; konforlu ve planlı uygulama yaklaşımı önemlidir. Gerçek öncesi ve sonrası örnekler için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "Özel teknikle dudakta yükseklik ve belirgin sınır hedeflenir.",
        "Doğal ve estetik görünüm için anatomik planlama gerekir.",
        "Orijinal ve onaylı dolgu malzemesi tercih edilmelidir.",
      ]}
      faq={[
        {
          question: "Russian Lip tekniği klasik dudak dolgusundan farklı mıdır?",
          answer:
            "Evet. Teknik, dudak formunu farklı şekilde şekillendirmeyi hedefleyen özel enjeksiyon yaklaşımına dayanır.",
        },
        {
          question: "Doğal görünüm mümkün mü?",
          answer:
            "Doğru planlama ile dudak yapısına uygun, dengeli ve doğal bir görünüm hedeflenebilir.",
        },
        {
          question: "Öncesi ve sonrası örnekler var mı?",
          answer:
            "Gerçek örnekleri görmek için @dr.inza Instagram sayfasını inceleyebilirsiniz.",
        },
      ]}
    />
  )
}