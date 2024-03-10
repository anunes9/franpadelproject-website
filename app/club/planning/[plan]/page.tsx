import { ExercisesList } from "@/components/exercises/ExercisesList"
import { Tabs } from "@/components/generic/Tabs"
import { MesocycleDetails } from "@/components/mesocycles/MesocycleDetails"
import { PlanningHeader } from "@/components/planning/PlanningHeader"
import { Exercises } from "@/lib/exercises"
import { Mesocycles } from "@/lib/mesocycles"
import { getAssetsUrl } from "@/lib/supabase/api"
import { redirect } from "next/navigation"

const Page = ({ params }: { params: { plan: string } }) => {
  const mesocycle = Mesocycles.find(({ id }) => id === params.plan)
  const ex = Exercises.filter((e) =>
    e.tags.includes(mesocycle?.filter || "")
  ).map((e) => ({ ...e, image: getAssetsUrl(e.image) }))

  if (mesocycle)
    return (
      <section>
        <PlanningHeader title={mesocycle.name} icon={mesocycle.icon} />

        <Tabs
          tabs={["Detalhes", "Exercícios"]}
          content={[
            <MesocycleDetails mesocycle={mesocycle} />,
            <ExercisesList exercises={ex} />,
          ]}
        />
      </section>
    )
  redirect("/not-found")
}

export default Page
