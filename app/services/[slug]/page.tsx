import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { services, getService } from '@/data/services'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import ServiceEducation from '@/components/ServiceEducation'
import { withSocial } from '@/lib/seo'
import { business, telHref } from '@/lib/business'

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
  return withSocial({
    title: service.meta.title,
    description: service.meta.description,
    alternates: { canonical: `https://www.eaststkildadental.com.au/services/${slug}` },
  })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <main>
      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">{service.eyebrow}</div>
            <h1>
              {service.h1pre ? <>{service.h1pre} <em>{service.h1em}</em></> : <em>{service.h1em}</em>}
            </h1>
            <p className="lead">{service.heroLead}</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
            <p style={{ marginTop: '14px', fontSize: '14px', color: 'var(--ink-faint)' }}>
              Gentle, no-judgement care &nbsp;·&nbsp; 40+ years local
            </p>
          </div>
          <Photo
            tall
            className="reveal"
            priority
            src={service.heroImage}
            alt={service.heroAlt}
            hint={`Service image: ${service.h1em}`}
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── 2. WHAT IT IS ────────────────────────────────── */}
      <section className="sec alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal">
            <div className="eyebrow">In plain language</div>
            <h2>{service.whatItIsH2}</h2>
            {service.whatItIs.map((para, i) => (
              <p key={i} style={{ marginTop: i === 0 ? '20px' : '14px', fontSize: '17px', lineHeight: 1.7 }}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY IT MATTERS ────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <h2>{service.whyH2}</h2>
            <p style={{ marginTop: '14px', fontSize: '17px', maxWidth: '44em', marginLeft: 'auto', marginRight: 'auto' }}>{service.whyIntro}</p>
          </div>
          <div className="svc-grid reveal" style={{ marginTop: '36px', transitionDelay: '.1s' }}>
            {service.whyCards.map((card, i) => (
              <div key={i} className="svc">
                <h4>{card.h4}</h4>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHO IT'S FOR ──────────────────────────────── */}
      <section className="sec alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="reveal">
            <div className="eyebrow">Is this right for you?</div>
            <h2>{service.whoH2}</h2>
            <ul className="checks">
              {service.whoItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT'S DONE ─────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">A calm, step-by-step process</div>
            <h2>{service.howH2}</h2>
          </div>
          <div className="proc reveal" style={{ transitionDelay: '.1s' }}>
            {service.steps.map((step, i) => (
              <div key={i} className="p">
                <div className="pn">{i + 1}</div>
                {/* Type and spacing come from `.proc h4` / `.proc p` — inline
                    values here would win over the mobile breakpoints. */}
                <h4>{step.h4}</h4>
                <p>{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. AFTERCARE ─────────────────────────────────── */}
      <section className="sec alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="reveal">
            <div className="eyebrow">Honest about what to expect</div>
            <h2>{service.aftercareH2}</h2>
            <p style={{ marginTop: '18px', fontSize: '17px', lineHeight: 1.7 }}>{service.aftercare}</p>
          </div>
        </div>
      </section>

      {/* ── 7. CTA BAND ──────────────────────────────────── */}
      {/* Card inside the container, the same as /fees and /your-first-visit.
          It used to be a full-bleed <section class="ctaband">, which kept the
          class's 18px corner radius but ran the panel edge-to-edge, so on a
          phone the rounded card sat hard against both screen edges. */}
      <section className="sec">
        <div className="container">
          <div className="ctaband reveal">
            <h3>{service.ctaH3}</h3>
            <div className="ctaband-actions">
              <Link href="/book" className="btn">Book a visit</Link>
              <Link href="#contact" className="btn btn-ghost-light">Request a callback</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. NERVOUS PATIENTS ──────────────────────────── */}
      <section className="sec" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="svc-nervous-band reveal">
            <p>&ldquo;I haven&rsquo;t been to the dentist in years. I was embarrassed and anxious. The team here made me feel completely at ease — no judgement, just kindness.&rdquo;</p>
            <p style={{ marginTop: '16px', fontSize: '16px', fontFamily: 'var(--body)' }}>
              <Link href="/nervous-patients" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>
                How we look after nervous patients →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. COST & PAYMENT ────────────────────────────── */}
      <section className="sec alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="reveal">
            <div className="eyebrow">No surprises</div>
            <h2>Clear on cost, before anything begins</h2>
            <p style={{ marginTop: '18px', fontSize: '17px', lineHeight: 1.7 }}>{service.costPara}</p>
            <p style={{ marginTop: '16px' }}>
              <Link href="/fees" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>
                See our fees &amp; health fund information →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Common questions</div>
            <h2>Questions about {service.h1em.toLowerCase()}</h2>
          </div>
          <div className="faq reveal" style={{ transitionDelay: '.1s' }}>
            {service.faq.map((item, i) => (
              <details key={i}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. RELATED CARE ─────────────────────────────── */}
      <section className="sec alt" style={{ textAlign: 'center' }}>
        <div className="container reveal">
          <div className="eyebrow">Explore more</div>
          <h2>Related care</h2>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            {service.related.map((rel, i) => (
              <Link key={i} href={rel.href} className="btn btn-ghost">{rel.label}</Link>
            ))}
          </div>
          {/* Treatment → location. Suburb pages are out of the main menu, so
              this is the contextual path into them from the service they are
              most often searched alongside, and the hook the suburb+treatment
              pages will hang off. */}
          <p style={{ marginTop: '22px', fontSize: '14.5px' }}>
            Caring for {business.address.addressLocality} and the surrounding suburbs.{' '}
            <Link href="/areas-we-serve">See the areas we serve &rarr;</Link>
          </p>
        </div>
      </section>

      {/* ── 12. GET IN TOUCH ─────────────────────────────── */}
      <GetInTouch variant="default" id="contact" />

      {/* ── 13. DENTAL EDUCATION ─────────────────────────── */}
      <ServiceEducation slug={slug} />
    </main>
  )
}
