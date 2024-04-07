import { pt } from "@/locales/pt"
import { en } from "@/locales/en"

export const t = (locale: string, namespace: string, key: string) => {
  // @ts-expect-error
  if (locale === "pt") return pt[namespace][key]
  // @ts-expect-error
  else if (locale === "en") return en[namespace][key]
}
