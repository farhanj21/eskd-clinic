import type { ArticleVideo as ArticleVideoData } from '@/data/articles'

/** A file we host and play ourselves, rather than something to embed. */
const HOSTED = /\.(mp4|webm|ogg|ogv|mov)(\?.*)?$/i

/**
 * Any usual YouTube or Vimeo link to its embed form.
 *
 * Writers paste whatever the share button gave them; the shape it happens to
 * be in is not their problem. YouTube goes to the no-cookie host so a reader
 * who never presses play is not tracked for having scrolled past.
 *
 * Anything we do not recognise is passed through untouched — an embed URL from
 * somewhere else still works.
 */
export function embedUrl(src: string) {
  const youtube = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/,
  )
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}`

  const vimeo = src.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`

  return src
}

/** True when we serve the file ourselves and can use the native player. */
export function isHostedVideo(src: string) {
  return HOSTED.test(src)
}

/**
 * A video inside a guide — the feature video under the opening answer, or one
 * inside a section.
 *
 * Hosted files use the browser's own player, so they cost nothing until played
 * and carry no third party. Everything else is a lazily loaded iframe, which
 * stays out of the way until the reader scrolls to it.
 */
export default function ArticleVideo({ video }: { video: ArticleVideoData }) {
  return (
    <figure className="post-video">
      <div className="post-video-frame">
        {isHostedVideo(video.src) ? (
          <video controls preload="metadata" poster={video.poster} playsInline>
            <source src={video.src} />
            {/* Read only by a browser that cannot play it at all. */}
            Your browser can&apos;t play this video.{' '}
            <a href={video.src}>Download it instead.</a>
          </video>
        ) : (
          <iframe
            src={embedUrl(video.src)}
            title={video.title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      {video.caption && <figcaption>{video.caption}</figcaption>}
    </figure>
  )
}
