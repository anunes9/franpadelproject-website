import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { Suspense } from "react"
import dynamic from "next/dynamic"
const HeaderBlue = dynamic(
  () =>
    import("@/components/layout/HeaderBlue").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any
const AcademyComponent = dynamic(
  () =>
    import("@/components/client/Academy").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any

const Page = () => (
  <Suspense>
    <div className="bg-blueWhite">
      <div>
        <div className="bg-blueWhitePattern bg-cover h-[1820px] w-full absolute left-0" />
      </div>

      <div className="relative max-w-[1200px] m-auto z-1">
        <HeaderBlue title={"academy"} />

        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 sm:mt-[100px] lg:w-[1027px] m-auto">
          <div className="w-3/4 sm:w-1/3 lg:w-[418px] h-full lg:h-[831px] z-10 sm:mr-[-80px] lg:mr-[-180px] shadow-out">
            <Image
              alt="fran-logo"
              src="/assets/fran-academia.png"
              fill
              className="!relative"
            />
          </div>

          <AcademyComponent />
        </div>

        <div className="bg-projectGray lg:w-[1027px] m-auto sm:p-[68px] mt-24 sm:mt-[177px] mb-[151px]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="w-3/4 m-auto sm:w-[386px]">
              <Image
                alt="fran-logo"
                src="/assets/cv-fran.png"
                fill
                className="!relative"
              />
            </div>

            <div className="hidden sm:block font-projectFontMedium text-sm sm:text-base lg:text-lg text-projectBlue sm:mr-[80px]">
              <ul className="list-disc">
                <li className="sm:mb-8">
                  Founder{" "}
                  <span className="font-projectFontMediumExtended font-bold">
                    FRAN Padel Project
                  </span>
                </li>
                <li className="sm:mb-8">
                  Founder{" "}
                  <span className="font-projectFontMediumExtended font-bold">
                    FRAN Methodology
                  </span>
                </li>
                <li>Head Coach</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center w-fit m-auto font-projectFontMedium text-sm sm:text-base lg:text-lg leading-relaxed text-projectBlue sm:mt-14 pb-8 px-14 sm:px-0">
            <ul className="list-disc">
              <li className="sm:hidden mt-12">Founder FRAN Padel Project </li>
              <li className="sm:hidden">Founder FRAN Methodology</li>
              <li className="sm:hidden">Head Coach</li>
              <li>Horácio Alvarez Clementi (“HAC”) Ambassador (2019 - 2022)</li>
              <li>
                Technical Coach & Sparring in Horácio Alvarez Clementi
                <br /> “WPT” Team 2015-2021:
              </li>
              <li className="text-projectGreen ml-6">Augustin Tapia</li>
              <li className="text-projectGreen ml-6">Lucas Bergamini </li>
              <li className="text-projectGreen ml-6">Lucas Campagnolo </li>
              <li className="text-projectGreen ml-6">Matiaz Diaz</li>
              <li className="text-projectGreen ml-6">Carolina Navarro </li>
              <li>+ 50 Clinics and Courses: </li>
              <li className="text-projectGreen ml-6">Angola </li>
              <li className="text-projectGreen ml-6">Sweden </li>
              <li className="text-projectGreen ml-6">Spain</li>
              <li className="text-projectGreen ml-6">Portugal </li>
              <li>Psychology Degree in ISPA University; </li>
              <li>Grade I & II from IPDJ </li>
              <li>Main Coach: </li>
              <li className="text-projectGreen ml-6">
                Afonso Fazendeiro (2022-2023)
              </li>
              <li className="text-projectGreen ml-6">
                Constança Gorito (2022-2024)
              </li>
              <li className="text-projectGreen ml-6">
                Bernardo Monteiro (2021-2023)
              </li>
              <li className="text-projectGreen ml-6">
                Martim Silva (2022-2023)
              </li>
              <li className="text-projectGreen ml-6">
                Plínio Ferrão (2021-2023)
              </li>
              <li className="text-projectGreen ml-6">
                Sofia Formigal (2023-2024)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </Suspense>
)

export default Page
