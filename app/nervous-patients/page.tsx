import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'
import { business, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'Gentle Dentistry for Nervous & Anxious Patients | East St Kilda Dental',
  description:
    `Scared of the dentist? ${business.name} specialises in gentle care for nervous patients. Happy gas, agreed stop signals, no judgement. Call ${business.telephoneDisplay}.`,
  alternates: { canonical: 'https://www.eaststkildadental.com.au/nervous-patients' },
})

export default function GentlePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Gentle dentistry for nervous and anxious patients</div>
            <h1>Scared of the dentist? You&apos;re exactly who we&apos;re <em>best with.</em></h1>
            <p className="lead">If fear has kept you away, you&apos;re in the right place. Looking after anxious patients is one of the things we&apos;re known for. Tell us you&apos;re nervous, and we go entirely at your pace, with no judgement and no pressure.</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book a gentle visit</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
            <div className="hero-proof">
              <span><span className="proof-stars">★★★★★</span> 5.0 on Google</span>
              <span className="proof-dot" />
              <span>40+ years local</span>
              <span className="proof-dot" />
              <span>Happy gas available</span>
            </div>
            <p style={{ marginTop: '18px', fontSize: '14.5px', color: 'var(--ink-faint)' }}>
              No lectures. No raised eyebrows. Just a calm team that does this every day.
            </p>
          </div>
          <Photo
            tall
            className="reveal"
            priority
            src="/assets/incoming/how-we-look-after.webp"
            alt="A clinician gently reassuring a relaxed patient in the treatment room"
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── YOU'RE NOT ALONE ─────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Dental fear is normal, and valid</div>
            <h2>If you&apos;ve been putting it off, <em>you&apos;re in good company</em></h2>
            <p style={{ marginTop: '16px', fontSize: '18px', maxWidth: '42em', marginLeft: 'auto', marginRight: 'auto' }}>
              Around one in six Australian adults avoids the dentist because of fear, often after one bad experience a long time ago. It says nothing about you, and it&apos;s never too late. We treat anxiety as a normal thing to manage, not a problem to judge.
            </p>
          </div>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: 'var(--ink-faint)', maxWidth: '38em', margin: '0 auto' }}>
              Whatever&apos;s behind it, it&apos;s valid. For most people it&apos;s one of these:
            </p>
            <div className="fears">
              <span>Fear of pain</span>
              <span>Needles</span>
              <span>The sounds and smells</span>
              <span>Feeling out of control</span>
              <span>Embarrassment about your teeth</span>
              <span>A bad experience in the past</span>
              <span>Not knowing what&apos;s coming</span>
            </div>
            <p style={{ fontSize: '16px', maxWidth: '40em', margin: '22px auto 0', color: 'var(--ink-soft)' }}>
              Knowing what&apos;s behind it is the first step, and we&apos;ll work through it with you, at your pace.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR GENTLE APPROACH ──────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Why nervous patients trust us</div>
            <h2>A genuinely different way of <em>working with fear</em></h2>
            <p style={{ marginTop: '16px', fontSize: '18px' }}>
              Our approach combines careful clinical care with a calm, coaching-informed way of communicating, developed specifically for dental anxiety. It&apos;s the reason patients who dread the dentist end up comfortable here.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="n">01</div>
              <h3>A coaching-informed approach to fear</h3>
              <p>Beyond gentle hands, we understand the psychology of dental fear, and we use calm, proven communication to help you feel safe from the moment you arrive.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">02</div>
              <h3>You&apos;re always in control</h3>
              <p>We agree a simple stop signal before we start. Raise your hand and everything pauses, no questions asked. Nothing happens that you haven&apos;t agreed to.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">03</div>
              <h3>Unhurried time, gentle hands</h3>
              <p>We book longer, so you&apos;re never rushed through a chair. Slow, careful, and as comfortable as modern dentistry allows.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">04</div>
              <h3>No surprises, ever</h3>
              <p>We explain everything in plain language, show you what we see, and confirm any costs before we begin. Certainty is what calms the nerves.</p>
            </div>
          </div>
          <p className="responsible">Looking after frightened patients isn&apos;t a sideline for us. It&apos;s one of the things we&apos;re known for.</p>
        </div>
      </section>

      {/* ── ON YOUR TERMS ────────────────────────────────── */}
      <section className="sec">
        <div className="container reveal">
          <div className="sec-head center">
            <div className="eyebrow">You set the pace</div>
            <h2>This is your appointment, <em>on your terms</em></h2>
          </div>
          <div className="terms-band">
            <p>Stop any time. Ask anything. Take it slow. Bring someone. Decide later.</p>
            <span>Nothing happens without your say-so. Tell us what you need, and that&apos;s how we&apos;ll do it.</span>
          </div>
        </div>
      </section>

      {/* ── COMFORT OPTIONS ──────────────────────────────── */}
      <section className="sec sage-bg" id="comfort">
        <div className="container nervous-grid">
          <Photo
            tall
            className="reveal"
            src="/assets/incoming/comfort-is-part.webp"
            alt="A smiling, relaxed patient chatting with the dental team in the treatment room"
            sizes="(max-width: 860px) 100vw, 48vw"
          />
          <div className="reveal">
            <div className="eyebrow">Whatever helps you feel safe</div>
            <h2>Comfort is part of the treatment</h2>
            <p>Our goal is to help you feel genuinely calm and in control, not to put you to sleep. For most nervous patients, happy gas and a slow, gentle approach is all it takes to feel completely at ease: awake, aware and relaxed.</p>
            <p>Tell us what worries you most, and we&apos;ll build the appointment around it.</p>
            <div className="chips">
              <span className="chip">Happy gas (nitrous oxide)</span>
              <span className="chip">Calm, unhurried pacing</span>
              <span className="chip">Agreed stop signals</span>
              <span className="chip">Numbing that actually works</span>
              <span className="chip">Bring a support person</span>
              <span className="chip">Headphones and music</span>
              <span className="chip">Breaks whenever you need</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TAKE THE FIRST STEP ──────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="ctaband reveal">
            <h3>Take the first step, gently</h3>
            <p>Book a visit, or just leave your number and we&apos;ll call you, whatever feels easier. No judgement, no pressure, ever.</p>
            <div className="ctaband-actions">
              <Link href="/book" className="btn" style={{ background: 'var(--paper)', color: 'var(--sage-deep)' }}>Book a gentle visit</Link>
              <Link href="#contact" className="btn btn-ghost ctaband-ghost">Request a callback</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PATIENT STORIES ──────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">From people who felt the same</div>
            <h2>They were terrified too</h2>
          </div>
          <div className="stories-grid reveal">
            <blockquote className="nervous-proof light">
              <p>&ldquo;I&apos;d put off the dentist for nine years and cried in the car park before my first visit. They were so calm and kind that I now come every six months without a second thought.&rdquo;</p>
              <cite>Patient story — once very anxious</cite>
            </blockquote>
            <blockquote className="nervous-proof light">
              <p>&ldquo;The stop signal changed everything for me. Knowing I could pause any time meant I never needed to. First time in my life I didn&apos;t dread it.&rdquo;</p>
              <cite>Patient story — dental phobia</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ────────────────────────────────── */}
      <section className="sec">
        <div className="container story-grid">
          <div className="reveal">
            <div className="eyebrow">The people you&apos;ll meet</div>
            <h2>A calm team that genuinely <em>gets it</em></h2>
            <p>Led by Dr Anbar Ganatra, our team pairs gentle clinical care with a real understanding of why the dentist feels frightening. That blend of clinical skill and calm, behaviour-aware communication is exactly what makes anxious patients feel safe here.</p>
            <p>You&apos;ll see the same friendly faces each visit, which is its own kind of reassurance.</p>
            <Link href="/about#team" className="btn btn-ghost" style={{ marginTop: '20px', display: 'inline-flex' }}>Meet the full team</Link>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/incoming/calm-team.webp"
            alt="The friendly East St Kilda Dental team smiling and waving outside the clinic"
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── FEES REASSURANCE ─────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '46em' }}>
          <div className="eyebrow">No financial surprises</div>
          <h2>Clear costs, decided together</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            Cost worries can be as stressful as the dentistry itself. You&apos;ll always get a clear written estimate before anything goes ahead, your first visit is our Comprehensive Care Visit at one simple price of $297 with everything included, and we offer payment plans for larger treatment. Nothing is a surprise.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/fees" className="btn btn-ghost">See fees and health funds</Link>
          </div>
        </div>
      </section>

      {/* ── NERVOUS FAQ ──────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Honest answers</div>
            <h2>The questions nervous patients ask</h2>
          </div>
          <div className="faq reveal">
            <details open>
              <summary>I&apos;m embarrassed about the state of my teeth.</summary>
              <p>Please don&apos;t be. Embarrassment is one of the most common reasons people stay away, and we see it every week. There are no lectures here, only a warm welcome and a way forward.</p>
            </details>
            <details>
              <summary>What if I panic or need to stop?</summary>
              <p>We agree a stop signal before we start. Raise your hand and everything pauses immediately, no questions asked. You are always in control.</p>
            </details>
            <details>
              <summary>Do you offer sedation or sleep dentistry?</summary>
              <p>We offer happy gas (nitrous oxide), which keeps you relaxed but fully awake and in control, and it wears off quickly so you can drive yourself home. Our focus is helping you feel genuinely calm rather than unconscious, which is what most nervous patients actually want. If you think you need deeper sedation, we&apos;ll talk it through honestly and help you find the safest option.</p>
            </details>
            <details>
              <summary>I had a bad experience at another dentist.</summary>
              <p>Many of our most loyal patients did too. Tell us what happened so we can do the opposite. A bad past experience is exactly what our approach is built to undo.</p>
            </details>
            <details>
              <summary>Can I bring someone with me?</summary>
              <p>Absolutely. Bring a partner, friend or family member for support. Many people find it helps, and we&apos;re glad to have them there.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── EXPLORE ──────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Helpful next steps</div>
          <h2>Before you book</h2>
          <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/your-first-visit" className="btn btn-ghost">Your first visit</Link>
            <Link href="/fees" className="btn btn-ghost">Fees &amp; health funds</Link>
            <Link href="/services/check-ups" className="btn btn-ghost">All services</Link>
          </div>
        </div>
      </section>

      <GetInTouch variant="gentle" id="contact" />
    </main>
  )
}
