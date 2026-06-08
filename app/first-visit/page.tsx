import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Your First Visit | East St Kilda Dental',
  description:
    'New to East St Kilda Dental? Here\'s exactly what to expect at your first appointment — step by step, with no surprises. Book online or call (03) 9527 3678.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/first-visit' },
}

export default function FirstVisitPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal" style={{ maxWidth: '680px' }}>
              <span className="eyebrow light">New Patients</span>
              <h1>Your First Visit — No Surprises</h1>
              <p className="lede" style={{ color: 'rgba(246,239,227,.85)' }}>
                We know the first visit to a new dentist can feel daunting. Here&apos;s exactly what to expect — step by step — so you arrive feeling prepared and at ease.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="/booking" className="btn btn-primary">Book Your First Visit</Link>
                <Link href="/offer" className="btn btn-ghost">See New Patient Offer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-head left reveal">
            <span className="eyebrow">What Happens</span>
            <h2>Step by Step</h2>
          </div>
          <ol className="steps-list reveal" style={{ transitionDelay: '.1s' }}>
            {[
              {
                title: 'Arrival & Check-In',
                body: 'Our reception team will greet you, confirm your details, and ask you to complete a brief health history form. This helps us understand any medical conditions, medications, or allergies that could affect your dental care.',
              },
              {
                title: 'Meet Your Dentist',
                body: 'Before any examination, your dentist will introduce themselves and have a conversation about your dental history, any current concerns or discomfort, and your overall goals. This is your chance to ask questions and share any anxiety you may have — please do.',
              },
              {
                title: 'Clinical Examination',
                body: 'Your dentist systematically examines every tooth for signs of decay, cracks and wear; your gums for signs of periodontal (gum) disease; your bite and jaw joints; and your soft tissues for any abnormalities. Everything found is explained clearly as we go.',
              },
              {
                title: 'Digital X-Rays',
                body: 'We take bitewing x-rays to detect decay between teeth and bone level changes — areas invisible to the eye. Our digital system uses significantly less radiation than older equipment and produces immediate, high-resolution images.',
              },
              {
                title: 'Professional Scale & Clean',
                body: 'Our hygienist removes hardened tartar and plaque from above and below the gumline using ultrasonic and hand instruments, then polishes your teeth to leave them clean, smooth and fresh.',
              },
              {
                title: 'Treatment Discussion & Planning',
                body: 'At the end of the appointment, your dentist will walk you through any findings, explain your options, and discuss a treatment plan. There is no pressure — you decide what and when. We\'ll provide a written treatment plan with costs.',
              },
            ].map((step, i) => (
              <li key={i} className="step-item">
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-warm)' }}>
        <div className="container">
          <div className="practical-grid">
            <div className="practical-col reveal">
              <span className="eyebrow">What to Bring</span>
              <h2>Preparation</h2>
              <ul className="check-list">
                <li>Medicare card</li>
                <li>Health fund card (if applicable)</li>
                <li>List of current medications</li>
                <li>Any recent x-rays from a previous dentist</li>
                <li>A list of any questions or concerns</li>
              </ul>
            </div>
            <div className="practical-col reveal" style={{ transitionDelay: '.1s' }}>
              <span className="eyebrow">Good to Know</span>
              <h2>Practicalities</h2>
              <ul className="check-list">
                <li>New patient appointments take 60–90 minutes</li>
                <li>All major health funds accepted</li>
                <li>New patient offer: $297 (valued at $499)</li>
                <li>On-street parking on Dandenong Rd</li>
                <li>Route 67 tram stops nearby</li>
                <li>Open Mon–Sat including early mornings</li>
              </ul>
            </div>
            <div className="practical-col reveal" style={{ transitionDelay: '.2s' }}>
              <span className="eyebrow">If You&apos;re Nervous</span>
              <h2>We&apos;ll Help</h2>
              <p>Tell us when you book that you&apos;re anxious — we&apos;ll note it in your file so the whole team is prepared. We take all the time you need and never rush you.</p>
              <Link href="/gentle" className="btn btn-outline" style={{ marginTop: '16px', display: 'inline-flex' }}>
                Learn about Gentle Dentistry →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch variant="firstvisit" id="contact" />
    </main>
  )
}
