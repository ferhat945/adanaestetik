import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Gamze Estetiği Adana | Dr. İnzia",
  description:
    "Gamze estetiği hakkında doğal görünüm ve uzman yaklaşım odaklı bilgilendirici içerik.",
}

export default function GamzeEstetigiAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Gamze Estetiği / Adana"
      title="Gamze Estetiği Adana"
      intro="Gamze estetiği, yüz ifadesine doğallık ve canlılık katmak isteyen kullanıcıların ilgi gösterdiği hassas uygulamalardan biridir."
      descriptionTitle="Gamze Estetiği Hakkında"
      description={`Gülümsediğinizde beliren gamzeler, yüze canlılık ve doğal bir çekicilik katabilir. Gamze estetiği ise son derece ince ve hassas bir işlem olup doğru teknik ve uzman yaklaşım gerektirir.

Yanlış planlamalarda sinir hasarı, asimetri ve iz gibi istenmeyen sonuçlar görülebilir. Bu nedenle uygulamanın yüz yapısına uygun ve dikkatli şekilde planlanması önemlidir.

Amaç; yapay değil, kişiye özgü ve doğal görünen bir gamze elde etmektir. Sağlık Bakanlığı sertifikalı uzman doktor yaklaşımıyla planlanan uygulamalara ait gerçek öncesi ve sonrası örnekler için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "Yüz yapısına uygun, doğal görünüm hedeflenir.",
        "Hassas planlama ve uzman yaklaşım önemlidir.",
        "Amaç yapay değil, kişiye özgü bir sonuç elde etmektir.",
      ]}
      faq={[
        {
          question: "Gamze estetiği doğal görünür mü?",
          answer:
            "Doğru planlama ile amaç, yüz yapısına uyumlu ve doğal görünen bir sonuç elde etmektir.",
        },
        {
          question: "Gamze estetiğinde uzman seçimi neden önemli?",
          answer:
            "İşlem hassas olduğu için yüz anatomisine uygun teknik ve deneyim büyük önem taşır.",
        },
        {
          question: "Gerçek örnekleri görebilir miyim?",
          answer:
            "Gerçek öncesi ve sonrası örnekler için @dr.inza Instagram sayfasını inceleyebilirsiniz.",
        },
      ]}
    />
  )
}