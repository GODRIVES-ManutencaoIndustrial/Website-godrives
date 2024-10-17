import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import Faq from "@/components/FAQ/faq"
import { Toaster } from "@/components/ui/toaster"
import Analytics from "@/components/analytics/analytics"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "GO Drives",
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
    "Manutenção Industrial",
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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MENXW4837W"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MENXW4837W', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GO Drives",
              url: "https://godrives.com.br",
              logo: "https://godrives.com.br/logo.svg",
            }),
          }}
        />
      </head>

      <body className={`${poppins.className} bg-gray-100`}>
        <Analytics />
        <Navbar />

        {children}

        <Toaster />

        <Faq />

        <Footer />
      </body>
    </html>
  )
}
