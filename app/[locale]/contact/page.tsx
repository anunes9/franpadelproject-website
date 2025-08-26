import { PageLayout } from '@/components/layout/Page'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'

interface ContactPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generateSEOMetadata(locale, 'contact')
}

const Page = async ({ params }: ContactPageProps) => {
  const { locale } = await params

  return (
    <PageLayout headerTitle="get-in-touch">
      <div>
        <iframe
          allowTransparency={true}
          allowFullScreen={true}
          allow="geolocation; microphone; camera"
          src="https://my.forms.app/form/660010e244e8ee0a50190cc9"
          frameBorder="0"
          className="contactForm"
        ></iframe>
      </div>
    </PageLayout>
  )
}

export default Page
