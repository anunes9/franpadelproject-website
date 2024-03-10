import { Footer } from "@/components/layout/Footer"
import { HeaderGreen } from "@/components/layout/Header"
import { Clinics } from "@/lib/content"
import Image from "next/image"
import { redirect } from "next/navigation"

const Page = ({ params }: { params: { clinic: string } }) => {
  const clinic = Clinics.find(({ name }) => name === params.clinic)

  if (clinic)
    return (
      <div>
        <HeaderGreen title="Clínicas de Padel" />

        <div className="bg-projectGray py-12 lg:py-[86px]">
          <div className="bg-projectGray lg:w-[1027px] m-auto p-8 lg:p-16">
            <div
              className={`bg-project${clinic.color} px-[123px] pt-12 lg:pt-[200px] pb-12 lg:pb-[185px]`}
            >
              {clinic.image && (
                <Image
                  alt={clinic.name}
                  src={clinic.image}
                  height={clinic.height}
                  width={clinic.width}
                />
              )}

              <p className="font-projectFontMediumExtended text-xl text-white mt-[88px]">
                {clinic.description}
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  redirect("/not-found")
}

export default Page
