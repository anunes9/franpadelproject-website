"use client"

import { Footer } from "@/components/layout/Footer"
import { HeaderBlue } from "@/components/layout/Header"
import { Players } from "@/lib/content"
import { t } from "@/locales"
import Image from "next/image"
import { redirect } from "next/navigation"

export default function Page({ params }: { params: { player: string } }) {
  const player = Players.find(({ name }) => name === params.player)
  const locale = window?.localStorage.getItem("lang") || "pt"

  if (player)
    return (
      <div className="bg-blueWhite">
        <div>
          <div className="bg-blueWhitePattern bg-cover h-full sm:h-[1820px] w-full absolute left-0" />
        </div>

        <div className="relative max-w-[1200px] m-auto z-1">
          <HeaderBlue title={t(locale, "pages", "pro-players")} />

          <div className="bg-projectGray lg:w-[1027px] sm:h-[949px] m-auto px-10 pt-10 pb-20 sm:p-[68px] mt-12 sm:mt-24 lg:mt-[177px] sm:mb-[151px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:mt-12 gap-16 sm:gap-8">
              <div className="grid-item h-[357px] w-fit m-auto">
                <Image
                  alt="pro1"
                  src={player.image}
                  fill
                  className="!relative mx-auto"
                />
              </div>

              <div className="grid-item px-4 sm:px-0 lg:py-8 xl:py-0">
                <div className="font-projectFontMedium text-base sm:text-lg leading-relaxed text-projectBlue">
                  <ul className="list-disc">
                    <li>{`${t(locale, "pro-players", "dob")}: ${
                      player.dob
                    }`}</li>
                    <li>{`${t(locale, "pro-players", "position")}: ${
                      player.position
                    }`}</li>
                    <li>{t(locale, "pro-players", "main-titles")}:</li>
                    {player.mainTitles.map((t, i) => (
                      <li className="text-projectGreen ml-6" key={i}>
                        {t}
                      </li>
                    ))}
                    <li>{`${t(
                      locale,
                      "pro-players",
                      "national-ranking"
                    )} (FPP): ${player.fppRanking}`}</li>
                    {player.wptRanking && (
                      <li>{`${t(
                        locale,
                        "pro-players",
                        "international-ranking"
                      )} (WPT): ${player.wptRanking}`}</li>
                    )}
                    {player.fipRanking && (
                      <li>{`${t(
                        locale,
                        "pro-players",
                        "international-ranking"
                      )} (FIP): ${player.fipRanking}`}</li>
                    )}
                    <li>{`${t(locale, "pro-players", "academy-time")}: ${
                      player.academyTime
                    }`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )

  redirect("/not-found")
}
