import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Why We\'re Different | East St Kilda Dental',
  description:
    'Decades of local trust, a gentle team, no judgement, and honest, comprehensive care. Eight reasons families choose East St Kilda Dental.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/about/different' },
}

const reasons = [
  {
    h4: 'Decades of local trust',
    p: "We've been on this corner since around 1980, with many second and third-generation patients. That history is something a new clinic simply can't replicate.",
  },
  {
    h4: 'No judgement, ever',
    p: "However long it's been, you'll be met with warmth, not a lecture. “No judgement” isn't a slogan for us, it's built into every call, visit and conversation.",
  },
  {
    h4: 'Comprehensive, not patchwork',
    p: 'We look at the whole picture, teeth, gums, bite and long-term health, and plan ahead, rather than just patching the tooth in front of us.',
  },
  {
    h4: 'Genuinely good with nervous patients',
    p: 'Dental anxiety is normal and we treat it as a clinical factor, not a barrier. Gentle pace, full control, and happy gas if you’d like it.',
  },
  {
    h4: 'A female-led clinical team',
    p: 'Dr Anbar Ganatra leads our clinical care, which many patients, especially those who feel anxious, tell us makes a real difference to how comfortable they feel.',
  },
  {
    h4: 'Coaching-informed communication',
    p: 'Our way of explaining things is shaped by coaching and behavioural-change principles, so you understand your care and never feel sold to.',
  },
  {
    h4: 'A multilingual team',
    p: 'Between us we speak several languages, including Mandarin, Hebrew, Russian, Hindi, Tamil and Kannada, so more of our community can feel at home here.',
  },
  {
    h4: 'Responsible, not cheap or pushy',
    p: "We're not the cheapest and we're not a high-pressure chain. We practise responsible dentistry: honest, preventive, and planned for the long term.",
  },
]

export default function AboutDifferentPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Why we&apos;re different</div>
            <h1>What makes <em>East St Kilda Dental</em> different</h1>
            <p className="lead">
              Plenty of clinics can clean your teeth. Here&apos;s what you get with us that you won&apos;t find just anywhere.
            </p>
            <div className="hero-cta">
              <Link href="/booking" className="btn">Book your visit</Link>
              <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
            </div>
          </div>
          <div className="ph tall reveal">
            <span>Warm, real photo of the team with a patient. Never stock.</span>
          </div>
        </div>
      </section>

      {/* ── WHAT SETS US APART ───────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Eight reasons families choose us</div>
            <h2>The difference is in how we care</h2>
          </div>
          <div className="svc-grid reveal">
            {reasons.map((r, i) => (
              <div key={i} className="svc">
                <h4>{r.h4}</h4>
                <p>{r.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN SHORT ─────────────────────────────────────── */}
      <section className="sec">
        <div className="container reveal" style={{ maxWidth: '48em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{ fontSize: '21px', fontFamily: 'var(--display)', color: 'var(--sage-deep)', lineHeight: 1.45 }}>
            Decades of trust, a gentle team, and honest, comprehensive care. <em>That&apos;s the difference.</em>
          </p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/about/story" className="btn btn-ghost">Our story</Link>
            <Link href="/about/team" className="btn btn-ghost">Meet the team</Link>
            <Link href="/gentle" className="btn btn-ghost">Nervous patients</Link>
          </div>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
