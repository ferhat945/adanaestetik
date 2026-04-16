import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "PRP Adana | Dr. İnzia",
  description:
    "PRP tedavisi, cilt ve saç için doğal yenileme odaklı bilgilendirici içerik.",
}

export default function PrpAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="PRP / Adana"
      title="PRP Adana"
      intro="PRP, kişinin kendi kanından elde edilen büyüme faktörleri ile doğal yenilemeyi destekleyen biyolojik bir uygulama yaklaşımıdır."
      descriptionTitle="PRP Hakkında"
      description={`PRP (Platelet Rich Plasma — Trombositten Zengin Plazma) tedavisi; kişinin kendi kanından elde edilen büyüme faktörlerinin cilt veya saç derisine uygulanmasıyla doğal yenilemeyi destekleyen biyolojik bir yöntemdir.

Kimyasal içerik veya yabancı madde yerine kişinin kendi vücudundan elde edilen bileşenler kullanılır. Cilt kalitesini destekleme, yüz görünümünde canlılık ve saç dökülmesine karşı destekleyici amaçlarla değerlendirilebilir.

PRP'nin etkinliği; kullanılan kitin kalitesine, santrifüj sürecine ve uygulayıcının deneyimine doğrudan bağlıdır. Sertifikalı, faturalı ve orijinal kitler ile; tam steril koşullarda planlanan uygulamalar önem taşır. Gerçek hasta örnekleri için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "Kişinin kendi kanından elde edilen doğal bir yaklaşım sunulur.",
        "Cilt ve saç uygulamalarında destekleyici amaçla değerlendirilebilir.",
        "Steril koşullar ve orijinal kit kullanımı önemlidir.",
      ]}
      faq={[
        {
          question: "PRP nedir?",
          answer:
            "PRP, kişinin kendi kanından elde edilen trombositten zengin plazmanın belirli alanlara uygulanmasıyla doğal yenilemeyi destekleyen yöntemdir.",
        },
        {
          question: "PRP hangi alanlarda değerlendirilebilir?",
          answer:
            "Cilt kalitesini destekleme, canlılık kazandırma ve saç uygulamalarında destekleyici amaçlarla değerlendirilebilir.",
        },
        {
          question: "PRP’de kit kalitesi önemli midir?",
          answer:
            "Evet. Kullanılan kitin orijinal ve güvenilir olması uygulamanın kalitesi açısından önemlidir.",
        },
      ]}
    />
  )
}