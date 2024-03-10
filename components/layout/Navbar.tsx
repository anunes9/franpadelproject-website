"use client"

import Logo from "@assets/logo_green.svg"

import { Disclosure } from "@headlessui/react"
import { IconMenu, IconX } from "@tabler/icons-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NavigationLinks } from "@/lib/navigation"

export const Navbar = ({ logoutButton }: { logoutButton: any }) => {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="bg-projectBlue">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IconX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IconMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/club">
                    <Image alt="logo" src={Logo} height={48} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col">
              {NavigationLinks.map(({ name, href, icon }) => (
                <Disclosure.Button
                  key={name}
                  as="a"
                  href={href}
                  className={`${
                    pathname === href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } p-4 font-light
                  `}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  <div className="flex items-center gap-2">
                    {icon}
                    {name}
                  </div>
                </Disclosure.Button>
              ))}

              {logoutButton}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
