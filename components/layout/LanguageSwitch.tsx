"use client"

import { t } from "@/locales"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

export const LanguageSwitch = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const locale = searchParams.get("lang") || "pt"

  return (
    <div>
      <p className="text-white">{t("menu", "language")}</p>

      <select
        onChange={(e) => router.replace(`${pathname}?lang=${e.target.value}`)}
      >
        <option value="en" selected={locale === "en"}>
          English
        </option>
        <option value="pt" selected={locale === "pt"}>
          Portuguẽs
        </option>
      </select>
    </div>
  )
}
