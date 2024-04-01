import { pt } from "@/locales/pt"
import { en } from "@/locales/en"
import { useSearchParams } from "next/navigation"

export const t = (namespace: string, key: string) => {
  const searchParams = useSearchParams()
  const locale = searchParams.get("lang") || "pt"
  // @ts-expect-error
  if (locale === "pt") return pt[namespace][key]
  // @ts-expect-error
  else if (locale === "en") return en[namespace][key]
}
