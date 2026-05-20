export default function Reviews() {
  return (
    <section className="section reviews">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow center">From Our Patients</span>
          <h2>Kind words from the East&nbsp;St&nbsp;Kilda community</h2>
        </div>

        <div className="reviews-grid">
          <div className="review-card reveal">
            <span className="qmark" aria-hidden="true">&quot;</span>
            <div className="stars" aria-label="5 stars">★★★★★</div>
            <p className="quote">Dr&nbsp;Maydelman was so professional and made me feel so comfortable during my procedure. Didn't feel any pain or discomfort — will definitely be having all my future appointments here.</p>
            <div className="meta">
              <div className="avatar" aria-hidden="true">N</div>
              <div><b>Nitara N.</b><span>Google Review</span></div>
            </div>
          </div>
          <div className="review-card reveal" style={{transitionDelay:'.1s'}}>
            <span className="qmark" aria-hidden="true">&quot;</span>
            <div className="stars" aria-label="5 stars">★★★★★</div>
            <p className="quote">Dr&nbsp;Arik is very thorough and we felt really comfortable with the advice he gave for our family's dental care. The staff are lovely and the practice is so warm and inviting.</p>
            <div className="meta">
              <div className="avatar" aria-hidden="true">N</div>
              <div><b>Natalie H.</b><span>Google Review</span></div>
            </div>
          </div>
          <div className="review-card reveal" style={{transitionDelay:'.2s'}}>
            <span className="qmark" aria-hidden="true">&quot;</span>
            <div className="stars" aria-label="5 stars">★★★★★</div>
            <p className="quote">Bev was absolutely lovely &amp; provided excellent advice. The whole team genuinely cares — I'll be returning every six months without hesitation.</p>
            <div className="meta">
              <div className="avatar" aria-hidden="true">J</div>
              <div><b>Jemma B.</b><span>Google Review</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
