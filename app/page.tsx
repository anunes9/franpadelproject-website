import { Hero } from "@/components/home/Hero"
import dynamic from "next/dynamic"
import { Suspense } from "react"
const Content = dynamic(
  () =>
    import("@/components/home/Content").then((module) => module.default) as any,
  {
    ssr: false,
  }
) as any

export default function Page() {
  return (
    <Suspense>
      <div>
        <Hero />

        <Content />
      </div>
    </Suspense>
  )
}
