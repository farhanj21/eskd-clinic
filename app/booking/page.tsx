import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book an Appointment | East St Kilda Dental',
  description:
    'Book your dental appointment online at East St Kilda Dental. New patient offer available — comprehensive exam, x-rays and scale & clean for $297 (valued at $499).',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/booking' },
}

export default function BookingPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)', paddingBottom: '32px' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow light">Appointments</span>
            <h1>Book Online</h1>
            <p className="lede" style={{ color: 'rgba(246,239,227,.85)', maxWidth: '560px', margin: '0 auto' }}>
              Choose a time that suits you. We&apos;re open Monday to Saturday with early morning appointments available.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="booking-info reveal" style={{ marginBottom: '32px', display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="booking-detail">
              <strong>Address</strong>
              <span>364 Dandenong Road, East St Kilda VIC 3183</span>
            </div>
            <div className="booking-detail">
              <strong>Phone</strong>
              <span><a href="tel:+61395273678">(03) 9527 3678</a></span>
            </div>
            <div className="booking-detail">
              <strong>Hours</strong>
              <span>Mon–Thu 8:30am–4:00pm · Fri 8:30am–4:30pm · Sat 8:00am–4:00pm</span>
            </div>
          </div>

          <div className="booking-frame-wrap reveal" style={{ transitionDelay: '.1s' }}>
            <iframe
              src="https://www.centaurportal.com/d4w/org-1240/extended_search"
              title="Book an appointment at East St Kilda Dental"
              width="100%"
              height="700"
              style={{ border: 'none', borderRadius: 'var(--radius-lg)', display: 'block' }}
              loading="lazy"
            />
          </div>

          <p className="booking-alt reveal" style={{ textAlign: 'center', marginTop: '24px', color: 'var(--ink-light)', fontSize: '14px' }}>
            Prefer to call? <a href="tel:+61395273678">(03) 9527 3678</a> — or email{' '}
            <a href="mailto:hello@eaststkildadental.com.au">hello@eaststkildadental.com.au</a>
          </p>
        </div>
      </section>
    </main>
  )
}
