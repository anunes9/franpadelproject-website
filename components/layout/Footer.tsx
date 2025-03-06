import Link from "next/link"
import { MediaLink } from "@/components/generic/MediaLink"

export const Footer = () => (
  <footer className="bg-projectBlue font-projectFontMediumExtended text-sm text-white">
    <div className="flex flex-col sm:flex-row justify-between gap-4 items-center md:items-start text-center content py-12 px-8 lg:px-4">
      <MediaLink src="/assets/fr-logo.png" href="/" alt="logo" width="!w-14" />

      <MediaLink
        src="/assets/instagram.png"
        href="https://www.instagram.com/franfreitas.padel/"
        alt="instagram"
        width="!w-12"
        className="sm:order-5"
      />

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Link href="/privacy-policy" className="block">
          Privacy Policy
        </Link>

        <Link href="/terms-of-service" className="block">
          Terms of Service
        </Link>

        <MediaLink
          href="https:anunes9.github.io/me/"
          alt="an-logo"
          src="/assets/an-logo-color.svg"
          width="!w-14"
          text="© 2024 All rights reserved"
        />
      </div>
    </div>
  </footer>
)
