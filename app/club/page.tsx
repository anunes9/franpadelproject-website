import { ReactNode } from "react"
import Link from "next/link"
import { IconPlus } from "@tabler/icons-react"
import { getClub, getUser } from "@/lib/supabase/api"
import { SectionHeader } from "@/components/club/SectionHeader"
import { Title } from "@/components/generic/Typography"
import { Updates } from "@/lib/updates"
import Image from "next/image"

export default async function Page() {
  const club = await getClub()

  return (
    <section>
      <SectionHeader title={club?.name} page="My Club" />

      <div className="sm:h-100 w-full rounded-md mt-4 mb-28">
        <Image
          src="https://img.freepik.com/free-photo/paddle-tennis-white-line_23-2149459021.jpg?t=st=1716421770~exp=1716425370~hmac=1c295c2c21275ddc82d411fef34d2c637569f44fc147447a7250259750536873&w=2000"
          fill
          objectFit="cover"
          alt="image"
          className="!relative rounded-md"
        />
      </div>

      <Title>Latest Updates</Title>

      <div className="grid grid-cols-1 gap-4 max-w-screen-md">
        {Updates.map((item) => (
          <Item
            href={item.url}
            key={item.title}
            icon={item.icon}
            title={item.title}
            details={item.description}
          />
        ))}
      </div>
    </section>
  )
}

const Item = ({
  icon,
  title,
  details,
  href,
}: {
  icon: ReactNode
  title: string
  details: string
  href: string
}) => (
  <div className="rounded-lg h-full border p-4">
    <div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 inline-flex items-center justify-center rounded-full text-projectGreen flex-shrink-0">
          {icon}
        </div>

        <span className="text-gray-900 text-md title-font font-medium">
          {title}
        </span>
      </div>

      <p className="leading-relaxed text-sm text-gray-600">{details}</p>
    </div>

    <Link
      href={href}
      className="mt-3 text-projectGreen inline-flex items-center float-right"
    >
      See More
      <IconPlus className="w-4 h-4 ml-2" />
    </Link>
  </div>
)
