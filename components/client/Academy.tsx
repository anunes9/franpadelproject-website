'use client'

import { t } from '@/locales'
import { useLocale } from '@/lib/hooks'

const AcademyComponent = () => {
  const locale = useLocale()

  return (
    <div className="bg-projectGreen py-12 w-3/4 lg:w-[787px] sm:h-[540px] lg:h-[940px] px-8 flex items-center mt-[-200px] sm:mt-0 pt-[240px] sm:pt-0">
      <p className="sm:ml-[100px] lg:ml-[230px] font-projectFontExtended text-base lg:text-lg leading-normal text-white">
        {t(locale, 'academy', 'line-1')}
        <br />
        {t(locale, 'academy', 'line-2.1')}
        <span className="font-projectFontMediumExtended">{t(locale, 'academy', 'line-2.2')}</span>
        {t(locale, 'academy', 'line-2.3')}
        <br />
        <br />
        {t(locale, 'academy', 'line-3.1')}
        <span className="font-projectFontMediumExtended">{t(locale, 'academy', 'line-3.2')}</span>
        {t(locale, 'academy', 'line-3.3')}
        {t(locale, 'academy', 'line-3.4')}
        {t(locale, 'academy', 'line-3.5')}
        <br />
        <br />
        {t(locale, 'academy', 'line-4.1')}
        {t(locale, 'academy', 'line-4.2')}
        {t(locale, 'academy', 'line-4.3')}
      </p>
    </div>
  )
}

export default AcademyComponent
