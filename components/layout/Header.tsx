import { Menu } from "@/components/home/Menu"
import Image from "next/image"

const titleStyle =
  "font-projectFontExtendedBlack text-xl sm:text-[90px]  underline underline-offset-8 decoration-4 text-center"

export const HeaderGreen = ({ title }: { title: string }) => (
  <div className="h-48 sm:h-[396px] bg-projectGreen">
    <div>
      <div className="absolute left-0 w-full h-48 sm:h-[396px] z-1 bg-headerPattern bg-cover" />
    </div>

    <div className="relative flex flex-col gap-4 sm:gap-8 px-4 py-6 md:p-12 max-w-[1200px] m-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="w-16 sm:w-24 ml-4 sm:ml-0">
          <Image
            alt="fran-logo"
            src="/assets/fr-logo.png"
            fill
            className="!relative"
          />
        </div>

        <Menu variant="blue" />
      </div>
      <p className={`${titleStyle} text-projectBlue`}>{title}</p>
    </div>
  </div>
)

export const HeaderBlue = ({ title }: { title: string }) => (
  <div className="relative flex h-full m-auto flex-col gap-5 px-4 py-6 md:p-12">
    <div className="flex flex-row justify-between items-center">
      <div className="w-16 sm:w-24 ml-4 sm:ml-0">
        <Image
          alt="fran-logo"
          src="/assets/fr-logo.png"
          fill
          className="!relative"
        />
      </div>

      <Menu variant="green" />
    </div>

    <p className={`${titleStyle} text-projectGreen`}>{title}</p>
  </div>
)
