import Link from 'next/link'
import { populatedTopics } from '@/data/topics'

/**
 * "Browse by topic" chips as real, crawlable links.
 *
 * Only topics that already have a published guide are rendered, so we never
 * link to an empty page. Each chip is a genuine internal link to its own
 * indexable topic page rather than decorative text.
 */
export default function TopicChips({ activeSlug }: { activeSlug?: string }) {
  if (populatedTopics.length === 0) return null

  return (
    <div className="topic-tags">
      {populatedTopics.map((topic) => (
        <Link
          key={topic.slug}
          href={`/learn/${topic.slug}`}
          className={topic.slug === activeSlug ? 'topic-tag on' : 'topic-tag'}
          aria-current={topic.slug === activeSlug ? 'page' : undefined}
        >
          {topic.label}
        </Link>
      ))}
    </div>
  )
}
