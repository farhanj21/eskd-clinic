import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/business'
import { isProduction } from '@/lib/env'

/**
 * AI answer engines can only cite a site their crawlers are allowed to read.
 *
 * The wildcard rule below already permits these, but they are also named
 * explicitly so that allowing them is a visible, deliberate decision rather
 * than an accident of defaults — and so nobody later adds a blanket block
 * without seeing exactly what it would cost.
 */
const AI_CRAWLERS = [
  'GPTBot', // OpenAI — index and training
  'OAI-SearchBot', // OpenAI — ChatGPT Search
  'ChatGPT-User', // OpenAI — live fetch on a user's behalf
  'ClaudeBot', // Anthropic — index
  'Claude-User', // Anthropic — live fetch on a user's behalf
  'Claude-SearchBot', // Anthropic — search
  'PerplexityBot', // Perplexity — index
  'Perplexity-User', // Perplexity — live fetch
  'Google-Extended', // Google — Gemini and AI Overviews grounding
  'Applebot-Extended', // Apple Intelligence
  'Amazonbot',
  'meta-externalagent', // Meta AI
  'DuckAssistBot', // DuckDuckGo AI
  'CCBot', // Common Crawl — feeds many models
]

export default function robots(): MetadataRoute.Robots {
  // Staging and preview deployments stay fully blocked.
  if (!isProduction) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  // Nothing is disallowed on production. There are no private paths, and the
  // one page kept out of the index (/take-care-of-you) is handled with a
  // robots meta tag — deliberately not disallowed here, because a crawler that
  // is blocked from fetching a page can never read the noindex on it.
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
