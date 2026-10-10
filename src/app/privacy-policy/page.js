import InfoPage, { LegalBody } from '@/app/_seo/components/InfoPage'
import ContactDetails from '@/app/_seo/components/ContactDetails'
import { buildMetadata } from '@/app/_seo/site'

export const metadata = buildMetadata({
  title: 'Privacy Policy | Bone & Joint Hospital Jodhpur',
  description:
    'How Bone & Joint Hospital and Research Centre collects, uses and protects personal information shared through its website, appointment and contact forms.',
  path: '/privacy-policy',
})

export default function Page() {
  return (
    <InfoPage
      title="Privacy Policy"
      path="/privacy-policy"
      intro="Your privacy matters to us. This policy explains what information we collect through this website and how we use and protect it."
      showCtas={false}
      cta={false}
    >
      <LegalBody
        sections={[
          { title: 'Introduction', paras: ['This Privacy Policy applies to the website of Bone and Joint Hospital and Research Centre, Jodhpur ("we", "us", "our"). By using this website you agree to the practices described here.'] },
          { title: 'Information We Collect', paras: ['We collect information you choose to provide, for example when you book an appointment or send a message. This may include:'], list: ['Name, phone number and email address', 'Preferred doctor, date and time for an appointment', 'Details you include in a message or enquiry', 'Payment-related details you submit while booking, where applicable'] },
          { title: 'Information Collected Automatically', paras: ['Like most websites, our servers and service providers may automatically record technical information such as browser type, device, pages visited and approximate location, to keep the website secure and working properly.'] },
          { title: 'How We Use Your Information', list: ['To schedule and manage appointments', 'To respond to your enquiries', 'To contact you about your visit or care', 'To maintain and improve our website and services', 'To meet legal and regulatory obligations'] },
          { title: 'Sharing of Information', paras: ['We do not sell your personal information. We may share it only with service providers who help us operate the website and services, with insurers or TPAs when you request insurance processing, or where required by law.'] },
          { title: 'Data Security', paras: ['We take reasonable measures to protect personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.'] },
          { title: 'Data Retention', paras: ['We retain personal information only for as long as needed for the purposes described in this policy or as required by applicable law.'] },
          { title: 'Your Choices', paras: ['You may ask us to access, correct or delete personal information you have shared through this website, subject to legal and medical record-keeping requirements.'] },
          { title: 'Third-Party Links', paras: ['Our website may link to external sites such as maps or video platforms. Their privacy practices are governed by their own policies.'] },
          { title: 'Changes to This Policy', paras: ['We may update this policy from time to time. Changes take effect when posted on this page.'] },
          { title: 'Contact Us', paras: ['For questions about this policy or your information, please contact:'], node: <ContactDetails /> },
        ]}
      />
    </InfoPage>
  )
}
