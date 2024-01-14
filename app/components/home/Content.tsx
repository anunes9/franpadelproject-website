import {
  IconReportAnalytics,
  IconStairsUp,
  IconUsersGroup,
} from "@tabler/icons-react"
import { ReactNode } from "react"
import FranMethodology from "@assets/fran-methodology.png"
import Image from "next/image"

const Features = [
  {
    description: "Manage your club and games, record data and analyze it",
    icon: <IconUsersGroup height={48} width={48} stroke={1} />,
    title: "Manage your players",
  },
  {
    description: "Improve your understanding of the game and methodology",
    icon: <IconReportAnalytics height={48} width={48} stroke={1} />,
    title: "Track your games",
  },
  {
    description: "Improve in court and master your game",
    icon: <IconStairsUp height={48} width={48} stroke={1} />,
    title: "Improve in court",
  },
]

export const Content = () => (
  <div className="w-screen lg:h-[36rem] px-12">
    <Image
      alt="fran-methodology"
      src={FranMethodology}
      width={448}
      height={448}
      className="m-auto"
    />

    <div className="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-20 max-w-screen-lg mx-auto pb-20">
      {Features.map(({ title, icon, description }) => (
        <FeatureCard
          key={title}
          description={description}
          icon={icon}
          title={title}
        />
      ))}
    </div>
  </div>
)

export const FeatureCard = ({
  icon,
  description,
}: {
  icon: ReactNode
  description: string
  title: string
}) => (
  <div className="bg-gray-200 dark:bg-green-400/80 p-3 md:p-5 rounded-xl h-40 shadow-md">
    <div className="mb-4">{icon}</div>

    <span className="text-gray-800 dark:text-white text-sm">{description}</span>
  </div>
)
