import { Text, Title } from '@/components/Typography'

interface PrivacyPolicyPageProps {
  params: Promise<{
    locale: string
  }>
}

const Page = async ({ params }: PrivacyPolicyPageProps) => {
  const { locale } = await params
  return (
    <>
      <div className="px-4 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto my-8">
        <Title>Privacy Policy </Title>

        <Text className="mb-6">Last Updated: 21 Jan 2024</Text>

        <Text>
          Thank you for using Fran Padel Project - Methodology! This Privacy Policy outlines how we collect, use,
          disclose, and protect your information when you use our website. By registering and using our services, you
          agree to the terms outlined in this Privacy Policy.
        </Text>

        <Text className="!font-bold mt-4">1. Information We Collect</Text>
        <Text>
          1.1 Purpose: We collect and process personal data for the purpose of providing and improving our services,
          including user authentication and communication.
        </Text>

        <Text>
          1.2Consent: By using our website, you consent to the collection and processing of your personal data in
          accordance with this GDPR Compliance Statement.
        </Text>

        <Text>
          1.3 Usage Information: We may collect information about how you interact with our website, including the pages
          you visit and the actions you take.
        </Text>

        <Text className="!font-bold mt-4">2. How We Use Your Information</Text>
        <Text>
          2.1 User Account: We use your personal information to create and manage your user account, allowing you to
          access and use our website.
        </Text>

        <Text>
          2.2 Communication: We may use your email address to send you important updates, newsletters, or information
          related to our services.
        </Text>

        <Text>
          2.3 Improvements: We may collect information about your interactions with our website, such as pages visited
          and actions taken, to improve user experience.
        </Text>

        <Text className="!font-bold mt-4">3. Information Sharing</Text>
        <Text>
          3.1 Third-Party Service Providers: We may share your information with third-party service providers who assist
          us in operating our website, conducting our business, or servicing you.
        </Text>

        <Text>
          3.2 Legal Compliance: We may disclose your information to comply with legal obligations, respond to
          governmental requests, or protect our rights.
        </Text>

        <Text className="!font-bold mt-4">4. Security</Text>
        <Text>
          4.1 Data Security: We implement reasonable security measures to protect your personal information from
          unauthorized access, disclosure, alteration, and destruction.
        </Text>

        <Text className="!font-bold mt-4">5. Your Choices</Text>
        <Text>
          5.1 Account Information: You can review and update your account information by logging into your account
          settings.
        </Text>

        <Text>
          5.2 Communication Preferences: You can opt-out of receiving certain communications from us by following the
          unsubscribe instructions provided in the email.
        </Text>

        <Text className="!font-bold mt-4">6. Data Retention</Text>
        <Text>
          6.1 Retention Period: We retain personal data for the duration necessary to fulfill the purposes outlined in
          this GDPR Compliance Statement, unless a longer retention period is required or permitted by law.
        </Text>

        <Text className="!font-bold mt-4">7. Data Subject Rights</Text>
        <Text>
          7.1 Access and Correction: You have the right to access and correct your personal data stored on Fran Padel
          Project - Methodology.
        </Text>

        <Text>
          7.2 Deletion: You can request the deletion of your personal data in accordance with applicable laws.
        </Text>

        <Text className="!font-bold mt-4">8. Data Transfers</Text>
        <Text>
          8.1 International Transfers: Your personal data may be stored and processed in countries outside the European
          Economic Area (EEA). We ensure that adequate safeguards are in place for such transfers.
        </Text>

        <Text className="!font-bold mt-4">9. Changes to this Privacy Policy and GDPR Compliance Statement</Text>
        <Text>
          9.1 Updates: We may update this Privacy Policy and GDPR Compliance Statement periodically. Any changes will be
          posted on this page with an updated "Last Updated" date.
        </Text>

        <Text className="!font-bold mt-4">Contact Us</Text>
        <Text>
          If you have any questions about this Privacy Policy, please contact us at fran@franpadelproject.com.
        </Text>

        <Text className="mt-4">
          By using Fran Padel Project - Methodology, you acknowledge that you have read and understood this Privacy
          Policy.
        </Text>
      </div>
    </>
  )
}

export default Page
