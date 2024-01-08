import { LogoutButton } from "@/components/AuthButton"
import { SidebarItem } from "@/components/layout/SidebarIcon"
import {
  IconBallTennis,
  IconCalendarStats,
  IconHome,
  IconNotebook,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import React, { ReactNode } from "react"
import Logo from "@/assets/logo_green.svg"
import { UserInformation } from "@/components/layout/UserInformation"

const Sidebar = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-auto">
    <nav className="flex w-64 border-r border-r-foreground/10">
      <div className="flex flex-col w-full">
        <div className="flex justify-center border-b border-b-foreground/10 py-4">
          <Link href="/dashboard">
            <Image alt="logo" src={Logo} height={48} />
          </Link>
        </div>

        <ul className="mx-2 py-4 space-y-1 font-light">
          <SidebarItem
            title="Dashboard"
            href="/dashboard"
            icon={<IconHome width={24} height={24} stroke={1.5} />}
          />
          <SidebarItem
            title="Methodology"
            href="/dashboard/methodology"
            icon={<IconNotebook width={24} height={24} stroke={1.5} />}
          />
          <SidebarItem
            title="Planning"
            href="/dashboard/planning"
            icon={<IconCalendarStats width={24} height={24} stroke={1.5} />}
          />
          <SidebarItem
            title="Exercises"
            href="/dashboard/exercises"
            icon={<IconBallTennis width={24} height={24} stroke={1.5} />}
          />

          <LogoutButton />
        </ul>

        <div className="border-t border-t-foreground/10 px-2 py-4">
          <UserInformation />
        </div>
      </div>
    </nav>

    <div className="max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto w-full animate-in overflow-hidden py-12 px-4">
      {children}
    </div>
  </div>
)

export default Sidebar
