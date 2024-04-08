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

        <div className="bg-projectGray py-12 sm:py-[86px]">
          <div className="bg-projectBlue w-screen sm:w-[1027px] h-full sm:h-[577px] mx-auto py-24 mb-8">
            <div className="w-[199px] h-[115px] m-auto">
              <Image
                alt="fran-logo"
                src="/assets/cork-logo.png"
                fill
                className="!relative"
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
