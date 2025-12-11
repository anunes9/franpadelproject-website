import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import WorldMap from '@/components/home/WorldMap'
import Contact from '@/components/home/Contact'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'

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
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WorldMap />
        <Contact />
      </main>
    </div>
  )
}
