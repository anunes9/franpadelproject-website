import { ExercisesList } from "@/components/exercises/ExercisesList"
import { Text, Title } from "@/components/generic/Typography"
import { Exercises } from "@/lib/exercises"
import Image from "next/image"

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right px-16">
          <Title>Exercises List</Title>

          <Text className="text-gray-500 mt-4 mb-4 sm:mb-0">
            In this section we present a list of exercises that we use in our
            methodology. Each exercise will have a brief description of what we
            want to achieve and what are the dynamics evolved.
          </Text>
        </div>

        <Image
          alt="padel exercises"
          src="https://images.unsplash.com/photo-1646649853703-7645147474ba?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="hidden sm:block h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          width={1000}
          height={500}
        />
      </div>

      <ExercisesList exercises={Exercises} />
    </section>
  )
}
