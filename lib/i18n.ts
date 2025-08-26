import { pt } from '@/locales/pt'
import { en } from '@/locales/en'

// Type-safe translation function
export const t = (locale: string, namespace: string, key: string): string => {
  const translations = locale === 'pt' ? pt : en

  // @ts-expect-error - Dynamic access to nested objects
  return translations[namespace]?.[key] || key
}

// Server-side locale detection from pathname
export const getLocaleFromPathname = (pathname: string): string => {
  const segments = pathname.split('/')
  const locale = segments[1]
  return ['pt', 'en'].includes(locale) ? locale : 'pt'
}

// Server-side locale detection from headers
export const getLocaleFromHeaders = async (): Promise<string> => {
  try {
    const { headers } = await import('next/headers')
    const headersList = await headers()
    const acceptLanguage = headersList.get('accept-language')

    if (acceptLanguage) {
      const preferredLocale = acceptLanguage
        .split(',')
        .map((lang) => lang.split(';')[0].trim())
        .find((lang) => ['pt', 'en'].includes(lang.substring(0, 2)))

      if (preferredLocale) {
        return preferredLocale.substring(0, 2)
      }
    }
  } catch (error) {
    // Fallback if headers are not available
    console.warn('Headers not available, using default locale')
  }
  return 'pt'
}

// Client-side locale hook with pathname detection
export const useLocale = () => {
  if (typeof window !== 'undefined') {
    // Check pathname first for locale
    const pathname = window.location.pathname
    const pathLocale = getLocaleFromPathname(pathname)
    if (pathLocale !== 'pt') {
      return pathLocale
    }

    // Then check localStorage as fallback
    const savedLang = localStorage.getItem('lang')
    if (savedLang && ['pt', 'en'].includes(savedLang)) {
      return savedLang
    }

    // Finally check browser language
    const browserLang = navigator.language.substring(0, 2)
    if (['pt', 'en'].includes(browserLang)) {
      return browserLang
    }
  }
  return 'pt'
}

// Utility to change locale with path update
export const changeLocale = (newLocale: string) => {
  if (typeof window !== 'undefined') {
    // Update localStorage
    localStorage.setItem('lang', newLocale)

    // Update pathname to include locale
    const currentPath = window.location.pathname
    const segments = currentPath.split('/')

    // Remove existing locale if present
    if (['pt', 'en'].includes(segments[1])) {
      segments.splice(1, 1)
    }

    // Add new locale
    if (newLocale !== 'pt') {
      segments.splice(1, 0, newLocale)
    }

    const newPath = segments.join('/')
    const newUrl = `${window.location.origin}${newPath}${window.location.search}${window.location.hash}`

    // Navigate to new URL
    window.location.href = newUrl
  }
}

// Get available locales
export const getLocales = () => ['pt', 'en']

// Get locale display names
export const getLocaleDisplayName = (locale: string) => {
  const names = {
    pt: 'Português',
    en: 'English',
  }
  return names[locale as keyof typeof names] || locale
}

// Generate localized path
export const getLocalizedPath = (path: string, locale: string): string => {
  if (locale === 'pt') {
    return path
  }
  return `/${locale}${path}`
}

// Remove locale from pathname
export const removeLocaleFromPath = (pathname: string): string => {
  const segments = pathname.split('/')
  if (['pt', 'en'].includes(segments[1])) {
    segments.splice(1, 1)
  }
  return segments.join('/') || '/'
}
