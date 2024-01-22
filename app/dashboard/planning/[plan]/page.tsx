import { ExercisesList } from "@/components/exercises/ExercisesList"
import { ButtonLink } from "@/components/generic/Button"
import { Tabs } from "@/components/generic/Tabs"
import { MesocycleDetails } from "@/components/mesocycles/MesocycleDetails"
import { Mesocycles } from "@lib/mesocycles"
import { IconArrowLeft } from "@tabler/icons-react"
import { redirect } from "next/navigation"

export default function Page({ params }: { params: { plan: string } }) {
  const mesocycle = Mesocycles.find(({ id }) => id === params.plan)

  if (mesocycle)
    return (
      <section>
        <div className="flex flex-row gap-8">
          <ButtonLink href="/dashboard/planning">
            <IconArrowLeft height={18} width={18} className="self-center" />
          </ButtonLink>

          <div className="h-14 flex flex-1 justify-center self-stretch items-center rounded-lg bg-green-400 font-bold font-mono">
            MESOCICLO {mesocycle.icon}
          </div>
        </div>

        <Tabs
          tabs={["details", "exercises"]}
          content={[
            <MesocycleDetails mesocycle={mesocycle} />,
            <ExercisesList exercises={mesocycle.exercises} />,
          ]}
        />
      </section>
    )

  redirect("/not-found")
}
