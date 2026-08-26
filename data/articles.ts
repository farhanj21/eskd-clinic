export interface ArticleSection {
  h2: string
  paragraphs: string[]
}

export interface ArticleData {
  slug: string
  title: string
  eyebrow: string       // category shown on card + article
  author?: string       // "Reviewed by Dr Anbar Ganatra"
  date: string
  readTime: string
  excerpt: string       // shown on card and as .answer intro
  image?: string        // image used on guide cards and article pages
  shortAnswer?: string  // optional .ansbox callout
  body?: string[]       // flat paragraphs (legacy / fallback)
  sections?: ArticleSection[]   // structured h2 + paragraphs
  faq?: { q: string; a: string }[]
  ctaH3?: string
  ctaBody?: string
  related?: { label: string; href: string }[]
  status?: 'published' | 'coming-soon'
  /** Topic slugs from data/topics.ts. Drives the Browse-by-topic pages. */
  topics?: string[]
  meta: { title: string; description: string }
}

/* ─── V2 prototype articles (verbatim) ─────────────────── */
export const articles: ArticleData[] = [
  {
    slug: 'havent-been-to-the-dentist-in-years',
    title: "Haven't been to the dentist in years? Here's exactly what to expect.",
    eyebrow: 'Nervous patients',
    author: 'Dr Anbar Ganatra',
    date: '2026-06-07',
    readTime: '6 min read',
    status: 'published',
    topics: ['nervous-patients'],
    image: '/assets/articles/article-1.webp',
    excerpt:
      "If it has been years since your last visit, your first appointment with us is mostly a calm conversation and a gentle look, with no lectures and no judgement. You will not be rushed into anything. You will leave knowing exactly where your dental health stands and with a simple, prioritised care plan, and nothing happens without your say-so.",
    sections: [
      {
        h2: 'You are far from alone',
        paragraphs: [
          "A large share of the people we care for have not seen a dentist in years, sometimes decades, usually after one bad experience a long time ago. Avoiding it is incredibly common, and it does not say anything about you as a person. Getting back into care is almost always easier than the worry that has quietly built up around it.",
        ],
      },
      {
        h2: 'What actually happens at your first visit',
        paragraphs: [
          "Your first appointment is unhurried and built around getting comfortable. We start with a relaxed chat about your history and what is on your mind, before anyone picks up an instrument. Then we do a gentle, comprehensive check of your teeth, gums and bite, showing you what we see on the screen and explaining it in plain language as we go. We finish with a clear, prioritised care plan, and there is no pressure to decide anything on the day.",
        ],
      },
      {
        h2: 'Will it hurt, and will I be judged?',
        paragraphs: [
          "The first visit is an examination, so it is gentle and there is rarely any discomfort. And there is genuinely no judgement here: no lectures, no raised eyebrows. Looking after nervous patients who have been away a long time is one of the things we are known for, and we go entirely at your pace. If you feel anxious, tell us, and we will slow down and offer comfort options such as happy gas.",
        ],
      },
      {
        h2: 'What if I need some work done?',
        paragraphs: [
          "If we do find something, you will get a clear written estimate before anything goes ahead, and time to think it over. We sort out what matters most first and phase the rest so it stays manageable. We treat the cause, not just the symptom, so you are not back for the same problem, and we will always tell you honestly what can safely wait.",
        ],
      },
      {
        h2: 'How to make your first visit easier',
        paragraphs: [
          "Three simple things help. Tell us when you book that it has been a while and that you feel nervous, so we can set aside extra time. Bring a short list of anything that has been bothering you, even small things. And if it helps, bring someone with you. From there, the rest is our job, not yours.",
        ],
      },
      {
        h2: 'When it is worth coming in sooner',
        paragraphs: [
          "Most of the time there is no rush, and coming in when you feel ready is perfectly fine. But if you have ongoing pain, swelling, bleeding that does not settle, or a tooth that has broken, it is worth being seen promptly so a small problem does not turn into a bigger one.",
        ],
      },
    ],
    ctaH3: 'Ready when you are',
    ctaBody: "Whenever you feel ready, we'll make coming back as gentle as possible. No judgement, just a warm welcome and a clear care plan.",
    faq: [
      {
        q: 'How long since my last visit is "too long"?',
        a: "There is no such thing as too long. Whether it has been two years or twenty, you are welcome, and the approach is the same: a gentle check and a clear care plan.",
      },
      {
        q: "Will you be able to tell how long it's been?",
        a: "We focus on where things are now and what will help, not on the past. There are no lectures, only a way forward.",
      },
      {
        q: "What if I'm too embarrassed?",
        a: "Embarrassment is one of the most common reasons people put it off, and it is completely understandable. Our whole approach is built around making sure you never feel judged.",
      },
    ],
    related: [
      { label: 'Gentle dentistry', href: '/nervous-patients' },
      { label: 'Your first visit', href: '/your-first-visit' },
      { label: 'The $297 visit', href: '/comprehensive-care-visit' },
    ],
    meta: {
      title: "Haven't Been to the Dentist in Years? Here's What to Expect | East St Kilda Dental",
      description:
        "A gentle, no-judgement guide to coming back to the dentist after a long absence — what to expect, and why it's never too late.",
    },
  },
  {
    slug: 'bleeding-gums',
    title: 'Why are my gums bleeding?',
    eyebrow: 'Gum health',
    author: 'East St Kilda Dental team',
    date: '2026-06-07',
    readTime: '5 min read',
    status: 'published',
    topics: ['prevention'],
    image: '/assets/articles/article-2.webp',
    excerpt:
      "If your gums bleed when you brush or floss, you're not alone, and it's usually very treatable. Here's what it means and what to do, without any judgement.",
    shortAnswer:
      "Bleeding gums are most often an early sign of gum inflammation (gingivitis), usually from plaque building up along the gumline. The good news: caught early, it's common, manageable, and often reversible with a professional clean and better daily care.",
    sections: [
      {
        h2: 'Is bleeding gums something to worry about?',
        paragraphs: [
          "A little blood when you brush or floss is your gums telling you they're irritated, not a reason to panic, but not something to ignore either. In the early stage (gingivitis) it's very treatable.",
          "If your gums bleed a lot, are painful, or you've noticed loose teeth or persistent bad breath, it's worth being seen sooner rather than later.",
        ],
      },
      {
        h2: 'What causes bleeding gums?',
        paragraphs: [
          "The most common cause is plaque building up where the tooth meets the gum, often in spots that are easy to miss when brushing.",
          "Other things can contribute: brushing too hard, a brand-new flossing routine (which usually settles within a week or two), some medications, hormonal changes in pregnancy, and smoking. We'll help you work out what's going on for you.",
        ],
      },
      {
        h2: 'What you can do at home',
        paragraphs: [
          "Brush gently twice a day, and clean between your teeth daily with floss or interdental brushes. Don't be alarmed if flossing causes a little bleeding at first, that often improves as your gums get healthier.",
          "Good home care helps a lot, but it can't remove hardened tartar. That's exactly what a professional clean is for.",
        ],
      },
      {
        h2: "What happens if it's left?",
        paragraphs: [
          "Ignored over months and years, gingivitis can progress to periodontitis, where the gum and bone start to pull away from the teeth. That's the leading cause of tooth loss in adults, and unlike early gum inflammation, the damage can't be fully reversed. The earlier it's looked at, the simpler it is to sort out, which is the whole point of catching it now.",
        ],
      },
    ],
    ctaH3: "However long it's been, there's no lecture here",
    ctaBody:
      "A gentle check-up and clean is usually all it takes to get on top of bleeding gums, and to know exactly where you stand. We'll explain what we see, in plain language, and leave the decisions to you.",
    faq: [
      {
        q: 'Should I stop flossing if my gums bleed?',
        a: "No, keep going gently. Bleeding often settles within a week or two as your gums get healthier. If it doesn't, come and see us.",
      },
      {
        q: 'Will a clean hurt if my gums are inflamed?',
        a: "It's gentle and we go at your pace. Inflamed gums can be a little tender, but we keep you comfortable throughout.",
      },
      {
        q: 'Can bleeding gums heal on their own?',
        a: "Early inflammation can improve with better home care, but a professional clean removes the tartar you can't reach, which is usually what's driving it.",
      },
    ],
    related: [
      { label: 'Cleans & hygiene', href: '/services/cleans-and-hygiene' },
      { label: 'Gentle check-ups', href: '/services/check-ups' },
      { label: 'Nervous patients', href: '/nervous-patients' },
    ],
    meta: {
      title: 'Why Are My Gums Bleeding? | East St Kilda Dental',
      description:
        "Bleeding gums when brushing or flossing? It's usually gingivitis and very treatable. Here's what causes it and what to do about it.",
    },
  },

  /* ── Existing articles kept for /learn/[slug] routes ─── */
  {
    slug: 'how-often-should-you-see-the-dentist',
    title: 'How Often Should You Really See the Dentist?',
    eyebrow: 'Prevention',
    date: '2025-08-15',
    readTime: '4 min read',
    status: 'published',
    topics: ['prevention'],
    image: '/assets/articles/article-3.webp',
    excerpt:
      'The "every six months" rule is widely quoted — but is it right for everyone? Our dentists explain what actually determines your ideal recall schedule.',
    body: [
      'Most people have heard that you should visit the dentist every six months. But where did that recommendation come from, and is it actually right for you?',
      'The six-month recall originates from a 1950s US advertising campaign for a toothpaste brand — not clinical research. Since then, dental associations have softened the guidance, with most now recommending a frequency tailored to your individual risk profile.',
      'Low-risk patients — those with healthy gums, good oral hygiene habits, no active decay, and stable restorations — may be well served by an annual check-up and clean. High-risk patients — those with a history of gum disease, a tendency toward decay, dry mouth, or certain medical conditions — often benefit from visits every three to four months.',
      'The best way to know your ideal frequency is to ask your dentist at your next appointment. They\'ll assess your gum health, cavity risk, and oral hygiene habits and give you a personalised recommendation — not a one-size-fits-all interval.',
      'The bottom line: more frequent visits aren\'t always better. But skipping routine care entirely is how small problems become expensive ones. Find your right frequency and stick to it.',
    ],
    faq: [
      { q: 'Can I go to the dentist less often if my teeth feel fine?', a: 'Dental problems often have no symptoms until they become advanced. Decay and early gum disease can progress silently for months or years. Regular check-ups detect issues when they\'re small and inexpensive to treat.' },
      { q: 'Does health insurance cover more than two cleans a year?', a: 'Most extras policies cover two standard cleans per year. Some higher-tier policies may cover additional hygienist visits, particularly if periodontal (gum) treatment is involved. Check your policy schedule or ask our reception team.' },
    ],
    meta: {
      title: 'How Often Should You See the Dentist? | East St Kilda Dental',
      description: 'Is "every six months" right for everyone? Our dentists explain how often you should really visit based on your individual risk profile.',
    },
  },
  {
    slug: 'what-to-expect-at-your-first-dental-visit',
    title: 'What to Expect at Your First Dental Visit',
    eyebrow: 'New patients',
    date: '2025-07-20',
    readTime: '5 min read',
    status: 'published',
    topics: ['nervous-patients'],
    image: '/assets/articles/article-4.webp',
    excerpt: 'First visits can feel daunting if you\'re not sure what\'s involved. Here\'s a clear, honest overview of exactly what happens and how long it takes.',
    body: [
      'If you haven\'t been to the dentist in a while — or if you\'re visiting a new practice for the first time — it\'s natural to feel a little uncertain about what lies ahead. Here\'s what a comprehensive new patient appointment looks like at East St Kilda Dental.',
      'We start with a conversation. Before any clinical examination, your dentist will take time to understand your dental history, any current concerns or discomfort, and your overall health. This is your chance to ask questions and share any anxiety you may have — we genuinely want to know.',
      'Next comes the clinical examination. Your dentist will systematically check every tooth for signs of decay, existing restorations, and wear. They\'ll also examine your gums for signs of periodontal disease, check your bite and jaw joints, and screen the soft tissues for any abnormalities.',
      'Digital x-rays are taken to see what\'s happening between and beneath the teeth — areas where decay or bone loss can develop unseen. Our digital system uses a fraction of the radiation of older x-ray equipment.',
      'Finally, our hygienist performs a professional scale and clean, removing hardened tartar and plaque from above and below the gumline before polishing your teeth.',
      'From start to finish, a new patient appointment takes approximately 60–75 minutes. At the end, your dentist will walk you through any findings and discuss a treatment plan — with no pressure to proceed with anything beyond what you\'re comfortable with.',
    ],
    faq: [
      { q: 'Do I need to bring anything to my first appointment?', a: 'If you have any recent x-rays from a previous dentist, it\'s helpful to bring them. Otherwise, just bring your Medicare card and health fund card if applicable.' },
      { q: 'What if I\'m nervous or have dental anxiety?', a: 'Please tell us — before or at the start of your appointment. We have significant experience with anxious patients and will adjust our approach, pace and communication accordingly.' },
    ],
    meta: {
      title: 'What to Expect at Your First Dental Visit | East St Kilda Dental',
      description: 'Wondering what happens at your first dental appointment? We walk you through every step — honest, clear, and no surprises.',
    },
  },
  {
    slug: 'invisalign-vs-braces-which-is-right-for-you',
    title: 'Invisalign vs Braces: Which Is Right for You?',
    eyebrow: 'Orthodontics',
    date: '2025-06-10',
    readTime: '6 min read',
    status: 'published',
    topics: ['treatments-explained'],
    image: '/assets/articles/article-5.webp',
    excerpt: 'Both Invisalign and traditional braces can deliver excellent results — but they\'re not interchangeable. We break down the honest pros, cons and costs of each.',
    body: [
      'Straight teeth are no longer the exclusive domain of teenagers in metal braces. Invisalign has made orthodontic treatment accessible and discreet for adults, and braces themselves have come a long way.',
      'Invisalign uses a series of clear, removable plastic aligners to move teeth gradually. The main advantages are aesthetic (virtually invisible), comfort (no wires or brackets), and convenience. The main limitation is compliance — aligners must be worn 20–22 hours per day.',
      'Traditional fixed braces are non-removable, meaning compliance isn\'t an issue. They also have an advantage in certain complex cases — significant bite corrections, severe crowding, and rotation of certain teeth.',
      'Ceramic or tooth-coloured braces split the difference: they\'re fixed and much less visible than metal. Cost is broadly similar — both typically fall in the $5,000–$8,500 range depending on complexity.',
      'Our recommendation: book a consultation. Bring your questions, your photos, and your lifestyle realities. We\'ll give you a straight assessment of which option will give you the best result for your specific teeth.',
    ],
    faq: [
      { q: 'Can Invisalign fix overbites and underbites?', a: 'Invisalign has improved significantly in treating bite issues. Mild to moderate overbites and underbites can often be treated effectively. Your consultation will clarify what\'s achievable.' },
      { q: 'How old do you have to be for Invisalign?', a: 'Invisalign offers a Teen product with compliance indicators. Most teenagers from around 12–13 are suitable candidates. Adults of any age can use standard Invisalign.' },
    ],
    meta: {
      title: 'Invisalign vs Braces | East St Kilda Dental',
      description: 'Invisalign or braces — which is right for your teeth? Our dentists break down the honest pros, cons and costs of both orthodontic options.',
    },
  },
  {
    slug: 'signs-you-might-be-grinding-your-teeth',
    title: 'Signs You Might Be Grinding Your Teeth (And What to Do About It)',
    eyebrow: 'Oral health',
    date: '2025-05-05',
    readTime: '5 min read',
    status: 'published',
    topics: ['treatments-explained'],
    image: '/assets/articles/article-6.webp',
    excerpt: 'Bruxism — teeth grinding — affects up to 10% of adults and can cause serious damage before you even know it\'s happening. Here\'s what to look for.',
    body: [
      'Bruxism — the technical term for teeth grinding and jaw clenching — is surprisingly common. Many people grind at night and have no idea until a dentist notices the telltale wear patterns.',
      'The most common signs include: worn, flattened, or chipped teeth; tooth sensitivity that\'s getting progressively worse; jaw soreness or stiffness in the morning; headaches, particularly at the temples.',
      'In the short term, grinding is uncomfortable. Over years, it can grind away significant tooth structure, fracture teeth, damage existing restorations, and contribute to jaw joint (TMJ) disorders.',
      'Treatment starts with a custom-fitted occlusal splint (night guard). This doesn\'t stop you grinding, but it provides a protective surface that absorbs the forces instead of your teeth.',
      'If grinding has already caused visible tooth wear, your dentist will discuss whether any restorative treatment is needed. Early intervention is significantly less complex and costly than waiting.',
    ],
    faq: [
      { q: 'Can I get a night guard from the chemist?', a: 'Over-the-counter boil-and-bite guards are generally inferior to custom-fitted appliances. A custom guard is a worthwhile investment.' },
      { q: 'Will a night guard fix my jaw pain?', a: 'A night guard can significantly reduce jaw muscle soreness and headaches in most bruxism patients. However, if you have an established TMJ disorder, additional treatment may be needed.' },
    ],
    meta: {
      title: "Signs You're Grinding Your Teeth | East St Kilda Dental",
      description: 'Bruxism affects up to 10% of adults and often goes undetected. Learn the warning signs of teeth grinding and what to do about it.',
    },
  },
  {
    slug: 'dental-implants-vs-bridges-what-you-need-to-know',
    title: 'Dental Implants vs Bridges: What You Need to Know',
    eyebrow: 'Tooth replacement',
    date: '2025-04-18',
    readTime: '6 min read',
    status: 'published',
    topics: ['treatments-explained'],
    image: '/assets/articles/article-7.webp',
    excerpt: 'If you\'re missing a tooth (or several), you have choices. We explain when implants are the better long-term decision — and when a bridge makes more sense.',
    body: [
      'Losing a tooth is more consequential than many people realise. Beyond aesthetics, a missing tooth allows adjacent teeth to drift, affects your bite, and triggers bone loss in the jaw beneath the gap.',
      'A dental bridge has been the standard solution for decades. A false tooth is suspended between two crowns cemented over the neighbouring teeth. Bridges are fixed, functional, and relatively fast to place.',
      'Dental implants are a newer and increasingly preferred solution. A titanium post is placed in the jawbone to replicate the root, then a ceramic crown is attached. No adjacent teeth are involved.',
      'Implants are more expensive upfront ($3,500–$6,500 per tooth versus $2,500–$4,500 for a bridge) and take longer (4–9 months versus 4–6 weeks). But over a 20-year horizon the comparative cost narrows, and long-term outcomes for implants are arguably superior.',
      'Bridges remain a good option in certain situations — when bone volume is insufficient for an implant, when adjacent teeth already need crowning, or when the patient wants a faster solution.',
    ],
    faq: [
      { q: 'How long do dental implants last?', a: 'Dental implants can last a lifetime with proper oral hygiene and regular check-ups. The porcelain crown on top typically lasts 15–20+ years.' },
      { q: 'Is the implant surgery painful?', a: 'Implant surgery is performed under local anaesthesia. Most patients report the experience is much more comfortable than they expected.' },
    ],
    meta: {
      title: 'Dental Implants vs Bridges | East St Kilda Dental',
      description: 'Missing a tooth? We compare dental implants and bridges honestly — costs, timelines, long-term outcomes, and when each option is the better choice.',
    },
  },
  {
    slug: 'using-your-superannuation-for-dental-treatment',
    title: 'Using Your Superannuation for Dental Treatment',
    eyebrow: 'Costs & funds',
    date: '2025-03-12',
    readTime: '5 min read',
    status: 'published',
    topics: ['costs-and-funds'],
    image: '/assets/articles/article-8.webp',
    excerpt: 'Many Australians don\'t realise they may be able to access their superannuation early for dental care. We explain how the process works — and when it applies.',
    body: [
      'Significant dental treatment can be a substantial expense, and many Australians struggle to afford the care they need. What\'s less widely known is that it may be possible to access your superannuation early to fund dental treatment under specific circumstances.',
      'The Australian Tax Office (ATO) administers the Compassionate Grounds early release scheme. Eligible medical and dental expenses may qualify — but there are conditions, and not all dental treatment qualifies.',
      'Dental treatment that may qualify includes: procedures to alleviate acute or chronic pain, treatment to prevent serious deterioration of health, and treatment that cannot be funded any other way. Treatment that is primarily cosmetic in nature is unlikely to qualify.',
      'The application is made directly through MyGov. Approval is not guaranteed and can take several weeks, so this process isn\'t suitable for emergency situations.',
      'Important: accessing your superannuation early has long-term financial consequences, including reduced retirement savings and potential tax implications. We strongly recommend speaking with a financial adviser before proceeding.',
    ],
    faq: [
      { q: 'Can I use super for cosmetic dental work?', a: 'Generally no. The Compassionate Grounds scheme requires demonstrated medical necessity. Purely cosmetic procedures such as whitening or veneers would not typically qualify.' },
      { q: 'How long does the super approval process take?', a: 'Processing times vary but typically take 2–4 weeks once a complete application is submitted through the ATO via MyGov.' },
    ],
    meta: {
      title: 'Using Superannuation for Dental Treatment | East St Kilda Dental',
      description: 'Can you use your super for dental care? We explain when the ATO Compassionate Grounds early release scheme applies to dental treatment.',
    },
  },
]

export function getArticle(slug: string): ArticleData | undefined {
  return articles.find(a => a.slug === slug)
}

/**
 * The guides that are actually live.
 *
 * Anything not explicitly `status: 'published'` is treated as a draft and gets
 * nothing: no route, no sitemap entry, no card on the hub and no place in the
 * ItemList. The cleanest thin page is the one that does not exist, so an
 * unpublished slug 404s rather than serving a "coming soon" stub.
 *
 * Everything that lists guides must read from here, not from `articles`.
 */
export const publishedArticles: ArticleData[] = articles.filter(a => a.status === 'published')

export function getPublishedArticle(slug: string): ArticleData | undefined {
  return publishedArticles.find(a => a.slug === slug)
}
