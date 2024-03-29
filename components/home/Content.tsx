import { ContentIntro, ContentQuote } from "@/components/home/ContentClient"
import Image from "next/image"

export const Content = () => (
  <>
    <div
      id="section-1"
      className="bg-projectBlue flex justify-center items-center py-16 lg:h-[400px]"
    >
      <ContentIntro />
    </div>

    <div className="relative bg-heroColor flex flex-col justify-center items-center">
      <div>
        <div className="bg-heroPattern bg-cover h-full w-full absolute left-0 z-[1]" />
      </div>

      <Image
        className="z-[2] mt-[-4rem] sm:mt-[-8rem] lg:mt-[-200px] !relative max-w-[1200px]"
        src="/assets/hero.png"
        alt="hero"
        fill
      />

      <div className="flex flex-col items-center mt-[-30px] sm:mt-[-42px] lg:mt-[-72px] mb-24 z-[2]">
        <div className="w-12 sm:w-16 lg:w-20">
          <Image
            className="!relative z-10"
            src="/assets/quotes.png"
            alt="quotes"
            fill
          />
        </div>

        <div className="bg-gray-100 shadow-green py-8 xl:py-20 px-4 md:px-16 lg:px-24 xl:px-32 mt-[-12px]">
          <ContentQuote />
        </div>
      </div>
    </div>
  </>
)
