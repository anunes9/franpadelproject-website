import { pt } from '@/locales/pt'
import { en } from '@/locales/en'

const LOCALES = ['pt', 'en']
const DEFAULT_LOCALE = 'pt'
const LOCALE_COOKIE = 'NEXT_LOCALE'

// Type-safe translation function
export const t = (locale: string, namespace: string, key: string): string => {
  const translations = locale === 'pt' ? pt : en

  // @ts-expect-error - Dynamic access to nested objects
  return translations[namespace]?.[key] || key
}

// Detect the preferred locale from an Accept-Language header value
const localeFromAcceptLanguage = (acceptLanguage: string | null | undefined): string | null => {
  if (!acceptLanguage) return null

  const preferredLocale = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim())
    .find((lang) => LOCALES.includes(lang.substring(0, 2)))

  return preferredLocale ? preferredLocale.substring(0, 2) : null
}

// Server-side locale detection: NEXT_LOCALE cookie, then Accept-Language header, then default
export const getServerLocale = async (): Promise<string> => {
  const { cookies, headers } = await import('next/headers')

  const cookieLocale = (await cookies()).get(LOCALE_COOKIE)?.value
  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    return cookieLocale
  }

  const acceptLanguage = (await headers()).get('accept-language')
  return localeFromAcceptLanguage(acceptLanguage) || DEFAULT_LOCALE
}

// Get available locales
export const getLocales = () => LOCALES

// Get locale display names
export const getLocaleDisplayName = (locale: string) => {
  const names = {
    pt: 'Português',
    en: 'English',
  }
  return names[locale as keyof typeof names] || locale
}
