import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sharks Company | Marketing Estratégico com Foco em Desempenho Real",
  description:
    "Agência de marketing estratégico que une método, execução e análise para fortalecer marcas, impulsionar vendas e gerar desempenho real.",
  generator: "v0.app",
  keywords: ["marketing estratégico", "agência de marketing", "branding", "performance", "vendas", "crescimento"],
  authors: [{ name: "Sharks Company" }],
  openGraph: {
    title: "Sharks Company | Marketing Estratégico com Foco em Desempenho Real",
    description: "Agência de marketing estratégico que une método, execução e análise para fortalecer marcas.",
    type: "website",
    locale: "pt_BR",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
