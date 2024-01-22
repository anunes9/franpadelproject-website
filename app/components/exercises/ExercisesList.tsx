"use client"

import { ExerciseItemDetails } from "@/app/components/exercises/ExercisItemDetails"
import { ExerciseItem } from "@/app/components/exercises/ExerciseItem"
import { Text } from "@/app/components/generic/Typography"
import { ExerciseType } from "@/app/lib/exercises"
import React from "react"

export const ExercisesList = ({ exercises }: { exercises: ExerciseType[] }) => {
  const [exercise, setExercise] = React.useState(
    null as unknown as ExerciseType | null
  )

  if (exercises.length === 0) return <Text>No exercises to show</Text>

  if (exercise) {
    return (
      <ExerciseItemDetails
        key={exercise.id}
        id={exercise.id}
        onClick={() => setExercise(null)}
        title={exercise.title}
        description={exercise.description}
        image={exercise.image}
        tags={exercise.tags}
      />
    )
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {exercises.map((item, i) => (
        <ExerciseItem
          key={item.id}
          id={item.id}
          onClick={() => setExercise(item)}
          title={item.title}
          description={item.description}
          image={item.image}
          tags={item.tags}
        />
      ))}
    </div>
  )
}
