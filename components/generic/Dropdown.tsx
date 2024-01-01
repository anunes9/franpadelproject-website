"use client"

import { IconChevronDown } from "@tabler/icons-react"
import React, { useState } from "react"

type DropdownItem = {
  title: string
  href: string
}

export const Dropdown = ({ items }: { items: DropdownItem[] }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  return (
    <>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 px-4 dark:text-gray-200 text-gray-800 hover:bg-btn-background-hover"
      >
        <span>Dropdown</span>

        <IconChevronDown
          className={`h-4 w-4 transition-transform duration-300 transform ${
            isDropdownOpen ? "-rotate-90" : "rotate-0"
          }`}
          height={32}
          width={32}
        />
      </button>
      <div
        className={`mt-2 ml-4 transition-opacity duration-300 ${
          isDropdownOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {items.map(({ title, href }, i) => (
          <a
            key={i}
            href={href}
            className="block py-2 px-4 dark:text-gray-200 text-gray-800 hover:bg-btn-background-hover border-l-2 pl-2"
          >
            {title}
          </a>
        ))}
      </div>
    </>
  )
}
