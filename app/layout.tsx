import { ReactNode } from "react"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { Footer } from "@/components/layout/Footer"

const RobotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: "https://frapadelproject.com",
  title: "Fran Padel Project - Mehodology",
  description: "Improve your padel",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${RobotoFont.className}`}>
      <body className="text-foreground">
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
