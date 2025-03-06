import Image from "next/image"
import { redirect } from "next/navigation"
import { getPlayer } from "@/lib/players"
import { PlayerType } from "@/lib/types"
import ProPlayersDetails from "@/components/client/ProPlayersDetails"
import { PageLayout } from "@/components/layout/Page"

export default async function Page({ params }: { params: { slug: string } }) {
  const player = (await getPlayer(params.slug)) as unknown as PlayerType

  if (player)
    return (
      <PageLayout headerTitle="pro-players">
        <div className="bg-projectGray lg:w-[1027px] sm:h-[949px] m-auto px-10 pt-10 pb-20 sm:p-[68px] mt-12 sm:mt-24 lg:mt-[177px] sm:mb-[151px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:mt-12 gap-16 sm:gap-8 justify-items-center">
            <div className="grid-item h-[357px] w-fit m-auto">
              <Image
                alt="pro1"
                src={player.image.url}
                fill
                className="!relative mx-auto"
              />
            </div>

            <ProPlayersDetails player={player} />
          </div>
        </div>
      </PageLayout>
    )

  redirect("/not-found")
}
