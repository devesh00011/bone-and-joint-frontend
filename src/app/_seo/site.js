// Shared constants + metadata helper for the Phase 1 SEO pages.
// The "_seo" folder is private (underscore prefix), so Next.js never turns it into a route.

export const SITE_URL = "https://www.boneandjointhospital.co.in";
export const SITE_NAME = "Bone & Joint Hospital and Research Centre";

// Verified facts, copied from the existing Footer.jsx (not invented).
export const HOSPITAL_ADDRESS =
  "15 Keshav Nagar, Opposite Samrat Ashok Udhyan, Jodhpur, Rajasthan";
export const HOSPITAL_EMAIL = "Bonenjoint@gmail.com";
export const OPD_HOURS = "Mon–Sat, 9:00 AM – 6:00 PM";

// Share images are optional: never imply that a generic operating room depicts a specific treatment.

/**
 * Builds a complete, unique Next.js metadata object for a new page.
 * metadataBase is set per page so the existing root layout.js stays untouched.
 */
export function buildMetadata({ title, description, path, image, imageAlt, type = "website" }) {
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      locale: "en_IN",
      ...(image ? { images: [{ url: image, alt: imageAlt || title }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
