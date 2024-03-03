import { Footer } from "@/components/layout/Footer"
import { HeaderGreen } from "@/components/layout/Header"
import Image from "next/image"

const Page = () => (
  <div>
    <HeaderGreen title="Patrocinadores" />

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
)

export default Page
