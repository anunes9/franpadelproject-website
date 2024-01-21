import { PlayersTable } from "@components/players/PlayersTable"
import { Title } from "@/app/components/generic/Typography"
import { getClub, getPlayers } from "@/utils/supabase/api"

export default async function Page() {
  const club = await getClub()
  const players = await getPlayers()

  return (
    <>
      <section className="text-gray-600 body-font bg-zinc-100 rounded-md">
        <div className="container p-4 mx-auto">
          <Title heading="1" className="mb-4">
            {club.name}
          </Title>

          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {players?.length}
              </h2>
              <p className="leading-relaxed">Players</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {players?.length}
              </h2>
              <p className="leading-relaxed">Games</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>

      <PlayersTable />
    </>
  )
}
