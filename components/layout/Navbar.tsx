import Image from "next/image"
import Logo from "@/assets/logo_green.svg"
import AuthButton from "@/components/AuthButton"
import Link from "next/link"

export const Navbar = () => (
  <nav className="bg-background w-full border-b border-b-foreground/10 sticky top-0 z-10">
    <div className="max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl flex justify-between items-center py-2 text-sm m-auto">
      <Link href="/">
        <Image alt="logo" src={Logo} height={48} />
      </Link>

      <Link href="/dashboard/notes">Notes</Link>
      <Link href="/dashboard/players">Players</Link>
      <Link href="/some-page">Not Found</Link>

      <AuthButton />
    </div>
  </nav>
)
