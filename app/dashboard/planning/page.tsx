import { SectionHeader } from "@/components/dashboard/SecionHeader"
import { Text } from "@/components/generic/Typography"
import { Mesocycles } from "@/lib/mesocycles"
import Link from "next/link"

export default function Page() {
  return (
    <section>
      <SectionHeader title="Planeamento" page="Mesociclos, aulas e formações" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-8 lg:gap-x-6">
        {Mesocycles.map((callout) => (
          <Link
            href={`planning/${callout.id}`}
            key={callout.id}
            className="hover:opacity-75 hover:cursor-pointer shadow-md rounded-md"
          >
            <Text className="h-20 flex justify-center gap-2 self-stretch items-center w-full rounded-lg bg-green-400 !font-bold !font-mono">
              MESOCICLO {callout.icon}
            </Text>

            <Text className="font-semibold text-center mt-2 px-2">
              {callout.concept}
            </Text>
          </Link>
        ))}

        <Link
          href={`planning}`}
          className="hover:opacity-75 hover:cursor-pointer shadow-md rounded-md"
        >
          <div className="h-20 flex justify-center gap-2 self-stretch items-center w-full rounded-lg bg-green-400 font-bold font-mono">
            Formação 1
          </div>

          <Text className="font-semibold text-center mt-2 px-2">
            Apresentação Mesociclo 1 e 2 e pancadas terrestres
          </Text>
        </Link>

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

// http://127.0.0.1:54321/storage/v1/object/public/public-assets/Fran%20Methodology%20-%20Meso%201-2.pdf
