'use client'

import { t } from '@/locales'
import { useLocale } from '@/lib/hooks'

const ProPlayers = () => {
  const locale = useLocale()

  return (
    <div className="bg-projectGreen py-12 sm:w-[200px] lg:w-[787px] px-8 sm:pr-8 flex flex-1 mt-[-220px] sm:mt-0 pt-[240px] sm:pt-20">
      <p className="mx-auto sm:mr-0 sm:ml-[250px] font-projectFontExtended text-base sm:text-lg leading-normal text-white">
        {t(locale, 'pro-players', 'hero-line-1')}
        <br />
        {t(locale, 'pro-players', 'hero-line-2')}
        <br />
        {t(locale, 'pro-players', 'hero-line-3')}
        <br />
        {t(locale, 'pro-players', 'hero-line-4')}
        <br />
        {t(locale, 'pro-players', 'hero-line-5')}
        <br />
        {t(locale, 'pro-players', 'hero-line-6')}
        <br />
        {t(locale, 'pro-players', 'hero-line-7')}
      </p>
    </div>
  )
}

export default ProPlayers
