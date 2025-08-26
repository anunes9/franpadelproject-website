import { PageLayout } from '@/components/layout/Page'
import Image from 'next/image'

interface SponsorsPageProps {
  params: Promise<{
    locale: string
  }>
}

const Page = async ({ params }: SponsorsPageProps) => {
  const { locale } = await params

  return (
    <PageLayout headerTitle="sponsors">
      <div className="w-2/3 md:w-1/2 mx-auto py-24 max-w-md">
        <div className="flex flex-col gap-20">
          <Image alt="fran-logo" src="/assets/cork.png" fill className="!relative" />

          <Image alt="fran-logo" src="/assets/DFL.png" fill className="!relative" />

          <Image alt="fran-logo" src="/assets/proframe.png" fill className="!relative" />

          <h1 className="font-projectFontExtendedBlack text-lg sm:text-xl lg:text-[48px] underline underline-offset-8 decoration-4 text-center text-projectBlue mt-8">
            Clube Parceiro
          </h1>

          <Image alt="fran-logo" src="/assets/azores-banner.png" fill className="!relative mt-8" />
        </div>
      </div>
    </PageLayout>
  )
}

export default Page
