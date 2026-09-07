import Link from 'next/link'

export default function UtilityBar() {
  return (
    <div className="topbar">
      The New Patient Comprehensive Care Visit &middot;{' '}
      <Link href="/new-patient-comprehensive-care-visit">See what&apos;s included</Link>
    </div>
  )
}
