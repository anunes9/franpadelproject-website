import { ButtonLink } from "@/components/generic/Button"
import { IconArrowLeft } from "@tabler/icons-react"
import { ReactNode } from "react"

export const PlanningHeader = ({ icon }: { icon: ReactNode }) => (
  <div className="flex flex-row gap-8">
    <ButtonLink href="/dashboard/planning">
      <IconArrowLeft height={18} width={18} className="self-center" />
    </ButtonLink>

    <div className="h-14 flex flex-1 justify-center self-stretch items-center rounded-lg bg-green-400">
      <span className="font-bold font-mono mr-2">MESOCICLO</span>
      {icon}
    </div>
  </div>
)
