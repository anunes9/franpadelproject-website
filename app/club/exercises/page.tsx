import { SectionHeader } from "@/components/club/SecionHeader"
import { ExercisesList } from "@/components/exercises/ExercisesList"
import { Exercises } from "@/lib/exercises"
import { getAssetsUrl } from "@/lib/supabase/api"

export default function Page() {
  const ex = Exercises.map((e) => ({ ...e, image: getAssetsUrl(e.image) }))

  return (
    <section>
      <SectionHeader
        title="Exercícios"
        page="Lista de exercícios por tipo e mesociclo"
      />

      <ExercisesList exercises={ex} />
    </section>
  )
}
