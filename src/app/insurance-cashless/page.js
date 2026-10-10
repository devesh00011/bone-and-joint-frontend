import InfoPage from '@/app/_seo/components/InfoPage'
import { Section, Paragraphs, CheckList, CardGrid, FaqList, InlineLink } from '@/app/_seo/components/Blocks'
import ContactDetails from '@/app/_seo/components/ContactDetails'
import { buildMetadata, faqSchema } from '@/app/_seo/site'

export const metadata = buildMetadata({
  title: 'Insurance & Cashless Jodhpur | Bone & Joint Hospital',
  description:
    'Understand insurance and cashless claims for orthopaedic care in Jodhpur: eligibility, documents, approvals and how to confirm current hospital availability.',
  path: '/insurance-cashless',
})

const faqs = [
  { q: 'Which insurance companies and TPAs do you work with?', a: 'Tie-ups can change over time. Please contact the hospital team with your policy details to confirm current cashless availability for your insurer or TPA.' },
  { q: 'Is cashless treatment guaranteed if I have insurance?', a: 'No. Cashless approval depends on your insurer or TPA, your policy terms, waiting periods and the treatment planned. Final approval is decided by the insurer.' },
  { q: 'What if cashless is not available?', a: 'Many policies allow reimbursement, where you pay first and claim later. Keep all original bills, reports and discharge papers and check your insurer’s claim process.' },
  { q: 'Can I get help understanding my policy?', a: 'Our team can guide you on hospital-side paperwork. For policy coverage questions, your insurer or TPA is the final authority.' },
]

export default function Page() {
  return (
    <InfoPage
      title="Insurance and Cashless Treatment"
      crumbName="Insurance & Cashless"
      path="/insurance-cashless"
      intro="Planning orthopaedic treatment is easier when you understand your health insurance. This guide explains how cashless and reimbursement claims generally work and how to check your coverage with us."
      extraSchema={[faqSchema(faqs)]}
      ctaTitle="Check Your Coverage With Our Team"
    >
      <Section id="how-it-works" title="How Cashless Treatment Works">
        <Paragraphs items={[
          'With cashless treatment, the hospital coordinates with your insurance company or Third Party Administrator (TPA) so that approved expenses are settled directly, subject to your policy terms.',
          'For a planned procedure, a pre-authorisation request is usually sent before admission. For an emergency admission, the request is typically sent soon after admission. The insurer reviews the request and decides what is approved.',
          'Any amount not covered — such as non-payable items, co-payments, deductibles or charges above room-rent limits — is generally paid by the patient.',
        ]} />
      </Section>

      <Section id="check-eligibility" title="How to Check Your Eligibility" tone="gray">
        <CardGrid cards={[
          { title: 'Read your policy', text: 'Check the sum insured, waiting periods, room-rent limits, co-payment and exclusions, especially for joint replacement or spine procedures.' },
          { title: 'Call your insurer or TPA', text: 'Ask whether the planned treatment is covered and what documents they need for pre-authorisation.' },
          { title: 'Contact the hospital', text: 'Share your policy details with our team to confirm whether cashless facility is currently available for your insurer.' },
        ]} />
      </Section>

      <Section id="documents" title="Documents You May Need">
        <CheckList items={[
          'Health insurance card or e-card',
          'Policy number and policy document',
          'Government photo ID of the patient (e.g. Aadhaar)',
          'Doctor’s consultation notes and treatment advice',
          'Relevant investigation reports (X-ray, MRI, blood tests)',
          'Employer details for group or corporate policies',
          'Previous medical records related to the condition',
          'Any forms requested by your insurer or TPA',
        ]} />
      </Section>

      <Section id="tips" title="Helpful Tips" tone="blue">
        <CheckList columns={1} items={[
          'Start the pre-authorisation process early for planned surgery.',
          'Keep copies of every document you submit.',
          'Ask for an estimate and understand which costs may not be covered.',
          'Keep original bills and discharge summary if you plan a reimbursement claim.',
        ]} />
      </Section>

      <Section id="faqs" title="Insurance FAQs">
        <FaqList faqs={faqs} />
      </Section>

      <Section id="contact" title="Contact Us About Insurance" tone="gray">
        <p className="text-gray-600 mb-6 max-w-3xl">
          Our team can help you understand the hospital-side process. You can also <InlineLink href="/contact-us">send us a message</InlineLink> or read our <InlineLink href="/patient-information">patient information guide</InlineLink>.
        </p>
        <div className="max-w-xl"><ContactDetails /></div>
      </Section>
    </InfoPage>
  )
}
