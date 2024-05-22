import Image from "next/image"
import Link from "next/link"

export const Footer = ({ app }: { app?: boolean }) => {
  const footerClass = app
    ? "relative w-full text-white flex flex-col justify-center py-12 bg-dimmed h-24"
    : "relative bg-projectBlue w-full text-white flex flex-col justify-center py-12 sm:h-[280px]"

  return (
    <footer className={footerClass}>
      {!app && (
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between mb-4 md:px-12">
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
      )}

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
}
