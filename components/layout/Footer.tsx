import Image from "next/image"
import Link from "next/link"
import ThemeSwitch from "@/components/ThemeSwitch"

const assetsUrl = `${decodeURI(
  process.env.NEXT_PUBLIC_SUPABASE_URL!
)}/storage/v1/object/public/public-assets`

export const Footer = ({ app }: { app?: boolean }) => (
  <footer
    className={
      app
        ? "bg-background w-full px-8 py-4 font-light border-t text-gray-300"
        : "bg-projectBlue w-full px-8 py-4 font-light text-white"
    }
  >
    <div className="max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between m-auto">
      <div className="flex items-center gap-4">
        <Image
          alt="logo"
          src={`${assetsUrl}/fr-logo.png`}
          height={32}
          width={48}
        />

        <a href="https://www.instagram.com/franfreitas.padel/" target="_blank">
          <Image
            src={`${assetsUrl}/instagram.png`}
            width={32}
            height={32}
            alt="fran-logo"
          />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-center font-projectFont text-sm">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/about-us">About us</Link>
      </div>

      <div className="flex flex-col items-center sm:items-end">
        <ThemeSwitch />

        <div className="flex flex-row items-center">
          <a href="https://anunes9.github.io/me/" target="_blank">
            <Image
              alt="an-logo"
              src={`${assetsUrl}/an-logo-color.svg`}
              height={48}
              width={48}
              className="red-500"
            />
          </a>

          <p className="text-xs text-dimmed">© 2023 All rights reserved</p>
        </div>
      </div>
    </div>
  </footer>
)
