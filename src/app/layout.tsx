import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import Faq from "@/components/FAQ/faq"
import { Toaster } from "@/components/ui/toaster"
import { Motion } from "@/components/motion/motion"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
})

export const metadata: Metadata = {
  title: "GODRIVES",
  description: "Manutenção em equipamentos eletrônicos industriais.",
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
