import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Botoks Adana | Dr. İnzia",
  description:
    "Botoks uygulaması, mimik çizgileri ve doğal sonuç odaklı bilgilendirici içerik.",
}

export default function BotoksAdanaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Botoks / Adana"
      title="Botoks Adana"
      intro="Botoks, doğru uygulandığında mimik çizgilerini, alın kırışıklıklarını ve kaş bölgesindeki görünümü doğal ve etkili biçimde düzenlemeye yardımcı olan güvenilir bir yöntemdir."
      descriptionTitle="Botoks Hakkında"
      description={`Botoks, doğru uygulandığında mimik çizgilerini, alın kırışıklıklarını ve kaş çöküklüğünü son derece doğal ve etkili biçimde düzelten güvenilir bir yöntemdir. Ancak bu uygulamada en kritik noktalardan biri orijinal ürün kullanımıdır.

Gerçek botoks yalnızca lisanslı ecza depolarından temin edilebilir ve yalnızca yetkili hekimler bu ürünlere resmi yollarla ulaşabilir. Taklit veya kaçak ürünlerle yapılan uygulamalarda; göz kapağı düşmesi, şaşılık, görme bozuklukları ve yüz ifadesinde istenmeyen sonuçlar gibi ciddi komplikasyonlar gelişebilmektedir.

Uygulamalar, ecza deposundan temin edilen faturalı ve orijinal ürünlerle planlanır. Sağlık Bakanlığı sertifikalı uzman doktor yaklaşımıyla her uygulama yüz anatomisine göre değerlendirilir ve doğal, ifadeyi koruyan sonuç hedeflenir. Gerçek öncesi ve sonrası örnekler için @dr.inza Instagram sayfasını inceleyebilirsiniz.`}
      highlights={[
        "Orijinal ve faturalı ürün kullanımı büyük önem taşır.",
        "Uygulama yüz anatomisine göre planlanır.",
        "Doğal ve ifadeli sonuç hedeflenir.",
      ]}
      faq={[
        {
          question: "Botoks hangi alanlarda uygulanabilir?",
          answer:
            "En sık alın bölgesi, kaş arası ve göz çevresi gibi mimik çizgilerinin yoğun olduğu alanlarda değerlendirilir.",
        },
        {
          question: "Botoksta orijinal ürün neden önemlidir?",
          answer:
            "Güvenli ve öngörülebilir sonuç için ürünün resmi kanallardan temin edilmiş, orijinal ve onaylı olması son derece önemlidir.",
        },
        {
          question: "Botoks sonrası doğal görünüm mümkün mü?",
          answer:
            "Doğru planlama ile amaç, yüz ifadesini kaybettirmeden daha dinlenmiş ve dengeli bir görünüm elde etmektir.",
        },
      ]}
    />
  )
}