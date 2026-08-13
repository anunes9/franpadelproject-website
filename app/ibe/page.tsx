import { Metadata } from 'next'
import Script from 'next/script'
import { getServerLocale } from '@/lib/i18n'
import { generateMetadata as generateSEOMetadata, generateEventStructuredData } from '@/lib/seo'
import IBERecap from '@/components/IBERecap'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  return generateSEOMetadata(locale, 'ibe')
}

export default async function IBEPage() {
  const locale = await getServerLocale()
  const eventStructuredData = generateEventStructuredData(locale)

  return (
    <>
      <Script
        id="ibe-event-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData),
        }}
      />
      <IBERecap locale={locale} />
    </>
  )
}
