import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import Faq from "@/components/FAQ/faq"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "GODRIVES",
  description: "Manutenção em equipamentos eletrônicos industriais.",
  applicationName: "Website GO Drives",
  keywords: [
    "GO Drives",
    "Manutenção eletrônica industrial",
    "Manutenção em equipamentos eletrônicos industriais.",
    "Eletrônica",
    "Indústria",
    "Manutenção",
    "Inversores de Frequência",
  ],
  authors: [
    {
      name: "Gabriel Manicucci",
      url: "https://www.linkedin.com/in/gabriel-manicucci/",
    },
  ],
  referrer: "origin-when-cross-origin",
  publisher: "Gabriel Manicucci",
  creator: "Gabriel Manicucci",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-100`}>
        <Navbar />

        {children}

        <Toaster />

        <Faq />

        <Footer />
      </body>
    </html>
  )
}
