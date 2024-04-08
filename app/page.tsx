import { Hero } from "@/components/home/Hero"
import { Footer } from "@/components/layout/Footer"
import { Suspense } from "react"
import dynamic from "next/dynamic"
const Content = dynamic(
  () =>
    import("@/components/home/Content").then((module) => module.default) as any,
  {
    ssr: false,
  }
) as any

const Page = () => (
  <Suspense>
    <div>
      <Hero />

      <Content />

      <Footer />
    </div>
  </Suspense>
)

export default Page
