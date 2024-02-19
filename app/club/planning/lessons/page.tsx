import { PlanningHeader } from "@/components/planning/PlanningHeader"

export default function Page() {
  return (
    <section>
      <PlanningHeader title="Aula Exemplo" />

      <Board />
    </section>
  )
}

const Board = () => (
  <div className="my-8">
    <div className="grid grid-cols-2 sm:grid-cols-5 text-center text-pretty">
      <div className="py-1">Estrutura</div>
      <div className="hidden sm:block sm:col-span-3 border-x-2">Exercicios</div>
      <div className="py-1">Tempo</div>

      <TextColumn text="Aquecimento" />
      <CourtColumn />
      <TextColumn text="5'" />
      <CourtColumnMobile />

      <TextColumn text="Aquecimento com bola" />
      <CourtColumn />
      <TextColumn text="5'" />
      <CourtColumnMobile />

      <TextColumn text="" />
      <CourtColumn />
      <TextColumn text="" />
      <CourtColumnMobile />

      <TextColumn text="" />
      <CourtColumn />
      <TextColumn text="" />
      <CourtColumnMobile />

      <TextColumn text="" />
      <CourtColumn />
      <TextColumn text="" />
      <CourtColumnMobile />

      <TextColumn text="" />
      <EmptyColumn />
      <TextColumn text="" />
      <EmptyColumnMobile />

      <TextColumn text="" />
      <EmptyColumn />
      <TextColumn text="" />
      <EmptyColumnMobile />

      <TextColumn text="" />
      <EmptyColumn />
      <TextColumn text="" />
      <EmptyColumnMobile />

      <TextColumn text="Jogo Condicionado" />
      <EmptyColumn />
      <TextColumn text="10'" />
      <EmptyColumnMobile />

      <TextColumn text="Jogo Livre" />
      <EmptyColumn />
      <TextColumn text="10'" />
      <EmptyColumnMobile />
    </div>
  </div>
)

const TextColumn = ({ text }: { text?: string }) => (
  <div className="border-t-2 flex items-center justify-center py-1 min-h-[48px]">
    {text}
  </div>
)

const CourtColumn = () => (
  <div className="hidden sm:block sm:col-span-3 border-t-2 border-x-2 p-1 bg-gray-100">
    <Court />
  </div>
)

const CourtColumnMobile = () => (
  <div className="col-span-2 sm:hidden border-t-2 p-1 bg-gray-100">
    <Court />
  </div>
)

const EmptyColumn = () => (
  <div className="hidden sm:block sm:col-span-3 border-t-2 border-x-2 py-1 bg-gray-100" />
)

const EmptyColumnMobile = () => (
  <div className="col-span-2 sm:hidden border-t-2 py-1 min-h-[48px] bg-gray-100" />
)

const Court = () => (
  <div className="bg-blue-400 h-32 grid grid-cols-6">
    <div className="border-r-2 border-white" />
    <div className="col-span-2 border-r-2 border-white" />
    <div className="col-span-2" />
    <div className="border-l-2 border-white" />

    <div className="border-r-2 border-white" />
    <div className="col-span-2 border-t border-r-2 border-white" />
    <div className="col-span-2 border-t border-white" />
    <div className="border-l-2 border-white" />
  </div>
)
