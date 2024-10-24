import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { Suspense } from "react"
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

const Page = () => {
  return (
    <Suspense>
      <div>
        <HeaderGreen title={"sponsors"} />

        <div className="bg-white py-12 sm:py-[86px]">
          <div className="w-2/3 md:w-1/2 mx-auto py-24 max-w-md">
            <div className="flex flex-col gap-16">
              <Image
                alt="fran-logo"
                src="/assets/cork-preto.png"
                fill
                className="!relative"
              />

              <Image
                alt="fran-logo"
                src="/assets/DFL2.png"
                fill
                className="!relative"
              />

              <Image
                alt="fran-logo"
                src="/assets/proframe_preto2.png"
                fill
                className="!relative"
              />

              <h1 className="font-projectFontExtendedBlack text-lg sm:text-xl lg:text-[48px] underline underline-offset-8 decoration-4 text-center text-projectBlue mt-8">
                Clube Parceiro
              </h1>

              <Image
                alt="fran-logo"
                src="/assets/azores-banner.png"
                fill
                className="!relative mt-8"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Suspense>
  )
}

export default Page
