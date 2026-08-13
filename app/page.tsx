import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { getServerLocale } from '@/lib/i18n'
import { Metadata } from 'next'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import IBERecapCTA from '@/components/IBERecapCTA'
import Services from '@/components/Services'
import WorldMap from '@/components/WorldMap'
import SponsorsAndPartners from '@/components/SponsorsAndPartners'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  return generateSEOMetadata(locale, 'home')
}

export default async function HomePage() {
  const locale = await getServerLocale()

  return (
    <div className="min-h-screen font-sans selection:bg-fran-teal selection:text-fran-navy overflow-x-hidden">
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <IBERecapCTA locale={locale} />
      <WorldMap locale={locale} />
      <SponsorsAndPartners locale={locale} />
      <Contact locale={locale} />
    </div>
  )
}
