import Link from 'next/link'
import Photo from '@/components/Photo'
import type { ArticleData } from '@/data/articles'

/**
 * The card grid for a set of guides.
 *
 * Shared by the Learn hub and every topic page so a guide looks and links the
 * same wherever it appears. Only ever pass published guides — an unwritten
 * guide has no page to link to.
 */
export default function GuideGrid({ guides }: { guides: ArticleData[] }) {
  return (
    <div className="svc-grid reveal">
      {guides.map((guide) => (
        <Link
          key={guide.slug}
          href={`/learn/${guide.slug}`}
          className="svc"
          style={{ cursor: 'pointer', textDecoration: 'none' }}
        >
          <Photo
            src={guide.image}
            alt={guide.title}
            hint="Article image"
            sizes="(max-width: 820px) 100vw, 33vw"
            style={{ height: '140px', marginBottom: '12px' }}
          />
          <h4>{guide.title}</h4>
          <p>{guide.excerpt}</p>
          <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>
            Read article &rarr;
          </span>
        </Link>
      ))}
    </div>
  )
}
