'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import Image from 'next/image'
import { t, getLocaleFromPathname } from '@/lib/i18n'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [locale, setLocale] = useState('pt')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Detect locale from pathname
    const pathLocale = getLocaleFromPathname(window.location.pathname)
    setLocale(pathLocale)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-4 py-6 transition-all duration-500`}>
        <div
          className={`mx-auto max-w-7xl transition-all duration-300 ${
            scrolled
              ? 'bg-fran-navy/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl'
              : 'bg-transparent py-2'
          }`}
        >
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center gap-3 group">
              <Image src="/assets/fran-logo.png" alt="Fran" width={120} height={36} className="h-9 w-auto" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {NAV_LINKS.map((link) => {
                // Map link names to translation keys
                const translationKeyMap: Record<string, string> = {
                  Academy: 'academy',
                  Founder: 'founder',
                  Clinics: 'clinics',
                  'World Wide': 'world-wide',
                  Sponsors: 'sponsors',
                }
                const translationKey = translationKeyMap[link.name] || link.name.toLowerCase().replace(/\s+/g, '-')
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link?.target ?? ''}
                    className="p-2 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all tracking-widest uppercase whitespace-nowrap"
                  >
                    {t(locale, 'menu', translationKey) || link.name}
                  </a>
                )
              })}
              <a
                href="#contact"
                className="ml-4 bg-fran-teal text-fran-navy font-black text-xs px-6 py-3 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(104,191,163,0.4)] transition-all uppercase tracking-wider"
              >
                {t(locale, 'menu', 'book-now')}
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white bg-white/10 p-2 rounded-full hover:bg-fran-teal hover:text-fran-navy transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-fran-navy/95 backdrop-blur-xl transition-transform duration-500 flex items-center justify-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          {NAV_LINKS.map((link) => {
            // Map link names to translation keys
            const translationKeyMap: Record<string, string> = {
              Academy: 'academy',
              Founder: 'founder',
              Clinics: 'clinics',
              'World Wide': 'world-wide',
              Sponsors: 'sponsors',
            }
            const translationKey = translationKeyMap[link.name] || link.name.toLowerCase().replace(/\s+/g, '-')
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-display font-black text-white hover:text-fran-teal uppercase tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                {t(locale, 'menu', translationKey) || link.name}
              </a>
            )
          })}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 text-fran-teal underline decoration-2 underline-offset-8 uppercase font-bold tracking-widest"
          >
            {t(locale, 'menu', 'get-in-touch')}
          </a>
        </div>
      </div>
    </>
  )
}
