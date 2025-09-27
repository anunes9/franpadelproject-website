import { PageLayout } from '@/components/layout/Page'
import { t } from '@/lib/i18n'
import Image from 'next/image'
import Link from 'next/link'

interface SponsorsPageProps {
  params: Promise<{
    locale: string
  }>
}

const Page = async ({ params }: SponsorsPageProps) => {
  const { locale } = await params
  const partnerClubText = t(locale, 'sponsors', 'partner-club')

  return (
    <PageLayout headerTitle="sponsors" locale={locale}>
      <div className="w-2/3 md:w-1/2 mx-auto py-24 max-w-md">
        <div className="flex flex-col gap-20">
          <Link
            href="https://www.instagram.com/corkpadel/?hl=en"
            target="_blank"
            prefetch={false}
            className="hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white pb-4"
          >
            <Image alt="fran-logo" src="/assets/cork.png" fill className="!relative" />
          </Link>

          <Link
            href="https://www.instagram.com/dfl.selectedmeat/?hl=en"
            target="_blank"
            prefetch={false}
            className="hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Image alt="fran-logo" src="/assets/DFL.png" fill className="!relative" />
          </Link>

          <Link
            href="https://www.instagram.com/pro.frame_/?hl=en"
            target="_blank"
            prefetch={false}
            className="hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white "
          >
            <Image alt="fran-logo" src="/assets/proframe.png" fill className="!relative" />
          </Link>

          <Link
            href="https://www.instagram.com/anunes9/?hl=en"
            target="_blank"
            prefetch={false}
            className="hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white"
          >
            <Image
              alt="an-logo"
              src="/assets/an-logo-color.svg"
              fill
              className="!relative my-[-72px] !w-60 mx-auto py-8"
            />
          </Link>

          <h2 className="font-projectFontExtendedBlack text-lg sm:text-xl lg:text-[48px] underline underline-offset-8 decoration-4 text-center text-projectBlue mt-8">
            {partnerClubText}
          </h2>

          <Link
            href="https://www.instagram.com/azorespadelclub/?hl=en"
            target="_blank"
            prefetch={false}
            className="hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Image alt="fran-logo" src="/assets/azores-banner.png" fill className="!relative mt-8" />
          </Link>

          <Link
            href="https://www.instagram.com/mypadelcentermafra/?hl=en"
            target="_blank"
            prefetch={false}
            className="hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Image alt="fran-logo" src="/assets/mcp-banner.png" fill className="!relative mt-8" />
          </Link>

          <Link
            href="https://www.instagram.com/padelclub.premier/?hl=en"
            target="_blank"
            prefetch={false}
            className="hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Image alt="fran-logo" src="/assets/premier-padel-banner.png" fill className="!relative mt-8" />
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default Page
