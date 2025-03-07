import Image from "next/image"
import Link from "next/link"
import { getAllPlayers } from "@/lib/players"
const ProPlayers = dynamic(
  () =>
    import("@/components/client/ProPlayers").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any
import { PageLayout } from "@/components/layout/Page"
import dynamic from "next/dynamic"

export default async function Page() {
  const players = await getAllPlayers()

  return (
    <PageLayout headerTitle="pro-players" bgColor>
      <div className="flex flex-col sm:flex-row justify-between mt-12 sm:mt-[100px]">
        <div className="w-3/4 sm:w-[300px] lg:w-[500px] h-full lg:h-[702px] m-auto z-10 sm:mr-[-250px] my-4 shadow-out">
          <Image
            alt="pro-players-hero"
            src="/assets/pro-players-hero.png"
            fill
            className="!relative"
          />
        </div>

        <ProPlayers />
      </div>

      <div className="bg-projectGray m-auto p-10 lg:p-[68px] mt-24 sm:mt-[177px] mb-[151px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-28">
          {players.map((p) => (
            <Link
              className={`grid-item w-full mx-auto hover:cursor-pointer hover:bg-gray-200 col-start-${p.colStart}`}
              href={`/pro-players/${p.slug}`}
              key={p.name}
            >
              <Image
                alt="pro1"
                src={p.image.url}
                fill
                className="!relative mx-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
