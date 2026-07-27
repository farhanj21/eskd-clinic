export default function AboutSplit() {
  return (
    <section className="about-split" id="about">
      <div className="about-split-inner">

        {/* Left — content */}
        <div className="about-split-content reveal from-left">
          <span className="about-split-eyebrow">Welcome to East St Kilda Dental</span>

          <h2 className="about-split-heading">
            A local clinic with<br />
            heart, experience<br />
            and modern care.
          </h2>

          <div className="about-split-divider" />

          <p className="about-split-body">
            For decades, we've been proud to care for generations of local families.
            Our experienced team combines advanced dentistry with a warm, personalised
            approach so you can feel confident and comfortable every step of the way.
          </p>

          <a href="#about" className="btn about-split-btn">
            Learn More About Us
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg> */}
          </a>
        </div>

        {/* Right — image */}
        <div className="about-split-image-wrap reveal from-right">
          <div className="about-split-image-border" />
          <img
            src="/assets/clinic.webp"
            alt="East St Kilda Dental clinic interior"
            className="about-split-image"
          />
        </div>

      </div>
    </section>
  )
}
