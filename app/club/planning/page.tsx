import { SectionHeader } from "@/components/club/SectionHeader"
import { Text } from "@/components/generic/Typography"
import { Mesocycles } from "@/lib/mesocycles"
import { getAssetsUrl } from "@/lib/supabase/api"
import { IconDownload, IconPresentation } from "@tabler/icons-react"
import Link from "next/link"
import { ReactNode } from "react"

export default function Page() {
  return (
    <section className="max-w-screen-lg m-auto">
      <SectionHeader
        title="Planning"
        page="Mesocycles, lessons and training courses"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-8 sm:gap-x-6">
        {Mesocycles.map((meso) => (
          <Card
            url={`planning/${meso.id}`}
            title={meso.name}
            icon={meso.icon}
            text={meso.concept}
          />
        ))}

        <Card
          url={`${getAssetsUrl("Fran Methodology - Meso 1-2.pdf")}?download`}
          icon={<IconPresentation height={32} width={32} />}
          title={`Course 1`}
          subtitle="Mesocycle 1-2 and ground shots"
          text="download"
          bottomIcon={<IconDownload height={24} width={24} />}
        />

        <Card url="planning/lessons" title="Example Lesson" />
      </div>
    </section>
  )
}

const Card = ({
  url,
  title,
  subtitle,
  icon,
  text,
  bottomIcon,
}: {
  url: string
  title: string
  subtitle?: string
  icon?: ReactNode
  text?: string
  bottomIcon?: ReactNode
}) => (
  <Link
    href={url}
    key={title}
    className="hover:opacity-75 hover:cursor-pointer shadow-md p-4 bg-slate-100 min-h-[12rem]"
  >
    <div className="flex flex-col justify-around h-full">
      <div className="flex justify-center items-center gap-4 rounded-md">
        {icon}
        <Text className="!font-bold !font-mono text-center">{title}</Text>
      </div>

      {subtitle && <Text className="text-center">{subtitle}</Text>}

      <div className="flex justify-center items-center gap-4 px-2rounded-md">
        {bottomIcon}
        <Text className="font-semibold !m-0 text-center">{text}</Text>
      </div>
    </div>
  </Link>
)
