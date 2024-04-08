"use client"

import { Menu } from "@/components/home/Menu"
import { t } from "@/locales"
import Image from "next/image"
import Link from "next/link"

const HeaderBlue = ({ title }: { title: string }) => {
  const locale = window?.localStorage.getItem("lang") || "pt"

  return (
    <div className="relative flex h-full m-auto flex-col gap-5 px-4 py-6 md:p-12">
      <div className="flex flex-row justify-between items-center">
        <div className="w-16 sm:w-24 ml-4 sm:ml-0">
          <Link href="/">
            <Image
              alt="fran-logo"
              src="/assets/fr-logo.png"
              fill
              className="!relative"
            />
          </Link>
        </div>

        <Menu variant="green" />
      </div>

      <p
        className={
          "font-projectFontExtendedBlack text-xl sm:text-[54px] lg:text-[90px]  underline underline-offset-8 decoration-4 text-center text-projectGreen"
        }
      >
        {t(locale, "pages", title)}
      </p>
    </div>
  )
}

export default HeaderBlue
