import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Emergency Dental Care | East St Kilda Dental',
  description:
    "Dental emergency in East St Kilda? Call (03) 9527 3678 for same-day emergency appointments. Toothache, broken teeth, knocked-out teeth — we're here for you.",
  alternates: { canonical: 'https://www.eaststkildadental.com.au/emergency-dentist' },
}

const firstAid = [
  {
    h4: 'Knocked-out tooth',
    p: 'Hold it by the white crown, never the root, and don’t scrub it. If you can, gently place it back in the socket. If not, keep it in milk. Try to see us within the hour.',
  },
  {
    h4: 'Bad toothache',
    p: 'Rinse with warm, salty water and take your usual pain relief. Avoid very hot, cold or sweet food. Then call us.',
  },
  {
    h4: 'Broken or chipped tooth',
    p: 'Save any pieces, rinse your mouth with warm water, and press clean gauze on any bleeding. Call us to be seen.',
  },
  {
    h4: 'Swelling',
    p: 'Swelling of the gum, jaw or face can be a sign of infection. Call us the same day so we can act quickly.',
  },
  {
    h4: 'Lost filling or crown',
    p: 'Keep the crown if you have it, and avoid chewing on that side. Call us and we’ll re-secure it.',
  },
  {
    h4: 'A baby tooth knocked out',
    p: 'Do not put a baby tooth back in. Keep your child calm, bring the tooth with you, and call us for advice.',
  },
]

const faq = [
  {
    q: 'Will you get me out of pain today?',
    a: "That's our first priority. Call us and we'll do our best to see you the same day and relieve the pain, then plan any further treatment with you.",
  },
  {
    q: 'How much does an emergency appointment cost?',
    a: "You'll be told the cost of the emergency exam up front, and you'll get a written estimate before any treatment goes ahead. Payment options are available.",
  },
  {
    q: "I'm really nervous. Can you still help?",
    a: "Absolutely. Gentle care for anxious patients is one of the things we're known for, and we'll keep you calm and in control, with happy gas available if it helps.",
  },
  {
    q: "It's after hours. What should I do?",
    a: "If it's serious — trouble breathing or swallowing, heavy bleeding, a facial injury or spreading swelling — call 000 or go to a hospital emergency department. Otherwise, call us when we open and we'll fit you in.",
  },
]

