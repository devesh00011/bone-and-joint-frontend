import InfoPage, { LegalBody } from '@/app/_seo/components/InfoPage'
import { InlineLink } from '@/app/_seo/components/Blocks'
import { buildMetadata } from '@/app/_seo/site'

export const metadata = buildMetadata({
  title: 'Medical Disclaimer | Bone & Joint Hospital Jodhpur',
  description:
    'Health information on the Bone & Joint Hospital website is for general education only and does not replace consultation with a qualified doctor.',
  path: '/medical-disclaimer',
})

export default function Page() {
  return (
    <InfoPage
      title="Medical Disclaimer"
      path="/medical-disclaimer"
      intro="The health information on this website is meant to help you understand orthopaedic conditions and treatments. It does not replace advice from a qualified doctor."
      showCtas={false}
      ctaTitle="Speak With an Orthopaedic Doctor"
    >
      <LegalBody
        sections={[
          { title: 'General Information Only', paras: ['All content on this website, including text, images and treatment descriptions, is provided for general educational purposes. It is not medical advice and should not be used to diagnose or treat any health condition.'] },
          { title: 'Consult a Qualified Doctor', paras: ['Always seek the advice of a qualified doctor about any medical condition or treatment. Do not ignore professional medical advice or delay seeking it because of something you read on this website.'] },
          { title: 'Individual Results Vary', paras: ['Every patient is different. Treatment options, risks, recovery and outcomes depend on individual factors and can only be discussed after a proper clinical assessment. No information on this website should be read as a guarantee of any result.'] },
          { title: 'Medical Emergencies', paras: ['This website is not intended for emergencies. In a medical emergency, call 112 or go to the nearest emergency department immediately.'], node: <p>See our <InlineLink href="/emergency-trauma">emergency and trauma information</InlineLink>.</p> },
          { title: 'No Doctor–Patient Relationship', paras: ['Reading this website, submitting a form or sending a message does not create a doctor–patient relationship. That relationship begins only after a consultation.'] },
          { title: 'External Links', paras: ['Links to other websites are provided for convenience. We do not endorse and are not responsible for their content.'] },
          { title: 'Questions', paras: ['If you have questions about your health, please book a consultation with our team.'], node: <p>Visit <InlineLink href="/contact-us">contact us</InlineLink> or meet <InlineLink href="/doctors">our doctors</InlineLink>.</p> },
        ]}
      />
    </InfoPage>
  )
}
