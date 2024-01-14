"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { IconLoader, IconMoon, IconSun } from "@tabler/icons-react"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <IconLoader />

  return (
    <div className="border border-dimmed rounded-3xl flex gap-2 p-1">
      <button
        className={`p-1 rounded-2xl no-underline hover:bg-btn-background-hover ${
          resolvedTheme === "light" && "bg-btn-background"
        }`}
      >
        <IconSun
          height="auto"
          width={16}
          className="stroke-gray-500 dark:stroke-dimmed"
          onClick={() => setTheme("light")}
        />
      </button>

      <button
        className={`p-1 rounded-2xl no-underline hover:bg-btn-background-hover ${
          resolvedTheme === "dark" && "bg-gray-800"
        }`}
      >
        <IconMoon
          height="auto"
          width={16}
          onClick={() => setTheme("dark")}
          className="stroke-dimmed dark:stroke-gray-300"
        />
      </button>
    </div>
  )
}
