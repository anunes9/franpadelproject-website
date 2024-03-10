import { SectionHeader } from "@/components/club/SecionHeader"
import { Text } from "@/components/generic/Typography"
import { Mesocycles } from "@/lib/mesocycles"
import { getAssetsUrl } from "@/lib/supabase/api"
import { IconDownload } from "@tabler/icons-react"
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
          href={`${getAssetsUrl("Fran Methodology - Meso 1-2.pdf")}?download`}
          className="hover:opacity-75 hover:cursor-pointer shadow-md rounded-md"
        >
          <div className="h-20 flex justify-center gap-2 self-stretch items-center w-full rounded-lg bg-green-400 font-bold font-mono px-4">
            Apresentação Mesociclo 1 e 2 - Pancadas Terrestres
          </div>

          <div className="flex flex-row justify-center items-center">
            <IconDownload height={24} width={24} />
            <Text className="font-semibold text-center mt-2 px-2">
              Download
            </Text>
          </div>
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
