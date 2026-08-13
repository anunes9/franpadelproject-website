import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { generateStructuredData, SITE_URL } from '@/lib/seo'
import { getServerLocale } from '@/lib/i18n'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Roboto, Montserrat, Archivo } from 'next/font/google'
import Script from 'next/script'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Fran Padel Project - Padel Methodology',
  description: 'Innovative padel methodology for players of all levels, by Fran Padel Project.',
}

const RobotoFont = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const MontserratFont = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const ArchivoFont = Archivo({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getServerLocale()
  const structuredData = generateStructuredData(locale, 'home')

  return (
    <html lang={locale} className={`${RobotoFont.className} ${MontserratFont.variable} ${ArchivoFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/fran-logo.png" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-foreground">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <Analytics />
      </body>
    </html>
  )
}
