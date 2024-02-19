import { ExercisesList } from "@/components/exercises/ExercisesList"
import { Tabs } from "@/components/generic/Tabs"
import { MesocycleDetails } from "@/components/mesocycles/MesocycleDetails"
import { PlanningHeader } from "@/components/planning/PlanningHeader"
import { Mesocycles } from "@/lib/mesocycles"
import { redirect } from "next/navigation"

export default function Page({ params }: { params: { plan: string } }) {
  const mesocycle = Mesocycles.find(({ id }) => id === params.plan)

  if (mesocycle)
    return (
      <section>
        <PlanningHeader title={mesocycle.name} icon={mesocycle.icon} />

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
