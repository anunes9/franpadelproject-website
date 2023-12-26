"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

export const ThemeProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute="class" enableColorScheme enableSystem>
    {children}
  </ThemeProvider>
)
