import { Footer } from "@/components/layout/Footer"
import { HeaderBlue } from "@/components/layout/Header"
import { Players } from "@/lib/content"
import Image from "next/image"
import { redirect } from "next/navigation"

export default function Page({ params }: { params: { player: string } }) {
  const player = Players.find(({ name }) => name === params.player)

  if (player)
    return (
      <div className="bg-blueWhite">
        <div>
          <div className="bg-blueWhitePattern bg-cover h-full sm:h-[1820px] w-full absolute left-0" />
        </div>

        <div className="relative max-w-[1200px] m-auto z-1">
          <HeaderBlue title="Pro Players" />

          <div className="bg-projectGray sm:w-[1027px] sm:h-[949px] m-auto px-10 pt-10 pb-20 sm:p-[68px] mt-24 sm:mt-[177px] sm:mb-[151px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 gap-16 sm:gap-8">
              <div className="grid-item h-[357px]">
                <Image
                  alt="pro1"
                  src={player.image}
                  fill
                  className="!relative sm:!w-fit mx-auto"
                />
              </div>

              <div className="grid-item px-4 sm:px-0">
                <div className="font-projectFontMedium text-base sm:text-lg leading-relaxed text-projectBlue">
                  <ul className="list-disc">
                    <li>{`Data de nascimento: ${player.dob}`}</li>
                    <li>{`Posição: ${player.position}`}</li>
                    <li>Principais Títulos:</li>
                    {player.mainTitles.map((t, i) => (
                      <li className="text-projectGreen ml-6" key={i}>
                        {t}
                      </li>
                    ))}
                    <li>{`Ranking Nacional (FPP): ${player.fppRanking}`}</li>
                    {player.wptRanking && (
                      <li>{`Ranking Internacional (WPT): ${player.wptRanking}`}</li>
                    )}
                    {player.fipRanking && (
                      <li>{`Ranking Internacional (WPT): ${player.fipRanking}`}</li>
                    )}
                    <li>{`Presença na academia: ${player.academyTime}`}</li>
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
