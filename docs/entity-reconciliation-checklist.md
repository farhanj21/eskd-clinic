# Entity reconciliation checklist (NAP + sameAs)

Handover for marketing and the practice owner, from Recommendation 6.

The site side is done: every mention of the name, address, phone and email on
this website now comes from one constant, [`lib/business.ts`](../lib/business.ts).
What remains is off-site — making every external listing agree with it, character
for character.

Why it matters: search and AI engines build confidence in a business from the
same facts appearing identically across the web. A single stale phone number or
a "Dandenong Road" where everything else says "Dandenong Rd" lowers that
confidence, and can cost the knowledge panel and the AI citation.

## The canonical values

Copy these exactly. Do not abbreviate, expand or reformat them.

| Field | Canonical value |
| --- | --- |
| Name | `East St Kilda Dental` |
| Street | `364 Dandenong Rd` (**Rd**, never "Road") |
| Locality | `East St Kilda` |
| State | `VIC` |
| Postcode | `3183` |
| Country | `AU` |
| Phone (display) | `(03) 9527 3678` |
| Phone (international) | `+61 3 9527 3678` |
| Email | `hello@eaststkildadental.com.au` |
| Website | `https://www.eaststkildadental.com.au/` |

Opening hours as published on the site:

| Day | Hours |
| --- | --- |
| Monday – Thursday | 8:30am – 4:00pm |
| Friday | 8:30am – 4:30pm |
| Saturday | 8:00am – 4:00pm, **monthly, not weekly** |
| Sunday | Closed |

Saturday is deliberately excluded from the structured data because it is
monthly. If an external listing offers only weekly hours, leave Saturday out
there too rather than implying it runs every week.

## Listings to check

For each one: confirm it exists, then check the name, address, phone, hours and
website URL against the table above. Record the live URL in the last column — we
need it for `sameAs`.

| # | Listing | Status | Verified URL |
| --- | --- | --- | --- |
| 1 | Google Business Profile | | |
| 2 | Facebook page | | |
| 3 | Instagram profile | | |
| 4 | HealthEngine | | |
| 5 | Apple Maps / Apple Business Connect | | |
| 6 | Bing Places | | |
| 7 | White Pages / Yellow Pages | | |
| 8 | Australian Dental Association directory | | |
| 9 | Health fund provider directories (Bupa, Medibank, HCF, nib) | | |
| 10 | Any legacy listing under a previous practice name | | |

Item 10 matters most. The practice has traded on this corner since 1980 and was
led for decades by Dr Eddie Goldman, so old directory entries may carry a
previous name, a previous principal, or a disconnected phone number. Those are
the entries most likely to be contradicting the site.

## Feeding results back

Once a profile is confirmed live and its details match:

1. Add its URL to `socialProfiles` in [`lib/business.ts`](../lib/business.ts).
2. It flows automatically into the `sameAs` array of the home page structured
   data — no other change needed.

Only add a URL after opening it. An unverified or redirecting link in `sameAs`
weakens the entity rather than strengthening it.

Currently in `sameAs`:

- `https://maps.app.goo.gl/7e4dRpEyETE8K18s5` — Google Maps share link, already
  used on the contact page. Worth replacing with the canonical Google Business
  Profile URL if one is available.

Still needed: Facebook, Instagram, HealthEngine.

## Two open items from earlier recommendations

Both live in `lib/business.ts` and are marked `TODO`:

- **Latitude / longitude.** Currently `-37.8684, 145.0060`, taken from the SEO
  recommendation and not verified against the Google Business Profile. Confirm
  the real coordinates from GBP while you are in there.
- **Dr Edmund Goldman's title.** The site shows "Dentist & Prosthodontist"; the
  structured data says "Dentist". Only use the specialist title if he holds
  AHPRA specialist registration in prosthodontics.

## What was already correct

Checked across all 67 rendered pages, one form of each fact and no variants:

- Name: `East St Kilda Dental`, 1329 occurrences, no "ESK Dental" anywhere.
- Phone: `(03) 9527 3678` for display, `+61395273678` for `tel:` links.
- Email: `hello@eaststkildadental.com.au`.
- Address: `364 Dandenong Rd`. Nine "364 Dandenong Road" variants were found and
  normalised as part of this work.
