import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { articles, getArticle } from '@/data/articles'
import GetInTouch from '@/components/GetInTouch'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical: `https://www.eaststkildadental.com.au/learn/${slug}` },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="page-hero-inner" style={{ maxWidth: '760px' }}>
            <div className="page-hero-text reveal">
              <span className="eyebrow light">{article.eyebrow}</span>
              <h1>{article.title}</h1>
              <div className="article-meta-hero" style={{ color: 'rgba(246,239,227,.65)', marginTop: '16px', fontSize: '14px' }}>
                <span>{new Date(article.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span style={{ margin: '0 12px' }}>·</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="lede reveal" style={{ fontSize: '1.15rem', marginBottom: '32px' }}>{article.excerpt}</p>
          <div className="prose reveal" style={{ transitionDelay: '.05s' }}>
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {article.faq && article.faq.length > 0 && (
            <div style={{ marginTop: '56px' }}>
              <h2 className="reveal">Frequently Asked Questions</h2>
              <div className="faq-list reveal" style={{ transitionDelay: '.1s' }}>
                {article.faq.map((item, i) => (
                  <details key={i} className="faq-item">
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="article-back reveal" style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
            <Link href="/learn" className="btn btn-outline">← Back to all articles</Link>
          </div>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
