import { NextRequest, NextResponse } from 'next/server'

const locales = ['pt', 'en']
const defaultLocale = 'pt'
const localeCookie = 'NEXT_LOCALE'

// Get the preferred locale from request headers
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim())
      .find((lang) => locales.includes(lang.substring(0, 2)))

    if (preferredLocale) {
      return preferredLocale.substring(0, 2)
    }
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  // Once a visitor has a saved preference, leave it alone
  if (request.cookies.has(localeCookie)) {
    return response
  }

  response.cookies.set(localeCookie, getLocale(request), {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  })

  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}
