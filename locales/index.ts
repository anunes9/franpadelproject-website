// Re-export from the new i18n system
export { t } from '@/lib/i18n'

// Keep the old exports for backward compatibility
import { pt } from './pt'
import { en } from './en'

// Legacy translation function (deprecated - use the one from lib/i18n)
export const legacyT = (locale: string, namespace: string, key: string) => {
  // @ts-expect-error
  if (locale === 'pt') return pt[namespace][key]
  // @ts-expect-error
  else if (locale === 'en') return en[namespace][key]
}
