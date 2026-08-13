'use client'

import { t, getLocaleDisplayName, getLocales } from '@/lib/i18n'
import { useRouter } from 'next/navigation'

interface LanguageSwitchProps {
  locale: string
  variant?: 'dropdown' | 'toggle'
}

const LOCALE_COOKIE = 'NEXT_LOCALE'

export default function LanguageSwitch({ locale, variant = 'dropdown' }: LanguageSwitchProps) {
  const router = useRouter()

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return
    document.cookie = `${LOCALE_COOKIE}=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`
    router.refresh()
  }

  if (variant === 'toggle') {
    return (
      <div className='flex items-center rounded-full border border-white/15 bg-white/5 p-0.5 text-xs font-bold uppercase tracking-wider'>
        {getLocales().map((loc) => (
          <button
            key={loc}
            type='button'
            onClick={() => handleLocaleChange(loc)}
            aria-pressed={loc === locale}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              loc === locale ? 'bg-fran-teal text-fran-navy' : 'text-gray-300 hover:text-white'
            }`}
          >
            {loc}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className='flex items-center gap-2'>
      <p className='text-gray-400 text-xs uppercase tracking-wider'>
        {t(locale, 'menu', 'language')}
      </p>
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className='bg-transparent text-white border border-gray-700 rounded px-2 py-1 text-xs cursor-pointer hover:border-gray-600 transition-colors'
      >
        {getLocales().map((loc) => (
          <option key={loc} value={loc} className='bg-black text-white'>
            {getLocaleDisplayName(loc)}
          </option>
        ))}
      </select>
    </div>
  )
}
