import { useState, useEffect } from 'react'

export const useLocale = () => {
  const [locale, setLocale] = useState('pt')

  useEffect(() => {
    // Only access localStorage on the client side
    const savedLang = window.localStorage.getItem('lang') || 'pt'
    setLocale(savedLang)
  }, [])

  return locale
}
