import { Text, Title } from '@/components/generic/Typography'
import { PageLayout } from '@/components/layout/Page'

interface TermsOfServicePageProps {
  params: Promise<{
    locale: string
  }>
}

const Page = async ({ params }: TermsOfServicePageProps) => {
  const { locale } = await params

  return (
    <PageLayout headerTitle="terms-of-service">
      <div className="px-4 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto my-8">
        <Title>Terms of Service</Title>

        <Text className="mb-6">Last Updated: 21 Jan 2024</Text>

        <Text>
          Welcome to Fran Padel Project - Methodology! These Terms of Service govern your use of our website and
          services. By accessing or using our services, you agree to be bound by these terms.
        </Text>

        <Text className="!font-bold mt-4">1. Acceptance of Terms</Text>
        <Text>
          By accessing and using Fran Padel Project - Methodology, you accept and agree to be bound by the terms and
          provision of this agreement.
        </Text>

        <Text className="!font-bold mt-4">2. Use License</Text>
        <Text>
          Permission is granted to temporarily download one copy of the materials (information or software) on Fran
          Padel Project - Methodology's website for personal, non-commercial transitory viewing only.
        </Text>

        <Text className="!font-bold mt-4">3. Disclaimer</Text>
        <Text>
          The materials on Fran Padel Project - Methodology's website are provided on an 'as is' basis. Fran Padel
          Project - Methodology makes no warranties, expressed or implied, and hereby disclaims and negates all other
          warranties including without limitation, implied warranties or conditions of merchantability, fitness for a
          particular purpose, or non-infringement of intellectual property or other violation of rights.
        </Text>

        <Text className="!font-bold mt-4">4. Limitations</Text>
        <Text>
          In no event shall Fran Padel Project - Methodology or its suppliers be liable for any damages (including,
          without limitation, damages for loss of data or profit, or due to business interruption) arising out of the
          use or inability to use the materials on Fran Padel Project - Methodology's website.
        </Text>

        <Text className="!font-bold mt-4">5. Accuracy of Materials</Text>
        <Text>
          The materials appearing on Fran Padel Project - Methodology's website could include technical, typographical,
          or photographic errors. Fran Padel Project - Methodology does not warrant that any of the materials on its
          website are accurate, complete or current.
        </Text>

        <Text className="!font-bold mt-4">6. Links</Text>
        <Text>
          Fran Padel Project - Methodology has not reviewed all of the sites linked to its website and is not
          responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by
          Fran Padel Project - Methodology of the site.
        </Text>

        <Text className="!font-bold mt-4">7. Modifications</Text>
        <Text>
          Fran Padel Project - Methodology may revise these terms of service for its website at any time without notice.
          By using this website you are agreeing to be bound by the then current version of these Terms of Service.
        </Text>

        <Text className="!font-bold mt-4">Contact Us</Text>
        <Text>
          If you have any questions about these Terms of Service, please contact us at fran@franpadelproject.com.
        </Text>
      </div>
    </PageLayout>
  )
}

export default Page
