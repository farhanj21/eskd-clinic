import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Gentle Dentistry for Anxious Patients | East St Kilda Dental',
  description:
    'Nervous about the dentist? East St Kilda Dental specialises in gentle, patient-first care for anxious patients. No rush, no judgement — just calm, compassionate dentistry.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/gentle' },
}

export default function GentlePage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal" style={{ maxWidth: '680px' }}>
              <span className="eyebrow light">Gentle Dentistry</span>
              <h1>You&apos;re in Safe Hands</h1>
              <p className="lede" style={{ color: 'rgba(246,239,227,.85)' }}>
                Dental anxiety is more common than you think. We see nervous patients every day — and we know exactly how to help. No rush, no judgement, no surprises.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="/booking" className="btn btn-primary">Book a Gentle Consultation</Link>
                <a href="tel:+61395273678" className="btn btn-ghost">(03) 9527 3678</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-grid">
            <div className="split-text reveal">
              <span className="eyebrow">Our Approach</span>
              <h2>We Move at Your Pace</h2>
              <p>
                Dental anxiety is valid. Whether it stems from a past experience, a fear of needles, loss of control, or simply not knowing what&apos;s coming — we take your concerns seriously and adjust our entire approach accordingly.
              </p>
              <p>
                Before we begin any treatment, we have a genuine conversation about what makes you anxious, what has helped in the past, and what signals you&apos;d like to use if you need a break. You are always in control.
              </p>
              <p>
                Our gentle injection technique, calm environment, and unhurried appointments mean that many patients who haven&apos;t been to the dentist for years — sometimes decades — leave feeling relieved they came.
              </p>
            </div>
            <div className="split-image reveal" style={{ transitionDelay: '.1s' }}>
              <div className="split-img-wrap" style={{ background: 'var(--surface-warm)', borderRadius: 'var(--radius-lg)', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--ink-light)', fontSize: '14px' }}>Clinic image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-warm)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How We Help</span>
            <h2>Designed for Nervous Patients</h2>
          </div>
          <div className="features-grid reveal" style={{ transitionDelay: '.1s' }}>
            {[
              { title: 'Tell Us Beforehand', body: 'When you book, let us know you\'re anxious. We\'ll note it in your file so the whole team is prepared before you arrive.' },
              { title: 'No Surprises', body: 'We explain every step before we do it. You know exactly what\'s happening and why. No sudden movements, no unexplained sounds.' },
              { title: 'A Stop Signal', body: 'We agree on a hand signal you can use at any moment to pause treatment. You are always in control.' },
              { title: 'Gentle Injections', body: 'Our dentists use a slow, careful injection technique that significantly reduces discomfort. Topical anaesthetic is always applied first.' },
              { title: 'Unhurried Appointments', body: 'We don\'t rush anxious patients. We book longer appointments so there\'s no pressure — just a calm, relaxed experience.' },
              { title: 'Music & Comfort', body: 'Bring headphones and your playlist. Let us know if you prefer a warm blanket or have any other comfort needs — we\'ll accommodate them.' },
            ].map((item, i) => (
              <div key={i} className="feature-card" style={{ transitionDelay: `${i * 0.06}s` }}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="section-head reveal">
            <span className="eyebrow">Common Questions</span>
            <h2>From Anxious Patients</h2>
          </div>
          <div className="faq-list reveal" style={{ transitionDelay: '.1s' }}>
            {[
              { q: 'What if I need to stop mid-treatment?', a: 'That\'s completely fine. We agree on a stop signal before we begin — usually a raised hand. Any time you signal, we stop immediately and give you a moment to regroup.' },
              { q: 'Can I come in just for a chat first?', a: 'Absolutely. A no-treatment meet-and-greet appointment lets you see the clinic, meet your dentist, and ask questions with no clinical procedures involved. Many of our anxious patients start this way.' },
              { q: 'Do you offer sedation?', a: 'We offer nitrous oxide (happy gas) for patients who would benefit from additional relaxation. We can discuss whether this is appropriate for you at your consultation.' },
              { q: 'I haven\'t been in years. Will you judge me?', a: 'Never. We genuinely don\'t judge gaps in dental care — we understand there are many reasons people avoid the dentist. Our only priority is helping you from where you are right now.' },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch variant="gentle" id="contact" />
    </main>
  )
}
