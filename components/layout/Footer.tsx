import Image from "next/image"
import Link from "next/link"

export const Footer = () => (
  <footer className="bg-projectBlue w-full px-8 text-white flex flex-col justify-center py-12 sm:h-[280px]">
    <div className="w-[90%] mx-auto flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between mb-4">
      <div className="relative w-20 sm:w-24 lg:w/28">
        <Image
          alt="logo"
          src="/assets/fr-logo.png"
          className="!relative"
          fill
        />
      </div>

      <a
        href="https://www.instagram.com/franfreitas.padel/"
        target="_blank"
        className="relative w-12 sm:w-14"
      >
        <Image
          src="/assets/instagram.png"
          fill
          alt="instagram-logo"
          className="!relative"
        />
      </a>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-[65px] justify-center items-center font-projectFontMediumExtended text-sm">
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms-of-service">Terms of Service</Link>

      <div className="flex flex-row items-center">
        <a href="https://anunes9.github.io/me/" target="_blank">
          <Image
            alt="an-logo"
            src="/assets/an-logo-color.svg"
            height={48}
            width={48}
          />
        </a>

        <p>© 2024 All rights reserved</p>
      </div>
    </div>
  </footer>
)
