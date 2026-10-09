// Server-rendered shell for supporting and legal pages: hero, breadcrumb JSON-LD, content, CTA.
import PageHero from './PageHero'
import JsonLd from './JsonLd'
import { CtaBand } from './Blocks'
import { breadcrumbSchema } from '../site'

export default function InfoPage({ title, intro, path, crumbName, extraSchema = [], showCtas = true, cta = true, ctaTitle, children }) {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: crumbName || title, href: path },
  ]
  return (
    <main className="[&_.seo-container]:max-w-4xl">
      <JsonLd data={[breadcrumbSchema(crumbs), ...extraSchema]} />
      <PageHero title={title} intro={intro} breadcrumbs={crumbs} showCtas={showCtas} compact />
      {children}
      {cta && <CtaBand title={ctaTitle} />}
    </main>
  )
}

// Readable long-form layout for legal pages.
export function LegalBody({ updated, sections }) {
  return (
    <section className="w-full bg-white lg:py-16 py-10 px-4">
      <div className="seo-container max-w-4xl mx-auto text-gray-600 leading-relaxed">
        {updated && <p className="text-sm text-gray-500 mb-8">{updated}</p>}
        {sections.map((s, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-l-2 border-[#00B4D8] pl-4 mb-4">{s.title}</h2>
            {s.paras?.map((p, j) => <p key={j} className="mb-4">{p}</p>)}
            {s.list && (
              <ul className="space-y-2 mt-2">
                {s.list.map((li, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-[#00B4D8]" aria-hidden="true">✔</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.node}
          </div>
        ))}
      </div>
    </section>
  )
}
