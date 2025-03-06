import { Header } from "@/components/layout/Header"
import { ReactNode } from "react"

export const PageLayout = ({
  children,
  headerTitle,
  bgColor,
}: {
  children: ReactNode
  headerTitle: string
  bgColor?: boolean
}) => (
  <div className={bgColor ? "bg-blueWhite" : ""}>
    <div className="bg-bodyPattern bg-cover h-full w-full absolute left-0 opacity-10 z-0" />

    <Header title={headerTitle} />

    <div className="content">{children}</div>
  </div>
)
