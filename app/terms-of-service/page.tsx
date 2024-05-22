import { Text, Title } from "@/components/generic/Typography"
import { Footer } from "@/components/layout/Footer"
import { NavbarHeader } from "@/components/layout/NavbarHeader"

export default function TermsOfService() {
  return (
    <div className="flex-1 w-full flex flex-col">
      <NavbarHeader />

      <div className="px-4 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto my-8">
        <Title>Terms of Service </Title>

        <Text className="mb-6">Last Updated: 21 Jan 2024</Text>

        <Text>
          Thank you for using Fran Padel Project - Methodology! These Terms of
          Service ("Terms") govern your use of our website. By accessing or
          using Fran Padel Project - Methodology, you agree to comply with and
          be bound by these Terms. If you do not agree with any part of these
          Terms, please do not use our website.
        </Text>

        <Text className="!font-bold mt-4">1. User Responsibilities</Text>
        <Text>
          1.1 Account Information: You are responsible for maintaining the
          confidentiality of your account information, including your password.
          You agree to notify us immediately of any unauthorized use of your
          account.
        </Text>

        <Text>
          1.2 Accuracy of Information: You agree to provide accurate and
          complete information when registering and to update your information
          to keep it current.
        </Text>

        <Text className="!font-bold mt-4">2. Acceptable Use</Text>
        <Text>
          2.1 Prohibited Activities: You agree not to engage in any unlawful,
          harmful, or disruptive activities on Fran Padel Project - Methodology.
          This includes but is not limited to unauthorized access, distribution
          of malware, and any form of harassment.
        </Text>

        <Text>
          2.2 Compliance: You agree to comply with all applicable laws and
          regulations when using our website.
        </Text>

        <Text className="!font-bold mt-4">3. Intellectual Property</Text>
        <Text>
          3.1 Ownership: Fran Padel Project - Methodology and its content,
          including but not limited to text, graphics, logos, and software, are
          the property of Fran Padel Project and are protected by copyright and
          other intellectual property laws.
        </Text>

        <Text>
          3.2 License: By using our website, you are granted a limited,
          non-exclusive, non-transferable license to access and use the content
          for personal and non-commercial purposes.
        </Text>

        <Text className="!font-bold mt-4">4. Disclaimer of Warranties</Text>
        <Text>
          4.1 As-Is Basis: Fran Padel Project provides Fran Padel Project -
          Methodology on an "as-is" and "as-available" basis. We make no
          representations or warranties of any kind, express or implied,
          regarding the availability, accuracy, or completeness of the content.
        </Text>

        <Text className="!font-bold mt-4">5. Limitation of Liability</Text>
        <Text>
          5.1 No Liability: Fran Padel Project shall not be liable for any
          direct, indirect, incidental, special, or consequential damages
          arising out of or in any way connected with the use of Fran Padel
          Project - Methodology.
        </Text>

        <Text className="!font-bold mt-4">6. Termination</Text>
        <Text>
          6.1 Termination: Fran Padel Project reserves the right to terminate or
          suspend your access to Fran Padel Project - Methodology at any time,
          without prior notice, for any reason.
        </Text>

        <Text className="!font-bold mt-4">7. Changes to Terms</Text>
        <Text>
          7.1 Updates: Fran Padel Project may update these Terms from time to
          time. Any changes will be posted on this page with an updated "Last
          Updated" date.
        </Text>

        <Text className="!font-bold mt-4">Contact Us</Text>
        <Text>
          If you have any questions about this Terms of Service, please contact
          us at fran@franpadelproject.com.
        </Text>

        <Text className="mt-4">
          By using Fran Padel Project - Methodology, you acknowledge that you
          have read and understood this Privacy Policy.
        </Text>
      </div>

      <Footer />
    </div>
  )
}
