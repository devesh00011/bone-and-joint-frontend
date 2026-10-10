import InfoPage, { LegalBody } from '@/app/_seo/components/InfoPage'
import ContactDetails from '@/app/_seo/components/ContactDetails'
import { InlineLink } from '@/app/_seo/components/Blocks'
import { buildMetadata } from '@/app/_seo/site'

export const metadata = buildMetadata({
  title: 'Terms and Conditions | Bone & Joint Hospital Jodhpur',
  description:
    'Terms governing the use of the Bone & Joint Hospital and Research Centre website, including appointment requests, content use and limitations.',
  path: '/terms-and-conditions',
})

export default function Page() {
  return (
    <InfoPage
      title="Terms and Conditions"
      path="/terms-and-conditions"
      intro="Please read these terms carefully before using this website. By accessing the website, you agree to these terms."
      showCtas={false}
      cta={false}
    >
      <LegalBody
        sections={[
          { title: 'Use of the Website', paras: ['This website is provided by Bone and Joint Hospital and Research Centre, Jodhpur, to share information about the hospital and its services and to help patients request appointments. You agree to use it only for lawful purposes.'] },
          { title: 'Medical Information', paras: ['Content on this website is for general information only and is not a substitute for professional medical advice, diagnosis or treatment.'], node: <p>Please read our <InlineLink href="/medical-disclaimer">medical disclaimer</InlineLink>.</p> },
          { title: 'Appointment Requests', paras: ['Submitting an appointment request through the website does not by itself guarantee a specific doctor, date or time. The hospital may contact you to confirm or reschedule. Do not use the website for medical emergencies.'] },
          { title: 'Accuracy of Information', paras: ['We try to keep website information accurate and up to date, but we do not warrant that all content is complete or current. Services, doctor availability and timings may change without notice.'] },
          { title: 'Intellectual Property', paras: ['Text, images, logos and design on this website belong to the hospital or its licensors and may not be copied or reused without permission, except for personal, non-commercial use.'] },
          { title: 'User Responsibilities', list: ['Provide accurate information in forms', 'Do not attempt to disrupt or gain unauthorised access to the website', 'Do not submit unlawful, harmful or misleading content'] },
          { title: 'Third-Party Links', paras: ['Links to external websites are provided for convenience. We are not responsible for their content or practices.'] },
          { title: 'Limitation of Liability', paras: ['To the extent permitted by law, the hospital is not liable for any loss arising from use of, or reliance on, information on this website.'] },
          { title: 'Privacy', paras: ['Use of personal information is described in our Privacy Policy.'], node: <p>Read our <InlineLink href="/privacy-policy">privacy policy</InlineLink>.</p> },
          { title: 'Changes to These Terms', paras: ['We may update these terms from time to time. Continued use of the website after changes means you accept the updated terms.'] },
          { title: 'Contact', node: <ContactDetails /> },
        ]}
      />
    </InfoPage>
  )
}
