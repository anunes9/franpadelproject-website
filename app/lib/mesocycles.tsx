import { ExerciseType, Exercises } from "@/app/lib/exercises"
import { IconHexagonNumber1, IconHexagonNumber2 } from "@tabler/icons-react"
import { ReactNode } from "react"

export type MesocycleType = {
  id: string
  icon: ReactNode
  name: string
  concept: string
  duration: string
  exercises: ExerciseType[]
  details: { title: string; details: string[] }[]
}

export const Mesocycles: MesocycleType[] = [
  {
    id: "1",
    icon: <IconHexagonNumber1 width={48} height={48} />,
    name: "Mesociclo 1",
    concept: "5-in-a-row Concept",
    duration: "4 - 6 weeks",
    exercises: Exercises.filter(({ id }) => ["1a", "1b"].includes(id)),
    details: [
      {
        title: "Postura",
        details: [
          "Estilo Bela, Estilo Paquito, Estilo Chingotto",
          "Arigato Concept + Cintura Escapular + Pros e Contras de cada estilo",
        ],
      },
      {
        title: "Preparacao",
        details: [
          "Passo de pivot ou de reaccao (rotacao dos ombros, cintura e desbloqueio da anca)",
          "Passos de ajuste",
          "Direita sem vidro, esquerda sem vidro, saida de vidro de direita, saida de vidro esquerda",
        ],
      },
      {
        title: "Mobilidade",
        details: [
          "Tipos de deslocamento (Deslocamento frontal, lateral, regressivo e diagonal)",
          "Correcoes tecnicas (Superhomem, dartanha, boxeador, passada larga vs passada curta, inclinacao dos ombros, distancia lateral da mao ao centro do corpo)",
        ],
      },
      {
        title: "Estabilidade",
        details: [
          "Conceito de semaforo associado a paragem",
          "Verde, amarelo e vermelho",
        ],
      },
      {
        title: "Execuçåo",
        details: [
          "Terminacao do gesto tecnico",
          "Anatomia (rotacao lado direito e esquerdo)",
          "Teoria do magnetismo",
          "Posicao da raquete no ponto de impacto",
        ],
      },
    ],
  },
  {
    id: "2",
    icon: <IconHexagonNumber2 width={48} height={48} />,
    name: "Mesociclo 2",
    concept: "Conceitos transversais ao jogo aereo e terrestre",
    duration: "4 - 6 weeks",
    exercises: Exercises.filter(({ id }) => ["2a", "2b"].includes(id)),
    details: [
      {
        title: "Direcao",
        details: ["Cara da raquete"],
      },
      {
        title: "Altura",
        details: ["Ponta da raquete"],
      },
      {
        title: "Profundidade",
        details: ["Ampitude da terminaçåo"],
      },
      {
        title: "Velocidade",
        details: ["Categorizaçåo 1 - 5"],
      },
      {
        title: "Aceleraçåo",
        details: ["Passagem da måo sobre a bola"],
      },
      {
        title: "Força",
        details: [
          "Formula",
          "Dismistificaçåo da amplitude",
          "Conceito de controlo (Distância do cotovelo ao corpo)",
        ],
      },
    ],
  },
]
