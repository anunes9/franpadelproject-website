import { Text, Title } from "@/components/generic/Typography"
import { Mesocycles } from "@lib/mesocycles"
import Link from "next/link"

export default function Page() {
  return (
    <section>
      <Title>Mesociclos</Title>

      <div className="mt-6 space-y-12 lg:space-y-0 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6">
        {Mesocycles.map((callout) => (
          <Link
            href={`planning/${callout.id}`}
            key={callout.id}
            className="hover:opacity-75 hover:cursor-pointer"
          >
            <div className="h-20 flex justify-center gap-2 self-stretch items-center w-full rounded-lg bg-green-400 font-bold font-mono">
              MESOCICLO {callout.icon}
            </div>

            <Title heading="4" className="mt-2 lg:mt-4">
              {callout.name}
            </Title>

            <Text className="font-semibold">{callout.concept}</Text>
          </Link>
        ))}
      </div>

      {/* <div className="h-28 sm:hidden" /> */}

      <div className="h-1 bg-gray-200 my-8" />

      <Title className="mt-8">Planeamento de aulas</Title>

      <div className="mt-6 space-y-12 lg:space-y-0 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6">
        <Link
          href={`planning/lessons`}
          className="hover:opacity-75 hover:cursor-pointer"
        >
          <div className="h-20 flex justify-center gap-2 self-stretch items-center w-full rounded-lg bg-green-400 font-bold font-mono">
            Aula Exemplo
          </div>
        </Link>
      </div>
    </section>
  )
}
