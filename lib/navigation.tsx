import {
  IconBallTennis,
  IconCalendarStats,
  IconHome,
  IconNotebook,
} from "@tabler/icons-react"

export const NavigationLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <IconHome width={24} height={24} stroke={1.5} />,
    current: true,
  },
  {
    name: "Methodology",
    href: "/dashboard/methodology",
    icon: <IconNotebook width={24} height={24} stroke={1.5} />,
    current: false,
  },
  {
    name: "Planning",
    href: "/dashboard/planning",
    icon: <IconCalendarStats width={24} height={24} stroke={1.5} />,
    current: false,
  },
  {
    name: "Exercises",
    href: "/dashboard/exercises",
    icon: <IconBallTennis width={24} height={24} stroke={1.5} />,
    current: false,
  },
]
