import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import ServiceEducation from '@/components/ServiceEducation'
import { getService } from '@/data/services'
import { withSocial } from '@/lib/seo'
import { business, comprehensiveCareVisit, telHref } from '@/lib/business'
import s from './checkups.module.css'

/**
 * /services/check-ups — the one service with a bespoke layout.
 *
 * A static segment beats the [slug] segment in the App Router, so this file
 * takes over the route while every other service keeps rendering through
 * app/services/[slug]/page.tsx untouched.
 *
 * All the copy still comes from the shared `check-ups` entry in data/services.ts
 * so nothing drifts from the rest of the site. Only what the redesign genuinely
 * adds — the scope strip, the related-card subtitles — is declared here, since
 * it exists on this page alone.
 */

const SLUG = 'check-ups'

/** The four-column strip under the opening copy. New in the redesign. */
const SCOPE = [
  { term: 'Teeth', def: 'Decay, wear and cracks' },
  { term: 'Gums', def: 'Bleeding, recession, health' },
  { term: 'Bite', def: 'How your teeth meet' },
  { term: 'Soft tissues', def: "Screening you can't do at home" },
] as const

/** One-line subtitles for the related-care cards, keyed by href. */
const RELATED_SUB: Record<string, string> = {
  '/services/cleans-and-hygiene': 'Keeping things fresh between visits',
  '/your-first-visit': 'Exactly what happens, start to finish',
  '/fees': 'Costs and health funds, up front',
}

export const metadata: Metadata = (() => {
  const service = getService(SLUG)!
  return withSocial({
    title: service.meta.title,
    description: service.meta.description,
    alternates: { canonical: `https://www.eaststkildadental.com.au/services/${SLUG}` },
  })
})()

