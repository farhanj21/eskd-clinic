import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Emergency Dental Care | East St Kilda Dental',
  description:
    'Dental emergency in East St Kilda? Call (03) 9527 3678 for same-day emergency appointments. Toothache, broken teeth, knocked-out teeth — we\'re here for you.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/emergency' },
}

export default function EmergencyPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: '#8B1A1A' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal" style={{ maxWidth: '680px' }}>
              <span className="eyebrow light">Emergency Dental</span>
              <h1>Same-Day Emergency Care</h1>
              <p className="lede" style={{ color: 'rgba(255,235,235,.85)' }}>
                Dental emergencies don&apos;t wait. Neither do we. Call us now for same-day appointments — pain relief and urgent treatment as fast as possible.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <a href="tel:+61395273678" className="btn btn-emergency" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
                  Call Now — (03) 9527 3678
                </a>
                <Link href="/booking" className="btn btn-ghost">Book Online</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff8f8' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Emergency Situations</span>
            <h2>We Treat All Dental Emergencies</h2>
          </div>
          <div className="emergency-grid reveal" style={{ transitionDelay: '.1s' }}>
            {[
              { title: 'Severe Toothache', body: 'Intense, persistent tooth pain is usually a sign of infection or nerve involvement. We\'ll diagnose the cause and provide fast pain relief.' },
              { title: 'Broken or Chipped Tooth', body: 'A broken tooth needs prompt assessment. Depending on the extent of the break, treatment may include bonding, a crown, or extraction.' },
              { title: 'Knocked-Out Tooth', body: 'Time is critical. Keep the tooth moist (in milk or saliva), call us immediately, and come in as fast as possible — re-implantation is sometimes possible.' },
              { title: 'Lost Filling or Crown', body: 'A lost restoration exposes sensitive tooth structure. We\'ll replace or re-cement it promptly to prevent further damage or pain.' },
              { title: 'Dental Abscess', body: 'A dental abscess is a serious infection that can spread if untreated. Signs include swelling, severe pain, fever, and a bad taste. This requires urgent care.' },
              { title: 'Wisdom Tooth Pain', body: 'Impacted or infected wisdom teeth can cause intense pain and swelling. We provide same-week assessment and can relieve the immediate infection and pain.' },
            ].map((item, i) => (
              <div key={i} className="emergency-card" style={{ transitionDelay: `${i * 0.06}s` }}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="section-head left reveal">
            <span className="eyebrow">First Aid Guidance</span>
            <h2>While You Wait</h2>
          </div>
          <div className="faq-list reveal" style={{ transitionDelay: '.1s' }}>
            {[
              { q: 'My child knocked out a permanent tooth — what do I do?', a: 'Pick up the tooth by the crown (not the root). If dirty, rinse gently with milk or saline — not tap water. Keep it moist: place it back in the socket if possible, or in milk. Call us immediately. Speed matters — the best outcomes occur within 30–60 minutes of the injury.' },
              { q: 'I have a dental abscess — is it an emergency?', a: 'Yes. Dental abscesses can spread to the jaw, neck or even the airway if untreated. If you have significant swelling, difficulty swallowing, or fever, go to an emergency department as well as calling us.' },
              { q: 'My filling fell out but it doesn\'t hurt — do I still need to come in urgently?', a: 'It\'s less critical than active pain, but exposed tooth structure can decay quickly and become sensitive. Call us to book the next available appointment — usually within a day or two.' },
              { q: 'What\'s the best painkiller for a toothache?', a: 'Ibuprofen (if appropriate for you) or paracetamol can help manage dental pain short-term. Clove oil (eugenol) on a cotton swab over the tooth can also provide temporary relief. These are bridge measures only — please call us.' },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch variant="emergency" id="contact" />
    </main>
  )
}
