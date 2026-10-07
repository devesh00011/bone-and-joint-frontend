// Next.js App Router sitemap -> served at /sitemap.xml
// Static list only (no backend calls). Dynamic /treatments/[slug], /doctors/[slug]
// and blog URLs can be added in Phase 2.
import { SITE_URL } from './_seo/site'
import { TREATMENT_SLUGS } from './_seo/content/treatments'

export default function sitemap() {
  const now = new Date()
  const existing = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/treatments', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/doctors', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/blogs', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact-us', priority: 0.7, changeFrequency: 'monthly' },
  ]
  const treatments = TREATMENT_SLUGS.map((s) => ({ path: `/treatments/${s}`, priority: 0.9, changeFrequency: 'monthly' }))
  const supporting = ['/insurance-cashless', '/emergency-trauma', '/patient-information', '/faq'].map((path) => ({ path, priority: 0.7, changeFrequency: 'monthly' }))
  const legal = ['/privacy-policy', '/terms-and-conditions', '/medical-disclaimer'].map((path) => ({ path, priority: 0.3, changeFrequency: 'yearly' }))

  return [...existing, ...treatments, ...supporting, ...legal].map((e) => ({
    url: `${SITE_URL}${e.path === '/' ? '' : e.path}`,
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }))
}
