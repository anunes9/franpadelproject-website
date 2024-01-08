import { createClient } from "@/utils/supabase/server"
import { IconUser } from "@tabler/icons-react"
import { cookies } from "next/headers"

const PlayerItem = ({ name }: { name: string }) => (
  <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <IconUser className="w-16 h-16 p-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
      <div className="flex-grow">
        <h2 className="text-gray-900 title-font font-medium">{name}</h2>
        <p className="text-gray-500">UI Designer</p>
      </div>
    </div>
  </div>
)

export const PlayersTable = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: players } = await supabase.from("players").select()

  return (
    <section className="text-gray-600 body-font bg-zinc-100 rounded-md my-12">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Players Registered
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>

        <div className="flex flex-wrap -m-2">
          {players?.map(({ name }, i) => (
            <PlayerItem name={name} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
