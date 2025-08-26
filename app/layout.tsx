import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { Footer } from '@/components/layout/Footer'
import { generateMetadata } from '@/lib/seo'

const RobotoFont = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = generateMetadata('pt', 'home')

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className={`${RobotoFont.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/fran-logo.png" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-foreground">
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
