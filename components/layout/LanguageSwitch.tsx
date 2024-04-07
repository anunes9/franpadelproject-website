"use client"

import { t } from "@/locales"
import { useRouter } from "next/navigation"

export const LanguageSwitch = () => {
  const router = useRouter()
  const locale = window?.localStorage.getItem("lang") || "pt"

  return (
    <div>
      <p className="text-white">{t(locale, "menu", "language")}</p>

      <select
        onChange={(e) => {
          window.localStorage.setItem("lang", e.target.value)
          router.refresh()
        }}
      >
        <option value="en" selected={locale === "en"}>
          English
        </option>
        <option value="pt" selected={locale === "pt"}>
          Português
        </option>
      </select>
    </div>
  )
}
