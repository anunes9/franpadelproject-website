import { SectionHeader } from "@/components/club/SecionHeader"
import { ExercisesList } from "@/components/exercises/ExercisesList"
import { Exercises } from "@/lib/exercises"

export default function Page() {
  return (
    <section>
      <SectionHeader
        title="Exercícios"
        page="Lista de exercícios por tipo e mesociclo"
      />

      <ExercisesList exercises={Exercises} />
    </section>
  )
}
