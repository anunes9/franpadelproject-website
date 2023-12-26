import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import Link from "next/link"

const Index = () => (
  <div className="flex-1 w-full flex flex-col gap-20">
    <Navbar />

    <main className="max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl m-auto animate-in z-0">
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <div className="flex justify-around w-96">
        <Link href="/dashboard/notes">Notes</Link>
        <Link href="/dashboard/players">Players</Link>
        <Link href="/some-page">Not Found</Link>
      </div>
    </main>

    <Footer />
  </div>
)

export default Index
