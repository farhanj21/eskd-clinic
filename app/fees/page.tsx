import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dental Fees & Costs | East St Kilda Dental — No Surprises',
  description:
    "You'll always know what something costs before it happens. $297 first visit, all major health funds, HUMM payment plans. East St Kilda Dental.",
  alternates: { canonical: 'https://www.eaststkildadental.com.au/fees' },
}

const paymentOptions = [
  {
    h4: 'HUMM',
    p: 'Spread the cost of larger treatment into manageable instalments.',
  },
  {
    h4: 'Fund My Dental',
    p: 'A dedicated dental payment plan to make treatment easier to budget for.',
  },
  {
    h4: 'All credit cards',
    p: 'Visa, Mastercard and American Express all welcome.',
  },
  {
    h4: "Children's cover (CDBS)",
    p: "Eligible children may be covered under Medicare's Child Dental Benefits Schedule.",
  },
]

const faq = [
  {
    q: 'Do I need private health insurance to come?',
    a: "Not at all. We welcome everyone, with or without cover. If you're not insured, we'll tell you the cost up front so there are no surprises.",
  },
  {
    q: 'What does the first visit cost?',
    a: "Your first visit is the Comprehensive Care Visit, a flat $297 with everything included. With most health funds you claim on the day and pay only a minimal gap, and your exact gap depends on your level of cover. We'll always give you the price before you book.",
  },
  {
    q: "What if I can't pay for treatment all at once?",
    a: 'We offer payment plans through HUMM and Fund My Dental, and accept all major credit cards, so larger treatment can be spread out.',
  },
  {
    q: 'Will I know the cost before any treatment?',
    a: "Always. You'll get a clear written estimate before anything goes ahead, with time to think it over.",
  },
]

export default function FeesPage() {
  return (
    <main>
      {/* ── HERO (centred, no image) ──────────────────────── */}
      <section className="hero-v2">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Costs, made clear</div>
          <h1>No surprises. <em>That&apos;s our promise on cost.</em></h1>
          <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            You&apos;ll always know what something costs before it happens. A written estimate, one simple price for your first visit, and flexible ways to pay. Money worries shouldn&apos;t get in the way of looking after yourself.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link href="/booking" className="btn">Book your visit</Link>
            <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
          </div>
          <div className="hero-proof" style={{ justifyContent: 'center' }}>
            <span>$297 first visit, all included</span>
            <span className="proof-dot" />
            <span>All major funds</span>
            <span className="proof-dot" />
            <span>Payment plans available</span>
          </div>
        </div>
      </section>

      {/* ── OFFER CTA BAND ───────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="ctaband reveal">
            <h3>New patient? Start with the Comprehensive Care Visit</h3>
            <p>
              Your thorough first visit, the exam, X-rays, scale, clean, fluoride and a clear care plan, for one simple price of $297 (valued at $499). With most health funds you claim on the day and pay only a minimal gap.
            </p>
            <div className="ctaband-actions">
              <Link href="/offer" className="btn">See what&apos;s included</Link>
              <Link href="/booking" className="btn btn-ghost-light">Book online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIRST VISIT ──────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '48em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">One simple price</div>
          <h2>Your first visit is the <em>Comprehensive Care Visit</em></h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            A thorough first visit with everything included, for one simple price of $297 (valued at $499). With most health funds you claim on the day and pay only a minimal gap; your exact gap depends on your level of cover. No cover? We&apos;ll tell you the cost up front, before you book. Either way, you&apos;ll know exactly where you stand.
          </p>
        </div>
      </section>

      {/* ── HEALTH FUNDS ─────────────────────────────────── */}
      <section className="sec" id="funds">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Claim on the spot</div>
            <h2>All major health funds, <em>claimed instantly</em></h2>
            <p style={{ marginTop: '14px', fontSize: '18px', maxWidth: '42em', marginLeft: 'auto', marginRight: 'auto' }}>
              Bring your health fund card and we&apos;ll claim through HICAPS on the day, so usually you only pay any gap. We accept every major Australian fund.
            </p>
          </div>
          <div className="ins-logos reveal">
            {['Bupa', 'Medibank', 'HCF', 'nib', 'Australian Unity', 'CBHS', '+ all major funds'].map(f => (
              <div key={f} className="lg">{f}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITTEN ESTIMATE ─────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal">
          <div className="sec-head center">
            <div className="eyebrow">Nothing happens without your say-so</div>
            <h2>You&apos;ll always get a <em>written estimate first</em></h2>
          </div>
          <div className="terms-band">
            <p>If you need treatment, you get a clear written estimate before anything goes ahead.</p>
            <span>Time to think it over, no pressure, and no surprise bills. We sort what matters most first and phase the rest so it stays manageable.</span>
          </div>
        </div>
      </section>

      {/* ── PAYMENT OPTIONS ──────────────────────────────── */}
      <section className="sec" id="payment">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Ways to pay that suit you</div>
            <h2>Flexible options for <em>bigger treatment</em></h2>
          </div>
          <div className="svc-grid reveal">
            {paymentOptions.map((opt, i) => (
              <div key={i} className="svc">
                <h4>{opt.h4}</h4>
                <p>{opt.p}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '24px', fontSize: '16px', color: 'var(--ink-soft)' }}>
            Not sure what works for you? Just ask. We&apos;ll talk it through and find a way that fits your budget.
          </p>
        </div>
      </section>

      {/* ── SUPER BAND ───────────────────────────────────── */}
      <div className="super-band-v2">
        <div className="super-band-inner reveal">
          <h2>Using Super For Essential Treatment</h2>
          <p>
            For significant, medically necessary treatment, the ATO may allow early access to your super on compassionate grounds, for example to help relieve chronic dental pain when other funding is not available. It does not cover cosmetic treatment. If it may be relevant to you, we can prepare the clinical report the ATO requires and point you to a licensed provider who manages the application. We never need your myGov details.
          </p>
          <div className="super-logo">AccessMySuper</div>
          <div style={{ marginTop: '28px' }}>
            <Link href="/super" className="btn-super">Learn More</Link>
          </div>
        </div>
      </div>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Money questions</div>
            <h2>Good to know</h2>
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
    </main>
  )
}
