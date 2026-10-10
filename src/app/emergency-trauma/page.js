import InfoPage from '@/app/_seo/components/InfoPage'
import { Section, Paragraphs, CheckList, CardGrid, LinkCards, InlineLink } from '@/app/_seo/components/Blocks'
import ContactDetails from '@/app/_seo/components/ContactDetails'
import { buildMetadata } from '@/app/_seo/site'

export const metadata = buildMetadata({
  title: 'Emergency & Trauma Jodhpur | Bone & Joint Hospital',
  description:
    'Read general injury and trauma guidance, warning signs needing urgent care, and how to contact Bone & Joint Hospital in Jodhpur to confirm appropriate care.',
  path: '/emergency-trauma',
})

export default function Page() {
  return (
    <InfoPage
      title="Emergency and Trauma Care Information"
      crumbName="Emergency & Trauma"
      path="/emergency-trauma"
      intro="Injuries to bones, joints and the spine need prompt attention. Here is general guidance on what to do after an accident, the warning signs to watch for, and how to contact our hospital."
      ctaTitle="Contact the Hospital"
    >
      <section className="w-full bg-white px-4 pt-10">
        <div className="seo-container max-w-330 mx-auto">
          <div role="note" className="border-l-4 border-red-600 bg-red-50 rounded-lg p-5 text-gray-800">
            <p className="font-semibold">In a life-threatening emergency, call the national emergency number 112 or go to the nearest emergency department immediately.</p>
          </div>
        </div>
      </section>

      <Section id="contact" title="How to Reach Us">
        <p className="text-gray-600 mb-6 max-w-3xl">
          Please call the hospital before travelling, where possible, so the team can guide you on the next steps.
        </p>
        <div className="max-w-xl"><ContactDetails /></div>
      </Section>

      <Section id="warning-signs" title="Warning Signs That Need Urgent Care" tone="gray">
        <CheckList items={[
          'Bone visible through the skin or a deep wound near a fracture',
          'Obvious deformity of an arm or leg',
          'Inability to move or bear weight on a limb after injury',
          'Numbness, cold or pale fingers or toes below an injury',
          'Neck or back pain after a fall or road accident',
          'Weakness, loss of sensation, or loss of bladder or bowel control',
          'Severe pain and swelling that rapidly worsens',
          'A fall in an older adult who cannot get up or walk',
        ]} />
      </Section>

      <Section id="first-steps" title="What to Do After an Injury">
        <CardGrid cards={[
          { title: 'Keep it still', text: 'Avoid moving the injured limb. Support it with a pillow, folded cloth or improvised splint if trained to do so.' },
          { title: 'Protect the spine', text: 'If a neck or back injury is suspected, do not move the person unless they are in danger. Wait for trained help.' },
          { title: 'Control bleeding', text: 'Apply gentle pressure with a clean cloth. Do not push protruding bone back in.' },
          { title: 'Reduce swelling', text: 'A cold pack wrapped in cloth can help. Do not apply ice directly to skin.' },
          { title: 'Avoid food and drink', text: 'Surgery may be needed, so avoid eating or drinking until a doctor advises.' },
          { title: 'Bring information', text: 'Carry ID, any regular medicines and a list of allergies or health conditions.' },
        ]} />
      </Section>

      <Section id="trauma-care" title="Orthopaedic Trauma Care" tone="blue">
        <Paragraphs items={[
          'Orthopaedic trauma includes fractures, dislocations, ligament injuries and spine injuries caused by falls, road accidents, sport or work. Treatment is decided after examination and imaging and may include splinting, casting or surgical fixation.',
          'Learn more on our treatment pages below or meet our orthopaedic doctors.',
        ]} />
        <div className="mt-8">
          <LinkCards links={[
            { href: '/treatments/fracture-trauma-care', title: 'Fracture & Trauma Care', text: 'How broken bones and injuries are assessed and treated.' },
            { href: '/treatments/spine-surgery', title: 'Spine Surgery', text: 'Evaluation of back and neck injuries and conditions.' },
            { href: '/doctors', title: 'Our Doctors', text: 'Meet the orthopaedic team at the hospital.' },
          ]} />
        </div>
        <p className="mt-8 text-gray-600">For insurance during admission, see our <InlineLink href="/insurance-cashless">insurance and cashless guide</InlineLink>.</p>
      </Section>
    </InfoPage>
  )
}
