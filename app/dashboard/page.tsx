import { getClub } from "@/lib/supabase/api"
import { Mesocycles } from "@/lib/mesocycles"
import {
  IconBallTennis,
  IconNotebook,
  IconPresentation,
} from "@tabler/icons-react"
import { Item } from "@/components/dashboard/Item"
import { SectionHeader } from "@/components/dashboard/SecionHeader"

export default async function Page() {
  const club = await getClub()

  return (
    <section>
      <SectionHeader title={club?.name} page="O meu clube" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Mesocycles.map((item) => (
          <Item
            href={`dashboard/planning/${item.id}`}
            key={item.id}
            icon={item.icon}
            title={item.name}
            details={item.concept}
          />
        ))}

        <Item
          href="dashboard/methodology"
          icon={<IconPresentation width={32} height={32} stroke={1.5} />}
          title="Formação 1"
          details="Apresentação Mesociclo 1 e 2 e pancadas terrestres"
        />

        <Item
          href="dashboard/exercises"
          icon={<IconBallTennis width={32} height={32} stroke={1.5} />}
          title="Exercícios"
          details="Lista de exercícios"
        />

        <Item
          href="dashboard/methodology"
          icon={<IconNotebook width={32} height={32} stroke={1.5} />}
          title="Metodologia"
          details="Lista de exercícios"
        />
      </div>
    </section>
  )
}
