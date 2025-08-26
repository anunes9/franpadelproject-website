import { MediaLink } from '@/components/generic/MediaLink'
import { Menu } from '@/components/home/Menu'
import { t } from '@/lib/i18n'
import { getLocalizedPath } from '@/lib/i18n'

export const Header = ({ title, noColor, locale }: { title: string; noColor?: boolean; locale: string }) => (
  <div className={`py-12 px-4 ${noColor ? '' : 'bg-projectBlue'}`}>
    <div className="flex justify-between items-center content">
      <MediaLink src="/assets/fr-logo.png" href={getLocalizedPath('/', locale)} alt="logo" width="!w-12 md:!w-24" />

      <h1 className="font-projectFontExtendedBlack underline underline-offset-8 decoration-4 text-center text-xl md:text-3xl lg:text-5xl text-projectGreen">
        {t(locale, 'pages', title)}
      </h1>

      <div className="pl-4 md:pl-8">
        <Menu locale={locale} />
      </div>
    </div>
  </div>
)
