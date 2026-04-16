import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingInstagram } from "@/components/floating-instagram"

export const metadata: Metadata = {
  title: "Adana Estetik | Dr. İnzia",
  description:
    "Dr. İnzia medikal estetik uygulamaları hakkında bilgilendirici içerikler ve danışma talebi formu.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingInstagram />
      </body>
    </html>
  )
}