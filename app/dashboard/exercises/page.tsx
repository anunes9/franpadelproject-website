import { ExerciseItem } from "@/components/exercises/ExerciseItem"
import { Exercises } from "@/utils/exercises"
import Image from "next/image"

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
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
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {Exercises.map(({ id, title, tags, description, image }) => (
          <ExerciseItem
            tags={tags}
            title={title}
            image={image}
            description={description}
          />
        ))}
      </div>
    </section>
  )
}
