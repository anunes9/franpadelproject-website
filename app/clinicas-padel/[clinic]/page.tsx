import { Footer } from "@/components/layout/Footer"
import { Clinics } from "@/lib/content"
import { redirect } from "next/navigation"
import dynamic from "next/dynamic"
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

const Page = ({ params }: { params: { clinic: string } }) => {
  const clinic = Clinics.find(({ name }) => name === params.clinic)

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

export default Page
