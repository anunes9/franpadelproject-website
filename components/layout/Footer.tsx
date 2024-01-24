import Image from "next/image"
import Logo from "@assets/logo_green.svg"
import ANLogo from "@assets/an-logo-color.svg"
import Link from "next/link"
import ThemeSwitch from "@/components/ThemeSwitch"

export const Footer = () => (
  <footer className="bg-projectBlue w-full px-8 py-4 font-light">
    <div className="max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between m-auto">
      <div className="flex gap-4">
        <Image alt="logo" src={Logo} height={32} />

        <a href="https://www.instagram.com/franfreitas.padel/" target="_blank">
          <Image
            src="/assets/instagram.png"
            width={38}
            height={38}
            alt="fran-logo"
          />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-center text-white font-projectFont text-sm">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/about-us">About us</Link>
      </div>

      <div className="flex flex-col items-center sm:items-end">
        <ThemeSwitch />

        <div className="flex flex-row items-center">
          <a href="https://anunes9.github.io/me/" target="_blank">
            <Image alt="an-logo" src={ANLogo} height={48} className="red-500" />
          </a>

          <p className="text-xs text-dimmed">© 2023 All rights reserved</p>
        </div>
      </div>
    </div>
  </footer>
)
