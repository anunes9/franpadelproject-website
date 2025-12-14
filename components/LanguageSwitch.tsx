'use client'

import { t, changeLocale, getLocaleDisplayName, getLocales } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function LanguageSwitch() {
  const [locale, setLocale] = useState('pt')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get initial locale from pathname
    const pathname = window.location.pathname
    const segments = pathname.split('/')
    const pathLocale = segments[1]

    if (['pt', 'en'].includes(pathLocale)) {
      setLocale(pathLocale)
    } else {
      // Fallback to localStorage
      const savedLang = localStorage.getItem('lang') || 'pt'
      setLocale(savedLang)
    }

    setMounted(true)
  }, [])

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale)
    changeLocale(newLocale)
  }

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <p className="text-gray-400 text-xs uppercase tracking-wider">{t('pt', 'menu', 'language')}</p>
        <select className="bg-transparent text-white border border-gray-700 rounded px-2 py-1 text-xs hover:border-gray-600 transition-colors">
          <option value="pt" className="bg-black text-white">
            Português
          </option>
          <option value="en" className="bg-black text-white">
            English
          </option>
        </select>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <p className="text-gray-400 text-xs uppercase tracking-wider">{t(locale, 'menu', 'language')}</p>
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className="bg-transparent text-white border border-gray-700 rounded px-2 py-1 text-xs cursor-pointer hover:border-gray-600 transition-colors"
      >
        {getLocales().map((loc) => (
          <option key={loc} value={loc} className="bg-black text-white">
            {getLocaleDisplayName(loc)}
          </option>
        ))}
      </select>
    </div>
  )
}
