import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import CallbackForm from '@/components/CallbackForm'
import Photo from '@/components/Photo'
import ReviewMarquee from '@/components/ReviewMarquee'
import { withSocial } from '@/lib/seo'
import { business, SITE_URL, clinicians, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'New Patient Comprehensive Care Visit | East St Kilda Dental',
  description:
    'New to East St Kilda Dental? The New Patient Comprehensive Care Visit is a thorough, gentle 60–75 minute appointment. Everything included. Book online.',
  alternates: { canonical: `${SITE_URL}/new-patient-comprehensive-care-visit` },
})

/**
 * The line icons used across this page — the pillars, the "leave knowing"
 * list, the reassurance chips, the two booking cards and the alternate paths
 * at the foot.
 *
 * Kept as one map rather than eighteen inline <svg> blocks so the sections
 * below stay readable, and so every mark is drawn on the same 24px grid at the
 * same 1.5 stroke. Colour and size come from CSS — each path uses
 * currentColor, so a badge only has to set `color`.
 */
const icons: Record<string, ReactNode> = {
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 1.8" /></>,
  list: <><path d="M9 5.5h7.5a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18V7a1.5 1.5 0 0 1 1.5-1.5H9Z" /><path d="M9 4.5h4v2H9zM9.5 11h5M9.5 14.5h3.5" /></>,
  person: <><circle cx="12" cy="8.5" r="3.2" /><path d="M5.8 19.2a6.6 6.6 0 0 1 12.4 0" /></>,
  heart: <path d="M12 19s-6.5-3.9-6.5-8.3A3.7 3.7 0 0 1 12 8.4a3.7 3.7 0 0 1 6.5 2.3C18.5 15.1 12 19 12 19Z" />,
  tooth: <path d="M8.2 4.6C6 4.6 5 6.3 5 8.4c0 3 1.3 4.2 1.8 7 .3 1.9.7 3.6 1.8 3.6 1.4 0 1.2-3.4 3.4-3.4s2 3.4 3.4 3.4c1.1 0 1.5-1.7 1.8-3.6.5-2.8 1.8-4 1.8-7 0-2.1-1-3.8-3.2-3.8-1.6 0-2.3.8-3.8.8s-2.2-.8-3.8-.8Z" />,
  alert: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.8v5M12 15.8h.01" /></>,
  hourglass: <><path d="M7 4.5h10M7 19.5h10" /><path d="M8 4.5c0 4 4 4.6 4 7.5 0 2.9-4 3.5-4 7.5M16 4.5c0 4-4 4.6-4 7.5 0 2.9 4 3.5 4 7.5" /></>,
  options: <><path d="M5 8h9M5 16h6" /><circle cx="17" cy="8" r="2.2" /><circle cx="14" cy="16" r="2.2" /></>,
  steps: <><path d="M4.5 18.5h4v-4h4v-4h4v-4" /><path d="M4.5 18.5v-2" /></>,
  shield: <><path d="M12 4.2 18 6.4v4.9c0 3.6-2.4 6.6-6 7.6-3.6-1-6-4-6-7.6V6.4Z" /><path d="M9.4 11.9 11.3 14l3.4-3.7" /></>,
  cloud: <path d="M7.6 17.5h8.9a3.4 3.4 0 0 0 .4-6.8 5 5 0 0 0-9.6-1.1 3.5 3.5 0 0 0 .3 7Z" />,
  feather: <><path d="M18.5 5.5c-6 0-9.6 3.2-10.6 7.1L6 18.5" /><path d="M8 15.5h4.4c3.2 0 6.1-2.6 6.1-6" /></>,
  hand: <><path d="M9.5 12V6.6a1.4 1.4 0 0 1 2.8 0V12" /><path d="M12.3 11V5.6a1.4 1.4 0 0 1 2.8 0V12" /><path d="M15.1 11.8V8.4a1.4 1.4 0 0 1 2.8 0v6.1c0 3-2.2 5-5.2 5s-4-1.2-5-2.8l-1.9-3a1.4 1.4 0 0 1 2.3-1.6l1.2 1.5" /></>,
  calendar: <><rect x="4.5" y="5.8" width="15" height="13.7" rx="2" /><path d="M4.5 10h15M9 4.2v3M15 4.2v3" /></>,
  phone: <path d="M8.4 4.8 10 8.1l-1.7 1.6a11 11 0 0 0 5 5l1.6-1.7 3.3 1.6v3a1.6 1.6 0 0 1-1.8 1.6C10.6 18.6 5.4 13.4 4.8 6.6A1.6 1.6 0 0 1 6.4 4.8Z" />,
  siren: <><path d="M6 17.5a6 6 0 0 1 12 0Z" /><path d="M4.5 20h15M12 5.5V3.5M6.6 7.3 5.2 5.9M17.4 7.3l1.4-1.4" /></>,
  sparkle: <path d="M12 4.5 13.6 9l4.5 1.6-4.5 1.6L12 16.7l-1.6-4.5L5.9 10.6 10.4 9Z" />,
}

