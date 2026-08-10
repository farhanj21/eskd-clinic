import type { CSSProperties } from 'react'
import Image from 'next/image'
import { healthFunds, otherFundsLabel } from '@/data/healthFunds'

/**
 * The row of accepted-health-fund logos, shared by the home page and /fees.
 *
 * `unoptimized` on every logo, deliberately: one of the files is SVG, and the
 * Next image optimizer refuses SVG unless next.config.ts sets
 * `dangerouslyAllowSVG`. These files are 3–9 KB each, so there is nothing for
 * the optimizer to win here anyway, and serving them all the same way keeps one
 * code path instead of two.
 */
export default function HealthFundLogos({
  className = '',
  otherLabel = otherFundsLabel,
}: {
  className?: string
  /** Wording of the closing tile. /fees says "+ all major funds" rather than the default. */
  otherLabel?: string
}) {
  return (
    <div className={`ins-logos ${className}`.trim()}>
      {healthFunds.map(({ name, logo }) => (
        <div key={name} className="lg">
          {logo ? (
            <Image
              src={logo.src}
              alt={name}
              width={logo.width}
              height={logo.height}
              unoptimized
              // A custom property rather than `height` directly, so the mobile
              // step-down in globals.css can still scale it.
              style={logo.opticalHeight ? ({ '--logo-h': `${logo.opticalHeight}px` } as CSSProperties) : undefined}
            />
          ) : (
            name
          )}
        </div>
      ))}
      {/* <div className="lg">{otherLabel}</div> */}
    </div>
  )
}
