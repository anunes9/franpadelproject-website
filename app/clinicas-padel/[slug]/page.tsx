import { Footer } from "@/components/layout/Footer"
import { redirect } from "next/navigation"
import dynamic from "next/dynamic"
import { getClinic } from "@/lib/clinics"
const HeaderGreen = dynamic(
  () =>
    import("@/components/layout/HeaderGreen").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any
const ClinicDetails = dynamic(
  () =>
    import("@/components/client/ClinicDetails").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any

export default async function Page({ params }: { params: { slug: string } }) {
  const clinic = await getClinic(params.slug)

  if (clinic)
    return (
      <div>
        <HeaderGreen title={"padel-clinics"} />

        <div className="bg-projectGray lg:py-[86px]">
          <ClinicDetails clinic={clinic} />
        </div>

        <Footer />
      </div>
    )
  redirect("/not-found")
}
