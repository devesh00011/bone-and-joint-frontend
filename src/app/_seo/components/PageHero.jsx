// Server-rendered hero using the existing navy/cyan identity and pill buttons.
import Link from 'next/link'
import { MobileNumber } from '@/app/WebSensitives/ContactSensitives'
import AppointmentButton from './AppointmentButton'

export default function PageHero({ title, intro, breadcrumbs, showCtas = true, compact = false, highlights = [] }) {
  return (
    <section className="w-full bg-[#0B1C2D] text-white border-b-4 border-[#00B4D8]">
      <div className={`seo-container mx-auto px-4 py-12 lg:py-16 ${compact ? 'max-w-4xl' : 'max-w-330'}`}>
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-300">
            {breadcrumbs.map((b, i) => (
              <li key={b.href} className="flex items-center gap-2 min-w-0">
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page" className="py-2 text-white font-semibold">{b.name}</span>
                ) : (
                  <>
                    <Link href={b.href} className="inline-flex min-h-11 items-center hover:text-[#00B4D8] rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B4D8]">{b.name}</Link>
                    <span aria-hidden="true">›</span>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className={highlights.length ? 'grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center' : ''}>
          <div className="min-w-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">{title}</h1>
            <p className="max-w-3xl text-gray-300 leading-relaxed">{intro}</p>
            {showCtas && (
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
                <AppointmentButton />
                <a href={`tel:${MobileNumber}`} className="min-h-12 text-center px-6 py-3 border border-white hover:bg-white hover:text-[#0B1C2D] transition rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B4D8]">Call Now</a>
              </div>
            )}
          </div>
          {highlights.length > 0 && (
            <div className="border-l-2 border-[#00B4D8] pl-6">
              <p className="text-sm font-semibold text-[#00B4D8] mb-4">Understanding your care</p>
              <ul className="space-y-4 text-gray-300">
                {highlights.map((h) => <li key={h} className="leading-relaxed">{h}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
