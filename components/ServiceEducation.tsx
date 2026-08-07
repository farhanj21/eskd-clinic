import Link from 'next/link'
import GuideGrid from '@/components/GuideGrid'
import { guidesForService } from '@/data/service-education'

/**
 * The Dental Education band that closes every service page.
 *
 * Uses the same card grid as the Learn hub, so a guide looks and links the same
 * wherever it appears. Renders nothing at all if the library has no published
 * guide for this service — an empty "further reading" block is worse than none.
 */
export default function ServiceEducation({ slug }: { slug: string }) {
  const guides = guidesForService(slug)
  if (guides.length === 0) return null

  return (
    <section className="sec" id="dental-education">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow">Dental education</div>
          <h2>Read up before you decide</h2>
          <p style={{ marginTop: '14px', fontSize: '17px', maxWidth: '44em', marginLeft: 'auto', marginRight: 'auto' }}>
            Clear, judgement-free guides from our library &mdash; no jargon, no scare tactics, no selling.
          </p>
        </div>
        <div style={{ marginTop: '36px' }}>
          <GuideGrid guides={guides} />
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }} className="reveal">
          <Link href="/learn" className="btn btn-ghost">Browse all dental education</Link>
        </div>
      </div>
    </section>
  )
}
