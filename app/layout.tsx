import "./globals.css"
import { ThemeProviders } from "./theme-providers"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const RobotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Fran Padel Project - Mehodology",
  description: "Improve your padel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`
        ${RobotoFont.className}
      `}
    >
      <body className="bg-background text-foreground">
        <main className="min-h-screen">
          <ThemeProviders>{children}</ThemeProviders>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
