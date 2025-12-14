import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WorldMap from '@/components/WorldMap'
import SponsorsAndPartners from '@/components/SponsorsAndPartners'

interface HomePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata(locale, 'home')
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen font-sans selection:bg-fran-teal selection:text-fran-navy overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <WorldMap />
      <SponsorsAndPartners />
      <Contact />
    </div>
  )
}
