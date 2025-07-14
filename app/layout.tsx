import type React from "react"
import type { Metadata } from "next"
import { Kalam } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "A handwritten neobrutalist portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${kalam.className} bg-yellow-50 min-h-screen`}>
        <Navigation />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
