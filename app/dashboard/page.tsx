import { PlayersTable } from "@components/players/PlayersTable"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: players } = await supabase.from("players").select()
  const { data: games } = await supabase.from("games").select()

  return (
    <>
      <section className="text-gray-600 body-font bg-zinc-100 rounded-md">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {players?.length}
              </h2>
              <p className="leading-relaxed">Players</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {games?.length}
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
