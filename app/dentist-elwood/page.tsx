import type { Metadata } from 'next'
import Link from 'next/link'
import { getSuburb } from '@/data/suburbs'
import GetInTouch from '@/components/GetInTouch'

const data = getSuburb('elwood')!

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: 'https://www.eaststkildadental.com.au/dentist-elwood' },
}

export default function DentistPage() {
  return (
    <main>
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Your local dentist near Elwood</div>
            <h1>Gentle dental care, <em>close to Elwood</em></h1>
            <p className="lead">{data.intro}</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <Link href="/comprehensive-care-visit" className="btn btn-ghost">New patient offer</Link>
            </div>
          </div>
          <div className="ph tall reveal">
            <span>Clinic photo</span>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="reveal">
            {data.body.map((para: string, i: number) => (
              <p key={i} style={{ fontSize: '17px', lineHeight: 1.7, marginTop: i === 0 ? 0 : '16px' }}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Getting here</div>
            <h2>364 Dandenong Rd, East St Kilda</h2>
            <p style={{ marginTop: '16px', fontSize: '16px' }}>
              Approximately {data.distance} from Elwood.<br />
              Trams 5 &amp; 64 and bus 220 nearby &middot; Off-street parking off Orrong Road.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/book" className="btn">Book your visit</Link>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}