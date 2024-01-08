"use client"

import Logo from "@/assets/logo_green.svg"

import { Disclosure } from "@headlessui/react"
import { IconMenu, IconX } from "@tabler/icons-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NavigationLinks } from "@/utils/navigation"

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="bg-gray-800">
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
                  <Link href="/dashboard">
                    <Image alt="logo" src={Logo} height={48} />
                  </Link>
                </div>
              </div>

              {/* Profile dropdown */}
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`
                            ${
                              active ? "bg-gray-100" : ""
                            } "block px-4 py-2 text-sm text-gray-700"
                            `}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`
                            ${
                              active ? "bg-gray-100" : ""
                            } "block px-4 py-2 text-sm text-gray-700"
                            `}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`
                            ${
                              active ? "bg-gray-100" : ""
                            } "block px-4 py-2 text-sm text-gray-700"
                            `}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div> */}
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
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
