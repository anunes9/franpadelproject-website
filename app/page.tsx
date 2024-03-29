import { Content } from "@/components/home/Content"
import { Hero } from "@/components/home/Hero"
import { Footer } from "@/components/layout/Footer"
import { Suspense } from "react"

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
