import { useSearchParams } from "next/navigation"

const en = {
  home: {
    "intro-line-1": "Focused on player growth,",
    "intro-line-2": " the academy develops a",
    "intro-line-3": " custom strategy to meet",
    "intro-line-4": " your specific needs.",
    "quote-line-1": "“Competing is having the feeling of ",
    "quote-line-2": " win or lose within the 10x20.",
    "quote-line-3": " I invite everyone who seeks",
    "quote-line-4": " better manage of this dichotomy",
    "quote-line-5": " in the life of a competitor",
    "quote-line-6": " to try out the training center”",
  },
  menu: {
    academy: "Academy",
    "padel-clinics": "Padel Clinics",
    methodology: "FRAN Methodology",
    "pro-players": "Pro Players",
    sponsors: "Sponsors",
    "get-in-touch": "Get in touch",
  },
  pages: {
    academy: "Academy",
    "padel-clinics": "Padel Clinics",
    methodology: "FRAN Methodology",
    "pro-players": "Pro Players",
    sponsors: "Sponsors",
  },
}

const pt = {
  home: {
    "intro-line-1": "Focados no crescimento do jogador,",
    "intro-line-2": " a academia desenvolve uma",
    "intro-line-3": " estratégia atendendo às suas",
    "intro-line-4": " necessidades específicas.",
    "quote-line-1": "“Competir é ter a sensação de poder",
    "quote-line-2": " ganhar ou perder dentro dos 10x20.",
    "quote-line-3": " Convido a todos os que procuram",
    "quote-line-4": " gerir melhor esta dicotomia presente",
    "quote-line-5": " na vida de um competidor",
    "quote-line-6": " a experimentar o centro de treino”",
  },
  menu: {
    academy: "Academia",
    "padel-clinics": "Clínicas de Padel",
    methodology: "FRAN Methodology",
    "pro-players": "Pro Players",
    sponsors: "Patrocinadores",
    "get-in-touch": "Entrar em Contacto",
  },
  pages: {
    academy: "Academia",
    "padel-clinics": "Clínicas de Padel",
    methodology: "FRAN Methodology",
    "pro-players": "Pro Players",
    sponsors: "Patrocinadores",
  },
}

export const t = (namespace: string, key: string) => {
  const searchParams = useSearchParams()
  const locale = searchParams.get("lang") || "pt"
  // @ts-expect-error
  if (locale === "pt") return pt[namespace][key]
  // @ts-expect-error
  else if (locale === "en") return en[namespace][key]
}
