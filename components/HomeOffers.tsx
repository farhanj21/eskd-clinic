import Link from 'next/link'
import { comprehensiveCareVisit } from '@/lib/business'

/**
 * The offers row that sits between the hero stat cards and the services grid.
 *
 * Four offers in one bordered, tinted container split by hairline dividers,
 * rather than four floating cards with gaps — that, the icon tiles and the
 * tinted surface are what keep it from reading as a second services grid a
 * screen-length above the real one.
 *
 * The first offer is the only one with a price attached, so it is the only one
 * that leads straight to a booking page; the other three link to the page that
 * explains them, which is where their own booking CTA lives.
 */

interface Offer {
  /** Short hook above the heading, in the manner of a price sticker. */
  pill: string
  title: string
  body: string
  /** Featured card only: the health-fund caveat, set in italics. */
  fineprint?: string
  cta: string
  href: string
  /** Links are otherwise near-identical to a screen reader tabbing the row. */
  ariaLabel: string
  icon: 'shield' | 'clock' | 'heart' | 'tooth'
  featured?: boolean
}

const OFFERS: Offer[] = [
  {
    pill: 'Valued at $499',
    title: comprehensiveCareVisit.name,
    body: `A thorough 60–75 minute first visit — exam, X-rays, photos, oral cancer screening, full scale and clean, and your personalised care plan. $${comprehensiveCareVisit.price}, valued at $499.`,
    fineprint: 'Claim on the spot with most health funds; your gap depends on your cover.',
    cta: 'Book your visit',
    href: '/comprehensive-care-visit',
    ariaLabel: 'Book the Comprehensive Care Visit',
    icon: 'shield',
    featured: true,
  },
  {
    pill: 'Seen today',
    title: 'Emergency Appointment',
    body: 'In pain or broken a tooth? We keep time aside each day for emergencies and will get you comfortable quickly.',
    cta: 'Learn more',
    href: '/emergency-dentist',
    ariaLabel: 'Learn about emergency appointments',
    icon: 'clock',
  },
  {
    pill: 'No treatment',
    title: 'Nervous Patient Consult',
    body: 'Avoided the dentist for years? Come in for a no-treatment chat first. Calm, unhurried, and you can stop any time.',
    cta: 'Learn more',
    href: '/nervous-patients',
    ariaLabel: 'Learn about nervous patient consults',
    icon: 'heart',
  },
  {
    pill: 'Complimentary',
    title: 'Invisalign Consultation',
    body: 'Complimentary clear-aligner consultation with a full-mouth scan and a personalised plan before you commit to anything.',
    cta: 'Learn more',
    href: '/services/invisalign',
    ariaLabel: 'Learn about the Invisalign consultation',
    icon: 'tooth',
  },
]

/** Hand-rolled to match the inline-SVG convention used everywhere else here. */
const ICONS: Record<Offer['icon'], React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3 4 6v5c0 4.4 3.1 8.5 8 10 4.9-1.5 8-5.6 8-10V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9Z" />,
  tooth: (
    <path d="M12 4c-2 0-3-1-5 0-2.2 1.1-2.4 4-1.6 7 .6 2.3.9 4.2 1.3 6.3.2 1.2 1.9 1.4 2.3.2l1.1-3.5c.3-.9 1.5-.9 1.8 0l1.1 3.5c.4 1.2 2.1 1 2.3-.2.4-2.1.7-4 1.3-6.3.8-3 .6-5.9-1.6-7-2-1-3 0-5 0Z" />
  ),
}

export default function HomeOffers() {
  return (
    <section className="offers" aria-labelledby="offers-heading">
      <div className="container">
        {/* The design has no visible title — the cards are self-describing — but
            the section still needs an accessible name to be navigable. */}
        <h2 id="offers-heading" className="offers-sr-only">New patient offers</h2>

        <div className="offers-row">
          {OFFERS.map(offer => (
            <article
              key={offer.title}
              className={`offers-card${offer.featured ? ' is-featured' : ''}`}
            >
              <span className="offers-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[offer.icon]}
                </svg>
              </span>

              <span className="offers-pill">{offer.pill}</span>
              <h3 className="offers-title">{offer.title}</h3>
              <p className="offers-body">{offer.body}</p>

              {offer.fineprint && <p className="offers-fine">{offer.fineprint}</p>}

              <Link href={offer.href} className="offers-cta" aria-label={offer.ariaLabel}>
                {offer.cta}
                <svg className="offers-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
