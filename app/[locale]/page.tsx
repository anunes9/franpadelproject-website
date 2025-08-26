import { Hero } from '@/components/home/Hero'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Content = dynamic(() => import('@/components/home/Content').then((module) => module.default) as any) as any

interface HomePageProps {
  params: Promise<{
    locale: string
  }>
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
