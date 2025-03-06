"use client"

import { MediaLink } from "@/components/generic/MediaLink"
import { Menu } from "@/components/home/Menu"
import { t } from "@/locales"

export const Header = ({ title }: { title: string }) => {
  const locale = window?.localStorage.getItem("lang") || "pt"

  return (
    <div className="py-12 px-4 bg-projectBlue">
      <div className="flex justify-between items-center content">
        <MediaLink
          src="/assets/fr-logo.png"
          href="/"
          alt="logo"
          width="!w-12 md:!w-24"
        />

        <h1 className="font-projectFontExtendedBlack underline underline-offset-8 decoration-4 text-center text-xl md:text-3xl lg:text-5xl text-projectGreen">
          {t(locale, "pages", title)}
        </h1>

        <div className="!w-12 md:!w-24 text-center">
          <Menu variant="green" />
        </div>
      </div>
    </div>
  )
}
