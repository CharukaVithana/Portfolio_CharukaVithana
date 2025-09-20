import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Charuka Vithana - Software Engineering Undergraduate | UI/UX Designer & Front-End Developer",
  description:
    "Detailed and passionate software engineering undergraduate specializing in UI/UX and web development, creating user-centric applications that enhance digital experiences.",
  keywords: "UI/UX Designer, Front-End Developer, Software Engineering, React, Next.js, Tailwind CSS, Portfolio",
  authors: [{ name: "B.V Charuka Lakshani Vithana" }],
  creator: "B.V Charuka Lakshani Vithana",
  openGraph: {
    title: "Charuka Vithana - UI/UX Designer & Front-End Developer",
    description: "Software engineering undergraduate creating user-centric applications and digital experiences.",
    url: "https://charukavithana.com",
    siteName: "Charuka Vithana Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charuka Vithana - UI/UX Designer & Front-End Developer",
    description: "Software engineering undergraduate creating user-centric applications and digital experiences.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
