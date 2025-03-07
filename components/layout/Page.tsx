import dynamic from "next/dynamic"
import { ReactNode } from "react"
const Header = dynamic(
  () =>
    import("@/components/layout/Header").then((module) => module.Header) as any,
  {
    ssr: false,
  }
) as any

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
