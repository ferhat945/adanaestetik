import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Gençlik Aşısı Adana | Dr. İnzia",
  description:
    "Gençlik aşısı ve mezoterapi hakkında cilt yenileme odaklı bilgilendirici içerik.",
}

export default function GenclikAsisiAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Gençlik Aşısı / Adana"
      title="Gençlik Aşısı Adana"
      intro="Gençlik Aşısı olarak bilinen mezoterapi uygulamaları, cildi derinden desteklemeyi ve daha canlı bir görünüm elde etmeyi amaçlayan yöntemler arasındadır."
      descriptionTitle="Gençlik Aşısı Hakkında"
      description={`Gençlik Aşısı olarak da bilinen mezoterapi; hyaluronik asit, vitaminler, mineraller, antioksidanlar ve peptidlerden oluşan özel içeriklerin cildin orta katmanına uygulanmasıyla cildi beslemeyi, nemlendirmeyi ve desteklemeyi amaçlayan bir yöntemdir.

Cilt parlaklığı kaybı, kuruluk, yüzeysel kırışıklıklar, sıkılık azalması ve donuk görünüm gibi durumlarda destekleyici olarak değerlendirilebilir. Düzenli planlanan seanslarda sonuçların kademeli olarak artması beklenebilir.

Uzman olmayan ellerde yapılan uygulamalarda enfeksiyon, alerjik reaksiyon ve doku hasarı gibi istenmeyen sonuçlar gelişebilir. Bu nedenle orijinal ve onaylı içeriklerle, steril koşullarda planlama önem taşır. Gerçek hasta örnekleri için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "Cildi besleme, nemlendirme ve canlılık desteği amaçlanır.",
        "Onaylı ve orijinal içeriklerle planlama önemlidir.",
        "Steril koşullar ve doğru uygulama güvenlik açısından önem taşır.",
      ]}
      faq={[
        {
          question: "Gençlik aşısı nedir?",
          answer:
            "Mezoterapi yaklaşımı ile cildin ihtiyaç duyduğu destekleyici içeriklerin belirli katmanlara uygulanmasıdır.",
        },
        {
          question: "Hangi durumlarda değerlendirilebilir?",
          answer:
            "Kuruluk, mat görünüm, yüzeysel çizgiler ve cilt canlılığını destekleme amacıyla değerlendirilebilir.",
        },
        {
          question: "Sonuçlar hemen ortaya çıkar mı?",
          answer:
            "Uygulama planına göre etki kademeli olarak artabilir ve düzenli seanslarla desteklenebilir.",
        },
      ]}
    />
  )
}