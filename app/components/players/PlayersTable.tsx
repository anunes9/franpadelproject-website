import { Badge } from "@components/generic/Badge"
import { IconUser } from "@tabler/icons-react"
import { getPlayers } from "@/utils/supabase/api"

const PlayerItem = ({ name, rank }: { name: string; rank: string }) => (
  <div className="p-2 w-full">
    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <IconUser className="w-16 h-16 p-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
      <div className="flex-grow">
        <h2 className="text-gray-900 title-font font-medium">{name}</h2>
        <p className="text-gray-500">UI Designer</p>
        <Badge text={`Rank ${rank}`} />
      </div>
    </div>
  </div>
)

export const PlayersTable = async () => {
  const players = await getPlayers()

  return (
    <section className="text-gray-600 body-font bg-zinc-100 rounded-md my-12">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Players Registered
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Get to know your players
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
          {players?.map(({ first_name, last_name, rank }, i) => (
            <PlayerItem
              name={`${first_name} ${last_name}`}
              key={i}
              rank={rank}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
