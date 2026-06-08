import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Use Your Superannuation for Dental | East St Kilda Dental',
  description:
    'Did you know you may be able to access your superannuation early for essential dental treatment? Our team can help you understand the process. East St Kilda Dental.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/super' },
}

export default function SuperPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--teal-700)' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal" style={{ maxWidth: '680px' }}>
              <span className="eyebrow light">Superannuation for Dental</span>
              <h1>Use Your Super for Dental Treatment</h1>
              <p className="lede" style={{ color: 'rgba(246,239,227,.85)' }}>
                If cost is a barrier to the dental care you need, you may be eligible to access your superannuation early under the ATO&apos;s Compassionate Grounds scheme. Our team can help you understand whether you qualify.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="#contact" className="btn btn-super">Talk to Our Team</Link>
                <a href="tel:+61395273678" className="btn btn-ghost">(03) 9527 3678</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-head left reveal">
            <span className="eyebrow">How It Works</span>
            <h2>The Compassionate Grounds Scheme</h2>
          </div>
          <div className="prose reveal" style={{ transitionDelay: '.1s' }}>
            <p>
              The Australian Tax Office (ATO) administers an early superannuation release scheme for individuals who need to access their retirement savings on compassionate grounds. Eligible dental treatment may qualify under this scheme.
            </p>
            <p>
              To be eligible, the treatment must be medically necessary — meaning it is required to alleviate acute or chronic pain, or to prevent serious deterioration of health. Purely cosmetic procedures generally do not qualify.
            </p>
            <p>
              The application process requires documentation from two treating dental practitioners confirming the diagnosis and proposed treatment plan. Our team can assist with preparing the required letters.
            </p>
            <p>
              Applications are made directly to the ATO through MyGov. Processing typically takes 2–4 weeks. We recommend discussing this option early, as it is not suitable for emergency situations requiring immediate treatment.
            </p>
            <p>
              <strong>Important:</strong> Accessing superannuation early has long-term financial consequences including reduced retirement savings and potential tax implications. We strongly recommend speaking with a licensed financial adviser before applying.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-warm)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="section-head reveal">
            <span className="eyebrow">Questions & Answers</span>
            <h2>Super for Dental — FAQs</h2>
          </div>
          <div className="faq-list reveal" style={{ transitionDelay: '.1s' }}>
            {[
              { q: 'What types of dental treatment qualify?', a: 'Treatment that is medically necessary to relieve acute or chronic dental pain, or to prevent serious deterioration of oral or general health, may qualify. This can include significant restorative work, extractions, implants or periodontal treatment. Whitening, veneers and other cosmetic procedures do not qualify.' },
              { q: 'How much can I access?', a: 'You can apply for the amount needed to cover the treatment cost, including any gap payments. Your super fund must have sufficient funds available and the ATO will assess the reasonableness of the amount requested.' },
              { q: 'How long does approval take?', a: 'Once a complete application is submitted through the ATO via MyGov, processing typically takes 2–4 weeks. The ATO may request additional information, which can extend this timeline.' },
              { q: 'Can East St Kilda Dental help with the paperwork?', a: 'Yes. We can provide the required clinical letters confirming diagnosis, medical necessity, and proposed treatment plan. Please speak to our team to begin the process.' },
              { q: 'Is the released amount taxed?', a: 'Yes — super released on compassionate grounds is treated as taxable income in the year it is released. Tax is withheld by the ATO at the time of release. Your financial adviser can explain the full tax implications.' },
            ].map((item, i) => (
              <details key={i} className="faq-item">
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
