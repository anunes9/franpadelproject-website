import { Footer } from "@/components/layout/Footer"
import { HeaderBlue } from "@/components/layout/Header"
import { Players } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const Page = () => (
  <Suspense>
    <div className="bg-blueWhite">
      <div>
        <div className="bg-blueWhitePattern bg-cover h-[1820px] w-full absolute left-0" />
      </div>

      <div className="relative max-w-[1200px] m-auto z-1">
        <HeaderBlue title="pro-players" />

        <div className="flex flex-col sm:flex-row justify-between mt-12 sm:mt-[100px] lg:w-[1027px] m-auto">
          <div className="w-3/4 sm:w-[300px] lg:w-[500px] h-full lg:h-[702px] m-auto z-10 sm:mr-[-250px] my-4 shadow-out">
            <Image
              alt="pro-players-hero"
              src="/assets/pro-players-hero.png"
              fill
              className="!relative"
            />
          </div>

          <div className="bg-projectGreen py-12 sm:w-[200px] lg:w-[787px] px-8 sm:pr-8 flex flex-1 mt-[-220px] sm:mt-0 pt-[240px] sm:pt-20">
            <p className="mx-auto sm:mr-0 sm:ml-[250px] font-projectFontExtended text-base sm:text-lg leading-normal text-white">
              O centro de treino acolhe
              <br />
              o ramo do padel profissional
              <br />
              onde se trabalham as vertentes
              <br />
              técnicas, tácticas, estratégicas
              <br />
              e mentais dos jogadores de
              <br />
              modo a contribuir para os seus
              <br />
              objectivos pessoais.
            </p>
          </div>
        </div>

        <div className="bg-projectGray lg:w-[1027px] m-auto p-10 lg:p-[68px] mt-24 sm:mt-[177px] mb-[151px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-28">
            {Players.map((p) => (
              <Link
                className={`grid-item w-3/4 max-h-[357px] sm:h-[257px] lg:h-[357px] mx-auto hover:cursor-pointer hover:bg-gray-200 col-start-${p.colStart}`}
                href={`/pro-players/${p.name}`}
                key={p.name}
              >
                <Image
                  alt="pro1"
                  src={p.image}
                  fill
                  className="!relative mx-auto"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </Suspense>
)

export default Page
