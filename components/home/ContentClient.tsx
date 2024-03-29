"use client"

import { t } from "@/locales"

export const ContentIntro = () => (
  <p className="text-projectGreen text-base md:text-lg lg:text-xl text-center font-projectFontMediumExtended z-[2]">
    {t("home", "intro-line-1")}
    <br /> {t("home", "intro-line-2")}
    <br /> {t("home", "intro-line-3")}
    <br /> {t("home", "intro-line-4")}
  </p>
)

export const ContentQuote = () => (
  <p className="text-projectGreen text-base md:text-lg lg:text-xl text-center font-projectFontMediumExtended z-[2]">
    {t("home", "quote-line-1")}
    <br /> {t("home", "quote-line-2")}
    <br /> {t("home", "quote-line-3")}
    <br /> {t("home", "quote-line-4")}
    <br /> {t("home", "quote-line-5")}
    <br /> {t("home", "quote-line-6")}
  </p>
)
