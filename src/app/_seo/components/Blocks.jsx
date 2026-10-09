// Server-rendered building blocks that reuse the existing site's classes
// (section heading + cyan bar, white cards, ✔ lists, max-w-330 container).
import Link from 'next/link'
import { MobileNumber } from '@/app/WebSensitives/ContactSensitives'
import AppointmentButton from './AppointmentButton'

export function SectionHeading({ id, title, subtitle, light = false }) {
  return (
    <div className="mb-8">
      <h2 id={id} className={`text-3xl md:text-4xl font-extrabold ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      <div className="w-20 h-1 bg-[#00B4D8] mt-4 rounded-full" />
      {subtitle && <p className={`mt-5 max-w-2xl ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
    </div>
  )
}

export function Section({ id, title, subtitle, children, tone = 'white' }) {
  const bg = tone === 'gray' ? 'bg-gray-50' : tone === 'blue' ? 'bg-blue-50' : 'bg-white'
  return (
    <section aria-labelledby={id} className={`w-full ${bg} lg:py-16 py-10 px-4`}>
      <div className="seo-container max-w-330 mx-auto">
        <SectionHeading id={id} title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  )
}

export function Paragraphs({ items }) {
  return (
    <div className="space-y-4 max-w-4xl text-gray-600 leading-relaxed">
      {items.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  )
}

export function CheckList({ items, columns = 2 }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? 'md:grid-cols-2' : ''} text-gray-600`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-[#00B4D8]" aria-hidden="true">✔</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CardGrid({ cards }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
          <h3 className="text-xl font-bold text-[#00B4D8] mb-3">{c.title}</h3>
          <p className="text-gray-600 leading-relaxed">{c.text}</p>
        </div>
      ))}
    </div>
  )
}

export function FaqList({ faqs }) {
  // Native <details>/<summary>: keyboard accessible, no JS, answers present in server HTML.
  return (
    <div className="max-w-3xl space-y-4">
      {faqs.map((f, i) => (
        <details key={i} className="group bg-white rounded-lg shadow-md border border-gray-100 open:shadow-lg transition">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-semibold text-gray-800 rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
            <h3 className="text-base md:text-lg">{f.q}</h3>
            <span aria-hidden="true" className="text-[#00B4D8] text-2xl leading-none motion-safe:transition-transform duration-300 group-open:rotate-45 shrink-0">+</span>
          </summary>
          <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function LinkCards({ links }) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="block h-full bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100 motion-safe:hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
          >
            <span className="block text-xl text-[#00B4D8] font-bold mb-2">{l.title}</span>
            <span className="block text-gray-600 mb-4">{l.text}</span>
            <span className="text-md font-medium text-[#0B1C2D]">Learn more →</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

// Matches the gradient band of the existing home/BookAppointmentCTA.jsx.
export function CtaBand({ title = 'Need an Orthopaedic Consultation?', text }) {
  return (
    <section className="w-full bg-linear-to-r from-[#274a6d] to-gray-950 py-16 px-4">
      <div className="seo-container max-w-330 mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          {text || 'Book an appointment with our orthopaedic team or call us to discuss your concern.'}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 items-stretch sm:items-center max-w-xl mx-auto">
          <AppointmentButton />
          <a
            href={`tel:${MobileNumber}`}
            className="px-6 py-3 border border-white hover:bg-white hover:text-[#0B1C2D] transition rounded-full font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2D]"
          >
            Call {MobileNumber}
          </a>
        </div>
      </div>
    </section>
  )
}

// Inline contextual link style used inside paragraphs.
export function InlineLink({ href, children }) {
  return (
    <Link href={href} className="text-[#007D96] font-semibold underline underline-offset-4 hover:no-underline rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B4D8]">
      {children}
    </Link>
  )
}
