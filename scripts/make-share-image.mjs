// Generates the 1200x630 Open Graph share card.
// Brand: sage background, wordmark, tagline, $297 line — per Rec 04.
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const SAGE_DEEP = '#37503F'
const SAGE = '#4C6B5A'
const CREAM = '#F7F3EC'
const CLAY_SOFT = '#EFD9C5'
const PAPER = '#FCFAF5'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="82%" cy="8%" r="95%">
      <stop offset="0%" stop-color="${SAGE}"/>
      <stop offset="62%" stop-color="${SAGE_DEEP}"/>
      <stop offset="100%" stop-color="#2C4033"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="0" width="1200" height="8" fill="${CLAY_SOFT}"/>

  <!-- eyebrow -->
  <text x="96" y="176" fill="${CLAY_SOFT}" font-family="Georgia, 'Times New Roman', serif"
        font-size="25" letter-spacing="5.5">EST. 1980 &#183; EAST ST KILDA</text>

  <!-- wordmark -->
  <text x="96" y="286" fill="${PAPER}" font-family="Georgia, 'Times New Roman', serif"
        font-size="92" font-weight="600" letter-spacing="-0.5">East St Kilda Dental</text>

  <!-- tagline -->
  <text x="96" y="368" fill="${CREAM}" font-family="Georgia, 'Times New Roman', serif"
        font-size="42" font-style="italic" opacity="0.93">Gentle family and emergency dentist</text>

  <!-- rule -->
  <rect x="96" y="424" width="132" height="3" fill="${CLAY_SOFT}" opacity="0.85"/>

  <!-- offer line -->
  <text x="96" y="506" fill="${CREAM}" font-family="Georgia, 'Times New Roman', serif"
        font-size="34" opacity="0.9">The Comprehensive Care Visit &#183; $297</text>

  <!-- address -->
  <text x="96" y="560" fill="${CREAM}" font-family="Georgia, 'Times New Roman', serif"
        font-size="26" opacity="0.62">364 Dandenong Rd, St Kilda East VIC 3183</text>
</svg>`

await mkdir('public/assets/social', { recursive: true })

const info = await sharp(Buffer.from(svg))
  .jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: true })
  .toFile('public/assets/social/share-1200x630.jpg')

console.log(`written: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB`)
