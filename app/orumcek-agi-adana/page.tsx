import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Örümcek Ağı Estetiği Adana | Dr. İnzia",
  description:
    "Örümcek ağı estetiği ve PDO iplik uygulamaları hakkında bilgilendirici içerik.",
}

export default function OrumcekAgiAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Örümcek Ağı / Adana"
      title="Örümcek Ağı Estetiği Adana"
      intro="Örümcek Ağı Estetiği, yüz ve boyun bölgesinde sarkma ve doku gevşekliğine karşı ameliyatsız sıkılaştırma etkisi sunan yöntemlerden biridir."
      descriptionTitle="Örümcek Ağı Estetiği Hakkında"
      description={`Örümcek Ağı Estetiği (PDO İplik Uygulaması); yüz, boyun ve bazı vücut bölgelerinde ciddi bir cerrahi gerektirmeksizin sarkma, çizgi ve doku gevşekliğine karşı etkili bir sıkılaştırma yaklaşımı sunabilir.

Cilt altına yerleştirilen ince PDO iplikleri zamanla vücut tarafından emilirken kolajen sentezini uyarır, dokuyu destekler ve doğal bir toparlanma hissi oluşturur. Sonuç; ameliyatsız, doğal görünümlü ve uzun süreli bir destek etkisi olabilir.

Yetkisiz kişilerce ya da steril olmayan koşullarda yapılan uygulamalarda enfeksiyon, asimetri ve iplik göçü gibi ciddi komplikasyonlar gelişebilir. Bu nedenle onaylı, faturalı ve orijinal PDO iplikleri ile; kişiye özel planlama önemlidir. Gerçek hasta örnekleri için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "Ameliyatsız sıkılaştırma ve toparlanma hedeflenebilir.",
        "Kolajen sentezini destekleyen PDO iplik yaklaşımı uygulanır.",
        "Kişiye özel yerleşim planı ve steril koşullar önemlidir.",
      ]}
      faq={[
        {
          question: "Örümcek Ağı Estetiği nedir?",
          answer:
            "PDO iplikler kullanılarak doku desteği ve sıkılaşma etkisi hedefleyen ameliyatsız uygulama yaklaşımıdır.",
        },
        {
          question: "Uygulamada güvenlik neden önemlidir?",
          answer:
            "Yanlış koşullarda yapılan uygulamalarda enfeksiyon, asimetri ve iplik kaynaklı sorunlar gelişebilir.",
        },
        {
          question: "Kimler bilgi almak için danışma bırakabilir?",
          answer:
            "Sarkma, gevşeme veya yüz toparlama hakkında bilgi almak isteyen kullanıcılar danışma formunu kullanabilir.",
        },
      ]}
    />
  )
}