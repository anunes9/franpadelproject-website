"use client"

import { t } from "@/locales"

export default function ProPlayersDetails({ player }: { player: any }) {
  const locale = window?.localStorage.getItem("lang") || "pt"

  return (
    <div className="grid-item px-4 sm:px-0 lg:py-8 xl:py-0">
      <div className="font-projectFontMedium text-base sm:text-lg leading-relaxed text-projectBlue">
        <ul className="list-disc">
          {player?.dob && (
            <li>{`${t(locale, "pro-players", "dob")}: ${player.dob}`}</li>
          )}
          <li>{`${t(locale, "pro-players", "position")}: ${
            player.position
          }`}</li>
          <li>{t(locale, "pro-players", "main-titles")}:</li>
          {
            // @ts-expect-error
            player.titles?.map((t, i) => (
              <li className="text-projectGreen ml-6" key={i}>
                {t}
              </li>
            ))
          }
          <li>{`${t(locale, "pro-players", "national-ranking")} (FPP): ${
            player.fppRanking
          }`}</li>
          {player.wptRanking && (
            <li>{`${t(locale, "pro-players", "international-ranking")} (WPT): ${
              player.wptRanking
            }`}</li>
          )}
          {player.fipRanking && (
            <li>{`${t(locale, "pro-players", "international-ranking")} (FIP): ${
              player.fipRanking
            }`}</li>
          )}
          <li>{`${t(locale, "pro-players", "academy-time")}: ${
            player.academyTime
          }`}</li>
        </ul>
      </div>
    </div>
  )
}
