import { Title } from "@/components/generic/Typography"
import { ExerciseType } from "@/lib/exercises"
import { Badge } from "@/components/generic/Badge"
import Image from "next/image"
import React from "react"

type Click = {
  onClick: () => void
}
export const ExerciseItem = ({
  title,
  image,
  tags,
  onClick,
}: ExerciseType & Click) => (
  <div onClick={onClick}>
    <div className="w-full rounded-md bg-gray-200 hover:opacity-75 hover:cursor-pointer sm:py-8">
      <Image
        height={200}
        width={200}
        src={image}
        alt={title}
        className="w-full object-contain object-center lg:h-full lg:w-full"
      />
    </div>

    <Title className="!text-sm !font-semibold !mt-4 !mb-0">{title}</Title>

    <div className="flex gap-1 flex-wrap">
      {tags.map((t, i) => (
        <Badge text={t} key={i} />
      ))}
    </div>
  </div>
)
