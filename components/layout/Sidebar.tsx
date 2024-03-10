import { LogoutButtonMobile, LogoutButton } from "@/components/LogoutButton"
import { SidebarItem } from "@/components/layout/SidebarItem"
import { UserInformation } from "@/components/layout/UserInformation"
import { Navbar } from "@/components/layout/Navbar"
import { NavigationLinks } from "@/lib/navigation"
import { ReactNode } from "react"

const Sidebar = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col sm:flex-row flex-auto">
    <nav className="flex sm:w-64 border-r border-r-foreground/10">
      <div className="flex flex-col w-full">
        <Navbar logoutButton={<LogoutButtonMobile />} />

        <ul className="hidden sm:block mx-2 py-4 space-y-1 font-light">
          {NavigationLinks.map(({ name, href, icon }, i) => (
            <SidebarItem key={i} title={name} href={href} icon={icon} />
          ))}

          <LogoutButton className="hover:cursor-pointer" />
        </ul>

        <div className="hidden sm:block border-t border-t-foreground/10 px-2 py-4">
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
