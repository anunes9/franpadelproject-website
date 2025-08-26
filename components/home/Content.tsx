'use client'

import { t } from '@/locales'
import Image from 'next/image'
import { useLocale } from '@/lib/hooks'

const Content = () => {
  const locale = useLocale()

  return (
    <>
      <div id="section-1" className="bg-projectBlue flex justify-center items-center py-16 lg:h-[400px]">
        <p className="text-projectGreen text-base md:text-lg lg:text-xl text-center font-projectFontMediumExtended z-[2]">
          {t(locale, 'home', 'intro-line-1')}
          <br /> {t(locale, 'home', 'intro-line-2')}
          <br /> {t(locale, 'home', 'intro-line-3')}
          <br /> {t(locale, 'home', 'intro-line-4')}
        </p>
      </div>

      <div className="relative bg-heroColor flex flex-col justify-center items-center">
        <div>
          <div className="bg-heroPattern bg-cover h-full w-full absolute left-0 z-[1]" />
        </div>

        <Image
          className="z-[2] mt-[-4rem] sm:mt-[-8rem] lg:mt-[-200px] !relative max-w-[1200px]"
          src="/assets/hero.png"
          alt="hero"
          fill
        />

        <div className="flex flex-col items-center mt-[-30px] sm:mt-[-42px] lg:mt-[-72px] mb-24 z-[2]">
          <div className="w-12 sm:w-16 lg:w-20">
            <Image className="!relative z-10" src="/assets/quotes.png" alt="quotes" fill />
          </div>

          <div className="bg-gray-100 shadow-green py-8 xl:py-20 px-4 md:px-16 lg:px-24 xl:px-32 mt-[-12px]">
            <p className="text-projectGreen text-base md:text-lg lg:text-xl text-center font-projectFontMediumExtended z-[2]">
              {t(locale, 'home', 'quote-line-1')}
              <br /> {t(locale, 'home', 'quote-line-2')}
              <br /> {t(locale, 'home', 'quote-line-3')}
              <br /> {t(locale, 'home', 'quote-line-4')}
              <br /> {t(locale, 'home', 'quote-line-5')}
              <br /> {t(locale, 'home', 'quote-line-6')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
