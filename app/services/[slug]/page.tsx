import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { services, getService } from '@/data/services'
import GetInTouch from '@/components/GetInTouch'
import type { GetInTouchVariant } from '@/data/getintouch'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: { canonical: `https://www.eaststkildadental.com.au/services/${slug}` },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal">
              <span className="eyebrow light">{service.eyebrow}</span>
              <h1>{service.title}</h1>
              <p className="lede" style={{ color: 'rgba(246,239,227,.85)' }}>{service.intro}</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="/booking" className="btn btn-primary">Book a Consultation</Link>
                <Link href="#contact" className="btn btn-ghost">Ask a Question</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="prose reveal">
            {service.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {service.benefits.length > 0 && (
            <div className="benefits-box reveal" style={{ transitionDelay: '.1s' }}>
              <h3>Key Benefits</h3>
              <ul className="check-list">
                {service.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {service.faq.length > 0 && (
        <section className="section" style={{ background: 'var(--surface-warm)' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <div className="section-head left reveal">
              <span className="eyebrow">Common Questions</span>
              <h2>Frequently Asked</h2>
            </div>
            <div className="faq-list reveal" style={{ transitionDelay: '.1s' }}>
              {service.faq.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <GetInTouch variant={service.getInTouchVariant as GetInTouchVariant} id="contact" />
    </main>
  )
}
