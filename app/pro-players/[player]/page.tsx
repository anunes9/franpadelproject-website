import { Footer } from "@/components/layout/Footer"
import { HeaderBlue } from "@/components/layout/Header"
import Image from "next/image"
import { redirect } from "next/navigation"

export const Players = [
  {
    name: "afonso-fazendeiro",
    image: "/assets/pro1.png",
    dob: "18/07/1998",
    position: "Left-side (Right-Handed Player)",
    mainTitles: [
      "European Games 2023, Krakow, Poland, 3rd Place",
      "World Padel Championship 2022, 3rd Place",
      "FPP Master 2022, 1st Place",
    ],
    fppRanking: 12,
    wptRanking: 100,
    fipRanking: null,
    academyTime: "2022/2023",
    colStart: 1,
  },
  {
    name: "constanca-gorito",
    image: "/assets/pro2.png",
    dob: "17/09/2007",
    position: "Right-side (Right-Handed Player)",
    mainTitles: [
      "Open Juniors World Padel Championship 2023, 3rd Place",
      "Sub-16 Nacional Championship 2023, 1st Place",
      "Nacional Championship 2023, Semifinalist",
    ],
    fppRanking: 9,
    wptRanking: null,
    fipRanking: 324,
    academyTime: "2022/2024",
    colStart: 2,
  },
  {
    name: "bernardo-roque",
    image: "/assets/pro3.png",
    dob: "17/03/1998",
    position: "Right-side (Left-Handed Player)",
    mainTitles: ["FIP Promotion Cittá Del Templi 2023, 3rd Place"],
    fppRanking: 56,
    wptRanking: null,
    fipRanking: 558,
    academyTime: "2021/2023",
    colStart: 1,
  },
  {
    name: "plinio-ferrao",
    image: "/assets/pro4.png",
    dob: "01/03/2002",
    position: "Left-side (Right-Handed Player)",
    mainTitles: [],
    fppRanking: 51,
    wptRanking: null,
    fipRanking: 1601,
    academyTime: "2021/2023",
    colStart: 2,
  },
  {
    name: "bernardo-monteiro",
    image: "/assets/pro5.png",
    dob: "",
    position: "Right-side (Right-Handed Player)",
    mainTitles: [],
    fppRanking: 57,
    wptRanking: null,
    fipRanking: null,
    academyTime: "2021/2023",
    colStart: 1,
  },
  {
    name: "martim-silva",
    image: "/assets/pro6.png",
    dob: "",
    position: "Right-side (Right-Handed Player)",
    mainTitles: [],
    fppRanking: 44,
    wptRanking: null,
    fipRanking: null,
    academyTime: "2022/2023",
    colStart: 2,
  },
  {
    name: "sofia-formigal",
    image: "/assets/pro7.png",
    dob: "",
    position: "Right-side (Right-Handed Player)",
    mainTitles: [],
    fppRanking: "",
    wptRanking: null,
    fipRanking: null,
    academyTime: "2022/2023",
    colStart: 2,
  },
]

export default function Page({ params }: { params: { player: string } }) {
  const player = Players.find(({ name }) => name === params.player)

  if (player)
    return (
      <div className="bg-blueWhite">
        <div>
          <div className="bg-blueWhitePattern bg-cover h-[1820px] w-full absolute left-0" />
        </div>

        <div className="relative max-w-[1200px] m-auto z-1">
          <HeaderBlue title="Pro Players" />

          <div className="bg-projectGray sm:w-[1027px] h-[949px] m-auto p-10 sm:p-[68px] mt-24 sm:mt-[177px] mb-[151px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 gap-16 sm:gap-8">
              <div className="grid-item h-[357px]">
                <Image
                  alt="pro1"
                  src={player.image}
                  fill
                  className="!relative !w-fit mx-auto"
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
