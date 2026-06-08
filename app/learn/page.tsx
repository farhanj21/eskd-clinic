import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Dental Health Blog & Resources | East St Kilda Dental',
  description:
    'Practical dental health articles and guides from the team at East St Kilda Dental — covering preventive care, cosmetic options, fees, orthodontics and more.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/learn' },
}

export default function LearnIndex() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow light">Resources</span>
            <h1>Dental Health Blog</h1>
            <p className="lede" style={{ color: 'rgba(246,239,227,.85)', maxWidth: '600px', margin: '0 auto' }}>
              Practical guides and honest dental advice from our team — no jargon, no upselling.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="articles-grid reveal">
            {articles.map((article, i) => (
              <Link key={article.slug} href={`/learn/${article.slug}`} className="article-card" style={{ transitionDelay: `${i * 0.06}s` }}>
                <span className="eyebrow">{article.eyebrow}</span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <div className="article-meta">
                  <span>{new Date(article.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>{article.readTime}</span>
                </div>
                <span className="read-more">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
