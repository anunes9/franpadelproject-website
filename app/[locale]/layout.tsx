import { generateStructuredData } from '@/lib/seo'
import { getLocales } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import Script from 'next/script'

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  return getLocales().map((locale) => ({
    locale,
  }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  // Validate locale
  if (!getLocales().includes(locale)) {
    notFound()
  }

  // Generate structured data for the current locale
  const structuredData = generateStructuredData(locale, 'home')

  return (
    <div data-locale={locale}>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </div>
  )
}