export default function EmergencyPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Dental emergency?</div>
            <h1>In pain? <em>We&apos;ll help you today.</em></h1>
            <p className="lead">
              Take a breath. Most dental emergencies look scarier than they feel, and we keep time aside every day to see people quickly. Call us and we&apos;ll talk you through what to do.
            </p>
            <div className="hero-cta">
              <a href="tel:+61395273678" className="btn">Call (03) 9527 3678</a>
              <Link href="/book" className="btn btn-ghost">Book online</Link>
            </div>
            <div className="hero-proof">
              <span>Same-day care where possible</span>
              <span className="proof-dot" />
              <span>Gentle with nervous patients</span>
              <span className="proof-dot" />
              <span>40+ years local</span>
            </div>
            <p style={{ marginTop: '18px', fontSize: '14.5px', color: 'var(--ink-faint)' }}>
              Open Mon&ndash;Thu to 4pm, Fri to 4.30pm, monthly Saturdays. After hours and serious? See the red box below.
            </p>
          </div>
          <div className="ph tall reveal">
            <span>Calm, reassuring photo: a friendly team member on the phone, or a warm reception. Nothing graphic or clinical.</span>
          </div>
        </div>
      </section>

      {/* ── IS IT AN EMERGENCY? ──────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">When to call us straight away</div>
            <h2>These usually need <em>prompt care</em></h2>
          </div>
          <ul className="offer-includes reveal" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <li>Severe or throbbing toothache</li>
            <li>A knocked-out or loose adult tooth</li>
            <li>A broken, chipped or cracked tooth</li>
            <li>Swelling of the gum, jaw or face</li>
            <li>A lost filling or crown</li>
            <li>Bleeding that won&apos;t settle</li>
            <li>Pain after recent treatment</li>
            <li>An accident or knock to the mouth</li>
          </ul>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '26px', fontSize: '17px' }}>
            Not sure? Call us anyway on{' '}
            <a href="tel:+61395273678" style={{ color: 'var(--clay-deep)', fontWeight: 600 }}>(03) 9527 3678</a>{' '}
            and we&apos;ll help you work out what&apos;s needed.
          </p>
        </div>
      </section>

      {/* ── WHAT TO DO RIGHT NOW ─────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Before you reach us</div>
            <h2>Simple first aid that <em>can save a tooth</em></h2>
          </div>
          <div className="svc-grid reveal">
            {firstAid.map((item, i) => (
              <div key={i} className="svc">
                <h4>{item.h4}</h4>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN TO GO STRAIGHT TO HOSPITAL ─────────────── */}
      <section className="sec alt">
        <div className="container reveal">
          <div style={{ background: '#FBEDE4', border: '1px solid var(--clay)', borderLeft: '5px solid var(--clay-deep)', borderRadius: '14px', padding: '30px 32px', maxWidth: '820px', margin: '0 auto' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', color: 'var(--clay-deep)', margin: '0 0 12px' }}>
              Some emergencies need a hospital, not a dental chair
            </h3>
            <p style={{ margin: '0 0 14px' }}>
              Call <b>000</b> or go to your nearest hospital emergency department straight away if you have:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.9 }}>
              <li>Difficulty breathing or swallowing</li>
              <li>Heavy bleeding that won&apos;t stop</li>
              <li>A serious facial injury</li>
              <li>Swelling spreading towards your eye or neck, or you feel very unwell</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ──────────────────────────────────── */}
      <section className="sec">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '48em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Calm, gentle, fast</div>
          <h2>We&apos;ll get you comfortable, <em>then sort the cause</em></h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            We keep time aside each day for emergencies, and our first job is simply to get you out of pain. If you&apos;re nervous, that&apos;s completely fine. Looking after anxious patients is one of the things we&apos;re known for, and we&apos;ll go gently.
          </p>
          <p style={{ fontSize: '16px', marginTop: '16px', color: 'var(--ink-soft)' }}>
            You&apos;ll get a clear written estimate before any treatment, and we have payment options if you need them. If it&apos;s outside our hours and serious, please use the hospital guidance above.
          </p>
          <div style={{ marginTop: '24px' }}>
            <a className="btn" href="tel:+61395273678">Call (03) 9527 3678</a>
          </div>
        </div>
      </section>

      {/* ── SUPER BAND ───────────────────────────────────── */}
      <section className="super-band">
        <div className="super-band-wrap">
          <h2>Using Super For Essential Treatment</h2>
          <p>
            For significant, medically necessary treatment, the ATO may allow early access to your super on compassionate grounds, for example to help relieve chronic dental pain when other funding is not available. It does not cover cosmetic treatment. If it may be relevant to you, we can prepare the clinical report the ATO requires and point you to a licensed provider who manages the application. We never need your myGov details.
          </p>
          <div className="super-logo">AccessMySuper</div>
          <div style={{ marginTop: '24px' }}>
            <Link href="/using-your-super" className="btn-super">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Quick answers</div>
            <h2>Emergency questions</h2>
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

      {/* ── IN PAIN NOW ──────────────────────────────────── */}
      <section className="sec sage-bg">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">We&apos;re here to help</div>
          <h2>In pain now? <em>Call us.</em></h2>
          <p style={{ maxWidth: '34em', margin: '0 auto' }}>
            Our friendly team will talk you through what to do and find you the soonest possible time.
          </p>
          <div style={{ marginTop: '22px' }}>
            <a className="btn" href="tel:+61395273678">Call (03) 9527 3678</a>
          </div>
          <p style={{ marginTop: '14px', fontSize: '14px', opacity: 0.85 }}>
            <Link href="/book" style={{ color: 'var(--cream)', textDecoration: 'underline' }}>or book online</Link>
          </p>
        </div>
      </section>

      <GetInTouch variant="emergency" id="contact" />
    </main>
  )
}
