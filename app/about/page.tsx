import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'About Us — East St Kilda Dental | Caring for Families Since 1980',
  description:
    'East St Kilda Dental has cared for this neighbourhood since around 1980. Meet our gentle, experienced team led by Dr Anbar Ganatra and learn what makes us different.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/about' },
}

const clinicians = [
  {
    name: 'Dr Anbar Ganatra',
    role: 'Principal Dentist',
    bio: 'Dr Ganatra leads the East St Kilda Dental team with a calm, thorough approach built around genuinely understanding each patient. With a wide range of general and restorative experience, he is known for his ability to put nervous patients at ease and his commitment to long-term results over quick fixes.',
  },
  {
    name: 'Dr Edmund Goldman',
    role: 'Dentist & Prosthodontist',
    bio: 'Dr Goldman brings specialist prosthodontic training to the team, with deep expertise in complex restorations, implants, crowns and full-arch rehabilitation. He is known for his meticulous attention to detail and his ability to explain complex treatment options in clear, simple terms.',
  },
  {
    name: 'Dr Jarrod Dean',
    role: 'General Dentist',
    bio: "Dr Dean's thorough, patient-centred approach makes him a favourite with patients across all age groups. He particularly enjoys preventive care and helping patients understand how to look after their teeth long-term.",
  },
  {
    name: 'Dr Marina Bekheet',
    role: 'Dentist',
    bio: "Dr Bekheet's warm and reassuring manner makes her popular with nervous patients and families alike. She has a strong interest in children's dentistry and general preventive care.",
  },
  {
    name: 'Beverly Spector',
    role: 'Hygienist',
    bio: "Beverly is a skilled and gentle hygienist with extensive experience in periodontal care and preventive education. Patients appreciate her thoroughness and her ability to explain what she's doing and why.",
  },
  {
    name: 'Michelle Callangham',
    role: 'Practice Manager',
    bio: "Michelle keeps East St Kilda Dental running smoothly and is often the welcoming voice patients hear when they call. Her warmth and attention make every patient feel at home from the first point of contact.",
  },
  {
    name: 'Daniel Loh',
    role: 'Dental Assistant',
    bio: "Daniel's calm, efficient chair-side presence helps patients feel comfortable during treatment and ensures every appointment runs smoothly for both patient and clinician.",
  },
  {
    name: 'Michelle Mirjam',
    role: 'Dental Assistant',
    bio: 'Michelle brings care and attention to every appointment, ensuring patients are comfortable and well supported throughout their visit.',
  },
  {
    name: 'Indiana O\'Connor',
    role: 'Dental Assistant',
    bio: 'Indiana is known for her warm welcome and calm approach, helping patients feel at ease throughout their care.',
  },
  {
    name: 'Maddy Conventry',
    role: 'Patient Coordinator',
    bio: 'Maddy works closely with patients to help them understand their care options, navigate health fund claims and book treatment at a time that suits.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="sec" style={{ background: 'var(--sage-deep)', color: 'var(--paper)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal">
            <div className="eyebrow" style={{ color: 'var(--clay-soft)' }}>About us</div>
            <h1 style={{ color: 'var(--paper)' }}>Caring for families in East St Kilda since 1980</h1>
            <p className="lead" style={{ color: 'rgba(252,250,245,.85)', marginTop: '16px' }}>
              For over four decades, East St Kilda Dental has been part of the fabric of this neighbourhood, providing honest, gentle, high-quality dental care to families, individuals and everyone in between.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
              <Link href="/booking" className="btn">Book a visit</Link>
              <Link href="#team" className="btn btn-ghost" style={{ borderColor: 'rgba(252,250,245,.4)', color: 'var(--paper)' }}>Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="sec alt" id="story">
        <div className="container story-grid">
          <div className="reveal">
            <div className="eyebrow">Here for the long run</div>
            <h2>Four decades of <em>caring</em> for families</h2>
            <p>East St Kilda Dental has cared for this neighbourhood since around 1980. We&apos;ve looked after children who now bring their own children, and patients who send us their parents, their partners and their friends.</p>
            <p>The same families have trusted us for decades, and most of our new patients still arrive because someone told a friend. That kind of continuity is something we work hard to keep, and something we are genuinely proud of.</p>
            <p>We&apos;ve grown our team and invested in modern technology, but the fundamentals haven&apos;t changed: honest advice, gentle treatment, and no unnecessary procedures.</p>
            <div className="story-stats" style={{ marginTop: '32px' }}>
              <div><b>40+</b><span>years in the suburb</span></div>
              <div><b>3 gen.</b><span>of families</span></div>
              <div><b>1</b><span>caring local team</span></div>
            </div>
          </div>
          <div className="ph tall reveal">
            <span>Heritage-feel image: the practice exterior or a multi-generational family moment.</span>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="sec" id="different">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">The way we care</div>
            <h2>Dentistry that feels <em>safe</em>, not stressful</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="n">01</div>
              <h3>The full picture, not just one tooth</h3>
              <p>We look at how everything fits together, your teeth, gums, bite and long-term health, so the things quick check-ups miss don&apos;t get missed.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">02</div>
              <h3>No shame, no judgement</h3>
              <p>Whatever state things are in, you&apos;ll be supported without criticism. Ever.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">03</div>
              <h3>Built to last, not patched up</h3>
              <p>We treat the cause, not just the symptom, and help you prevent problems before they start. The aim is less dentistry over a lifetime, not more.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">04</div>
              <h3>Gentle, never vague</h3>
              <p>Being gentle doesn&apos;t stop us being honest. We give you our clear, confident recommendation, kindly, then leave the decision to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="sec alt" id="team">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">The people who&apos;ll care for you</div>
            <h2>A gentle team you&apos;ll get to <em>know</em></h2>
            <p style={{ marginTop: '14px', fontSize: '18px', maxWidth: '40em', marginLeft: 'auto', marginRight: 'auto' }}>
              You&apos;ll see the same familiar faces each visit. Calm, unhurried, and genuinely glad you came in.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px', marginTop: '40px' }}>
            {clinicians.map((member, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="ph" style={{ aspectRatio: '3/4', marginBottom: '16px' }}>
                  <span>Photo: {member.name}</span>
                </div>
                <h4 style={{ margin: '0 0 4px' }}>{member.name}</h4>
                <p style={{ color: 'var(--clay)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', margin: '0 0 10px' }}>{member.role}</p>
                <p style={{ fontSize: '15px', color: 'var(--ink-soft)', margin: 0 }}>{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="lang-band reveal" style={{ marginTop: '48px' }}>
            <b>We speak your language.</b> Our team can care for you in English, Mandarin, Hebrew, Russian, Hindi, Tamil and Kannada.
          </div>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
