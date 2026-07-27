import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { articles, getArticle } from '@/data/articles'
import GetInTouch from '@/components/GetInTouch'
import JsonLd from '@/components/JsonLd'
import Breadcrumb, { learnArticleTrail } from '@/components/Breadcrumb'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'

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
  return withSocial({
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical: `https://www.eaststkildadental.com.au/learn/${slug}` },
  })
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: article.title,
    author: article.author
      ? { '@type': 'Person', name: article.author }
      : { '@type': 'Organization', name: 'East St Kilda Dental' },
    publisher: { '@type': 'Dentist', name: 'East St Kilda Dental' },
    inLanguage: 'en-AU',
    datePublished: article.date,
    dateModified: article.date,
  }

  return (
    <main>
      <JsonLd data={schema} />
      <div className="container">
        <article className="post">
          <Breadcrumb trail={learnArticleTrail(article.title)} />

          {/* Back link */}
          <Link href="/learn" className="post-back">&larr; Back to dental education</Link>

          {/* Category breadcrumb */}
          <div className="post-cat">Learn / {article.eyebrow}</div>

          {/* Title */}
          <h1>{article.title}</h1>

          {/* Byline */}
          {article.author && (
            <div className="byline">
              Reviewed by {article.author} &middot; {article.readTime}
            </div>
          )}
          {!article.author && (
            <div className="byline">{article.readTime}</div>
          )}

          {/* Short answer box (optional) */}
          {article.shortAnswer && (
            <div className="ansbox">
              <div className="lbl">The short answer</div>
              <p>{article.shortAnswer}</p>
            </div>
          )}

          {/* Excerpt / intro answer */}
          {!article.shortAnswer && (
            <p className="answer">{article.excerpt}</p>
          )}

          {/* Hero image placeholder */}
          <Photo
            className="post-hero"
            hint={`Article image — ${article.title}`}
            sizes="(max-width: 820px) 100vw, 60vw"
          />

          {/* Body: structured sections (h2 + paragraphs) */}
          {article.sections && article.sections.length > 0 && (
            <div className="post-body">
              {article.sections.map((section, i) => (
                <div key={i}>
                  <h2>{section.h2}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Body: flat paragraphs (legacy articles) */}
          {!article.sections && article.body && article.body.length > 0 && (
            <div className="post-body">
              {article.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* CTA box */}
          {article.ctaH3 && (
            <div className="post-cta">
              <h3>{article.ctaH3}</h3>
              {article.ctaBody && <p>{article.ctaBody}</p>}
              <Link href="/book" className="btn">Book your first visit</Link>
            </div>
          )}

          {/* FAQ */}
          {article.faq && article.faq.length > 0 && (
            <div className="faq" style={{ marginTop: '42px' }}>
              <h3 style={{ fontFamily: 'var(--display)', textAlign: 'center', marginBottom: '18px', color: 'var(--sage-deep)' }}>
                Common questions
              </h3>
              {article.faq.map((item, i) => (
                <details key={i} open={i === 0}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          )}

          {/* Related links */}
          {article.related && article.related.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <div className="eyebrow">Related</div>
              <h3 style={{ fontFamily: 'var(--display)', color: 'var(--ink)', marginBottom: '16px' }}>More on this</h3>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {article.related.map((rel, i) => (
                  <Link key={i} href={rel.href} className="btn btn-ghost">{rel.label}</Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom back link */}
          <Link href="/learn" className="post-back" style={{ marginTop: '40px', display: 'inline-flex' }}>
            &larr; Back to dental education
          </Link>
        </article>
      </div>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
