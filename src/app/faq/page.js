import InfoPage from '@/app/_seo/components/InfoPage'
import { SectionHeading, FaqList, InlineLink } from '@/app/_seo/components/Blocks'
import { buildMetadata, faqSchema } from '@/app/_seo/site'

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions | Bone & Joint Hospital Jodhpur',
  description:
    'Answers to common questions about appointments, orthopaedic treatments, doctors, hospital timings, insurance and emergency care at Bone & Joint Hospital, Jodhpur.',
  path: '/faq',
})

const categories = [
  {
    id: 'appointments', title: 'Appointments',
    faqs: [
      { q: 'How can I book an appointment?', a: 'You can book through the Book Appointment button on our website, call the hospital, or visit the reception desk during OPD hours.' },
      { q: 'Do I need an appointment before visiting?', a: 'Please contact the hospital to confirm appointment requirements and the current process for visiting without a booking.' },
      { q: 'What are the OPD timings?', a: 'OPD consultations are available Monday to Saturday, 9:00 AM to 6:00 PM.' },
      { q: 'What should I bring to my first appointment?', a: 'Bring ID, a list of medicines, previous prescriptions and any X-ray, MRI or blood test reports. See our patient information page for a full checklist.' },
    ],
  },
  {
    id: 'treatments', title: 'Treatments',
    faqs: [
      { q: 'What conditions are treated at the hospital?', a: 'The hospital focuses on orthopaedic care, including joint replacement, knee and hip problems, spine conditions, fractures, trauma, sports injuries and arthritis.' },
      { q: 'Do you offer non-surgical treatment?', a: 'Many orthopaedic conditions can be managed with medicines, physiotherapy or lifestyle changes. A doctor can explain suitable options; contact the hospital to confirm current availability.' },
      { q: 'How do I know if I need joint replacement?', a: 'Joint replacement is usually considered when arthritis causes ongoing pain and stiffness that other treatments no longer control. A consultation is needed to decide.' },
    ],
  },
  {
    id: 'doctors', title: 'Doctors',
    faqs: [
      { q: 'How can I find the right doctor for my condition?', a: 'Visit our doctors page to view the team and their areas of focus, or call the hospital and the team will guide you.' },
      { q: 'Can I get a second opinion?', a: 'Contact the hospital to arrange an appropriate consultation. Bring your previous reports and imaging for the doctor to review.' },
    ],
  },
  {
    id: 'hospital', title: 'Hospital Information',
    faqs: [
      { q: 'Where is the hospital located?', a: 'Bone and Joint Hospital and Research Centre is at 15 Keshav Nagar, Opposite Samrat Ashok Udhyan, Jodhpur, Rajasthan.' },
      { q: 'How can I contact the hospital?', a: 'You can call the numbers shown on our contact page, email Bonenjoint@gmail.com, or use the contact form.' },
    ],
  },
  {
    id: 'insurance', title: 'Insurance and Cashless',
    faqs: [
      { q: 'Is cashless treatment available?', a: 'Cashless availability depends on your insurer or TPA and policy terms. Please contact the hospital with your policy details to confirm current availability.' },
      { q: 'What documents do I need for an insurance claim?', a: 'Usually your insurance card, policy details, photo ID, doctor’s advice and investigation reports. Your insurer may ask for more.' },
    ],
  },
  {
    id: 'emergency', title: 'Emergency Care',
    faqs: [
      { q: 'What should I do in an orthopaedic emergency?', a: 'For life-threatening situations call 112 or go to the nearest emergency department. For injuries such as suspected fractures, keep the limb still and seek medical care promptly.' },
      { q: 'When is a back injury an emergency?', a: 'Seek urgent care for back or neck pain after an accident, or any weakness, numbness, or loss of bladder or bowel control.' },
    ],
  },
]

const allFaqs = categories.flatMap((c) => c.faqs)

export default function Page() {
  return (
    <InfoPage
      title="Frequently Asked Questions"
      crumbName="FAQ"
      path="/faq"
      intro="Find answers to common questions about appointments, treatments, our doctors, insurance and emergency care. If you cannot find what you need, please contact us."
      extraSchema={[faqSchema(allFaqs)]}
      ctaTitle="Still Have Questions?"
    >
      <section className="w-full bg-white px-4 pt-10">
        <nav aria-label="FAQ categories" className="seo-container max-w-330 mx-auto">
          <ul className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="inline-block px-4 py-2 rounded-full border border-[#00B4D8] text-[#0B1C2D] font-medium hover:bg-[#00B4D8] hover:text-white transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00B4D8]/40">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {categories.map((c, i) => (
        <section key={c.id} aria-labelledby={c.id} className={`w-full ${i % 2 ? 'bg-gray-50' : 'bg-white'} lg:py-14 py-10 px-4 scroll-mt-24`}>
          <div className="seo-container max-w-330 mx-auto">
            <SectionHeading id={c.id} title={c.title} />
            <FaqList faqs={c.faqs} />
          </div>
        </section>
      ))}

      <section className="w-full bg-white px-4 pb-12">
        <p className="seo-container max-w-330 mx-auto text-gray-600">
          More help: <InlineLink href="/patient-information">patient information</InlineLink>,{' '}
          <InlineLink href="/insurance-cashless">insurance and cashless</InlineLink>,{' '}
          <InlineLink href="/emergency-trauma">emergency and trauma</InlineLink>, and our{' '}
          <InlineLink href="/treatments">treatments</InlineLink>.
        </p>
      </section>
    </InfoPage>
  )
}
