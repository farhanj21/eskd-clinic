import type { CSSProperties } from 'react'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

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

export const metadata = {
  title: 'East St Kilda Dental | Gentle Family & Emergency Dentist',
  description:
    'Gentle, judgement-free dentist in East St Kilda. Caring for local families since 1980 with comprehensive check-ups, nervous-patient care, kids and emergencies. Book today.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/' },
}

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'East St Kilda Dental',
  description: 'Gentle, judgement-free family dentistry in East St Kilda since 1980.',
  url: 'https://eaststkildadental.com.au',
  telephone: '+61-3-9527-3678',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 Dandenong Rd',
    addressLocality: 'East St Kilda',
    addressRegion: 'VIC',
    postalCode: '3183',
    addressCountry: 'AU',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:30', closes: '16:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:30', closes: '16:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '16:00' },
  ],
  geo: { '@type': 'GeoCoordinates', latitude: -37.8714, longitude: 145.0006 },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "It's been years since I went. Will you judge me?", acceptedAnswer: { '@type': 'Answer', text: 'Never. A huge number of our patients come to us after a long gap. There are no lectures and no raised eyebrows here, only a warm welcome and a care plan to move forward.' } },
    { '@type': 'Question', name: "I'm really nervous about the dentist. Can you help?", acceptedAnswer: { '@type': 'Answer', text: "Yes, this is one of the things we do best. Tell us you're anxious and we'll slow right down, talk you through everything, and offer happy gas and other comfort options." } },
    { '@type': 'Question', name: 'How much will it cost?', acceptedAnswer: { '@type': 'Answer', text: "You'll always get a clear written estimate before any treatment begins, and time to think it over. We also offer payment plans for larger treatment." } },
    { '@type': 'Question', name: 'Do you take my health fund?', acceptedAnswer: { '@type': 'Answer', text: 'We accept all major Australian health funds and claim on the spot, so usually you only pay any gap on the day.' } },
    { '@type': 'Question', name: 'What happens at my first visit?', acceptedAnswer: { '@type': 'Answer', text: "A relaxed chat about your history and concerns, then a gentle, comprehensive check, and finally a clear, prioritised care plan. You're never rushed." } },
  ],
}

