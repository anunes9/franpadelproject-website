import { redirect } from "next/navigation"
import { getClinic } from "@/lib/clinics"
import ClinicDetails from "@/components/client/ClinicDetails"
import { PageLayout } from "@/components/layout/Page"

export default async function Page({ params }: { params: { slug: string } }) {
  const clinic = await getClinic(params.slug)

  if (clinic)
    return (
      <PageLayout headerTitle="padel-clinics">
        <ClinicDetails clinic={clinic} />
      </PageLayout>
    )
  redirect("/not-found")
}
