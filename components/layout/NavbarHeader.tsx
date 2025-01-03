import Image from "next/image"
import Link from "next/link"

export const NavbarHeader = () => (
  <nav className="bg-projectBlue w-full">
    <div className="px-8 m-auto lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl flex justify-center py-2 text-sm ">
      <Link href="/">
        <Image
          alt="logo"
          src="/assets/fran-padel-project-logo-green.svg"
          height={48}
          width={128}
        />
      </Link>
    </div>
  </nav>
)
