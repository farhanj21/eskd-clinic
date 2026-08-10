/**
 * The health funds shown in the "we accept all major funds" logo rows, on the
 * home page and on /fees.
 *
 * Single source of truth so the two rows can never drift apart. A fund with a
 * `logo` renders as an image; one without falls back to its name as text, so a
 * new fund can be listed the moment it is accepted and given artwork later.
 *
 * `width` and `height` are the file's INTRINSIC pixel size, not the rendered
 * size. They only exist so the browser can reserve the right box and avoid
 * layout shift — the row sizes every logo by height in CSS (.ins-logos .lg img).
 * If you replace a file, update these numbers to match it.
 *
 * These are third-party registered trademarks. Use the artwork exactly as each
 * fund supplies it: don't recolour, stretch, or add effects.
 */

export interface HealthFund {
  /** Fund name. Used as the alt text, and as the visible label when there is no logo. */
  name: string
  logo?: {
    /** Path under /public. */
    src: string
    /** Intrinsic width of the file in px. */
    width: number
    /** Intrinsic height of the file in px. */
    height: number
    /**
     * Rendered height in px, overriding the row default of 30.
     *
     * Logo rows never look right at one uniform height: a horizontal wordmark
     * and a square badge with the wordmark set inside it read at completely
     * different sizes at the same pixel height. Set this to bring a mark back
     * into optical balance with its neighbours.
     */
    opticalHeight?: number
  }
}

export const healthFunds: HealthFund[] = [
  {
    name: 'Bupa',
    // A full-bleed white-on-blue tile at 1.8:1, against wordmarks at 2.4–3.6:1.
    // At the row's 30px default its lettering reads well under the marks either
    // side, because the tile's padding is part of the artwork. 44px matches them.
    logo: { src: '/assets/funds/bupa.webp', width: 290, height: 161, opticalHeight: 44 },
  },
  {
    name: 'Medibank',
    logo: { src: '/assets/funds/Medibank_logo_2013.svg', width: 140, height: 45 },
  },
  {
    name: 'HCF',
    logo: { src: '/assets/funds/hcf-health-logo.webp', width: 812, height: 252 },
  },
  {
    name: 'nib',
    logo: { src: '/assets/funds/nib.webp', width: 351, height: 144 },
  },
  {
    name: 'Australian Unity',
    logo: { src: '/assets/funds/australian-unity-logo.webp', width: 599, height: 166 },
  },
  {
    name: 'CBHS',
    // Stacked lockup (CBHS over HEALTH) at 1.8:1, so it needs the same
    // treatment as Bupa to stop the two-line type reading small.
    logo: { src: '/assets/funds/cbhs.webp', width: 739, height: 415, opticalHeight: 42 },
  },
]

/** The closing tile. Always text — it stands for every fund not named above. */
export const otherFundsLabel = '+ all others'
