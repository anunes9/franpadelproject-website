import AcademyComponent from '@/components/client/Academy'
import { PageLayout } from '@/components/layout/Page'
import Image from 'next/image'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'

interface AcademyPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata(locale, 'academy')
}

const AcademyPage = async ({ params }: AcademyPageProps) => {
  const { locale } = await params

  return (
    <PageLayout headerTitle={'academy'} bgColor>
      <div className="flex flex-col md:flex-row md:mt-12 items-center">
        <div className="w-3/4 md:w-1/3 lg:w-[418px] h-full z-10 sm:mr-[-80px] lg:mr-[-180px] shadow-out">
          <Image alt="fran-logo" src="/assets/fran-academia.png" fill className="!relative" />
        </div>

        <AcademyComponent />
      </div>

      <div className="bg-projectGray mt-24 p-4 lg:p-12 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="w-3/4 md:w-1/3  m-auto sm:w-96">
            <Image alt="fran-logo" src="/assets/fran-face.png" fill className="!relative" />
          </div>

          <div className="hidden sm:block font-projectFontMedium text-sm sm:text-base lg:text-lg text-projectBlue sm:mr-20">
            <ul className="list-disc">
              <li className="sm:mb-8">
                Founder <span className="font-projectFontMediumExtended font-bold">FRAN Padel Project</span>
              </li>
              <li className="sm:mb-8">
                Founder <span className="font-projectFontMediumExtended font-bold">FRAN Methodology</span>
              </li>
              <li>Head Coach</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center w-fit m-auto font-projectFontMedium text-sm sm:text-base lg:text-lg leading-relaxed text-projectBlue sm:mt-14 pb-8 px-14 sm:px-0">
          <ul className="list-disc">
            <li className="sm:hidden mt-12">Founder FRAN Padel Project </li>
            <li className="sm:hidden">Founder FRAN Methodology</li>
            <li className="sm:hidden">Head Coach</li>
            <li>Horácio Alvarez Clementi ("HAC") Ambassador (2019 - 2022)</li>
            <li>
              Technical Coach & Sparring in Horácio Alvarez Clementi
              <br /> "WPT" Team 2015-2021:
            </li>
            <li className="text-projectGreen ml-6">Augustin Tapia</li>
            <li className="text-projectGreen ml-6">Lucas Bergamini </li>
            <li className="text-projectGreen ml-6">Lucas Campagnolo </li>
            <li className="text-projectGreen ml-6">Matiaz Diaz</li>
            <li className="text-projectGreen ml-6">Carolina Navarro </li>
            <li>+ 50 Clinics and Courses: </li>
            <li className="text-projectGreen ml-6">Angola </li>
            <li className="text-projectGreen ml-6">Sweden </li>
            <li className="text-projectGreen ml-6">Spain</li>
            <li className="text-projectGreen ml-6">Portugal </li>
            <li>Psychology Degree in ISPA University; </li>
            <li>Grade I & II from IPDJ </li>
            <li>Main Coach: </li>
            <li className="text-projectGreen ml-6">Afonso Fazendeiro (2022-2023)</li>
            <li className="text-projectGreen ml-6">Constança Gorito (2022-2024)</li>
            <li className="text-projectGreen ml-6">Bernardo Monteiro (2021-2023)</li>
            <li className="text-projectGreen ml-6">Martim Silva (2022-2023)</li>
            <li className="text-projectGreen ml-6">Plínio Ferrão (2021-2023)</li>
            <li className="text-projectGreen ml-6">Sofia Formigal (2023-2024)</li>
          </ul>
        </div>
      </div>

      <div className="h-28" />
    </PageLayout>
  )
}

export default AcademyPage
