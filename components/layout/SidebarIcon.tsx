"use client"

import { usePathname } from "next/navigation"
import React from "react"

export const SidebarItem = ({
  title,
  href,
  icon,
}: {
  title: string
  href: string
  icon: any
}) => {
  const pathname = usePathname()

  return (
    <li
      className={`rounded-md hover:bg-btn-background-hover ${
        pathname === href && "bg-btn-background-hover"
      } text-sm dark:text-gray-200 text-gray-800`}
    >
      <a href={href} className="flex items-center p-2 space-x-3 rounded-md">
        {icon}
        <span>{title}</span>
      </a>
    </li>
  )
}
