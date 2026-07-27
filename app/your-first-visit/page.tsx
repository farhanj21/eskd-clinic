import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'
import { business, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'Your First Visit | East St Kilda Dental',
  description:
    `Your complete first visit, done properly. A thorough, gentle 60–75 minute appointment for $297 (valued at $499). No surprises, no rush. Book online or call ${business.telephoneDisplay}.`,
  alternates: { canonical: 'https://www.eaststkildadental.com.au/your-first-visit' },
})

export default function FirstVisitPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">New patients always welcome</div>
            <h1>Your complete first visit, <em>done properly.</em></h1>
            <p className="lead">No rushed five-minute look. Your first appointment is a thorough, gentle assessment of your whole mouth, finished with a clear, honest care plan. You&apos;ll leave knowing exactly where you stand.</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your first visit</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
            <div className="hero-proof">
              <span><span className="proof-stars">★★★★★</span> 5.0 on Google</span>
              <span className="proof-dot" />
              <span>40+ years local</span>
              <span className="proof-dot" />
              <span>All health funds accepted</span>
            </div>
            <p style={{ marginTop: '18px', fontSize: '14.5px', color: 'var(--ink-faint)' }}>
              One simple price of $297, everything included. Nervous or overdue? You&apos;re especially welcome.
            </p>
          </div>
          <Photo
            tall
            className="reveal"
            hint="Warm, real photo: a friendly welcome at reception, or a relaxed patient with the dentist."
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal">
          <div className="offer-card-v2">
            <div className="body">
              <div className="eyebrow">The Comprehensive Care Visit</div>
              <h2>A complete picture, in one <em>unhurried visit</em></h2>
              <p>Your first visit isn&apos;t a quick look. It&apos;s a thorough, gentle 60 to 75 minute assessment that gives you a clear understanding of your whole mouth, and a simple care plan. It includes:</p>
              <ul className="offer-includes">
                <li>Comprehensive dental examination</li>
                <li>Full medical and dental history review</li>
                <li>Digital X-rays and intraoral photos</li>
                <li>Oral cancer screening</li>
                <li>Gum and periodontal assessment</li>
                <li>Full scale, clean and polish</li>
                <li>Fluoride treatment</li>
                <li>Smile and bite assessment</li>
                <li>Your personalised dental care plan</li>
              </ul>
              <div className="offer-meta">
                <div><b>60&ndash;75 min</b>gentle and thorough</div>
                <div><b>$297</b>everything above, one price</div>
                <div><b>A care plan</b>clear and easy to follow</div>
              </div>
              <p style={{ marginTop: '14px', marginBottom: 0, fontSize: '14.5px' }}>
                Valued at <b>$499</b>. With us, it&apos;s one simple price of <b>$297</b>.
              </p>
              <Link href="/book" className="btn" style={{ marginTop: '22px', display: 'inline-flex' }}>Book your visit</Link>
              <p style={{ fontSize: '12px', marginTop: '14px', color: 'var(--ink-faint)' }}>
                $297, everything above included. With most health funds, you claim on the day and pay only a minimal gap. Your exact gap depends on your level of cover.
              </p>
            </div>
            <Photo
              hint="Calm photo: the consult room, or a relaxed patient-and-dentist moment."
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── STEP BY STEP ─────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">No surprises</div>
            <h2>What your first visit <em>actually</em> looks like</h2>
          </div>
          <div className="steps reveal" style={{ maxWidth: '680px' }}>
            <div className="step">
              <div className="num" />
              <div>
                <h4>A warm welcome</h4>
                <p>A friendly hello and a comfortable seat. No waiting around, no clipboard stress.</p>
              </div>
            </div>
            <div className="step">
              <div className="num" />
              <div>
                <h4>We listen first</h4>
                <p>We talk through your history, any worries and what you&apos;d like, before anyone picks up an instrument.</p>
              </div>
            </div>
            <div className="step">
              <div className="num" />
              <div>
                <h4>A gentle, thorough check</h4>
                <p>A calm, comprehensive look at your teeth, gums and bite. We show you what we see on screen and explain in plain language.</p>
              </div>
            </div>
            <div className="step">
              <div className="num" />
              <div>
                <h4>Your findings, made clear</h4>
                <p>We walk you through what we found, with your photos and X-rays in front of you, so it actually makes sense.</p>
              </div>
            </div>
            <div className="step">
              <div className="num" />
              <div>
                <h4>A clear care plan, no pressure</h4>
                <p>You leave with a simple, prioritised care plan and our honest recommendation. You decide in your own time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NERVOUS CROSS-LINK ───────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '46em' }}>
          <p style={{ fontSize: '21px', fontFamily: 'var(--display)', color: 'var(--sage-deep)', lineHeight: 1.4 }}>
            Nervous, or has it been a while? <em>That&apos;s exactly who we&apos;re best with.</em>
          </p>
          <div style={{ marginTop: '18px' }}>
            <Link href="/nervous-patients" className="btn btn-ghost">See how we help nervous patients</Link>
          </div>
        </div>
      </section>

      {/* ── PRICING & HEALTH FUNDS ───────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">No financial surprises</div>
            <h2>Clear on cost, <em>before anything begins</em></h2>
          </div>
          <div className="svc-grid reveal">
            <div className="svc">
              <h4>One simple price</h4>
              <p>Your first visit is the Comprehensive Care Visit: $297 with everything included, valued at $499.</p>
            </div>
            <div className="svc">
              <h4>Claim on the spot</h4>
              <p>We accept all major health funds and claim instantly with HICAPS, so usually you only pay any gap on the day.</p>
            </div>
            <div className="svc">
              <h4>A written estimate first</h4>
              <p>If you need treatment, you get a clear written estimate before anything goes ahead, and time to think it over.</p>
            </div>
            <div className="svc">
              <h4>Plans and kids&apos; cover</h4>
              <p>Payment plans are available for larger treatment, and eligible children may be covered under Medicare&apos;s CDBS.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }} className="reveal">
            <Link href="/fees" className="btn btn-ghost">See full fees and health funds</Link>
          </div>
        </div>
      </section>

      {/* ── BEFORE YOU COME IN ───────────────────────────── */}
      <section className="sec alt">
        <div className="container story-grid">
          <div className="reveal">
            <div className="eyebrow">A smooth, easy start</div>
            <h2>Two minutes of prep, <em>and you&apos;re set</em></h2>
            <p>Save time at your first visit by completing your new patient form online before you arrive. Prefer paper? Just come a few minutes early and we&apos;ll help you settle in.</p>
            <Link href="/book" className="btn btn-ghost" style={{ marginTop: '20px', display: 'inline-flex' }}>Complete your form online</Link>
          </div>
          <div className="reveal">
            <h4 style={{ fontFamily: 'var(--display)', fontSize: '20px', color: 'var(--sage-deep)', marginBottom: '12px' }}>What to bring</h4>
            <ul className="offer-includes" style={{ display: 'flex', flexDirection: 'column', gridTemplateColumns: 'none' }}>
              <li>Any health fund card</li>
              <li>Your Medicare card</li>
              <li>A list of any medications</li>
              <li>Previous X-rays or records, if you have them</li>
              <li>Any referral letter, if relevant</li>
              <li>A note of anything bothering you</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── PATIENT STORIES ──────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">From new patients like you</div>
            <h2>A different kind of first visit</h2>
          </div>
          <div className="stories-grid reveal">
            <blockquote className="nervous-proof light">
              <p>&ldquo;First dentist in years who actually explained everything and didn&apos;t make me feel bad for leaving it so long. I left with a care plan I understood.&rdquo;</p>
              <cite>New patient — East St Kilda</cite>
            </blockquote>
            <blockquote className="nervous-proof light">
              <p>&ldquo;They showed me the photos of my own teeth on the screen. I finally understood what was going on and what to do about it.&rdquo;</p>
              <cite>New patient — East St Kilda</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Good to know</div>
            <h2>New patient questions</h2>
          </div>
          <div className="faq reveal">
            <details open>
              <summary>Do I need a referral to come in?</summary>
              <p>No referral is needed for a check-up or general care. Just book in and we&apos;ll take care of the rest.</p>
            </details>
            <details>
              <summary>How long is the first visit?</summary>
              <p>Allow around 60 to 75 minutes. It&apos;s deliberately unhurried, so we can be thorough and you never feel rushed.</p>
            </details>
            <details>
              <summary>What will it cost?</summary>
              <p>Your first visit is the Comprehensive Care Visit, a flat $297 with everything included (valued at $499). With most health funds you claim on the day and pay only a minimal gap. If you need further treatment, you&apos;ll get a clear written estimate before anything goes ahead.</p>
            </details>
            <details>
              <summary>I&apos;m nervous, or it&apos;s been years. Is that okay?</summary>
              <p>Completely. A lot of our new patients are in exactly that position, and gentle care for nervous patients is one of the things we&apos;re known for.</p>
            </details>
            <details>
              <summary>Can I bring my kids?</summary>
              <p>Yes, we care for the whole family, and eligible children may be covered under Medicare&apos;s Child Dental Benefits Schedule.</p>
            </details>
          </div>
        </div>
      </section>

      <GetInTouch variant="firstvisit" id="contact" />
    </main>
  )
}
