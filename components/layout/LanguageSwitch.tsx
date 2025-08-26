'use client'

import { t } from '@/locales'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export const LanguageSwitch = () => {
  const router = useRouter()
  const [locale, setLocale] = useState('pt')

  useEffect(() => {
    // Only access localStorage on the client side
    const savedLang = window.localStorage.getItem('lang') || 'pt'
    setLocale(savedLang)
  }, [])

  return (
    <div>
      <p className="text-white">{t(locale, 'menu', 'language')}</p>

      <select
        value={locale}
        onChange={(e) => {
          const newLocale = e.target.value
          window.localStorage.setItem('lang', newLocale)
          setLocale(newLocale)
          router.refresh()
        }}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  )
}
