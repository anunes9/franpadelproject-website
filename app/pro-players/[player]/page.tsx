import { Footer } from "@/components/layout/Footer"
import { Players } from "@/lib/content"
import Image from "next/image"
import { redirect } from "next/navigation"
import dynamic from "next/dynamic"
const HeaderBlue = dynamic(
  () =>
    import("@/components/layout/HeaderBlue").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any
const ProPlayersDetails = dynamic(
  () =>
    import("@/components/client/ProPlayersDetails").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any

export default function Page({ params }: { params: { player: string } }) {
  const player = Players.find(({ name }) => name === params.player)

  if (player)
    return (
      <div className="bg-blueWhite">
        <div>
          <div className="bg-blueWhitePattern bg-cover h-full sm:h-[1820px] w-full absolute left-0" />
        </div>

        <div className="relative max-w-[1200px] m-auto z-1">
          <HeaderBlue title={"pro-players"} />

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

              <ProPlayersDetails player={player} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )

  redirect("/not-found")
}
