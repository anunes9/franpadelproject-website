import { Footer } from "@/components/layout/Footer"
import Sidebar from "@/components/layout/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="bg-indigo-600 px-4 py-2 text-white text-center text-sm">
        Fran Methodology App in Beta!
      </div>

      <div className="min-h-screen flex-1 w-full flex flex-col">
        <Sidebar>{children}</Sidebar>

        <Footer />
      </div>
    </div>
  )
}
