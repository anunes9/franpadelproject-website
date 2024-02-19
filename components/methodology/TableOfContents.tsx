"use client"

import { usePathname } from "next/navigation"

const TOC = [
  { title: "Introdução", href: "/club/methodology" },
  {
    title: "Conceito 5 em Linha",
    href: "/club/methodology/5-in-a-row-concepts",
  },
  {
    title: "Técnicas Terrestres",
    href: "/club/methodology/ground-techniques",
  },
]

export const TableOfContents = () => {
  const pathname = usePathname()

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-2 sm:border-b">
        {TOC.map(({ title, href }) => (
          <a
            href={href}
            key={title}
            className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-projectFont
            ${
              pathname === href
                ? "text-projectGreen border-projectGreen"
                : "text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700 font-medium"
            }
          `}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  )
}
