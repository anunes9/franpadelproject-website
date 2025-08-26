'use client'

import { t, changeLocale, getLocaleDisplayName, getLocales } from '@/lib/i18n'
import { useLocale } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export const LanguageSwitch = () => {
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
        <p className="text-white text-sm">{t('pt', 'menu', 'language')}</p>
        <select className="bg-transparent text-white border border-white rounded px-2 py-1 text-sm">
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <p className="text-white text-sm">{t(locale, 'menu', 'language')}</p>
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className="bg-transparent text-white border border-white rounded px-2 py-1 text-sm cursor-pointer hover:bg-white/10 transition-colors"
      >
        {getLocales().map((loc) => (
          <option key={loc} value={loc} className="bg-projectBlue text-white">
            {getLocaleDisplayName(loc)}
          </option>
        ))}
      </select>
    </div>
  )
}
