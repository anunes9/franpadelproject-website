import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Fran Padel Project - Mehodology",
  description: "Improve your padel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex-1 w-full flex flex-col gap-20">
      <Navbar />

      <main className="max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl m-auto animate-in">
        {children}
      </main>

      <Footer />
    </div>
  )
}