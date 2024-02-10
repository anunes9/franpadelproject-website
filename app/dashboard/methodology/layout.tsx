import Image from "next/image"
import Logo from "@assets/logo_green.svg"
import { TableOfContents } from "@/components/methodology/TableOfContents"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex flex-col">
      <Image
        alt="fran-methodology"
        src={Logo}
        className="m-auto"
        height={120}
      />

      <TableOfContents />

      <div className="max-w-screen-md m-auto">{children}</div>
    </div>
  )
}
