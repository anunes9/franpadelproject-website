import { TableOfContents } from "@/components/methodology/TableOfContents"
import { SectionHeader } from "@/components/club/SecionHeader"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex flex-col">
      <SectionHeader title="Metodologia" page="Conceitos e informações" />

      <TableOfContents />

      <div className="max-w-screen-md m-auto">{children}</div>
    </div>
  )
}
