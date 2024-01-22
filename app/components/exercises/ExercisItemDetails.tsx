import { Text, Title } from "@/app/components/generic/Typography"
import { ExerciseType } from "@/app/lib/exercises"
import { Badge } from "@components/generic/Badge"
import { Button } from "@components/generic/Button"
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

    <div className="mx-4 w-[80%] self-center">
      <Image
        height={200}
        width={200}
        src={image}
        alt={title}
        className="w-full object-contain"
      />

      <Text className="!font-semibold mt-4">Description</Text>

      <div className="mb-4">
        {description.map((t, i) => (
          <Text key={i}>{`- ${t}`}</Text>
        ))}
      </div>

      <div className="flex gap-1 flex-wrap">
        {tags.map((t, i) => (
          <Badge text={t} key={i} />
        ))}
      </div>
    </div>
  </div>
)