export default function Home() {
  return (
    <main style={whiteTheme}>
      <JsonLd data={dentistSchema} />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Serving Melbourne and surrounds since 1980</div>
            <h1>Trusted for <em>skilled, heartfelt dentistry</em></h1>
            <p className="lead">From family check-ups to cosmetic care, we provide gentle, comprehensive dentistry trusted by generations of local families.</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
            </div>
            <p style={{ marginTop: '14px', fontSize: '15px' }}>
              <Link href="/comprehensive-care-visit" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>
                New patient? The Comprehensive Care Visit, $297 (valued at $499) &rarr;
              </Link>
            </p>
          </div>
          <div className="ph tall reveal">
            <span>Warm, real photo: a friendly clinician with a patient mid-conversation, soft natural light.</span>
          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      <section className="hero-proof-band">
        <div className="container">
          <div className="hero-proof">
            <span><span className="proof-stars">★★★★★</span> 5.0 on Google</span>
            <span className="proof-dot" />
            <span>40+ years local</span>
            <span className="proof-dot" />
            <span>All health funds accepted</span>
          </div>
        </div>
      </section>

      {/* HOW WE'RE DIFFERENT */}
      <section className="sec alt">
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
      </section>

      {/* REVIEWS */}
      <section className="sec">
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
      </section>

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
            <div className="ph" style={{ borderRadius: 0, minHeight: '100%' }}>
              <span>Calm photo: the consult room or a relaxed patient-and-dentist moment.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">How we can help</div>
            <h2>Care for every stage of life</h2>
            <p style={{ marginTop: '14px', fontSize: '17px', maxWidth: '42em', marginLeft: 'auto', marginRight: 'auto' }}>
              From routine check-ups and emergency dentistry to fillings, crowns, implants and cosmetic care, here is how we look after East St Kilda and the surrounding suburbs.
            </p>
          </div>
          <div className="svc-grid-v2">
            <div className="svc-item reveal">
              <h4>Check-ups &amp; cleans</h4>
              <p>Gentle, thorough preventive care to keep small things small.</p>
              <Link href="/services/check-ups">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4>Emergency dentistry</h4>
              <p>In pain? We&apos;ll see you quickly and get you comfortable.</p>
              <Link href="/emergency-dentist">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4>Fillings &amp; restorations</h4>
              <p>Quietly fixing what needs fixing, preserving your natural teeth.</p>
              <Link href="/services/fillings">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4>Crowns &amp; root canals</h4>
              <p>Saving teeth and easing pain, explained every step of the way.</p>
              <Link href="/services/crowns-and-bridges">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4>Dental implants</h4>
              <p>Replacing missing teeth so you can eat and smile with ease.</p>
              <Link href="/services/dental-implants">Learn more</Link>
            </div>
            <div className="svc-item reveal">
              <h4>Cosmetic dentistry</h4>
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

      {/* NERVOUS PATIENTS */}
      <section className="sec sage-bg" id="nervous">
        <div className="container nervous-grid">
          <div className="ph tall reveal">
            <span>Soft, reassuring image: calm hands, a relaxed patient, or the gentle clinic environment.</span>
          </div>
          <div className="reveal">
            <div className="eyebrow">Nervous and anxious patients</div>
            <h2>Scared of the dentist? You&apos;re exactly who we&apos;re <em>best</em> with.</h2>
            <p>Many of our patients arrive having avoided the dentist for years, often after a bad experience long ago. Looking after frightened patients is one of the things we are known for. Our gentle approach pairs careful clinical care with a calm, coaching-informed way of working, developed specifically for dental fear, so it feels safe from the moment you walk in. Tell us you&apos;re anxious, and we go entirely at your pace.</p>
            <div className="chips">
              <span className="chip">Happy gas and sedation options</span>
              <span className="chip">Calm, unhurried pacing</span>
              <span className="chip">A coaching-informed approach to fear</span>
              <span className="chip">Stop any time, no questions asked</span>
            </div>
            <blockquote className="nervous-proof">
              Most of our most anxious patients tell us the hardest part was making the booking. Once they are in the chair and know they can stop any time, the fear starts to settle.
              <cite>What nervous patients often tell us</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FIRST VISIT */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Before you arrive</div>
            <h2>What your first visit <em>actually</em> looks like</h2>
          </div>
          <div className="steps-v2">
            <div className="step-v2 reveal">
              <div className="num" />
              <h4>A warm welcome</h4>
              <p>A friendly hello, a comfortable seat, and a chat about what&apos;s on your mind.</p>
            </div>
            <div className="step-v2 reveal">
              <div className="num" />
              <h4>We listen first</h4>
              <p>You tell us your history and worries before anyone picks up an instrument.</p>
            </div>
            <div className="step-v2 reveal">
              <div className="num" />
              <h4>A gentle, full check</h4>
              <p>A calm, comprehensive look at your teeth, gums and bite. We show you what we see on screen and explain it in plain language.</p>
            </div>
            <div className="step-v2 reveal">
              <div className="num" />
              <h4>Your clear care plan</h4>
              <p>A simple, prioritised care plan and our honest recommendation. You decide in your own time, at your own pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="sec">
        <div className="container">
          <div className="ctaband reveal">
            <h3>Not sure where to start?</h3>
            <p>Book a visit, or leave your details and we&apos;ll call you back. We&apos;ll help you work out what you actually need, no commitment.</p>
            <p style={{ fontSize: '14.5px', marginTop: '8px' }}>
              <Link href="/comprehensive-care-visit" style={{ color: 'var(--sage-tint)', fontWeight: 600 }}>
                New here? Start with the Comprehensive Care Visit, $297 &rarr;
              </Link>
            </p>
            <div className="ctaband-actions">
              <Link href="/book" className="btn">Book your visit</Link>
              <Link href="/contact" className="btn btn-ghost-light">Request a callback</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="sec">
        <div className="container">
          <div className="team-lead-grid">
            <div className="ph tall reveal">
              <Image
                src="/assets/team/team-home.webp"
                alt="The East St Kilda Dental team"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 820px) 100vw, 40vw"
              />
            </div>
            <div className="reveal">
              <div className="eyebrow">The people who&apos;ll care for you</div>
              <h2>A gentle team you&apos;ll get to <em>know</em></h2>
              <p>Led by Dr Anbar Ganatra, with a team you&apos;ll come to know by name. Calm, unhurried, and genuinely glad you came in. You&apos;ll see the same familiar faces each visit.</p>
            </div>
          </div>
          <div className="team-grid-v2">
            <div className="team-member reveal">
              <div className="ph">
                <Image
                  src="/assets/team/anbar-ganatra.webp"
                  alt="Dr Anbar Ganatra – Principal Dentist"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 820px) 50vw, 25vw"
                />
              </div>
              <h4>Dr Anbar Ganatra</h4>
              <span>Principal Dentist</span>
            </div>
            <div className="team-member reveal">
              <div className="ph">
                <Image
                  src="/assets/team/edmund-goldman.webp"
                  alt="Dr Edmund Goldman – Dentist & Prosthodontist"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 820px) 50vw, 25vw"
                />
              </div>
              <h4>Dr Edmund Goldman</h4>
              <span>Dentist &amp; Prosthodontist</span>
            </div>
            <div className="team-member reveal">
              <div className="ph">
                <Image
                  src="/assets/team/jarrod-dean.webp"
                  alt="Dr Jarrod Dean – General Dentist"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 820px) 50vw, 25vw"
                />
              </div>
              <h4>Dr Jarrod Dean</h4>
              <span>General Dentist</span>
            </div>
            <div className="team-member reveal">
              <div className="ph"></div>
              <h4>Beverly Spector</h4>
              <span>Hygienist</span>
            </div>
          </div>
          <div className="lang-band reveal">
            <b>We speak your language.</b> Our team can care for you in English, Mandarin, Hebrew, Russian, Hindi, Tamil and Kannada.
          </div>
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
          <div className="ph tall reveal">
            <span>Heritage-feel image: the practice exterior, an old neighbourhood photo, or a multi-generational family moment.</span>
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="sec" style={{ textAlign: 'center' }}>
        <div className="container reveal">
          <div className="eyebrow">Using your health fund</div>
          <h2 style={{ marginTop: '12px' }}>We accept <em>all</em> major health funds</h2>
          <p style={{ maxWidth: '36em', margin: '14px auto 0' }}>
            Whatever fund you&apos;re with, you&apos;re covered here. We claim on the spot, so most of the time there&apos;s nothing to pay upfront beyond your gap.
          </p>
          <div className="ins-logos">
            <div className="lg">Bupa</div>
            <div className="lg">Medibank</div>
            <div className="lg">HCF</div>
            <div className="lg">nib</div>
            <div className="lg">Australian Unity</div>
            <div className="lg">+ all others</div>
          </div>
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
          <div className="ph tall reveal">
            <span>Calm image: front desk welcome, or hands with a printed care plan.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">The quiet questions</div>
            <h2>Things you might be wondering</h2>
          </div>
          <div className="faq-v2 reveal">
            <details open>
              <summary>It&apos;s been years since I went. Will you judge me?</summary>
              <p>Never. A huge number of our patients come to us after a long gap. There are no lectures and no raised eyebrows here, only a warm welcome and a care plan to move forward.</p>
            </details>
            <details>
              <summary>I&apos;m really nervous about the dentist. Can you help?</summary>
              <p>Yes, this is one of the things we do best. Tell us you&apos;re anxious and we&apos;ll slow right down, talk you through everything, and offer happy gas and other comfort options.</p>
            </details>
            <details>
              <summary>How much will it cost?</summary>
              <p>You&apos;ll always get a clear written estimate before any treatment begins, and time to think it over. We also offer payment plans for larger treatment.</p>
            </details>
            <details>
              <summary>Do you take my health fund?</summary>
              <p>We accept all major Australian health funds and claim on the spot, so usually you only pay any gap on the day.</p>
            </details>
            <details>
              <summary>What happens at my first visit?</summary>
              <p>A relaxed chat about your history and concerns, then a gentle, comprehensive check, and finally a clear, prioritised care plan. You&apos;re never rushed.</p>
            </details>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Real smiles</div>
            <h2>Gentle, natural-looking results</h2>
          </div>
          <div className="gallery-v2">
            <div className="ph reveal"><span>Before / after (understated)</span></div>
            <div className="ph reveal"><span>Real smile, real patient</span></div>
            <div className="ph reveal"><span>Subtle, natural result</span></div>
            <div className="ph reveal"><span>Everyday result</span></div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="sec alt" id="education">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Learn at your own pace, no appointment needed</div>
            <h2>Answers to the things you&apos;ve been <em>wondering</em></h2>
            <p style={{ marginTop: '14px', fontSize: '18px' }}>
              Clear, judgement-free guides to the questions we hear most, from bleeding gums to nervous visits. Understanding your mouth is the first step to looking after it.
            </p>
          </div>
          <div className="edu-grid">
            <div className="edu-art reveal">
              <div className="ph"><span>Article image</span></div>
              <span>Nervous patients</span>
              <h4>Haven&apos;t been in years? Here&apos;s exactly what to expect.</h4>
              <p>A calm, step-by-step walk-through for an easier return.</p>
            </div>
            <div className="edu-art reveal">
              <div className="ph"><span>Article image</span></div>
              <span>Sore gums</span>
              <h4>Why are my gums bleeding?</h4>
              <p>What bleeding gums are trying to tell you, and when to act.</p>
            </div>
            <div className="edu-art reveal">
              <div className="ph"><span>Article image</span></div>
              <span>Your visit</span>
              <h4>Do I really need a crown?</h4>
              <p>How to tell, in plain language and without the pressure.</p>
            </div>
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
            <h2>Wherever you are, you&apos;re <em>welcome</em> here</h2>
            <p style={{ marginTop: '14px', fontSize: '18px', maxWidth: '40em', margin: '14px auto 0' }}>
              From our home on Dandenong Road in East St Kilda, we welcome patients from right across the inner south-east. Wherever you are, you&apos;ll find a calm, welcoming dental home here.
            </p>
          </div>
          <div className="areas-grid reveal">
            <Link href="/">East St Kilda</Link>
            <Link href="/dentist-st-kilda">St Kilda</Link>
            <Link href="/dentist-st-kilda-west">St Kilda West</Link>
            <Link href="/dentist-balaclava">Balaclava</Link>
            <Link href="/dentist-elwood">Elwood</Link>
            <Link href="/dentist-elsternwick">Elsternwick</Link>
            <Link href="/areas-we-serve/ripponlea">Ripponlea</Link>
            <Link href="/dentist-caulfield">Caulfield</Link>
            <Link href="/dentist-caulfield-north">Caulfield North</Link>
            <Link href="/dentist-windsor">Windsor</Link>
            <Link href="/dentist-prahran">Prahran</Link>
            <Link href="/dentist-armadale">Armadale</Link>
            <Link href="/areas-we-serve/glen-huntly">Glen Huntly</Link>
            <Link href="/dentist-carnegie">Carnegie</Link>
            <Link href="/areas-we-serve/gardenvale">Gardenvale</Link>
            <Link href="/dentist-albert-park">Albert Park</Link>
            <Link href="/areas-we-serve/middle-park">Middle Park</Link>
            <Link href="/dentist-south-yarra">South Yarra</Link>
            <Link href="/areas-we-serve/toorak">Toorak</Link>
            <Link href="/areas-we-serve/malvern">Malvern</Link>
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
            <div className="ph reveal" style={{ minHeight: '340px' }}>
              <span>Embedded Google Map · 364 Dandenong Rd, East St Kilda VIC 3183</span>
            </div>
            <div className="reveal">
              <p style={{ marginBottom: '6px' }}><b style={{ color: 'var(--ink)' }}>364 Dandenong Rd, East St Kilda VIC 3183</b></p>
              <p style={{ fontSize: '14.5px', marginBottom: '22px' }}>
                Off-street parking off Orrong Road · Trams 5 &amp; 64 and bus 220 nearby · Armadale station a 10–15 min walk · Wheelchair accessible
              </p>
              <p style={{ fontSize: '14.5px', marginBottom: '22px' }}>
                On the corner of Dandenong and Orrong Roads, easy to reach by car, tram or train.
              </p>
              <ul className="hours-list">
                <li><span>Monday – Thursday</span><b>8.30am – 4.00pm</b></li>
                <li><span>Friday</span><b>8.30am – 4.30pm</b></li>
                <li><span>Saturday (monthly)</span><b>8.00am – 4.00pm</b></li>
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
