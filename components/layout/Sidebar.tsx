"use client"

import {
  IconBallTennis,
  IconCalendarStats,
  IconHome,
  IconNotebook,
} from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import React, { ReactNode } from "react"

const Item = ({
  title,
  href,
  active,
  icon,
}: {
  title: string
  href: string
  active?: boolean
  icon: any
}) => (
  <a
    href={href}
    className={`block py-2 px-4 dark:text-gray-200 text-gray-800 hover:bg-btn-background-hover ${
      active && "bg-btn-background-hover"
    }`}
  >
    <div className="flex gap-2 items-center">
      {icon}
      <span>{title}</span>
    </div>
  </a>
)

const Sidebar = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  return (
    <div className="flex">
      <div className="flex-shrink-0 w-64 border-r border-r-foreground/10">
        <nav className="mt-5">
          <Item
            title="Dashboard"
            href="/dashboard"
            active={pathname === "/dashboard"}
            icon={<IconHome width={24} height={24} />}
          />
          <Item
            title="Methodology"
            href="/dashboard/methodology"
            active={pathname === "/dashboard/methodology"}
            icon={<IconNotebook width={24} height={24} />}
          />
          <Item
            title="Planning"
            href="/dashboard/planning"
            active={pathname === "/dashboard/planning"}
            icon={<IconCalendarStats width={24} height={24} />}
          />
          <Item
            title="Exercises"
            href="/dashboard/exercises"
            active={pathname === "/dashboard/exercises"}
            icon={<IconBallTennis width={24} height={24} />}
          />
        </nav>
      </div>

      <div className="min-h-[90vh] max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl m-auto animate-in overflow-hidden py-12">
        {children}
      </div>
    </div>
  )
}

export default Sidebar
