"use client"

import { Menu } from "@/components/home/Menu"
import { t } from "@/locales"
import Image from "next/image"
import Link from "next/link"

const HeaderGreen = ({ title }: { title: string }) => {
  const locale = window?.localStorage.getItem("lang") || "pt"

  return (
    <div className="h-48 sm:h-[296px] lg:h-[396px] bg-projectGreen">
      <div>
        <div className="absolute left-0 w-full h-48 sm:h-[296px] lg:h-[396px] z-1 bg-headerPattern bg-cover" />
      </div>

      <div className="relative flex flex-col gap-4 sm:gap-8 px-4 py-6 md:p-12 max-w-[1200px] m-auto">
        <div className="flex flex-row justify-between items-center">
          <div className="w-16 sm:w-24 ml-4 sm:ml-0">
            <Link href="/">
              <Image
                alt="fran-logo"
                src="/assets/LOGO_FR_BLUE.png"
                fill
                className="!relative"
              />
            </Link>
          </div>

          <Menu variant="blue" />
        </div>
        <p
          className={
            "font-projectFontExtendedBlack text-xl sm:text-[54px] lg:text-[90px]  underline underline-offset-8 decoration-4 text-center text-projectBlue"
          }
        >
          {t(locale, "pages", title)}
        </p>
      </div>
    </div>
  )
}

export default HeaderGreen
