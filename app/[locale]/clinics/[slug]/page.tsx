import { redirect } from 'next/navigation'
import { getClinic } from '@/lib/clinics'
import ClinicDetails from '@/components/client/ClinicDetails'
import { PageLayout } from '@/components/layout/Page'

interface ClinicDetailPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const locales = ['pt', 'en']
  const slugs = [
    'play-like-a-pro',
    'padel-company-day',
    'master-clinic',
    'padel-wonderland',
    'master-clinic-evolution',
    'train-as-a-pro',
    'ibe',
  ]

  const params = []
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }

  return params
}

export default async function ClinicDetailPage({ params }: ClinicDetailPageProps) {
  const { locale, slug } = await params
  const clinic = await getClinic(slug)

  if (clinic)
    return (
      <PageLayout headerTitle="padel-clinics" locale={locale}>
        <ClinicDetails clinic={clinic} locale={locale} />
      </PageLayout>
    )

  redirect('/not-found')
}
