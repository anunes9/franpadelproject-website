import {
  IconBallTennis,
  IconCalendarStats,
  IconHome,
  IconNotebook,
} from "@tabler/icons-react"

export const NavigationLinks = [
  {
    name: "O meu clube",
    href: "/dashboard",
    icon: <IconHome width={24} height={24} stroke={1.5} />,
    current: true,
  },
  {
    name: "Metodologia",
    href: "/dashboard/methodology",
    icon: <IconNotebook width={24} height={24} stroke={1.5} />,
    current: false,
  },
  {
    name: "Planeamento",
    href: "/dashboard/planning",
    icon: <IconCalendarStats width={24} height={24} stroke={1.5} />,
    current: false,
  },
  {
    name: "Exercícios",
    href: "/dashboard/exercises",
    icon: <IconBallTennis width={24} height={24} stroke={1.5} />,
    current: false,
  },
]
