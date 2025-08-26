import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { getLocales } from '@/lib/i18n'

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  return getLocales().map((locale) => ({
    locale,
  }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  // Validate locale
  if (!getLocales().includes(locale)) {
    notFound()
  }

  return <div data-locale={locale}>{children}</div>
}
