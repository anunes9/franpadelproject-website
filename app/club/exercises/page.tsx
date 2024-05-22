import { SectionHeader } from "@/components/club/SectionHeader"
import { ExercisesList } from "@/components/exercises/ExercisesList"
import { Exercises } from "@/lib/exercises"
import { getAssetsUrl } from "@/lib/supabase/api"

export default function Page() {
  const ex = Exercises.map((e) => ({ ...e, image: getAssetsUrl(e.image) }))

  return (
    <section>
      <SectionHeader title="Exercises" page="List of exercises per type" />

      <ExercisesList exercises={ex} />
    </section>
  )
}
