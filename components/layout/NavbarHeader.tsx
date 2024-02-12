import { getSession } from "@/lib/supabase/api"
import Image from "next/image"
import Link from "next/link"

const assetsUrl = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL

export const NavbarHeader = async () => {
  const session = await getSession()

  return (
    <nav className="bg-projectBlue w-full">
      <div className="px-8 m-auto lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl flex justify-center py-2 text-sm ">
        <Link href={session ? "/dashboard" : "/"}>
          <Image
            alt="logo"
            src={`${assetsUrl}/fran-padel-project-logo-green.svg`}
            height={48}
            width={128}
          />
        </Link>
      </div>
    </nav>
  )
}
