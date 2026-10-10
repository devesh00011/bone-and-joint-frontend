import InfoPage from '@/app/_seo/components/InfoPage'
import { Section, CheckList, CardGrid, LinkCards, InlineLink } from '@/app/_seo/components/Blocks'
import ContactDetails from '@/app/_seo/components/ContactDetails'
import { buildMetadata } from '@/app/_seo/site'

export const metadata = buildMetadata({
  title: 'Patient Visit Guide Jodhpur | Bone & Joint Hospital',
  description:
    'Prepare for an orthopaedic visit in Jodhpur: what to bring, medical reports, questions to ask your doctor, and guidance on appointments and hospital contact.',
  path: '/patient-information',
})

export default function Page() {
  return (
    <InfoPage
      title="Patient Information"
      path="/patient-information"
      intro="A little preparation helps you get the most from your orthopaedic consultation. Use this guide to plan your visit, gather your documents and note down your questions."
      ctaTitle="Ready to Book Your Visit?"
    >
      <Section id="preparing" title="Preparing for Your Appointment">
        <CardGrid cards={[
          { title: 'Book ahead', text: 'Contact the hospital to confirm an appointment and ask about the current process for visiting without a booking.' },
          { title: 'Note your symptoms', text: 'Write down when the pain started, what makes it better or worse, and any injuries.' },
          { title: 'Wear comfortable clothing', text: 'Loose clothing makes it easier for the doctor to examine the knee, hip, shoulder or back.' },
        ]} />
      </Section>

      <Section id="what-to-bring" title="What to Bring" tone="gray">
        <CheckList items={[
          'Photo ID',
          'Health insurance card and policy details, if applicable',
          'List of current medicines and doses',
          'List of allergies',
          'Previous prescriptions and discharge summaries',
          'A family member or friend, if you need support',
        ]} />
      </Section>

      <Section id="reports" title="Medical Reports and Documents">
        <CheckList items={[
          'X-ray films or digital images with reports',
          'MRI or CT scan CDs and reports',
          'Recent blood test reports',
          'Operation notes from any previous surgery',
          'Reports for diabetes, heart, kidney or other conditions',
          'Physiotherapy notes, if any',
        ]} />
      </Section>

      <Section id="questions" title="Questions You May Want to Ask Your Doctor" tone="blue">
        <CheckList columns={1} items={[
          'What is causing my symptoms?',
          'Which tests do I need, and why?',
          'What are my non-surgical and surgical options?',
          'What are the benefits and risks of each option?',
          'What will recovery involve, and how can I prepare?',
          'Which activities should I avoid for now?',
          'When should I come back for follow-up?',
        ]} />
      </Section>

      <Section id="visit" title="Hospital Visit Information">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>OPD consultations are available Monday to Saturday, 9:00 AM to 6:00 PM. Please arrive a little early to complete registration.</p>
            <p>
              You can <InlineLink href="/contact-us">contact us</InlineLink> with questions, meet <InlineLink href="/doctors">our doctors</InlineLink>, or read our <InlineLink href="/faq">frequently asked questions</InlineLink>.
            </p>
          </div>
          <ContactDetails />
        </div>
      </Section>

      <Section id="treatments" title="Learn About Treatments" tone="gray">
        <LinkCards links={[
          { href: '/treatments/knee-replacement', title: 'Knee Replacement', text: 'Understand knee arthritis and joint replacement.' },
          { href: '/treatments/hip-replacement', title: 'Hip Replacement', text: 'When hip replacement may be considered.' },
          { href: '/treatments/pediatric-orthopedics', title: 'Children’s Bone and Joint Concerns', text: 'General information to help parents prepare for an evaluation.' },
          { href: '/insurance-cashless', title: 'Insurance & Cashless', text: 'How to check your coverage before treatment.' },
        ]} />
      </Section>
    </InfoPage>
  )
}
