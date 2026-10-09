// Server-rendered template for the static treatment pages.
import Image from 'next/image'
import PageHero from './PageHero'
import JsonLd from './JsonLd'
import { Section, Paragraphs, CheckList, CardGrid, FaqList, LinkCards, CtaBand, InlineLink } from './Blocks'
import { breadcrumbSchema, faqSchema, SITE_URL } from '../site'
import { TREATMENTS } from '../content/treatments'

export default function TreatmentPage({ slug }) {
  const t = TREATMENTS[slug]
  const carePathway = ['arthroscopy-sports-injury', 'spine-surgery', 'fracture-trauma-care', 'pediatric-orthopedics'].includes(slug)
  const path = `/treatments/${slug}`
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/treatments' },
    { name: t.name, href: path },
  ]
  const related = t.related.map((s) => ({
    href: `/treatments/${s}`,
    title: TREATMENTS[s].name,
    text: TREATMENTS[s].cardText,
  }))

  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: t.name,
    description: t.intro,
    url: `${SITE_URL}${path}`,
    ...(t.bodyLocation ? { bodyLocation: t.bodyLocation } : {}),
  }

  return (
    <main>
      <JsonLd data={[breadcrumbSchema(crumbs), procedureSchema, faqSchema(t.faqs)]} />
      <PageHero title={t.h1} intro={t.intro} breadcrumbs={crumbs} highlights={t.procedure.slice(0, 3).map((step) => step.title)} />

      <Section id="overview" title={slug === 'spine-surgery' ? 'Understanding Spine Conditions and Care' : slug === 'pediatric-orthopedics' ? 'Understanding Children’s Bone and Joint Care' : `What Is ${t.name}?`}>
        <div className={t.image ? 'grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-start' : 'grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-start'}>
          <div>
            <Paragraphs items={t.overview} />

          </div>
          <div className="border-l-2 border-[#00B4D8] pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Who may benefit from evaluation</h3>
            <CheckList items={t.whoBenefits} columns={1} />
            {t.image && <div className="mt-6 rounded-lg overflow-hidden">
            <Image
              src={t.image}
              alt={t.imageAlt}
              width={800}
              height={450}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full h-auto"
            />
            </div>}
          </div>
        </div>
      </Section>

      <Section id="symptoms" title={t.symptomsTitle} subtitle={t.symptomsIntro} tone="gray">
        <CheckList items={t.symptoms} />
      </Section>

      <Section id="procedure" title={t.procedureTitle} subtitle={t.procedureIntro}>
        <ol className={carePathway ? 'grid md:grid-cols-2 gap-6' : 'max-w-4xl space-y-6'}>
          {t.procedure.map((step, i) => (
            <li key={i} className={carePathway ? 'bg-white rounded-lg p-6 border border-gray-200 flex gap-4' : 'border-b border-gray-200 pb-6 flex gap-4'}>
              <span aria-hidden="true" className="shrink-0 w-10 h-10 rounded-full bg-[#00B4D8] text-white font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="benefits" title={carePathway ? 'Aims of Treatment' : 'Potential Benefits'} subtitle="Every patient is different. Your orthopaedic surgeon will explain the benefits and risks that apply to your situation." tone="blue">
        <CardGrid cards={t.benefits} />
      </Section>

      <Section id="recovery" title={slug === 'pediatric-orthopedics' ? 'Recovery, Growth and Follow-Up' : slug === 'arthroscopy-sports-injury' ? 'Rehabilitation and Return to Activity' : slug === 'fracture-trauma-care' ? 'Bone Healing and Aftercare' : 'Recovery and Aftercare'}>
        <Paragraphs items={t.recovery} />
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">General aftercare tips</h3>
        <CheckList items={t.aftercare} />
      </Section>

      <Section id="when-to-consult" title="When to Consult an Orthopaedic Specialist" tone="gray">
        <CheckList items={t.whenToConsult} />
        <p className="mt-8 text-gray-600 max-w-4xl leading-relaxed">
          Our orthopaedic team can review your symptoms and reports. Meet our{' '}
          <InlineLink href="/doctors">orthopaedic doctors</InlineLink>, learn more{' '}
          <InlineLink href="/about">about the hospital</InlineLink>, or{' '}
          <InlineLink href="/contact-us">contact us</InlineLink> to plan your visit. If you have health insurance, read our{' '}
          <InlineLink href="/insurance-cashless">insurance and cashless guide</InlineLink>. Prepare with our{' '}
          <InlineLink href="/patient-information">patient information checklist</InlineLink> or browse{' '}
          <InlineLink href="/faq">common patient questions</InlineLink>.
        </p>
      </Section>

      <Section id="faqs" title={`${t.name} FAQs`}>
        <FaqList faqs={t.faqs} />
      </Section>

      <Section id="related" title="Related Treatments" tone="gray">
        <LinkCards links={related} />
        <p className="mt-8 text-gray-600">
          See all services on our <InlineLink href="/treatments">treatments page</InlineLink> or read helpful articles on our{' '}
          <InlineLink href="/blogs">blog</InlineLink>.
        </p>
      </Section>

      <div className="w-full bg-white px-4 pb-10">
        <p className="seo-container max-w-330 mx-auto text-sm text-gray-500 border-t border-gray-200 pt-6">
          This information is for general education only and is not a substitute for medical advice. Please read our{' '}
          <InlineLink href="/medical-disclaimer">medical disclaimer</InlineLink>. For urgent injury guidance, see our{' '}
          <InlineLink href="/emergency-trauma">emergency and trauma information</InlineLink>.
        </p>
      </div>

      <CtaBand title={t.ctaTitle} />
    </main>
  )
}
