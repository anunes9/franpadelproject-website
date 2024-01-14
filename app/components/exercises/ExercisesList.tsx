"use client"

import { Text } from "@/app/components/generic/Typography"
import { ExerciseType } from "@/app/lib/exercises"
import { Badge } from "@components/generic/Badge"
import { Button } from "@components/generic/Button"
import { IconChevronLeft } from "@tabler/icons-react"
import Image from "next/image"
import React from "react"

const ExerciseItem = ({
  title,
  description,
  image,
  tags,
}: {
  title: string
  description: string
  image: string
  tags: string[]
}) => {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <div className="w-full rounded-md bg-gray-200 hover:opacity-75 hover:cursor-pointer sm:py-8">
          <Image
            height={200}
            width={200}
            src={image}
            alt={title}
            className="w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>

        <h3 className="text-sm font-semibold text-gray-700 mt-4">{title}</h3>

        <div className="flex gap-1 flex-wrap">
          {tags.map((t, i) => (
            <Badge text={t} key={i} />
          ))}
        </div>
      </div>

      {showModal && (
        <div className="absolute w-[95%] top-0 bg-background h-full py-8">
          <div className="flex rounded-t mb-4 items-center gap-4">
            <Button onClick={() => setShowModal(false)}>
              <IconChevronLeft height={24} width={24} />
            </Button>
            <h3 className="text-3xl font-semibold">{title}</h3>
          </div>

          <div>
            <Image
              height={200}
              width={200}
              src={image}
              alt={title}
              className="w-[95%] object-contain my-8"
            />

            <h3 className="text-sm text-gray-700 my-4">{description}</h3>

            <div className="flex gap-1 flex-wrap">
              {tags.map((t, i) => (
                <Badge text={t} key={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const ExercisesList = ({ exercises }: { exercises: ExerciseType[] }) => {
  if (exercises.length === 0) return <Text>No exercises to show</Text>

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {exercises.map(({ id, title, tags, description, image }) => (
        <ExerciseItem
          key={id}
          tags={tags}
          title={title}
          image={image}
          description={description}
        />
      ))}
    </div>
  )
}
