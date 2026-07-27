import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { suburbs, getSuburb } from '@/data/suburbs'
import GetInTouch from '@/components/GetInTouch'
import { withSocial } from '@/lib/seo'
import { streetAddress } from '@/lib/business'

interface Props {
  params: Promise<{ suburb: string }>
}

export async function generateStaticParams() {
  return suburbs.map(s => ({ suburb: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb } = await params
  const data = getSuburb(suburb)
  if (!data) return {}
  return withSocial({
    title: data.meta.title,
    description: data.meta.description,
    alternates: { canonical: `https://www.eaststkildadental.com.au/areas-we-serve/${suburb}` },
  })
}

export default async function AreaPage({ params }: Props) {
  const { suburb } = await params
  const data = getSuburb(suburb)
  if (!data) notFound()

  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal">
              <span className="eyebrow light">Serving {data.name}</span>
              <h1>Your Local Dentist Near {data.name}</h1>
              <p className="lede" style={{ color: 'rgba(246,239,227,.85)' }}>{data.intro}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="/book" className="btn btn-primary">Book an Appointment</Link>
                <Link href="/comprehensive-care-visit" className="btn btn-ghost">New Patient Offer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="area-grid">
            <div className="area-content">
              <div className="prose reveal">
                {data.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="area-aside reveal" style={{ transitionDelay: '.1s' }}>
              <div className="aside-card">
                <h3>Services Available</h3>
                <ul className="check-list">
                  {data.services.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="aside-card" style={{ marginTop: '24px' }}>
                <h3>Getting Here</h3>
                <p>
                  <strong>{streetAddress}</strong><br />
                  East St Kilda VIC 3183
                </p>
                <p>
                  Approximately {data.distance} from {data.name}.<br />
                  Accessible by tram (Route 67) and with on-street parking available.
                </p>
                <p>
                  <strong>Hours:</strong><br />
                  Mon–Thu 8:30am–4:00pm<br />
                  Fri 8:30am–4:30pm · Sat 8:00am–4:00pm
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-flex' }}>
                  Get Directions
                </Link>
              </div>

              <div className="aside-card offer-card" style={{ marginTop: '24px' }}>
                <span className="eyebrow">New Patient Offer</span>
                <h3>$297 <small style={{ fontSize: '14px', fontWeight: 400 }}>(valued at $499)</small></h3>
                <p>Comprehensive exam, digital x-rays and scale &amp; clean.</p>
                <Link href="/comprehensive-care-visit" className="btn btn-primary" style={{ marginTop: '12px', display: 'inline-flex' }}>
                  Claim Offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
