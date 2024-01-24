import "./globals.css"
import { ThemeProviders } from "./theme-providers"
import localFont from "next/font/local"

const GTAmericaExtendedFont = localFont({
  src: "../assets/fonts/GTAmericaExtendedMedium.woff2",
  display: "swap",
  variable: "--font-gt-america-medium",
})

const GTAmericaFont = localFont({
  src: "../assets/fonts/GTAmericaRegular.woff2",
  display: "swap",
  variable: "--font-gt-america",
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
      className={`${GTAmericaExtendedFont.variable} ${GTAmericaFont.variable}`}
    >
      <body className="bg-background text-foreground">
        <main className="min-h-screen">
          <ThemeProviders>{children}</ThemeProviders>
        </main>
      </body>
    </html>
  )
}
