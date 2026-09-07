import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/business'

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

/**
 * TEMPORARY: every deployment, including staging and preview, is crawlable so
 * that AI assistants can read the site before it is live on the production
 * host. Staging used to be blocked with `userAgent: '*', disallow: '/'`; put
 * that back (gated on `isProduction` from lib/env) once it is no longer needed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
