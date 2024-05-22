import { ButtonLink } from "@/components/generic/Button"
import { Text, Title } from "@/components/generic/Typography"
import { Exercises } from "@/lib/exercises"
import { Mesocycles } from "@/lib/mesocycles"
import { getAssetsUrl } from "@/lib/supabase/api"
import {
  IconArrowBarRight,
  IconArrowLeft,
  IconCalendarDot,
  IconClock,
  IconDirectionSign,
  IconTarget,
} from "@tabler/icons-react"
import Image from "next/image"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

const Page = ({ params }: { params: { plan: string } }) => {
  const mesocycle = Mesocycles.find(({ id }) => id === params.plan)
  const ex = Exercises.filter((e) =>
    e.tags.includes(mesocycle?.filter || "")
  ).map((e) => ({ ...e, image: getAssetsUrl(e.image) }))

  if (mesocycle)
    return (
      <section className="max-w-screen-lg m-auto">
        <ButtonLink
          href="/club/planning"
          className="flex items-center gap-2 w-fit"
        >
          <IconArrowLeft height={18} width={18} className="self-center" />
          <Text className="!m-0">Back</Text>
        </ButtonLink>

        <div className="sm:h-80 w-full rounded-md mt-4">
          <Image
            src="https://images.unsplash.com/photo-1601646761285-65bfa67cd7a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            objectFit="cover"
            alt="image"
            className="!relative rounded-md"
          />
        </div>

        <Title className="mt-8 !text-xl">{mesocycle.title}</Title>
        <Text className="mt-4">{mesocycle.description}</Text>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mt-8">
          <Card
            icon={<IconClock height={24} width={24} />}
            text={`Duration: ${mesocycle.duration}`}
          />

          <Card
            icon={<IconTarget height={24} width={24} />}
            text={`Concept: ${mesocycle.concept}`}
          />

          <Card
            icon={<IconCalendarDot height={24} width={24} />}
            text={mesocycle.name}
          />
        </div>

        <Text className="mt-8 !font-bold text-lg">Course Content</Text>

        <div className="flex flex-col gap-4 mt-8">
          {mesocycle.details.map((d, i) => (
            <DetailsCard
              title={d.title}
              description={d.description}
              details={d.details}
              section={d.section}
            />
          ))}
        </div>
      </section>
    )

  redirect("/not-found")
}

export default Page

const Card = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="border rounded-md p-4">
    {icon}
    <Text className="!font-bold mt-2">{text}</Text>
  </div>
)

const DetailsCard = ({
  title,
  description,
  details,
  section,
}: {
  title: string
  description?: string
  details: string[]
  section?: {
    title: string
    description?: string
    details: string[]
  }
}) => (
  <div className="border rounded-md p-4">
    <div className="flex items-center gap-2">
      <IconDirectionSign height={24} width={24} className="text-projectGreen" />
      <Text className="!font-bold !text-projectGreen !m-0">{title}</Text>
    </div>

    <Text className="mt-2 mb-4 !text-gray-500">{description}</Text>

    {details?.map((t, i) => (
      <Text key={i} className="mt-2 ml-4">
        - {t}
      </Text>
    ))}

    {section && (
      <div className="ml-4 mt-8">
        <div className="flex items-center gap-2">
          <IconArrowBarRight height={18} width={18} />
          <Text className="!font-bold !text-gray-700 underline !m-0">
            {section.title}
          </Text>
        </div>

        <Text className="mt-2 mb-4  !text-gray-500">{section.description}</Text>

        {section.details?.map((t, i) => (
          <Text key={i} className="mt-2 ml-6">
            - {t}
          </Text>
        ))}
      </div>
    )}
  </div>
)
