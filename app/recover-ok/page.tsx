import FranMethodology from "@assets/fran-methodology.png"
import Image from "next/image"
import Link from "next/link"
import { IconChevronLeft } from "@tabler/icons-react"
import { Text } from "@/components/generic/Typography"

export default async function Login() {
  return (
    <div className="w-screen">
      <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 m-auto">
        <Link
          href="/login"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <IconChevronLeft height={18} />
          Back
        </Link>

        <div className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground pt-12 sm:pt-24 items-center">
          <Image
            alt="fran-methodology"
            src={FranMethodology}
            layout="responsive"
            width={448}
            height={448}
          />

          <Text className="mb-8">Success!</Text>

          <a href="/club" className="flex">
            <button className="bg-green-300 rounded-md px-4 py-2 text-foreground mb-2">
              Go to my club
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
