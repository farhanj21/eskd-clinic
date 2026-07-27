import Link from 'next/link'
import JsonLd from './JsonLd'
import { SITE_URL } from '@/lib/business'

export interface Crumb {
  name: string
  /**
   * Site-relative path, e.g. "/learn". Omit on the last crumb: the current page
   * is plain text in the visible trail and carries no `item` in the schema.
   */
  href?: string
}

const HOME: Crumb = { name: 'Home', href: '/' }

/**
 * The Learn section's label, defined once.
 *
 * The hub, every article and both breadcrumb outputs read it from here, so the
 * section can never be "Dental Education" in one place and "Learn" in another.
 */
export const LEARN_SECTION = { name: 'Dental Education', href: '/learn' }

/** Home → Dental Education, where the section itself is the current page. */
export const learnHubTrail: Crumb[] = [HOME, { name: LEARN_SECTION.name }]

/** Home → Dental Education → article. Pass the article's visible H1. */
export const learnArticleTrail = (title: string): Crumb[] => [HOME, LEARN_SECTION, { name: title }]

/**
 * Breadcrumb trail, visible and structured.
 *
 * Both outputs are generated from the same `trail`, so the BreadcrumbList and
 * the visible list can never disagree — which Google requires, and which is
 * otherwise the easy thing to get wrong when the two are maintained separately.
 *
 * Pass the trail from the route, not hand-written strings, so a new article
 * gets the correct breadcrumb with no extra edit.
 */
export default function Breadcrumb({ trail }: { trail: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      // The current page is deliberately left without an item URL.
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href}` } : {}),
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol>
          {trail.map((crumb) =>
            crumb.href ? (
              <li key={crumb.name}>
                <Link href={crumb.href}>{crumb.name}</Link>
              </li>
            ) : (
              <li key={crumb.name} aria-current="page">
                {crumb.name}
              </li>
            ),
          )}
        </ol>
      </nav>
    </>
  )
}