export default function CheckUpsPage() {
  const service = getService(SLUG)!

  return (
    <main className={s.wrap}>

      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section className={s.hero} id="top">
        <div className={s.heroBlobClay} aria-hidden="true" />
        <div className={s.heroBlobSage} aria-hidden="true" />
        <div className={`${s.inner} ${s.innerWide} ${s.heroGrid}`}>
          <div>
            <p className={`${s.kicker} reveal`}>{service.eyebrow}</p>
            <h1 className={`${s.h1} reveal`} style={{ transitionDelay: '.08s' }}>
              {service.h1pre} <br />
              <em>{service.h1em}</em>
            </h1>
            <p className={`${s.heroLead} reveal`} style={{ transitionDelay: '.16s' }}>
              {service.heroLead}
            </p>
            <div className={`${s.heroCta} reveal`} style={{ transitionDelay: '.24s' }}>
              <Link href="/book" className={s.btnSolid}>Book your visit</Link>
              <a href={telHref} className={s.btnOutline}>Call {business.telephoneDisplay}</a>
            </div>
            <div className={`${s.heroProof} reveal`} style={{ transitionDelay: '.3s' }}>
              <span>Gentle, no-judgement care</span>
              <span className={s.proofDot} aria-hidden="true" />
              <span>40+ years local</span>
            </div>
          </div>

          <div className={`${s.heroMedia} reveal`} style={{ transitionDelay: '.12s' }}>
            <div className={s.heroFrame}>
              <Photo
                priority
                src={service.heroImage}
                alt={service.heroAlt}
                sizes="(max-width: 1040px) 100vw, 48vw"
              />
            </div>
            <div className={s.priceBadge}>
              <div className={s.priceBadgeFigure}>${comprehensiveCareVisit.price}</div>
              <div className={s.priceBadgeNote}>
                {comprehensiveCareVisit.name}, everything included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT IT IS ────────────────────────────────── */}
      <section className={`${s.bgPaper} ${s.lineTop}`}>
        <div className={`${s.inner} ${s.innerWide} ${s.sectionPad}`}>
          <div className={s.introGrid}>
            <div>
              <p className={`${s.kicker} reveal`}>In plain language</p>
              <h2 className={`${s.h2} reveal`} style={{ transitionDelay: '.08s' }}>
                {service.whatItIsH2}
              </h2>
              <div className={s.splitCopy}>
                {service.whatItIs.map((para, i) => (
                  <p
                    key={i}
                    className={`${i === 0 ? s.leadPara : s.bodyPara} reveal`}
                    style={{ transitionDelay: `${0.12 + i * 0.08}s` }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className={`${s.frame} ${s.frameTall} reveal`} style={{ transitionDelay: '.16s' }}>
              <Photo
                src="/assets/home/comprehensive2.webp"
                alt="A dentist talking with a seated patient during a comprehensive care consultation"
                sizes="(max-width: 1040px) 100vw, 46vw"
              />
            </div>
          </div>

          <div className={`${s.scopeRow} reveal`} style={{ transitionDelay: '.28s' }}>
            {SCOPE.map(item => (
              <div key={item.term} className={s.scopeItem}>
                <div className={s.scopeTerm}>{item.term}</div>
                <div className={s.scopeDef}>{item.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY IT MATTERS ────────────────────────────── */}
      <section className={s.dark}>
        <div className={s.darkBlob} aria-hidden="true" />
        <div className={`${s.inner} ${s.sectionPad} ${s.darkInner}`}>
          <div className={s.darkHead}>
            <p className={`${s.kicker} ${s.kickerLight} reveal`}>Worth the visit</p>
            <h2 className={`${s.h2} ${s.h2Light} reveal`} style={{ transitionDelay: '.08s' }}>
              {service.whyH2}
            </h2>
            <p className={`${s.darkIntro} reveal`} style={{ transitionDelay: '.16s' }}>
              {service.whyIntro}
            </p>
          </div>

          <div className={s.whyGrid}>
            {service.whyCards.map((card, i) => (
              <div
                key={i}
                className={`${s.whyCard} reveal`}
                style={{ transitionDelay: `${0.12 + i * 0.08}s` }}
              >
                <div className={s.whyNum}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className={s.whyTitle}>{card.h4}</h3>
                <p className={s.whyBody}>{card.p}</p>
              </div>
            ))}
          </div>

          {/* data-count is picked up by the same observer that drives the
              figures on the home page, so these count up on scroll. */}
          <div className={s.statsRow}>
            <div className={`${s.stat} reveal`}>
              <div className={s.statNum} data-count="40" data-suffix="+">40+</div>
              <div className={s.statLabel}>Years caring for {business.address.addressLocality}</div>
            </div>
            <div className={`${s.stat} reveal`} style={{ transitionDelay: '.08s' }}>
              <div className={s.statNum} data-count="10000" data-suffix="+">10,000+</div>
              <div className={s.statLabel}>Patients looked after</div>
            </div>
            <div className={`${s.stat} reveal`} style={{ transitionDelay: '.16s' }}>
              <div className={s.statNum} data-count="6" data-suffix="">6</div>
              <div className={s.statLabel}>Months between most check-ups</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHO IT'S FOR ──────────────────────────────── */}
      <section className={s.bgPaper}>
        <div className={`${s.inner} ${s.sectionPad}`}>
          <div className={s.whoGrid}>
            <div className={`${s.frame} ${s.framePortrait} ${s.whoMedia} reveal`}>
              <Photo
                src="/assets/home/nervous-patients.webp"
                alt="A relaxed patient smiling warmly in the dental chair"
                objectPosition="0% 40%"
                scale={1.1}
                sizes="(max-width: 1040px) 100vw, 40vw"
              />
            </div>
            <div>
              <p className={`${s.kicker} reveal`}>Is this right for you?</p>
              <h2 className={`${s.h2} reveal`} style={{ transitionDelay: '.08s' }}>
                {service.whoH2}
              </h2>
              <ul className={s.whoList}>
                {service.whoItems.map((item, i) => (
                  <li
                    key={i}
                    className={`${s.whoRow} reveal`}
                    style={{ transitionDelay: `${0.12 + i * 0.06}s` }}
                  >
                    <span className={s.whoDot} aria-hidden="true" />
                    <span className={s.whoText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT'S DONE ─────────────────────────────── */}
      <section className={`${s.bgCream2} ${s.lineTop} ${s.lineBottom}`}>
        <div className={`${s.inner} ${s.innerWide} ${s.sectionPad}`}>
          <div className={s.stepsHead}>
            <p className={`${s.kicker} reveal`}>A calm, step-by-step process</p>
            <h2 className={`${s.h2} reveal`} style={{ transitionDelay: '.08s' }}>
              {service.howH2}
            </h2>
          </div>

          <div className={s.stepsWrap}>
            <div className={s.stepsTrack} aria-hidden="true" />
            {/* Draws left-to-right once scrolled into view — .visible comes from
                the site-wide reveal observer in ScrollEffects. */}
            <div className={`${s.stepsTrackFill} reveal`} aria-hidden="true" />
            <ol className={s.stepsGrid}>
              {service.steps.map((step, i) => (
                <li
                  key={i}
                  className={`${s.step} reveal`}
                  style={{ transitionDelay: `${0.12 + i * 0.1}s` }}
                >
                  <div className={s.stepNum}>{i + 1}</div>
                  <h3 className={s.stepTitle}>{step.h4}</h3>
                  <p className={s.stepBody}>{step.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 6. AFTERCARE ─────────────────────────────────── */}
      <section className={s.bgPaper}>
        <div className={`${s.inner} ${s.sectionPad}`}>
          <div className={s.innerNarrow} style={{ margin: '0 auto', padding: 0 }}>
            <p className={`${s.kicker} reveal`}>Honest about what to expect</p>
            <h2 className={`${s.h2} reveal`} style={{ transitionDelay: '.08s' }}>
              {service.aftercareH2}
            </h2>
            <p className={`${s.aftercarePara} reveal`} style={{ transitionDelay: '.16s' }}>
              {service.aftercare}
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. CTA BAND ──────────────────────────────────── */}
      <section className={s.ctaSection}>
        <div className={`${s.inner} ${s.innerWide}`}>
          <div className={`${s.ctaCard} reveal`}>
            <div className={s.ctaBlob} aria-hidden="true" />
            <div className={s.ctaInner}>
              <h3 className={s.ctaTitle}>{service.ctaH3}</h3>
              <div className={s.ctaActions}>
                <Link href="/book" className={s.btnCream}>Book a visit</Link>
                <Link href="#contact" className={s.btnOutlineLight}>Request a callback</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. NERVOUS PATIENTS ──────────────────────────── */}
      <section className={`${s.bgCream2} ${s.lineTop}`}>
        <div className={`${s.inner} ${s.sectionPad} ${s.quoteSection}`}>
          <div className={s.quoteGrid}>
            <div className={`${s.frame} ${s.framePortrait} ${s.quoteMedia} reveal`}>
              <Photo
                src="/assets/nervous-patients/how-we-look-after.webp"
                alt="A clinician gently reassuring a relaxed patient in the treatment room"
                sizes="(max-width: 1040px) 100vw, 38vw"
              />
            </div>
            <div>
              <div className={`${s.quoteMark} reveal`} aria-hidden="true">&ldquo;</div>
              <blockquote className={`${s.quote} reveal`} style={{ transitionDelay: '.1s' }}>
                I haven&rsquo;t been to the dentist in years. I was embarrassed and anxious. The
                team here made me feel completely at ease &mdash; no judgement, just kindness.
              </blockquote>
              <Link href="/nervous-patients" className={`${s.quoteLink} reveal`} style={{ transitionDelay: '.18s' }}>
                How we look after nervous patients &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. COST & PAYMENT ────────────────────────────── */}
      <section className={`${s.bgPaper} ${s.lineTop}`} id="cost">
        <div className={`${s.inner} ${s.sectionPad}`}>
          <div style={{ textAlign: 'center' }}>
            <p className={`${s.kicker} reveal`}>No surprises</p>
            <h2 className={`${s.h2} reveal`} style={{ transitionDelay: '.08s' }}>
              Clear on cost, before anything begins
            </h2>
          </div>

          <div className={`${s.costCard} reveal`} style={{ transitionDelay: '.16s' }}>
            <div className={s.costFigureCol}>
              <div className={s.costFigure}>${comprehensiveCareVisit.price}</div>
              <div className={s.costLabel}>{comprehensiveCareVisit.name}</div>
              <div className={s.costValue}>Valued at $499</div>
            </div>
            <div>
              <p className={s.costPara}>{service.costPara}</p>
              <Link href="/fees" className={s.inlineLink}>
                See our fees &amp; health fund information &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────── */}
      <section className={`${s.bgCream2} ${s.lineTop}`}>
        <div className={`${s.inner} ${s.innerNarrow} ${s.sectionPad}`}>
          <div style={{ textAlign: 'center' }}>
            <p className={`${s.kicker} reveal`}>Common questions</p>
            <h2 className={`${s.h2} reveal`} style={{ transitionDelay: '.08s' }}>
              Questions about {service.h1em}
            </h2>
          </div>

          {/* <details> rather than a scripted accordion: it opens without JS,
              and screen readers get the expand/collapse state for free. */}
          <div className={`${s.faqList} reveal`} style={{ transitionDelay: '.14s' }}>
            {service.faq.map((item, i) => (
              <details key={i} className={s.faqItem}>
                <summary className={s.faqSummary}>
                  {item.q}
                  <span className={s.faqIcon} aria-hidden="true">+</span>
                </summary>
                <p className={s.faqAnswer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. RELATED CARE ─────────────────────────────── */}
      <section className={`${s.bgPaper} ${s.lineTop}`}>
        <div className={`${s.inner} ${s.sectionPad}`}>
          <div style={{ textAlign: 'center' }}>
            <p className={`${s.kicker} reveal`}>Explore more</p>
            <h2 className={`${s.h2} reveal`} style={{ transitionDelay: '.08s' }}>Related care</h2>
          </div>

          <div className={s.relatedGrid}>
            {service.related.map((rel, i) => (
              <Link
                key={rel.href}
                href={rel.href}
                className={`${s.relatedCard} reveal`}
                style={{ transitionDelay: `${0.12 + i * 0.08}s` }}
              >
                <div className={s.relatedTitle}>{rel.label}</div>
                <div className={s.relatedSub}>{RELATED_SUB[rel.href] ?? ''}</div>
                <div className={s.relatedMore}>Learn more &rarr;</div>
              </Link>
            ))}
          </div>

          <p className={`${s.areasNote} reveal`} style={{ transitionDelay: '.34s' }}>
            Caring for {business.address.addressLocality} and the surrounding suburbs.{' '}
            <Link href="/areas-we-serve">See the areas we serve &rarr;</Link>
          </p>
        </div>
      </section>

      {/* ── 12. GET IN TOUCH ─────────────────────────────── */}
      <GetInTouch variant="default" id="contact" />

      {/* ── 13. DENTAL EDUCATION ─────────────────────────── */}
      <ServiceEducation slug={SLUG} />
    </main>
  )
}