const Ico = ({ name }: { name: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {icons[name]}
  </svg>
)

// The four things a first-time patient actually arrives worried about, in the
// order they arrive in.
const pillars = [
  {
    icon: 'clock',
    title: "You won't be rushed",
    body: 'We allow time to properly understand your teeth, gums, concerns and goals — not squeeze you through a quick examination.',
  },
  {
    icon: 'list',
    title: "You'll know what actually needs attention",
    body: "We'll separate what is urgent, what should be monitored, and what is optional — so everything doesn't feel like it needs to be done at once.",
  },
  {
    icon: 'person',
    title: 'You stay in control',
    body: 'We explain what we see, your options and our recommendations. Then you decide what happens next.',
  },
  {
    icon: 'heart',
    title: "Haven't been in years?",
    body: "You won't be judged. Many of our patients come to us after avoiding the dentist for a long time. We simply start with where you are today.",
  },
]

// What the visit leaves you holding, rather than what happens during it. Each
// label is split so the first line carries the point and the second qualifies
// it — see .know-list in globals.css.
const leaveKnowing = [
  { icon: 'tooth', lead: 'A clear picture', rest: 'of your oral health' },
  { icon: 'alert', lead: 'What needs', rest: 'attention now' },
  { icon: 'hourglass', lead: 'What can wait', rest: '(without worry)' },
  { icon: 'options', lead: 'Which options', rest: 'are available' },
  { icon: 'steps', lead: 'Your prioritised next steps', rest: 'and costs where relevant' },
]

const chips = [
  { icon: 'shield', label: 'No judgement, ever' },
  { icon: 'cloud', label: 'Happy gas available' },
  { icon: 'feather', label: 'Calm, unhurried pacing' },
  { icon: 'hand', label: 'Stop any time' },
]

/** Where a portrait needs a crop other than the default — the same override
    the home page's team row applies to the same photograph. */
const teamCrop: Record<string, string> = { 'michelle-callaghan': '40% 95%' }

// The three other doors out of this page, gathered into one row at the foot
// rather than left as asides inside the sections above.
const otherPaths = [
  { icon: 'siren', kicker: 'Need urgent care?', label: 'Emergency dentistry', href: '/emergency-dentist' },
  { icon: 'calendar', kicker: 'Already a patient?', label: 'Check-ups & cleans', href: '/services/check-ups' },
  { icon: 'sparkle', kicker: 'Feeling anxious?', label: 'Gentle dentistry', href: '/nervous-patients' },
]

export default function OfferPage() {
  return (
    /* .npv scopes every rule this page adds to globals.css. Nothing below is
       shared, so no other page can be moved by them. */
    <main className="npv">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal hero-fit">
            <div className="eyebrow">New Patient Comprehensive Care Visit</div>
            <h1>More than a <em>check-up</em></h1>
            <p>Most first dental visits are built around finding problems. Ours is designed to help you understand what matters, what can wait, what your options are, and what you actually want to do next.</p>
            <p>You&apos;ll have 60&ndash;75 minutes with your dentist for a thorough assessment, discussion and personalised plan — so you leave knowing where your teeth stand and what makes sense from here.</p>
            <div className="hero-cta">
              <Link href="/online-booking" className="btn">Book your new patient visit</Link>
              <Link href="#offer-callback" className="btn btn-ghost">Request a call back</Link>
            </div>
            <div className="hero-proof">
              <span><span className="proof-stars">★★★★★</span> 5.0 on Google</span>
              <span className="proof-dot" />
              <span>Caring for St Kilda East and suburbs since 1980</span>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            priority
            src="/assets/comprehensive-care-visit/comprehensive-care-1.webp"
            alt="A smiling clinician demonstrating brushing on a dental model for a seated patient"
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── WHY START HERE ────────────────────────
          Reuses .pillars rather than introducing another card style; the
          .pillars-ico modifier is what adds the badge and moves the number
          up beside it. */}
      <section className="sec npv-why">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Why this visit is different</div>
            <h2>Why patients choose to <em>start here</em></h2>
          </div>
          <div className="pillars pillars-ico">
            {pillars.map(({ icon, title, body }, i) => (
              <div className="pillar reveal" key={title}>
                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                <span className="pillar-ico"><Ico name={icon} /></span>
                <div className="pillar-body">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="pathlink reveal" style={{ textAlign: 'center' }}>
            Feeling anxious?{' '}
            <Link href="/nervous-patients">Learn more about our gentle dentistry for nervous patients</Link>.
          </p>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEAVE KNOWING ─────────────────────
          The outcome of the visit rather than its contents — deliberately
          placed before the "may include" list, so the reader knows what the
          appointment is for before being shown what is in it. */}
      <section className="sec sage-bg">
        <div className="container know-grid">
          <div className="reveal">
            <div className="eyebrow">A clearer, brighter path forward</div>
            <h2>What you&apos;ll <em>leave knowing</em></h2>
            <p className="know-lead">
              You&apos;ll walk out with a clear understanding of your oral health and a plan that makes sense for you.
            </p>
            <ul className="know-list">
              {leaveKnowing.map(({ icon, lead, rest }) => (
                <li key={lead}>
                  <span className="know-ico"><Ico name={icon} /></span>
                  <span><b>{lead}</b><br />{rest}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* objectPosition drops the frame past the poster on the back wall —
              it carries garbled placeholder lettering that reads as a mistake
              at this size. Everything that matters is in the lower half. */}
          <Photo
            tall
            className="reveal"
            src="/assets/unused/comprehensive-care-visit.webp"
            alt="A patient and a team member going through her chart together at the practice desk"
            objectPosition="center 35%"
            sizes="(max-width: 860px) 100vw, 46vw"
          />
        </div>
      </section>

      {/* ── ONE COMPREHENSIVE FIRST VISIT ────────────── */}
      <section className="sec alt">
        <div className="container reveal">
          <div className="offer-card-v2">
            <div className="body">
              <div className="eyebrow">Comprehensive, personalised care</div>
              <h2>Your first visit <em>may include</em></h2>
              {/* "May include", not "includes": what actually happens on the
                  day is a clinical judgement, and this list is written to say
                  so. Do not tighten it back into a promise. */}
              <ul className="offer-includes">
                <li>Comprehensive dental examination</li>
                <li>Necessary diagnostic X-rays</li>
                <li>Gum and periodontal assessment</li>
                <li>Oral cancer screening</li>
                <li>Professional clean where clinically appropriate</li>
                <li>Discussion of any pain, concerns or cosmetic goals</li>
                <li>A clear, prioritised care plan</li>
                <li>Time to ask questions and understand your options</li>
              </ul>
              {/* Ruled off from the list above, as drawn: the promise is not
                  another item in it. */}
              <p className="offer-nopressure">No pressure to commit to treatment on the day.</p>
              <div className="offer-actions">
                <Link href="/online-booking" className="btn">Book your new patient visit</Link>
                <Link href="/fees" className="offer-actions-link">Fees and health fund information &rarr;</Link>
              </div>
              <p style={{ fontSize: '12px', marginTop: '16px', color: 'var(--ink-faint)' }}>
                If you have eligible extras cover, we can process your claim on the day through HICAPS. Your out-of-pocket amount depends on your fund and level of cover.
              </p>
            </div>
            <Photo
              src="/assets/comprehensive-care-visit/comprehensive-care-2.webp"
              alt="A dentist and patient reviewing a dental X-ray together on screen during a consultation"
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── YOU'RE WELCOME HERE ───────────────────────────── */}
      <section className="sec sage-bg">
        <div className="container">
          <div className="sec-head center reveal welcome-fit">
            <div className="eyebrow">Feeling nervous or haven&apos;t been in years?</div>
            <h2>Put it off for years? You&apos;re exactly who we&apos;re <em>best</em> with</h2>
            <p style={{ marginTop: '16px', fontSize: '18px' }}>
              No lectures, no judgement. Tell us you&apos;re anxious and we go entirely at your pace, with happy gas and gentle, unhurried care. You can stop any time.
            </p>
          </div>
          <div className="chips chips-ico reveal" style={{ justifyContent: 'center' }}>
            {chips.map(({ icon, label }) => (
              <span className="chip" key={label}><Ico name={icon} />{label}</span>
            ))}
          </div>
          <p className="pathlink reveal" style={{ textAlign: 'center' }}>
            <Link href="/nervous-patients">Learn more about our approach for nervous patients &rarr;</Link>
          </p>
        </div>
      </section>

      {/* ── IN OUR PATIENTS' WORDS ────────────────────────
          The same block as the home page: .sec-reviews for the tighter padding
          either side of the row, and the quotes themselves in
          components/ReviewMarquee.tsx — which is also where the note on why
          testimonials appear at all lives. Only the heading above it is this
          page's own.

          The phone treatment of the row (drift off, snap scrolling, dots) is
          shared with the home page through the :is(.home,.npv) prefix in
          globals.css. */}
      <section className="sec sec-reviews">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Real experiences, real people</div>
            <h2>What your first visit <em>feels like</em></h2>
          </div>
        </div>
        {/* Outside the container on purpose — the row runs off both edges. */}
        <ReviewMarquee />
        <div className="container">
          <div className="gscore reveal">
            Rated <b>5.0 on Google</b> by our local patients &middot;{' '}
            <a href="https://share.google/M1ZtOT5z13fj2mhWf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>
              Read all reviews
            </a>
          </div>
        </div>
      </section>

      {/* ── THE TEAM ──────────────────────────────────────
          Names and titles come from lib/business.ts, so this row can never
          drift from the four in the JSON-LD or from the home page. */}
      <section className="sec alt">
        <div className="container npv-team">
          {/* .sec-head center — the same centred head every other section on
              this page uses, so this one is not the odd one out. */}
          <div className="sec-head center reveal">
            <div className="eyebrow">Experienced, friendly, local</div>
            <h2>You&apos;ll be looked after by a team that explains things properly.</h2>
          </div>
          {/* .team-member, not a class of this page's own: that is the home
              page's card, so the frame, its 3:4 crop, the 20px gap under it and
              the name and role beneath come out identical here by construction
              rather than by two sets of numbers agreeing. */}
          <div className="npv-team-row reveal">
            {/* The team stands across the lower two thirds of this photograph —
                everything above them is shopfront. "center top" was giving a
                landscape frame a third of a wall; 80% pulls the crop down so the
                row of people fills it, heads to feet. */}
            <div className="npv-team-group">
              <Photo
                src="/assets/shared/meet-our-team.webp"
                alt="The East St Kilda Dental team standing together outside the clinic entrance"
                objectPosition="center 60%"
                sizes="(max-width: 900px) 100vw, 34vw"
              />
            </div>
            {clinicians.map((c) => (
              <div className="team-member" key={c.slug}>
                <Photo
                  src={`/assets/team/${c.slug}.webp`}
                  alt={`${c.name} – ${c.jobTitle}`}
                  objectPosition={teamCrop[c.slug] ?? 'center top'}
                  sizes="(max-width: 900px) 50vw, 198px"
                />
                <h4>{c.name}</h4>
                <span>{c.jobTitle}</span>
              </div>
            ))}
          </div>
          <div className="npv-team-cta reveal">
            <Link href="/about/our-team" className="btn">Meet the team</Link>
          </div>
        </div>
      </section>

      {/* ── TWO WAYS TO BOOK ─────────────────────────────── */}
      <section className="sec" id="offer-callback">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Whatever feels easier</div>
            <h2>Two easy ways to book your visit</h2>
          </div>
          <div className="booking-cols reveal">
            <div className="book-card">
              <div className="book-head">
                <span className="book-ico"><Ico name="calendar" /></span>
                <h3>Book online</h3>
              </div>
              <p>Choose a time that works for you. Our online booking system is quick, easy and available 24/7.</p>
              <Link href="/online-booking" className="btn">Book online now</Link>
            </div>
            <div className="book-card">
              <div className="book-head">
                <span className="book-ico"><Ico name="phone" /></span>
                <h3>Prefer we call you?</h3>
              </div>
              <p>Leave your details and we&apos;ll give you a call to find a time that suits you.</p>
              <CallbackForm
                className="form"
                namePlaceholder="First name"
                showEmail
              />
            </div>
          </div>
          {/* Under both cards rather than inside the second: calling applies to
              either route, and as the last line of the callback card it was
              height that only deepened the gap the first card had to sit
              through. */}
          <p className="book-fine reveal">
            Prefer to talk it through? Call us on{' '}
            <a href={telHref}>{business.telephoneDisplay}</a>.
          </p>

          {/* The other doors out of this page, in one row rather than as
              asides inside the sections above. */}
          <div className="altpaths reveal">
            <span className="altpaths-label">Looking for something else?</span>
            <div className="altpaths-row">
              {otherPaths.map(({ icon, kicker, label, href }) => (
                <Link href={href} className="altpath" key={href}>
                  <span className="altpath-ico"><Ico name={icon} /></span>
                  <span>
                    <span className="altpath-kicker">{kicker}</span>
                    <span className="altpath-label">{label} &rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
