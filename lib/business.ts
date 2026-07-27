/**
 * Single source of truth for East St Kilda Dental's name, address, phone and
 * other hard facts.
 *
 * Anything a search engine or AI answer engine could quote about the practice
 * lives here so it can never drift between pages, or between the visible copy
 * and the JSON-LD structured data.
 *
 * Always use the production domain in @id and url values, even on staging, so
 * they match the canonical URL.
 */

export const SITE_URL = 'https://www.eaststkildadental.com.au'

/** Stable @id values for the nodes in the site-wide entity graph. */
export const SCHEMA_ID = {
  practice: `${SITE_URL}/#practice`,
  website: `${SITE_URL}/#website`,
  faq: `${SITE_URL}/#faq`,
} as const

export const business = {
  name: 'East St Kilda Dental',
  url: `${SITE_URL}/`,
  /** E.164, for structured data and tel: links. */
  telephone: '+61395273678',
  /** Human-readable, for visible copy. */
  telephoneDisplay: '(03) 9527 3678',
  email: 'hello@eaststkildadental.com.au',
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  address: {
    streetAddress: '364 Dandenong Rd',
    addressLocality: 'East St Kilda',
    addressRegion: 'VIC',
    postalCode: '3183',
    addressCountry: 'AU',
  },
  /**
   * TODO Confirm against the Google Business Profile listing before sign-off.
   * These are the coordinates supplied in the SEO recommendation, not verified
   * from the live GBP entry.
   */
  geo: {
    latitude: '-37.8684',
    longitude: '145.0060',
  },
  hasMap:
    'https://www.google.com/maps?q=East+St+Kilda+Dental,+364+Dandenong+Rd,+East+St+Kilda+VIC+3183',
} as const

/**
 * Weekly opening hours only.
 *
 * Saturday is deliberately omitted: it runs monthly, not weekly, so it would be
 * wrong as an OpeningHoursSpecification. Saturday stays in the visible hours.
 */
export const openingHours = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:30', closes: '16:00' },
  { days: ['Friday'], opens: '08:30', closes: '16:30' },
] as const

export const areasServed = [
  'East St Kilda',
  'St Kilda',
  'Balaclava',
  'Elwood',
  'Elsternwick',
  'Caulfield',
  'Ripponlea',
] as const

/**
 * External profiles for sameAs.
 *
 * TODO Add the Facebook page and Instagram profile URLs once confirmed by the
 * practice. Placeholders are intentionally left out rather than shipped as
 * dummy strings.
 */
export const socialProfiles: string[] = [
  // Google Business Profile share link (same link used in ContactSection).
  'https://maps.app.goo.gl/7e4dRpEyETE8K18s5',
]

/**
 * Named clinicians, in the order they appear on the home page.
 *
 * TODO Dr Goldman is shown on the site as "Dentist & Prosthodontist". The
 * structured data says "Dentist" until AHPRA specialist registration in
 * prosthodontics is confirmed; only then change it here.
 */
export const clinicians = [
  { slug: 'anbar-ganatra', name: 'Dr Anbar Ganatra', jobTitle: 'Principal Dentist' },
  { slug: 'edmund-goldman', name: 'Dr Edmund Goldman', jobTitle: 'Dentist' },
  { slug: 'jarrod-dean', name: 'Dr Jarrod Dean', jobTitle: 'General Dentist' },
  { slug: 'michelle-callaghan', name: 'Michelle Callaghan', jobTitle: 'Dental Hygienist' },
] as const

export const clinicianId = (slug: string) => `${SITE_URL}/about/our-team#${slug}`

export const comprehensiveCareVisit = {
  name: 'The Comprehensive Care Visit',
  price: '297',
  priceCurrency: 'AUD',
  description:
    'A 60 to 75 minute comprehensive first-visit dental appointment including examination, digital X-rays, oral cancer screening, scale and clean, and a personalised care plan.',
} as const
