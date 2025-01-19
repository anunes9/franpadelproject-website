import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { getAllPlayers } from "@/lib/players"
const HeaderBlue = dynamic(
  () =>
    import("@/components/layout/HeaderBlue").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any
const ProPlayers = dynamic(
  () =>
    import("@/components/client/ProPlayers").then(
      (module) => module.default
    ) as any,
  {
    ssr: false,
  }
) as any

export default async function Page() {
  const players = await getAllPlayers()

  return (
    <Suspense>
      <div className="bg-blueWhite">
        <div>
          <div className="bg-blueWhitePattern bg-cover h-[1820px] w-full absolute left-0" />
        </div>

        <div className="relative max-w-[1200px] m-auto z-1">
          <HeaderBlue title={"pro-players"} />

          <div className="flex flex-col sm:flex-row justify-between mt-12 sm:mt-[100px] lg:w-[1027px] m-auto">
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

          <div className="bg-projectGray lg:w-[1027px] m-auto p-10 lg:p-[68px] mt-24 sm:mt-[177px] mb-[151px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-28">
              {players.map((p) => (
                <Link
                  className={`grid-item max-h-[357px] sm:h-[257px] lg:h-[357px] mx-auto hover:cursor-pointer hover:bg-gray-200 col-start-${p.colStart}`}
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
        </div>
        <Footer />
      </div>
    </Suspense>
  )
}
