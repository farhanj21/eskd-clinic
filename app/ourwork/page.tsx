import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Smile Gallery — Before & After Results | East St Kilda Dental',
  description:
    'See real smile transformations from East St Kilda Dental — veneers, Invisalign, implants, whitening and more. Book a free cosmetic consultation.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/ourwork' },
}

const cases = [
  { treatment: 'Porcelain Veneers', description: '8 upper veneers to correct colour, shape and spacing.' },
  { treatment: 'Invisalign', description: 'Crowding correction over 14 months with Invisalign Full.' },
  { treatment: 'Dental Implants', description: 'Single implant crown replacing a missing upper central incisor.' },
  { treatment: 'Teeth Whitening', description: 'In-chair ZOOM! whitening — immediate results in 90 minutes.' },
  { treatment: 'Composite Bonding', description: 'Edge bonding to restore worn incisal edges and close minor gaps.' },
  { treatment: 'Smile Makeover', description: 'Combined whitening, Invisalign and veneers for a complete transformation.' },
]

export default function OurWorkPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow light">Our Work</span>
            <h1>Smile Gallery</h1>
            <p className="lede" style={{ color: 'rgba(246,239,227,.85)', maxWidth: '600px', margin: '0 auto' }}>
              Every smile transformation starts with a conversation. Here are some of the results our patients have achieved.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-cases reveal">
            {cases.map((c, i) => (
              <div key={i} className="case-card" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="case-images">
                  <div className="case-img before" aria-label="Before treatment">
                    <span>Before</span>
                  </div>
                  <div className="case-img after" aria-label="After treatment">
                    <span>After</span>
                  </div>
                </div>
                <div className="case-info">
                  <h3>{c.treatment}</h3>
                  <p>{c.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-disclaimer reveal" style={{ marginTop: '48px', padding: '24px', background: 'var(--surface-warm)', borderRadius: 'var(--radius-lg)', fontSize: '14px', color: 'var(--ink-light)' }}>
            <p>Individual results vary. All cosmetic dental procedures carry potential risks and are performed following a thorough clinical assessment. Images shown are for illustrative purposes.</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
            <p style={{ marginBottom: '16px', color: 'var(--ink-light)' }}>Interested in your own transformation?</p>
            <Link href="/booking" className="btn btn-primary">Book a Free Cosmetic Consultation</Link>
          </div>
        </div>
      </section>

      <GetInTouch variant="cosmetic" id="contact" />
    </main>
  )
}
