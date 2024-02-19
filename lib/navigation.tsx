import {
  IconBallTennis,
  IconCalendarStats,
  IconHome,
  IconNotebook,
} from "@tabler/icons-react"

export const NavigationLinks = [
  {
    name: "O meu clube",
    href: "/club",
    icon: <IconHome width={24} height={24} stroke={1.5} />,
    current: true,
  },
  {
    name: "Metodologia",
    href: "/club/methodology",
    icon: <IconNotebook width={24} height={24} stroke={1.5} />,
    current: false,
  },
  {
    name: "Planeamento",
    href: "/club/planning",
    icon: <IconCalendarStats width={24} height={24} stroke={1.5} />,
    current: false,
  },
  {
    name: "Exercícios",
    href: "/club/exercises",
    icon: <IconBallTennis width={24} height={24} stroke={1.5} />,
    current: false,
  },
]
