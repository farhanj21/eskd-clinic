# Photo Mapping — every placeholder, where its photo goes

Companion to [photo-infrastructure.md](photo-infrastructure.md). Each row is one `<Photo>` call-site waiting for a real photo. Workflow per photo: drop raw file in `photos-raw/` → `npm run images` → move output to the **Target file** path → add `src="<target>"` + `alt="…"` to the call-site. Tick the box when done.

The `sizes` attr is already set at every call-site — don't change it. `priority` is already set on the home hero only.

## Folder convention under `public/assets/`

One folder per page, named after the route it serves:

- `home/` · `about/` · `contact/` · `learn/` · `emergency/` · `nervous-patients/` · `comprehensive-care-visit/` · `your-first-visit/` · `using-your-super/`
- `services/` — all 20 service heroes, one flat folder, named for the service slug in `data/services.ts`
- `suburbs/` — 20 suburb photos, one flat folder, named for the suburb slug in `data/suburbs.ts`. Currently unreferenced: the suburb pages have no hero photo
- `articles/` — learn article images · `gallery/` — consented results, shared by the home page and `/our-work`
- `team/` — portraits and group shots · `funds/` — health fund logos · `social/` · `video/`
- `shared/` — the handful of photos genuinely used across unrelated pages (`hero`, `meet-the-team`)
- `incoming/` — the pipeline's landing zone only. Nothing live is served from here; a file sitting in it is one that hasn't been wired to a call-site yet.

## Home — `app/page.tsx`

| ✓ | Section | Shot brief (hint) | Target file | Notes |
|---|---|---|---|---|
| ☐ | Hero | Friendly clinician with patient mid-conversation, soft natural light | `heroes/home-hero.webp` | **priority is set** — this is the LCP image |
| ☐ | Offer card | Consult room or relaxed patient-and-dentist moment | `clinic/consult-room.webp` | shared with first-visit pages |
| ☐ | Nervous patients | Calm hands, relaxed patient, or gentle clinic environment | `clinic/calm-treatment.webp` | |
| ☑ | Team lead | Team group photo | `team/team-home.webp` | done |
| ☑ | Dr Ganatra / Dr Goldman / Dr Dean | Portraits | `team/*.webp` | done |
| ☐ | Beverly Spector | Portrait | `team/beverly-spector.webp` | empty frame today; add hint too if desired |
| ☐ | Our story | Heritage feel: practice exterior or old neighbourhood photo | `clinic/exterior-heritage.webp` | |
| ☐ | Fees | Front desk welcome, or hands with printed care plan | `clinic/front-desk.webp` | |
| ☐ | Gallery ×4 | Understated before/after, real smiles | `gallery/result-01.webp` … `result-04.webp` | consent + AHPRA review required |
| ☐ | Education ×3 | Article images | `articles/nervous-return.webp`, `articles/bleeding-gums.webp`, `articles/crown-decision.webp` | |
| — | Location map | *Not a photo* — awaiting Google Maps iframe embed | — | left as raw `.ph` div |

## About section

| ✓ | Page | Shot brief | Target file |
|---|---|---|---|
| ☐ | `app/about/page.tsx` hero | Clinic exterior, corner of Dandenong & Orrong | `clinic/exterior-corner.webp` |
| ☐ | `app/about/our-story/page.tsx` hero | Clinic exterior with local character | `clinic/exterior-corner.webp` (reuse) |
| ☐ | our-story ch.1 | Building or street today, or archival image | `clinic/exterior-heritage.webp` (reuse) |
| ☐ | our-story ch.2 | Dr Eddie Goldman, or long-standing patient/family | `team/eddie-goldman-story.webp` |
| ☐ | our-story ch.3 | Dr Anbar with a patient, gentle and reassuring | `team/anbar-with-patient.webp` |
| ☐ | `app/about/our-team/page.tsx` hero | Warm group photo of the team | `team/team-home.webp` (reuse) |
| ☐ | our-team member cards | Portraits — **4 webp files already exist**: `indiana-oconnor`, `maddy-coventry`, `michelle-callaghan`, `michelle-mirjam` | add `image:` field to the member entries in the page's data array |
| ☐ | `app/about/why-were-different/page.tsx` hero | Team with a patient | `team/team-with-patient.webp` |

## Other pages

| ✓ | Page | Shot brief | Target file |
|---|---|---|---|
| ☐ | `app/nervous-patients/page.tsx` hero | Calm, relaxed patient with gentle clinician | `heroes/nervous-hero.webp` |
| ☐ | nervous-patients comfort | Happy-gas setup, calm treatment room, or patient with headphones | `clinic/comfort-options.webp` |
| ☐ | nervous-patients team | Warm team photo, real faces in the clinic | `team/team-home.webp` (reuse) |
| ☐ | `app/your-first-visit/page.tsx` hero | Friendly welcome at reception | `clinic/reception-welcome.webp` |
| ☐ | your-first-visit offer card | Consult room | `clinic/consult-room.webp` (reuse) |
| ☐ | `app/comprehensive-care-visit/page.tsx` hero | Relaxed patient with friendly clinician | `heroes/ccv-hero.webp` |
| ☐ | comprehensive-care-visit offer card | Consult room | `clinic/consult-room.webp` (reuse) |
| ☐ | `app/emergency-dentist/page.tsx` hero | Friendly team member on the phone, warm reception — nothing graphic | `clinic/reception-phone.webp` |
| ☐ | `app/contact/page.tsx` hero | Reception or team welcoming a patient | `clinic/reception-welcome.webp` (reuse) |
| ☐ | `app/services/page.tsx` hero | Team or a treatment room | `heroes/services-hero.webp` |
| ☐ | `app/using-your-super/page.tsx` hero | Calm patient-dentist conversation, care plan on table | `clinic/care-plan-chat.webp` |
| ☐ | `app/areas-we-serve/page.tsx` hero | Clinic exterior or local street | `clinic/exterior-corner.webp` (reuse) |
| — | `app/dentist-*/page.tsx` heroes | *No hero photo* — the suburb pages were rebuilt to the suburb-page spec, whose hero is the copy plus the quick-facts card. The 20 photos in `suburbs/` are unused until a photo band is added back |
| ☐ | `app/learn/page.tsx` hero | Warm, calm editorial image | `heroes/learn-hero.webp` |
| ☐ | learn cards ×2 | Article image / coming soon | `articles/<slug>.webp` |
| ☐ | `app/our-work/page.tsx` hero + gallery cards | Consented before/after photos | `gallery/case-<n>.webp` — consent + AHPRA review before publishing |
| — | `app/book/page.tsx` map | *Not a photo* — awaiting Google Maps iframe | — |

## Template pages (data-driven, add photos via the data files later)

- `app/services/[slug]/page.tsx` — one hero per service (20 services). Suggest `services/<slug>.webp`; wiring will need an `image` field in `data/services.ts` passed to the `<Photo>`.
- `app/learn/[slug]/page.tsx` — one hero per article. Suggest `articles/<slug>.webp` via an `image` field in `data/articles.ts`.
