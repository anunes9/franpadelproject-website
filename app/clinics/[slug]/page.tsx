import { redirect } from 'next/navigation'
import { getClinic } from '@/lib/clinics'
import ClinicDetails from '@/components/client/ClinicDetails'
import { PageLayout } from '@/components/layout/Page'
import { PageProps } from '@/lib/types'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  return [
    { slug: 'play-like-a-pro' },
    { slug: 'padel-company-day' },
    { slug: 'master-clinic' },
    { slug: 'padel-wonderland' },
    { slug: 'master-clinic-evolution' },
    { slug: 'train-as-a-pro' },
    { slug: 'ibe' },
  ]
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const clinic = await getClinic(slug)

  if (clinic)
    return (
      <PageLayout headerTitle="padel-clinics">
        <ClinicDetails clinic={clinic} />
      </PageLayout>
    )
  redirect('/not-found')
}
