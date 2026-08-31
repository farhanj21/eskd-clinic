import Breadcrumb, { type Crumb } from './Breadcrumb'
import styles from './BreadcrumbBar.module.css'

/**
 * A breadcrumb trail in the page-top strip.
 *
 * <Breadcrumb> renders the trail and its BreadcrumbList; this wraps it in the
 * band that sits between the header and the hero. Pages that want the standard
 * placement use this and pass a trail — they do not rebuild the strip, which is
 * how the Learn section drifted into showing its trail inside the hero on the
 * hub and inside the article body on a guide.
 *
 * `id` is passed straight through: give it "<page url>#breadcrumb" on a page
 * whose own JSON-LD points at the list by @id, and leave it off elsewhere.
 */
export default function BreadcrumbBar({ trail, id }: { trail: Crumb[]; id?: string }) {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <Breadcrumb trail={trail} id={id} />
      </div>
    </div>
  )
}
