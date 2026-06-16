import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Meet the Team | East St Kilda Dental',
  description:
    'A warm, experienced team who genuinely care, and who\'ll remember you next time. Meet the dentists and support team at East St Kilda Dental.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/about/our-team' },
}

const clinicians = [
  {
    name: 'Dr Anbar Ganatra',
    role: 'Principal Dentist',
    bio: 'Anbar leads the practice with a calm, gentle, no-judgement approach, and is known for putting nervous patients at ease.',
  },
  {
    name: 'Dr Edmund Goldman',
    role: 'Dentist & Prosthodontist',
    bio: 'Edmund has cared for local families on this corner for decades, with a focus on rebuilding and replacing teeth.',
  },
  {
    name: 'Dr Jarrod Dean',
    role: 'General Dentist',
    bio: 'Jarrod provides gentle, thorough general and family dentistry across the practice.',
  },
  {
    name: 'Dr Marina Bekheet',
    role: 'General Dentist',
    bio: 'Marina offers warm, careful general dentistry and takes the time to explain every step.',
  },
  {
    name: 'Michelle Callangham',
    role: 'Hygienist',
    bio: 'Michelle looks after gum health and preventive care with a light, reassuring touch.',
  },
  {
    name: 'Beverly Spector',
    role: 'Hygienist',
    bio: 'Beverly helps keep your teeth and gums healthy with gentle, attentive cleans.',
  },
]

const practiceTeam = [
  {
    name: 'Daniel Loh',
    role: 'Practice Manager',
    bio: 'Daniel keeps the practice running smoothly and looks after your experience from first call to follow-up.',
  },
  {
    name: 'Michelle Mirjam',
    role: 'Dental Assistant & Receptionist',
    bio: 'Michelle welcomes you at reception and supports your care chairside.',
  },
  {
    name: "Indiana O'Connor",
    role: 'Dental Assistant & Receptionist',
    bio: 'Indiana helps every visit run smoothly, from the front desk to the chair.',
  },
  {
    name: 'Maddy Conventry',
    role: 'Dental Assistant & Receptionist',
    bio: "Maddy is one of the friendly faces who'll greet you and assist during your visit.",
  },
]

export default function AboutTeamPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Meet the team</div>
            <h1>The people who&apos;ll <em>look after you</em></h1>
            <p className="lead">
              A warm, experienced team who genuinely care, and who&apos;ll remember you next time. Here&apos;s who you&apos;ll meet.
            </p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
            </div>
          </div>
          <div className="ph tall reveal">
            <span>Warm, real group photo of the team. Never stock.</span>
          </div>
        </div>
      </section>

      {/* ── DENTISTS & CLINICIANS ─────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Your clinical care</div>
            <h2>Dentists &amp; clinicians</h2>
          </div>
          <div className="team-grid reveal">
            {clinicians.map((member, i) => (
              <div key={i} className="svc">
                <div className="ph" style={{ height: '150px', marginBottom: '12px' }}>
                  <span>Warm, real photo of {member.name}. Never stock.</span>
                </div>
                <h4 style={{ marginBottom: '2px' }}>{member.name}</h4>
                <p style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px', margin: '2px 0 8px' }}>{member.role}</p>
                <p style={{ fontSize: '15px', margin: 0 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICE TEAM ─────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Behind the scenes</div>
            <h2>Our practice team</h2>
          </div>
          <div className="team-grid reveal">
            {practiceTeam.map((member, i) => (
              <div key={i} className="svc">
                <div className="ph" style={{ height: '150px', marginBottom: '12px' }}>
                  <span>Warm, real photo of {member.name}. Never stock.</span>
                </div>
                <h4 style={{ marginBottom: '2px' }}>{member.name}</h4>
                <p style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px', margin: '2px 0 8px' }}>{member.role}</p>
                <p style={{ fontSize: '15px', margin: 0 }}>{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '18px', fontSize: '13px', opacity: .7 }}>
            Bios, qualifications and photos to be confirmed and AHPRA-compliant before publishing.
          </p>
        </div>
      </section>

      {/* ── KEEP EXPLORING ───────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">More about us</div>
          <h2>Get to know us</h2>
          <div style={{ marginTop: '18px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/about/our-story" className="btn btn-ghost">Our story</Link>
            <Link href="/about/why-were-different" className="btn btn-ghost">Why we&apos;re different</Link>
            <Link href="/book" className="btn">Book your visit</Link>
          </div>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
