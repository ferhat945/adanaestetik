import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Yüz Germe Adana | Dr. İnzia",
  description:
    "Cerrahi ve cerrahi olmayan yüz germe seçenekleri hakkında bilgilendirici içerik.",
}

export default function YuzGermeAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Yüz Germe / Adana"
      title="Yüz Germe Adana"
      intro="Yüz germe uygulamaları; cerrahi ve cerrahi olmayan seçeneklerle, sarkma ve doku gevşekliğine karşı planlanabilen yöntemleri kapsar."
      descriptionTitle="Yüz Germe Hakkında"
      description={`Yüz germe uygulamaları hem cerrahi hem de cerrahi olmayan yöntemlerle değerlendirilebilir.

Cerrahi yüz germe; ciddi deri sarkması, doku fazlalığı ve daha kalıcı sonuç isteyen kişiler için lokal anestezi altında planlanabilen güçlü bir seçenektir. Klinik ortamda ve steril koşullarda, yüz anatomisine göre kişiye özel şekilde değerlendirilir.

Cerrahi olmayan yüz germe ise ameliyat istemeyen kullanıcılar için ultrason enerjisi, radyofrekans (RF), PDO iplik veya kombine yöntemlerle cildi derinlemesine desteklemeyi amaçlar. Bu yöntemler kolajen üretimini uyararak dokunun doğal yollarla toparlanmasına yardımcı olabilir.

Her iki yöntemde de deneyim, doğru cihaz ve onaylı malzeme seçimi önemlidir. Yetkisiz ellerde yapılan uygulamalarda sinir hasarı, yanık, asimetri ve iz gibi ciddi komplikasyonlar gelişebilir. Gerçek hasta örnekleri için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "Cerrahi ve cerrahi olmayan seçenekler kişiye göre değerlendirilebilir.",
        "Sarkma düzeyi ve ihtiyaçlara göre planlama yapılır.",
        "Onaylı cihazlar, orijinal malzemeler ve uzman yaklaşım önemlidir.",
      ]}
      faq={[
        {
          question: "Yüz germe sadece ameliyatla mı yapılır?",
          answer:
            "Hayır. İhtiyaca göre cerrahi ve cerrahi olmayan farklı yüz germe seçenekleri değerlendirilebilir.",
        },
        {
          question: "Cerrahi olmayan yüz germe kimler için uygun olabilir?",
          answer:
            "Ameliyat istemeyen ve hafif-orta düzey gevşeme yaşayan kişiler için bazı yöntemler değerlendirilebilir.",
        },
        {
          question: "Doğru uzman seçimi neden önemlidir?",
          answer:
            "Yüz anatomisine uygun, güvenli ve dengeli sonuç için doğru uzman tercihi büyük önem taşır.",
        },
      ]}
    />
  )
}