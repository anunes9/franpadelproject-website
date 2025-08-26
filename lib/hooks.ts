import { useState, useEffect } from 'react'
import { useLocale } from './i18n'

// Re-export the useLocale hook from i18n
export { useLocale }

// Add any other custom hooks here if needed
export const useMounted = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
