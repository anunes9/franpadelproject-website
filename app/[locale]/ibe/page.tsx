import { Metadata } from 'next'
import IBERecap from '@/components/IBERecap'

interface IBEPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: IBEPageProps): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  return {
    title: isEn ? 'IBE 2025 Recap | FRAN Padel Project' : 'IBE 2025 Recap | FRAN Padel Project',
    description: isEn
      ? 'Relive the Iberian Padel Experience 2025 — an intensive multi-day padel training event in Madrid, Spain by FRAN Padel Project.'
      : 'Revive a Experiência Ibérica de Padel 2025 — um evento intensivo de treino de padel em Madrid, Espanha pelo FRAN Padel Project.',
  }
}

export default async function IBEPage({ params }: IBEPageProps) {
  const { locale } = await params
  return <IBERecap locale={locale} />
}
