import type { CSSProperties } from 'react'
import JsonLd from '@/components/JsonLd'
import Link from 'next/link'
import Photo from '@/components/Photo'
import GetInTouch from '@/components/GetInTouch'
import HealthFundLogos from '@/components/HealthFundLogos'
import HeroVideoBg from '@/components/HeroVideoBg'
import MapEmbed from '@/components/MapEmbed'
import { suburbs, suburbPath } from '@/data/suburbs'
import { SCHEMA_ID, SITE_URL, areasServed, business, clinicianId, clinicians, comprehensiveCareVisit, fullAddress, openingHours, socialProfiles, telHref } from '@/lib/business'
import { withSocial } from '@/lib/seo'

// V3 white theme — scoped to the home page only. Overriding these CSS
// custom properties on <main> cascades to every section inside it
// (.sec, .sec.alt, .hero-v2, cards) without affecting other routes,
// the header, or the footer (which live outside this <main>).
const whiteTheme: CSSProperties = {
  ['--cream' as string]: '#FFFFFF',
  ['--paper' as string]: '#FFFFFF',
  ['--cream-2' as string]: '#F1EFEA',
  background: '#FFFFFF',
}

export const metadata = withSocial({
  title: 'East St Kilda Dental | Gentle Family & Emergency Dentist',
  description:
    'Gentle, judgement-free dentist in East St Kilda. Caring for local families since 1980 with comprehensive check-ups, nervous-patient care, kids and emergencies. Book today.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/' },
})

// The five questions in the "Things you might be wondering" section. Both the
// visible <details> list and the FAQPage node below are rendered from this one
// array, so the markup can never drift from the words on the page — a hard
// requirement for FAQ rich results.
const faqs = [
  {
    q: "It's been years since I went. Will you judge me?",
    a: 'Never. A huge number of our patients come to us after a long gap. There are no lectures and no raised eyebrows here, only a warm welcome and a care plan to move forward.',
  },
  {
    q: "I'm really nervous about the dentist. Can you help?",
    a: "Yes, this is one of the things we do best. Tell us you're anxious and we'll slow right down, talk you through everything, and offer happy gas and other comfort options.",
  },
  {
    q: 'How much will it cost?',
    a: "You'll always get a clear written estimate before any treatment begins, and time to think it over. We also offer payment plans for larger treatment.",
  },
  {
    q: 'Do you take my health fund?',
    a: 'We accept all major Australian health funds and claim on the spot, so usually you only pay any gap on the day.',
  },
  {
    q: 'What happens at my first visit?',
    a: "A relaxed chat about your history and concerns, then a gentle, comprehensive check, and finally a clear, prioritised care plan. You're never rushed.",
  },
]

// The three proof points that sit in cards across the foot of the hero,
// replacing the old glass band. Rendered as a <dl>, so each number is announced
// with the label that gives it meaning.
const heroStats = [
  { value: '10,000+', label: 'Patients Served' },
  { value: '45+', label: 'Years In The Local Area' },
  { value: '15+', label: 'Suburbs Served' },
]

// One self-contained, factual sentence for AI answer engines and featured
// snippets to quote whole: who we are, what we are, where, since when, and the
// entry price. Assembled from lib/business.ts so it can never contradict the
// JSON-LD below. Kept plain and descriptive — no superlatives or outcome
// claims, for AHPRA safety.
const summarySentence =
  `${business.name} is a gentle family and emergency dentist at ${business.address.streetAddress}, ` +
  `caring for ${business.serviceRegion} since ${business.foundedYear}, ` +
  `with a $${comprehensiveCareVisit.price} comprehensive first visit.`

