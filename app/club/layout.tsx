import { Footer } from "@/components/layout/Footer"
import Sidebar from "@/components/layout/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex-1 w-full flex flex-col">
      <Sidebar>{children}</Sidebar>

      <Footer />
    </div>
  )
}
