import { Content } from "@/components/home/Content"
import { Hero } from "@/components/home/Hero"
import { Footer } from "@/components/layout/Footer"
import { Suspense } from "react"

const Page = () => {
  const locale = "en"

  return (
    <Suspense>
      <div>
        <Hero />

        <Content locale={locale} />

        <Footer />
      </div>
    </Suspense>
  )
}

export default Page