// One connected JSON-LD @graph for the home page: the practice, the four named
// clinicians, the FAQ, and the website. Every fact comes from lib/business.ts.
//
// No Review or aggregateRating markup here, deliberately, per the AHPRA
// advertising guidance.
const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dentist',
      '@id': SCHEMA_ID.practice,
      name: business.name,
      url: business.url,
      image: `${SITE_URL}/assets/incoming/meet-the-team.webp`,
      telephone: business.telephone,
      email: business.email,
      priceRange: business.priceRange,
      currenciesAccepted: business.currenciesAccepted,
      address: { '@type': 'PostalAddress', ...business.address },
      geo: { '@type': 'GeoCoordinates', ...business.geo },
      hasMap: business.hasMap,
      openingHoursSpecification: openingHours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...h.days],
        opens: h.opens,
        closes: h.closes,
      })),
      areaServed: areasServed.map((name) => ({ '@type': 'City', name })),
      sameAs: socialProfiles,
      makesOffer: { '@type': 'Offer', ...comprehensiveCareVisit },
      employee: clinicians.map((c) => ({ '@id': clinicianId(c.slug) })),
    },
    ...clinicians.map((c) => ({
      '@type': 'Person',
      '@id': clinicianId(c.slug),
      name: c.name,
      jobTitle: c.jobTitle,
      worksFor: { '@id': SCHEMA_ID.practice },
    })),
    {
      '@type': 'FAQPage',
      '@id': SCHEMA_ID.faq,
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': SCHEMA_ID.website,
      url: business.url,
      name: business.name,
      publisher: { '@id': SCHEMA_ID.practice },
    },
  ],
}

