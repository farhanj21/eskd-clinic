# Photo Infrastructure

How photos are added to eaststkildadental.com.au with guaranteed performance. For **where each photo goes**, see [photos.md](photos.md).

## The pipeline in 30 seconds

```
1. Drop the raw photo (JPG/PNG/HEIC, any size) into photos-raw/   ← gitignored
2. npm run images                                                  ← sharp → WebP, resized, ~50-100 KB
3. Move the output from public/assets/incoming/ to its target folder (see photos.md)
4. Add src + alt to the matching <Photo> component call-site
```

At runtime, `next/image` then handles the rest: responsive `srcset`, lazy-loading below the fold, and on-the-fly AVIF/WebP via the Vercel image optimizer (`next.config.ts` → `images.formats`).

## The `Photo` component — `components/Photo.tsx`

Every image placeholder on the site is a `<Photo>` call. Without `src` it renders the italic photography-brief hint on the sage/clay gradient; with `src` it renders an optimized cover-cropped image. Adding a photo never changes layout — the `.ph` frame reserves the space either way, so there is **zero CLS**.

```tsx
<Photo
  tall                                     // .tall variant (420px hero frame)
  className="reveal"                        // extra classes pass through
  priority                                  // ONLY the above-the-fold hero, one per page
  hint="Warm, real photo of the team."      // brief shown until src exists
  src="/assets/services/veneers.webp"       // add this line when the photo arrives
  alt="The East St Kilda Dental team"       // required with src — describe for screen readers
  sizes="(max-width: 860px) 100vw, 48vw"    // already set per call-site, don't change
  objectPosition="center top"               // optional crop anchor (faces near top edge)
/>
```

## Rules that keep it fast

| Rule | Why |
|---|---|
| Source photos ≥1600px wide for heroes, ≥800px for cards | Enough pixels for retina without waste |
| Run everything through `npm run images` | 1.9 MB PNG → ~58 KB WebP (real result from clinic.png) |
| `priority` on at most ONE image per page (the above-the-fold hero) | Preloads the LCP image; everything else lazy-loads |
| Never change the `sizes` attr at a call-site | It matches the CSS grid column; wrong sizes = oversized downloads |
| `alt` text always set when `src` is set | Accessibility + SEO |
| Faces near the top of frame → `objectPosition="center top"` | Cover-crop can cut heads off otherwise |

## Script reference — `scripts/optimize-images.mjs`

```
npm run images                          # all of photos-raw/ → public/assets/incoming/*.webp (max 1600px)
npm run images -- --width 800           # card-sized targets
npm run images -- --out public/assets/team
npm run images -- --force               # overwrite existing output
npm run images -- photos-raw/one.jpg    # single file
```

Quality 80, EXIF orientation respected, metadata stripped, filenames kebab-cased. Never upscales.

## Photography brief

The `hint` prop on every `<Photo>` *is* the shot brief (e.g. "Warm, real photo of the clinic exterior or local street. Never stock imagery."). The full shot list lives in [photos.md](photos.md). House style: warm, real, soft natural light — never stock, never glossy "perfect smile" imagery. Before/after and patient photos need written consent and AHPRA review.
