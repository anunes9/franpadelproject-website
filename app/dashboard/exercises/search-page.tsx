"use client"

import { ButtonLink } from "@/components/generic/Button"
import { IconChevronLeft } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const searchParams = useSearchParams()

  const search = searchParams.get("selected")

  const exercise = Exercises.find(({ id }) => id === search)

  if (search && exercise) {
    return (
      <>
        <div className="flex rounded-t mb-4 items-center gap-4">
          <ButtonLink href={`/dashboard/exercises`}>
            <IconChevronLeft height={24} width={24} />
          </ButtonLink>
          <h3 className="text-3xl font-semibold">{exercise?.title}</h3>
        </div>

        <div>
          <Image
            height={200}
            width={200}
            src={exercise?.image}
            alt={exercise?.title}
            className="w-full object-contain object-center lg:h-full lg:w-full"
          />

          <h3 className="text-sm text-gray-700 mt-4">
            {exercise?.description}
          </h3>

          {exercise?.tags.map((t, i) => (
            <span
              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase mt-2"
              key={i}
            >
              {t}
            </span>
          ))}
        </div>
      </>
    )
  }

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right px-16">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Exercises List
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            In this section we present a list of exercises that we use in our
            methodology. Each exercise will have a brief description of what we
            want to achieve and what are the dynamics evolved.
          </p>
        </div>

        <Image
          alt="padel exercises"
          src="https://images.unsplash.com/photo-1646649853703-7645147474ba?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          width={1000}
          height={500}
        />
      </section>

      <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {Exercises.map(({ id, title, tags, image }) => (
          <Link key={id} href={`/dashboard/exercises?selected=${id}`}>
            <div className="w-full rounded-md bg-gray-200 hover:opacity-75 hover:cursor-pointer sm:py-8">
              <Image
                height={200}
                width={200}
                src={image}
                alt={title}
                className="w-full object-contain object-center lg:h-full lg:w-full"
              />
            </div>

            <h3 className="text-sm text-gray-700 mt-4">{title}</h3>
            {tags.map((t, i) => (
              <span
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase mt-2"
                key={i}
              >
                {t}
              </span>
            ))}
          </Link>
        ))}
      </section>
    </div>
  )
}

const Exercises = [
  {
    id: "1a",
    title: "Exercise 1 A",
    description: "Some description of exercise",
    tags: ["backhand"],
    image: "/exercises/1a.svg",
  },
  {
    id: "1b",
    title: "Exercise 1 B",
    description: "Some description of exercise",
    tags: ["forehand"],
    image: "/exercises/1b.svg",
  },
  {
    id: "1a",
    title: "Exercise 2 A",
    description: "Some description of exercise",
    tags: ["backhand"],
    image: "/exercises/2a.svg",
  },
  {
    id: "1a",
    title: "Exercise 2 B",
    description: "Some description of exercise",
    tags: ["backhand"],
    image: "/exercises/2b.svg",
  },
]