export default function Home() {
  return (
    <main style={whiteTheme}>
      {/* The hero poster is a CSS background, so it isn't discoverable until the
          stylesheet parses. Preloading it keeps it the LCP candidate. */}
      <link rel="preload" as="image" href="/assets/video/hero-clinic-poster.webp" fetchPriority="high" />
      <JsonLd data={homeSchema} />

      {/* HERO — full-bleed video frame, with the proof points along its foot */}
      <section className="hero-video">
        <HeroVideoBg />
        <div className="hero-video-scrim" aria-hidden="true" />
        <div className="container container-wide hero-video-inner">
          <div className="hero-video-copy">
            <div className="eyebrow">Skilled, heartfelt dentistry</div>
            <h1><span style={{ whiteSpace: 'nowrap' }}>Quality dentistry</span> <em style={{ whiteSpace: 'nowrap' }}>in East St Kilda</em></h1>
            <p className="lead">{summarySentence}</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <a href={telHref} className="btn btn-ghost-light">Call {business.telephoneDisplay}</a>
            </div>
            <p className="hero-video-note">
              <Link href="/comprehensive-care-visit">
                New patient? Experience the Comprehensive Care Visit &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Stat cards straddling the foot of the hero. Deliberately a sibling of
          .hero-video rather than a child: that section is overflow:hidden, so
          anything pushed past its bottom edge — the cards and their shadow —
          would be clipped. */}
      <div className="container hero-stats-wrap">
        <dl className="hero-stats">
          {heroStats.map(({ value, label }) => (
            <div className="hero-stat" key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>

            {/* SERVICES OVERVIEW */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">How we can help</div>
            <h2 style={{ fontSize: 'clamp(38px, 4.8vw, 62px)' }}>Care for every stage of life</h2>
            <p style={{ marginTop: '14px', fontSize: '17px', maxWidth: '42em', marginLeft: 'auto', marginRight: 'auto' }}>
              From routine check-ups and emergency dentistry to fillings, crowns, implants and cosmetic care, here is how we look after East St Kilda and the surrounding suburbs.
            </p>
          </div>
          <div className="svc-grid-v2">
            <div className="svc-item reveal">
              <h4 style={{ fontWeight: 700 }}>Check-ups &amp; cleans</h4>
              <p>Gentle, thorough preventive care to keep small things small.</p>
              <Link href="/services/check-ups">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4 style={{ fontWeight: 700 }}>Emergency dentistry</h4>
              <p>In pain? We&apos;ll see you quickly and get you comfortable.</p>
              <Link href="/emergency-dentist">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4 style={{ fontWeight: 700 }}>Fillings &amp; restorations</h4>
              <p>Quietly fixing what needs fixing, preserving your natural teeth.</p>
              <Link href="/services/fillings">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4 style={{ fontWeight: 700 }}>Crowns &amp; root canals</h4>
              <p>Saving teeth and easing pain, explained every step of the way.</p>
              <Link href="/services/crowns-and-bridges">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4 style={{ fontWeight: 700 }}>Dental implants</h4>
              <p>Replacing missing teeth so you can eat and smile with ease.</p>
              <Link href="/services/dental-implants">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4 style={{ fontWeight: 700 }}>Cosmetic dentistry</h4>
              <p>Subtle, natural improvements when you&apos;re ready, never pushed.</p>
              <Link href="/services/smile-design">Learn more</Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }} className="reveal">
            <Link href="/services/check-ups" className="btn btn-ghost">See all services</Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '18px', fontSize: '14.5px', color: 'var(--ink-faint)' }} className="reveal">
            Implants, Invisalign and cosmetic work included.
          </p>
        </div>
      </section>

      {/* HOW WE'RE DIFFERENT */}
      {/* <section className="sec alt">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">The way we care</div>
            <h2>Dentistry that feels <em>safe</em>, not stressful</h2>
            <p style={{ marginTop: '16px', fontSize: '18px' }}>
              Whoever you are, and however long it&apos;s been, you&apos;re in exactly the right place. There&apos;s nothing here to be embarrassed about.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="n">01</div>
              <h3>The full picture, not just one tooth</h3>
              <p>We look at how everything fits together, your teeth, gums, bite and long-term health, so the things quick check-ups miss don&apos;t get missed.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">02</div>
              <h3>No shame, no judgement</h3>
              <p>Whatever state things are in, you&apos;ll be supported without criticism. Ever.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">03</div>
              <h3>Built to last, not patched up</h3>
              <p>We treat the cause, not just the symptom, and help you prevent problems before they start. The aim is less dentistry over a lifetime, not more.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">04</div>
              <h3>Gentle, never vague</h3>
              <p>Being gentle doesn&apos;t stop us being honest. We give you our clear, confident recommendation, kindly, then leave the decision to you. No scare tactics, and no glossing over what matters.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* REVIEWS */}
      {/* <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">In our patients&apos; words</div>
            <h2>Kind, gentle, and never rushed</h2>
          </div>
          <div className="reviews-v2">
            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p>I&apos;d been putting it off for ages and felt embarrassed to even call. From the first phone call the team made it easy, with a warm welcome and not a single lecture.</p>
              <div className="who">Patient review · returning after a break</div>
            </div>
            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p>I rang in a panic and reception were calm and kind, and found me a time straight away. They turned a stressful morning into an easy one.</p>
              <div className="who">Patient review · first call</div>
            </div>
            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p>The front desk always remembers us by name and the whole team makes our family feel welcome, kids included. We wouldn&apos;t go anywhere else.</p>
              <div className="who">Patient review · family patient</div>
            </div>
          </div>
          <div className="gscore reveal">
            Rated <b>5.0 on Google</b> by our local patients
          </div>
        </div>
      </section> */}

      {/* OFFER CARD */}
      <section className="sec" id="first-visit">
        <div className="container reveal">
          <div className="offer-card-v2">
            <div className="body">
              <div className="eyebrow">Your first visit, in full</div>
              <h2>The <em>Comprehensive Care</em> Visit</h2>
              <p>A thorough, gentle 60 to 75 minute appointment that gives you a complete understanding of your oral health and where things are heading, not a quick clean and out the door. Together we look at your health, function, longevity, aesthetics and prevention, and you leave with a personalised dental care plan. Your visit includes:</p>
              <ul className="offer-includes">
                <li>Comprehensive dental examination</li>
                <li>Full medical and dental history review</li>
                <li>Digital X-rays and intraoral photos</li>
                <li>Oral cancer screening</li>
                <li>Gum and periodontal assessment</li>
                <li>Full scale, clean and polish</li>
                <li>Fluoride treatment</li>
                <li>Smile and bite assessment</li>
                <li>Your personalised dental care plan</li>
              </ul>
              <div className="offer-meta">
                <div><b>60–75 min</b>gentle and thorough</div>
                <div><b>$297</b>everything above, one price</div>
                <div><b>A care plan</b>clear and easy to follow</div>
              </div>
              <p style={{ marginTop: '14px', marginBottom: 0, fontSize: '14.5px', color: 'var(--ink)' }}>
                Valued at <b>$499</b>. With us, it&apos;s one simple price of <b>$297</b>.
              </p>
              <Link href="/book" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>Book your visit</Link>
              <p style={{ fontSize: '12px', marginTop: '14px', color: 'var(--ink-faint)' }}>
                $297, everything above included. With most health funds, you claim on the day and pay only a minimal gap. Your exact gap depends on your level of cover.
              </p>
            </div>
            <Photo
              style={{ borderRadius: 0, minHeight: '100%' }}
              src="/assets/incoming/comprehensive2.webp"
              alt="A dentist talking with a seated patient during a comprehensive care consultation"
     
            />
          </div>
        </div>
      </section>



      {/* NERVOUS PATIENTS */}
      <section className="sec sage-bg" id="nervous">
        <div className="container nervous-grid">
          <Photo
            tall
            className="reveal"
            src="/assets/incoming/nervous-patients.webp"
            alt="A relaxed patient smiling warmly in the dental chair"
            objectPosition="0% 40%"
            scale={1.1}
            sizes="(max-width: 860px) 100vw, 48vw"
          />
          <div className="reveal">
            <div className="eyebrow">Nervous and anxious patients</div>
            <h2>Scared of the dentist? You&apos;re exactly who we&apos;re <em>best</em> with.</h2>
            <p>Many of our patients arrive having avoided the dentist for years, often after a bad experience long ago. Looking after frightened patients is one of the things we are known for. Our gentle approach pairs careful clinical care with a calm, coaching-informed way of working, developed specifically for dental fear, so it feels safe from the moment you walk in. Tell us you&apos;re anxious, and we go entirely at your pace.</p>
            <div className="chips chips-2">
              <span className="chip">Happy gas and sedation options</span>
              <span className="chip">Calm, unhurried pacing</span>
              <span className="chip">A coaching-informed approach</span>
              <span className="chip">Stop any time, no questions asked</span>
            </div>
            <blockquote className="nervous-proof">
              Most of our most anxious patients tell us the hardest part was making the booking. Once they are in the chair and know they can stop any time, the fear starts to settle.
              <cite>What nervous patients often tell us</cite>
            </blockquote>
          </div>
        </div>
      </section>


      {/* TEAM */}
      <section className="sec">
        <div className="container">
          <div className="team-lead-grid">
            <Photo
              tall
              className="reveal"
              src="/assets/incoming/meet-the-team.webp"
              alt="The East St Kilda Dental team standing together outside the clinic entrance"
              objectPosition="center top"
              sizes="(max-width: 820px) 100vw, 40vw"
            />
            <div className="reveal">
              <div className="eyebrow">The people who&apos;ll care for you</div>
              <h2>A gentle team you&apos;ll get to <em>know</em></h2>
              <p>Led by Dr Anbar Ganatra, with a team you&apos;ll come to know by name. Calm, unhurried, and genuinely glad you came in. You&apos;ll see the same familiar faces each visit.</p>
            </div>
          </div>
          <div className="team-grid-v2">
            <div className="team-member reveal">
              <Photo
                src="/assets/team/anbar-ganatra.webp"
                alt="Dr Anbar Ganatra – Principal Dentist"
                objectPosition="center top"
                sizes="(max-width: 820px) 50vw, 25vw"
              />
              <h4>Dr Anbar Ganatra</h4>
              <span>Principal Dentist</span>
            </div>
            <div className="team-member reveal">
              <Photo
                src="/assets/team/edmund-goldman.webp"
                alt="Dr Edmund Goldman – Dentist & Prosthodontist"
                objectPosition="center top"
                sizes="(max-width: 820px) 50vw, 25vw"
              />
              <h4>Dr Edmund Goldman</h4>
              <span>Dentist &amp; Prosthodontist</span>
            </div>
            <div className="team-member reveal">
              <Photo
                src="/assets/team/jarrod-dean.webp"
                alt="Dr Jarrod Dean – General Dentist"
                objectPosition="center top"
                sizes="(max-width: 820px) 50vw, 25vw"
              />
              <h4>Dr Jarrod Dean</h4>
              <span>General Dentist</span>
            </div>
            <div className="team-member reveal">
              <Photo
                src="/assets/team/michelle-callaghan.webp"
                alt="Michelle Callaghan – Hygienist"
                objectPosition="40% 95%"
                sizes="(max-width: 820px) 50vw, 25vw"
              />
              <h4>Michelle Callaghan</h4>
              <span>Hygienist</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }} className="reveal">
            <Link href="/about/our-team" className="btn btn-ghost">Meet the Team</Link>
          </div>
          {/* <div className="lang-band reveal">
            <b>We speak your language.</b> Our team can care for you in English, Mandarin, Hebrew, Russian, Hindi, Tamil and Kannada.
          </div> */}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="sec alt">
        <div className="container story-grid">
          <div className="reveal">
            <div className="eyebrow">Here for the long run</div>
            <h2>Four decades of <em>caring</em> for families</h2>
            <p>East St Kilda Dental has cared for this neighbourhood since around 1980. We&apos;ve looked after children who now bring their own children, and patients who send us their parents, their partners and their friends. The same families have trusted us for decades, and most of our new patients still arrive because someone told a friend.</p>
            <div className="story-stats">
              <div><b>40+</b><span>years in the suburb</span></div>
              <div><b>3 gen.</b><span>of families</span></div>
              <div><b>1</b><span>caring local team</span></div>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/incoming/heritage.webp"
            alt="Three generations of a family embracing and laughing together"
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* INSURANCE */}
      <section className="sec sage-bg" style={{ textAlign: 'center' }}>
        <div className="container reveal">
          <div className="eyebrow">Using your health fund</div>
          <h2 style={{ marginTop: '12px', fontSize: 'clamp(38px, 4.8vw, 62px)' }}>We accept <em>all</em> major health funds</h2>
          <p style={{ maxWidth: '36em', margin: '14px auto 0' }}>
            Whatever fund you&apos;re with, you&apos;re covered here. We claim on the spot, so most of the time there&apos;s nothing to pay upfront beyond your gap.
          </p>
          <HealthFundLogos />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div className="ins-pill">On-the-spot HICAPS claiming · Medicare CDBS for eligible kids</div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="sec alt">
        <div className="container fees-grid">
          <div className="reveal">
            <div className="eyebrow">Honest about cost</div>
            <h2>Know the cost <em>before</em> you decide</h2>
            <p>One of the most stressful parts of the dentist is not knowing what it&apos;ll cost. We do things differently. You&apos;ll always get a clear written estimate before any treatment, and the time to think it over.</p>
            <ul className="fees-list-v2">
              <li>A clear, written care plan and quote, every time</li>
              <li>Payment plan options to spread larger treatment</li>
              <li>All the time you need to think it over, with no rush</li>
            </ul>
            <div style={{ marginTop: '26px' }}>
              <Link href="/fees" className="btn btn-ghost">See our fees &amp; payment options</Link>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/incoming/honest-about-cost.webp"
            alt="A friendly receptionist smiling while helping a patient at the front desk"
          />
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="sec" id="faq">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">The quiet questions</div>
            <h2>Things you might be wondering</h2>
          </div>
          <div className="faq-v2 reveal">
            {faqs.map(({ q, a }, i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section> */}

      {/* GALLERY */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Real smiles</div>
            <h2 style={{ fontSize: 'clamp(38px, 4.8vw, 62px)' }}>Gentle, natural-looking results</h2>
          </div>
          <div className="edu-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="svc reveal">
              <Photo src="/assets/incoming/smile-1.webp" hint="Before / after (understated)" sizes="(max-width: 820px) 100vw, 50vw" style={{ height: '140px', marginBottom: '12px' }} />
              <h4>Gentle smile refresh</h4>
            </div>
            <div className="svc reveal">
              <Photo src="/assets/incoming/smile-2.webp" hint="Real smile, real patient" sizes="(max-width: 820px) 100vw, 50vw" style={{ height: '140px', marginBottom: '12px' }} />
              <h4>Restoring a damaged tooth</h4>
            </div>
            <div className="svc reveal">
              <Photo src="/assets/incoming/smile-3.webp" hint="Subtle, natural result" sizes="(max-width: 820px) 100vw, 50vw" style={{ height: '140px', marginBottom: '12px' }} />
              <h4>Replacing a missing tooth</h4>
            </div>
            <div className="svc reveal">
              <Photo src="/assets/incoming/smile-4.webp" hint="Everyday result" sizes="(max-width: 820px) 100vw, 50vw" style={{ height: '140px', marginBottom: '12px' }} />
              <h4>A nervous patient's journey</h4>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }} className="reveal">
            <Link href="/our-work" className="btn btn-ghost">View more</Link>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="sec alt" id="education">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Learn at your own pace, no appointment needed</div>
            {/* Same one-line treatment as the Areas heading — see note there. */}
            <h2 style={{ fontSize: 'min(56px, 4.3vw)', whiteSpace: 'nowrap' }}>Answers to the things you&apos;ve been <em>wondering</em></h2>
            <p style={{ marginTop: '14px', fontSize: '18px' }}>
              Clear, judgement-free guides to the questions we hear most, from bleeding gums to nervous visits. Understanding your mouth is the first step to looking after it.
            </p>
          </div>
          <div className="edu-grid">
            <Link
              href="/learn/havent-been-to-the-dentist-in-years"
              className="svc reveal"
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <Photo
                src="/assets/incoming/article-1.webp"
                alt="Dentist explaining an X-ray to a patient in the chair"
                hint="Article image"
                sizes="(max-width: 820px) 100vw, 33vw"
                style={{ height: '140px', marginBottom: '12px' }}
              />
              <span style={{ fontSize: '12.5px', color: 'var(--clay-deep)', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                Nervous patients
              </span>
              <h4>Haven&apos;t been in years? Here&apos;s exactly what to expect.</h4>
              <p>A calm, step-by-step walk-through for an easier return.</p>
              <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>
                Read article &rarr;
              </span>
            </Link>
            <Link
              href="/learn/bleeding-gums"
              className="svc reveal"
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <Photo
                src="/assets/incoming/article-2.webp"
                alt="Dentist using a dental model to explain gum health to a patient"
                hint="Article image"
                sizes="(max-width: 820px) 100vw, 33vw"
                style={{ height: '140px', marginBottom: '12px' }}
              />
              <span style={{ fontSize: '12.5px', color: 'var(--clay-deep)', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                Gum health
              </span>
              <h4>Why are my gums bleeding?</h4>
              <p>What bleeding gums are trying to tell you, and when to act.</p>
              <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>
                Read article &rarr;
              </span>
            </Link>
            <Link
              href="/learn/how-often-should-you-see-the-dentist"
              className="svc reveal"
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <Photo
                src="/assets/incoming/article-3.webp"
                alt="Patient receiving a dental check-up in the clinic"
                hint="Article image"
                sizes="(max-width: 820px) 100vw, 33vw"
                style={{ height: '140px', marginBottom: '12px' }}
              />
              <span style={{ fontSize: '12.5px', color: 'var(--clay-deep)', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                Prevention
              </span>
              <h4>How Often Should You Really See the Dentist?</h4>
              <p>What actually determines your ideal check-up schedule.</p>
              <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>
                Read article &rarr;
              </span>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }} className="reveal">
            <Link href="/learn" className="btn btn-ghost">Browse the full library</Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="sec" id="areas">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Your local dentist in Melbourne&apos;s inner south-east</div>
            {/* nowrap + a purely viewport-derived size: the .sec-head 46em cap
                would otherwise break this over two lines. min() keeps it from
                growing past the 1180px container on wide screens. */}
            <h2 style={{ fontSize: 'min(56px, 4.3vw)', whiteSpace: 'nowrap' }}>Wherever you are, you&apos;re <em>welcome</em> here</h2>
            <p style={{ marginTop: '14px', fontSize: '18px', maxWidth: '40em', margin: '14px auto 0' }}>
              From our home on Dandenong Road in East St Kilda, we welcome patients from right across the inner south-east. Wherever you are, you&apos;ll find a welcoming dental home here.
            </p>
          </div>
          {/* Every suburb here has its own page, generated from data/suburbs.ts.
              Add a suburb there and it appears in this grid and the sitemap. */}
          <div className="areas-grid reveal">
            <Link href="/">East St Kilda</Link>
            {suburbs.map((s) => (
              <Link key={s.slug} href={suburbPath(s.slug)}>{s.name}</Link>
            ))}
          </div>
          <p className="areas-wider reveal">
            We also welcome patients from across the wider inner-Melbourne area, from Brighton and Bentleigh to South Melbourne, Richmond and beyond.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Finding us</div>
            <h2>Easy to get to, easy to park</h2>
          </div>
          <div className="loc-grid">
            <MapEmbed
              className="ph reveal"
              style={{ minHeight: '340px' }}
              title={`Map to ${business.name}, ${fullAddress}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${business.name}, ${fullAddress}`)}&output=embed`}
            />
            <div className="reveal">
              <p style={{ marginBottom: '6px' }}><b style={{ color: 'var(--ink)' }}>{fullAddress}</b></p>
              <p style={{ fontSize: '14.5px', marginBottom: '22px' }}>
                Off-street parking off Orrong Road · Trams 5 &amp; 64 and bus 220 nearby · Armadale station a 10–15 min walk · Wheelchair accessible
              </p>
              <p style={{ fontSize: '14.5px', marginBottom: '22px' }}>
                On the corner of Dandenong and Orrong Roads, easy to reach by car, tram or train.
              </p>
              <ul className="hours-list">
                <li><span>Monday – Thursday</span><b>8.30am – 6.00pm</b></li>
                <li><span>Friday</span><b>8.30am – 5.00pm</b></li>
                <li><span>Saturday</span><b>10.00am – 4.00pm</b></li>
                <li><span>Sunday</span><b>Closed</b></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
