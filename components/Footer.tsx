'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { t, getLocaleFromPathname } from '@/lib/i18n'
import LanguageSwitch from './LanguageSwitch'

export default function Footer() {
  const [locale, setLocale] = useState('pt')

  useEffect(() => {
    // Detect locale from pathname
    const pathLocale = getLocaleFromPathname(window.location.pathname)
    setLocale(pathLocale)
  }, [])
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-8">
          <Image
            src="/assets/fran-padel-project-logo-green.svg"
            alt="Fran Padel Project"
            width={48}
            height={48}
            className="h-12 w-auto"
          />

          <a
            href="https://anunes9.github.io/me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/assets/an-logo-color.svg" alt="AN" width={64} height={64} className="h-16 w-auto" />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <LanguageSwitch />
          <div className="text-gray-500 text-xs text-center md:text-right uppercase tracking-wider">
            <p>
              &copy; {new Date().getFullYear()} Fran Padel Project. {t(locale, 'footer', 'all-rights-reserved')}
            </p>
            <div className="flex justify-center md:justify-end gap-4 mt-2">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                {t(locale, 'footer', 'privacy-policy')}
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                {t(locale, 'footer', 'terms-of-service')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
