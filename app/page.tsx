import { Hero } from "@/components/home/Hero"
import { Suspense } from "react"
import Content from "@/components/home/Content"

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
