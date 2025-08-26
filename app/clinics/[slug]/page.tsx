import { redirect } from 'next/navigation'
import { getClinic } from '@/lib/clinics'
import ClinicDetails from '@/components/client/ClinicDetails'
import { PageLayout } from '@/components/layout/Page'
import { PageProps } from '@/lib/types'

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
