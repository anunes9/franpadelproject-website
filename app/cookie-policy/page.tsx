import { Text, Title } from "@/components/generic/Typography"
import { Footer } from "@/components/layout/Footer"
import { NavbarHeader } from "@/components/layout/NavbarHeader"

export default function PrivacyPolicy() {
  return (
    <div className="flex-1 w-full flex flex-col">
      <NavbarHeader />

      <div className="px-4 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto my-8">
        <Title>Cookie Policy for Fran Padel Project - Methodology</Title>

        <Text className="mb-6">Last Updated: 21 Jan 2024</Text>

        <Text>
          Thank you for using Fran Padel Project - Methodology! This Cookie
          Policy explains how we use cookies on our website. By using our
          website, you consent to the use of cookies as described in this
          policy.
        </Text>

        <Text className="!font-bold mt-4">1. What Are Cookies?</Text>
        <Text>
          1.1 Cookies: Cookies are small text files stored on your device when
          you visit a website. They are widely used to make websites work more
          efficiently and provide a better user experience.
        </Text>

        <Text className="!font-bold mt-4">2. How We Use Cookies</Text>
        <Text>
          2.1 Authentication: We use cookies to store your session information
          when you log in, allowing you to access and use our website securely.
        </Text>

        <Text>
          2.2 Preferences: Cookies may be used to remember your preferences,
          such as language settings and display preferences, to enhance your
          user experience.
        </Text>

        <Text className="!font-bold mt-4">3. Types of Cookies We Use</Text>
        <Text>
          3.1 Session Cookies: These cookies are temporary and are deleted when
          you close your browser. They are essential for the proper functioning
          of our website, especially for user authentication.
        </Text>

        <Text>
          3.2 Persistent Cookies: These cookies remain on your device after you
          close your browser and are used for purposes such as recognizing you
          on your next visit and remembering your preferences.
        </Text>

        <Text className="!font-bold mt-4">4. Managing Cookies</Text>
        <Text>
          4.1 Cookie Settings: You can manage your cookie preferences through
          your browser settings. Most browsers allow you to refuse or accept
          cookies, delete cookies, or be notified when a cookie is set.
        </Text>

        <Text>
          4.2 Disabling Cookies: Please note that if you disable cookies, some
          features of our website may not function properly, and you may not be
          able to access certain parts of the site.
        </Text>

        <Text className="!font-bold mt-4">5. Third-Party Cookies</Text>
        <Text>
          5.1 Third-Party Services: We may use third-party services that may
          place cookies on your device. These cookies are controlled by the
          respective third parties and are subject to their privacy policies.
        </Text>

        <Text className="!font-bold mt-4">
          6. Changes to this Cookie Policy
        </Text>
        <Text>
          6.1 Updates: We may update this Cookie Policy from time to time. Any
          changes will be posted on this page with an updated "Last Updated"
          date.
        </Text>

        <Text className="!font-bold mt-4">Contact Us</Text>
        <Text>
          If you have any questions about this Privacy Policy, please contact us
          at [your contact email].
        </Text>

        <Text className="mt-4">
          By using Fran Padel Project - Methodology, you acknowledge that you
          have read and understood this Cookie Policy.
        </Text>
      </div>

      <Footer />
    </div>
  )
}
