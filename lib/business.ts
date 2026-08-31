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
  /** The Learn hub as a collection, and the list of guides it contains. */
  learnCollection: `${SITE_URL}/learn#collection`,
  learnGuides: `${SITE_URL}/learn#guides`,
  /** Emergency dental care as a service, and that page's questions. */
  emergencyService: `${SITE_URL}/emergency-dentist#service`,
  emergencyFaq: `${SITE_URL}/emergency-dentist#faq`,
  /** The locations hub as a collection, and the list of suburbs it contains. */
  areasCollection: `${SITE_URL}/areas-we-serve#collection`,
  areasSuburbs: `${SITE_URL}/areas-we-serve#suburbs`,
  /** The team page itself. The Person nodes it anchors use clinicianId(). */
  teamPage: `${SITE_URL}/about/our-team#webpage`,
} as const

/**
 * A topic listing page's own two nodes: /learn/<topic-slug>.
 *
 * The Learn hub's equivalents are fixed strings above; a topic's are built per
 * slug, the way the suburb and service pages build theirs.
 */
export const topicCollectionId = (slug: string) => `${SITE_URL}/learn/${slug}#collection`
export const topicGuidesId = (slug: string) => `${SITE_URL}/learn/${slug}#guides`

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
  /** The practice has cared for the neighbourhood since around 1980. */
  foundedYear: 1980,
  /** The catchment, as we describe it in prose. */
  serviceRegion: "Melbourne's inner south-east",
  address: {
    streetAddress: '364 Dandenong Rd',
    addressLocality: 'St Kilda East',
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
    'https://www.google.com/maps?q=East+St+Kilda+Dental,+364+Dandenong+Rd,+St+Kilda+East+VIC+3183',
} as const

/**
 * Ready-made strings for visible copy and href attributes.
 *
 * Import these rather than retyping the address or phone number. A stray
 * "Dandenong Road" where the rest of the web says "Dandenong Rd" is exactly the
 * kind of drift that costs an entity its knowledge panel.
 */
export const telHref = `tel:${business.telephone}`
export const emailHref = `mailto:${business.email}`

/** "364 Dandenong Rd" */
export const streetAddress = business.address.streetAddress
/** "St Kilda East VIC 3183" */
export const localityLine = `${business.address.addressLocality} ${business.address.addressRegion} ${business.address.postalCode}`
/** "364 Dandenong Rd, St Kilda East VIC 3183" */
export const fullAddress = `${streetAddress}, ${localityLine}`

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
  'St Kilda East',
  'St Kilda',
  'Balaclava',
  'Elwood',
  'Elsternwick',
  'Caulfield',
  'Ripponlea',
] as const

/**
 * External profiles, published as `sameAs` in the structured data.
 *
 * These are what let a search or AI engine tie the website, the Google Business
 * Profile and the social accounts together into one entity. Only add a URL here
 * once it has been opened and confirmed to resolve to a live profile whose
 * name, address and phone match this file exactly — an unverified or redirecting
 * URL weakens the entity rather than strengthening it.
 *
 * TODO Add, once the practice supplies and someone has opened each one:
 *   - Facebook page URL
 *   - Instagram profile URL
 *   - HealthEngine listing URL
 * Placeholders are deliberately not shipped as dummy strings.
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

/**
 * The jobTitle to publish for a clinician, where the entity graph pins one.
 *
 * The team page shows each person's role in its own words; where that person is
 * one of the four named above, the structured data uses the title from this
 * file instead. That is what keeps Dr Goldman's markup reading "Dentist" while
 * the visible card says "Dentist & Prosthodontist" — see the TODO above.
 */
export const clinicianJobTitle = (slug: string): string | undefined =>
  clinicians.find(c => c.slug === slug)?.jobTitle

export const comprehensiveCareVisit = {
  name: 'The Comprehensive Care Visit',
  price: '297',
  priceCurrency: 'AUD',
  description:
    'A 60 to 75 minute comprehensive first-visit dental appointment including examination, digital X-rays, oral cancer screening, scale and clean, and a personalised care plan.',
} as const
