import { Text, Title } from "@/components/generic/Typography"
import { ExerciseType } from "@/lib/exercises"
import { Badge } from "@/components/generic/Badge"
import { Button } from "@/components/generic/Button"
import { IconChevronLeft } from "@tabler/icons-react"
import Image from "next/image"
import React from "react"

type Click = {
  onClick: () => void
}

export const ExerciseItemDetails = ({
  title,
  description,
  image,
  tags,
  onClick,
}: ExerciseType & Click) => (
  <div className="flex flex-col">
    <div className="flex rounded-t mb-4 items-center gap-4">
      <Button className="!pl-2" onClick={onClick}>
        <IconChevronLeft height={24} width={24} />
        <Text className="!mb-0">Back</Text>
      </Button>

      <Title className="font-semibold !mb-0">{title}</Title>
    </div>

    <div className="flex gap-1 flex-wrap mb-6">
      {tags.map((t, i) => (
        <Badge text={t} key={i} />
      ))}
    </div>

    <div className="lg:w-4/5 lg:mx-auto">
      <Image alt="title" src={image} fill className="!relative" />
    </div>

    <div className="lg:w-4/5 mx-auto">
      {description.length > 0 && (
        <Text className="!font-semibold text-lg my-4">
          Detalhes do exercício
        </Text>
      )}

      <div className="m-4">
        {description.map((t, i) => (
          <Text key={i}>{`- ${t}`}</Text>
        ))}
      </div>
    </div>
  </div>
)
