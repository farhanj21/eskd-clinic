import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'
import { business, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'Using Your Super for Dental Treatment | East St Kilda Dental',
  description:
    'If significant dental treatment is affecting your daily life, you may be able to access superannuation early on compassionate grounds. East St Kilda Dental prepares the ATO report.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/using-your-super' },
})

const canFund = [
  { h4: 'Dental implants', p: 'Single implants through to full-mouth rehabilitation and All-on-4.' },
  { h4: 'Crowns & restorations', p: 'Rebuilding damaged or failing teeth so you can eat comfortably again.' },
  { h4: 'Dentures', p: 'Restoring the ability to chew and speak with confidence.' },
  { h4: 'Root canal & extractions', p: 'Resolving infection and persistent pain.' },
  { h4: 'Orthodontics', p: 'Where alignment affects function or health, not for appearance alone.' },
  { h4: 'Full-mouth rehabilitation', p: 'Comprehensive, staged care to restore a healthy, working mouth.' },
]

const howItWorks = [
  { h4: '1 · Talk to us', p: 'Come in for a consultation so we understand your needs and concerns.' },
  { h4: '2 · Your care plan', p: 'We prepare a clear, prioritised care plan and a written estimate.' },
  { h4: '3 · We prepare the report', p: 'We complete the clinical report the ATO requires for your application.' },
  { h4: '4 · AccessMySuper applies', p: 'AccessMySuper, a licensed provider, lodges and manages your ATO application.' },
  { h4: '5 · Funds released, care begins', p: 'Once approved, the released funds cover your treatment and we get started.' },
]

const faq = [
  {
    q: 'What can it be used for?',
    a: "Medically necessary treatment that relieves pain or restores function, such as implants, crowns, dentures and full-mouth rehabilitation. Cosmetic-only treatment is not eligible, and the ATO makes the final decision.",
  },
  {
    q: "Who decides if I'm eligible?",
    a: "The ATO, based on medical necessity. We, and where needed your doctor, provide the reports, and AccessMySuper helps you lodge the application.",
  },
  {
    q: 'Do I have to pay upfront?',
    a: "Once your application is approved, the released super funds cover your treatment. If there's a gap, we can talk through payment plans.",
  },
  {
    q: 'How long does it take?',
    a: 'Applications are usually processed within a few weeks once lodged with the ATO. AccessMySuper keeps you updated along the way.',
  },
  {
    q: 'Can I access it for a family member?',
    a: "In some cases super can be used for a dependant's treatment. AccessMySuper can advise on your situation.",
  },
  {
    q: 'Will you ask for my myGov login?',
    a: 'Never. We do not need, and will never ask for, your myGov details.',
  },
]

export default function SuperPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">A funding option for essential treatment</div>
            <h1>Using your super for <em>the care you need</em></h1>
            <p className="lead">
              If significant dental treatment is affecting your daily life, you may be able to access some of your superannuation early, on compassionate grounds, to pay for it. We&apos;ll prepare the report the ATO needs and connect you with AccessMySuper, who guide you through the rest.
            </p>
            <div className="hero-cta">
              <Link href="/online-booking" className="btn">Book a consultation</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
            <div className="hero-proof">
              <span>ATO compassionate grounds</span>
              <span className="proof-dot" />
              <span>For medically necessary care</span>
              <span className="proof-dot" />
              <span>We prepare the dental report</span>
            </div>
            <p style={{ marginTop: '18px', fontSize: '14.5px', color: 'var(--ink-faint)' }}>
              Facilitated by AccessMySuper, an external licensed provider. Eligibility is decided by the ATO.
            </p>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/using-your-super/super.webp"
            alt="A dentist and patient talking through a care plan together at the clinic"
            hint="Warm, real photo: a calm conversation between patient and dentist, care plan on the table."
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── WHAT IT IS ───────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ maxWidth: '50em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">In plain language</div>
          <h2>What is compassionate release of super?</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            The Australian Taxation Office lets people access part of their superannuation early, on compassionate grounds, when they need medically necessary treatment they cannot otherwise afford. Dental care is included where it relieves chronic pain or restores function.
          </p>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            It is meant for genuine clinical need, not cosmetic work. Whether it applies to you is decided by the ATO, based on the reports your practitioners provide.
          </p>
        </div>
      </section>

      {/* ── WHAT IT CAN FUND ─────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Where it can help</div>
            <h2>Treatment it may help fund</h2>
            <p style={{ marginTop: '14px', fontSize: '17px', maxWidth: '42em', marginLeft: 'auto', marginRight: 'auto' }}>
              Usually larger, function-restoring or pain-relieving treatment, such as:
            </p>
          </div>
          <div className="svc-grid reveal">
            {canFund.map((item, i) => (
              <div key={i} className="svc">
                <h4>{item.h4}</h4>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '24px', fontSize: '15px', color: 'var(--ink-faint)' }}>
            Cosmetic-only treatment, such as whitening or veneers for appearance alone, is not eligible.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Step by step</div>
            <h2>How it works, made simple</h2>
          </div>
          <div className="svc-grid reveal">
            {howItWorks.map((step, i) => (
              <div key={i} className="svc">
                <h4>{step.h4}</h4>
                <p>{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS ELIGIBLE ──────────────────────────────── */}
      <section className="sec">
        <div className="container reveal" style={{ maxWidth: '46em', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <div className="eyebrow">Decided by the ATO</div>
          <h2>Who can access it?</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            Eligibility is determined by the ATO, and generally applies where:
          </p>
          <ul className="offer-includes" style={{ textAlign: 'left', maxWidth: '36em', margin: '18px auto 0' }}>
            <li>treatment is needed to relieve chronic pain or restore function</li>
            <li>going without it would harm your oral or general health</li>
            <li>you have no other reasonable way to pay for it</li>
            <li>your treatment is supported by the required practitioner reports</li>
          </ul>
          <p style={{ fontSize: '17px', marginTop: '18px' }}>
            Not sure if it applies to you? Ask us, and we&apos;ll talk it through honestly.
          </p>
        </div>
      </section>

      {/* ── ACCESSMYSUPER ────────────────────────────────── */}
      <section className="sec sage-bg">
        <div className="container reveal" style={{ maxWidth: '48em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">You&apos;re in good hands</div>
          <h2>AccessMySuper handles the application</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            AccessMySuper is an external, licensed provider that specialises in early-release applications. They manage the paperwork with the ATO and answer the financial questions that sit outside our role as your dental team. We never need your myGov details.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Good to know</div>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            {faq.map((item, i) => (
              <details key={i} open={i === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch variant="super" id="contact" />
    </main>
  )
}
