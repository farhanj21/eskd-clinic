export default function TrustStrip() {
  return (
    <div className="trust reveal">
      <div className="container trust-inner">
        <div className="trust-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:'18px',height:'18px',flexShrink:0}}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="8 12 11 15 16 9" />
          </svg>
          Accredited with Australian healthcare bodies
        </div>
        <div className="trust-logos">
          <div className="trust-logo sans">ADA</div>
          <div className="trust-logo">Invisalign</div>
          <div className="trust-logo sans">AHPRA</div>
          <div className="trust-logo">Medicare CDBS</div>
          <div className="trust-logo sans">HICAPS</div>
        </div>
      </div>
    </div>
  )
}
