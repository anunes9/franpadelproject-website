import { Hero } from '@/components/home/Hero'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'

const Content = dynamic(() => import('@/components/home/Content').then((module) => module.default) as any) as any

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
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </>
  )
}
