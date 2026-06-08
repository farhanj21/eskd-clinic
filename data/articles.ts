export interface ArticleData {
  slug: string
  title: string
  eyebrow: string
  date: string
  readTime: string
  excerpt: string
  body: string[]
  faq?: { q: string; a: string }[]
  meta: { title: string; description: string }
}

export const articles: ArticleData[] = [
  {
    slug: 'how-often-should-you-see-the-dentist',
    title: 'How Often Should You Really See the Dentist?',
    eyebrow: 'Preventive Care',
    date: '2025-08-15',
    readTime: '4 min read',
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
      {
        q: 'Can I go to the dentist less often if my teeth feel fine?',
        a: 'Dental problems often have no symptoms until they become advanced. Decay and early gum disease can progress silently for months or years. Regular check-ups detect issues when they\'re small and inexpensive to treat.',
      },
      {
        q: 'Does health insurance cover more than two cleans a year?',
        a: 'Most extras policies cover two standard cleans per year. Some higher-tier policies may cover additional hygienist visits, particularly if periodontal (gum) treatment is involved. Check your policy schedule or ask our reception team.',
      },
    ],
    meta: {
      title: 'How Often Should You See the Dentist? | East St Kilda Dental',
      description:
        'Is "every six months" right for everyone? Our dentists explain how often you should really visit based on your individual risk profile and oral health history.',
    },
  },
  {
    slug: 'what-to-expect-at-your-first-dental-visit',
    title: 'What to Expect at Your First Dental Visit',
    eyebrow: 'New Patients',
    date: '2025-07-20',
    readTime: '5 min read',
    excerpt:
      'First visits can feel daunting if you\'re not sure what\'s involved. Here\'s a clear, honest overview of exactly what happens and how long it takes.',
    body: [
      'If you haven\'t been to the dentist in a while — or if you\'re visiting a new practice for the first time — it\'s natural to feel a little uncertain about what lies ahead. Here\'s what a comprehensive new patient appointment looks like at East St Kilda Dental.',
      'We start with a conversation. Before any clinical examination, your dentist will take time to understand your dental history, any current concerns or discomfort, and your overall health. This is your chance to ask questions and share any anxiety you may have — we genuinely want to know.',
      'Next comes the clinical examination. Your dentist will systematically check every tooth for signs of decay, existing restorations, and wear. They\'ll also examine your gums for signs of periodontal disease, check your bite and jaw joints, and screen the soft tissues for any abnormalities.',
      'Digital x-rays are taken to see what\'s happening between and beneath the teeth — areas where decay or bone loss can develop unseen. Our digital system uses a fraction of the radiation of older x-ray equipment.',
      'Finally, our hygienist performs a professional scale and clean, removing hardened tartar and plaque from above and below the gumline before polishing your teeth.',
      'From start to finish, a new patient appointment takes approximately 60–90 minutes. At the end, your dentist will walk you through any findings and discuss a treatment plan — with no pressure to proceed with anything beyond what you\'re comfortable with.',
    ],
    faq: [
      {
        q: 'Do I need to bring anything to my first appointment?',
        a: 'If you have any recent x-rays from a previous dentist, it\'s helpful to bring them. Otherwise, just bring your Medicare card and health fund card if applicable. We\'ll handle everything else.',
      },
      {
        q: 'What if I\'m nervous or have dental anxiety?',
        a: 'Please tell us — before or at the start of your appointment. We have significant experience with anxious patients and will adjust our approach, pace and communication to make your visit as comfortable as possible.',
      },
    ],
    meta: {
      title: 'What to Expect at Your First Dental Visit | East St Kilda Dental',
      description:
        'Wondering what happens at your first dental appointment? We walk you through every step of a new patient check-up — honest, clear, and no surprises.',
    },
  },
  {
    slug: 'invisalign-vs-braces-which-is-right-for-you',
    title: 'Invisalign vs Braces: Which Is Right for You?',
    eyebrow: 'Orthodontics',
    date: '2025-06-10',
    readTime: '6 min read',
    excerpt:
      'Both Invisalign and traditional braces can deliver excellent results — but they\'re not interchangeable. We break down the honest pros, cons and costs of each.',
    body: [
      'Straight teeth are no longer the exclusive domain of teenagers in metal braces. Invisalign has made orthodontic treatment accessible and discreet for adults, and braces themselves have come a long way from the mouth-full-of-metal image many of us remember.',
      'So which is better? The honest answer is: it depends on your teeth, your lifestyle, your budget, and the complexity of your case.',
      'Invisalign uses a series of clear, removable plastic aligners to move teeth gradually. The main advantages are aesthetic (virtually invisible), comfort (no wires or brackets), and convenience (remove them to eat, drink and brush). The main limitation is compliance — aligners must be worn 20–22 hours per day to work, and they\'re only as effective as the wearer\'s discipline.',
      'Traditional fixed braces are non-removable, meaning compliance isn\'t an issue. They also have an advantage in certain complex cases — significant bite corrections, severe crowding, and rotation of certain teeth — where the continuous force of a fixed appliance can be more predictable than aligners.',
      'Ceramic or tooth-coloured braces split the difference: they\'re fixed (compliance solved) and much less visible than metal. Self-ligating systems have also reduced the adjustment discomfort associated with older brace designs.',
      'Cost is broadly similar. Both Invisalign and braces typically fall in the $5,000–$8,500 range depending on complexity, though this varies significantly between providers. Most health funds offer the same orthodontic benefit regardless of which system is used.',
      'Our recommendation: book a consultation. Bring your questions, your photos, and your lifestyle realities. We\'ll give you a straight (no pun intended) assessment of which option will give you the best result for your specific teeth.',
    ],
    faq: [
      {
        q: 'Can Invisalign fix overbites and underbites?',
        a: 'Invisalign has improved significantly in treating bite issues. Mild to moderate overbites and underbites can often be treated effectively. Severe skeletal bite discrepancies may require a different approach — your consultation will clarify what\'s achievable.',
      },
      {
        q: 'How old do you have to be for Invisalign?',
        a: 'Invisalign offers a Teen product with compliance indicators and additional aligner sets. Most teenagers from around 12–13 are suitable candidates, depending on tooth development. Adults of any age can use standard Invisalign.',
      },
    ],
    meta: {
      title: 'Invisalign vs Braces | East St Kilda Dental',
      description:
        'Invisalign or braces — which is right for your teeth and lifestyle? Our dentists break down the honest pros, cons and costs of both orthodontic options.',
    },
  },
  {
    slug: 'signs-you-might-be-grinding-your-teeth',
    title: 'Signs You Might Be Grinding Your Teeth (And What to Do About It)',
    eyebrow: 'Oral Health',
    date: '2025-05-05',
    readTime: '5 min read',
    excerpt:
      'Bruxism — teeth grinding — affects up to 10% of adults and can cause serious damage before you even know it\'s happening. Here\'s what to look for.',
    body: [
      'Bruxism — the technical term for teeth grinding and jaw clenching — is surprisingly common. Many people grind at night and have no idea until a dentist notices the telltale wear patterns, or a partner mentions the noise.',
      'The most common signs of bruxism include: worn, flattened, or chipped teeth; tooth sensitivity that\'s getting progressively worse; jaw soreness or stiffness in the morning; headaches, particularly at the temples; earache without an ear infection; a tired or tense jaw when waking.',
      'In the short term, grinding is uncomfortable. Over years, it can grind away significant tooth structure, fracture teeth, damage existing restorations, and contribute to jaw joint (TMJ) disorders.',
      'The causes are multifactorial — stress and anxiety play a major role, but so do sleep apnoea, certain medications, caffeine, alcohol, and jaw misalignment.',
      'Treatment starts with a custom-fitted occlusal splint (night guard). This doesn\'t stop you grinding, but it provides a protective surface that absorbs the forces instead of your teeth. For patients with significant stress, we may also recommend referral to a GP or allied health professional.',
      'If grinding has already caused visible tooth wear, your dentist will discuss whether any restorative treatment is needed. Early intervention is significantly less complex and costly than waiting until damage is severe.',
    ],
    faq: [
      {
        q: 'Can I get a night guard from the chemist?',
        a: 'Over-the-counter boil-and-bite guards are available but are generally inferior to custom-fitted appliances. They\'re thinner, less retentive, and may actually alter your jaw position in ways that worsen symptoms. A custom guard is a worthwhile investment.',
      },
      {
        q: 'Will a night guard fix my jaw pain?',
        a: 'A night guard can significantly reduce jaw muscle soreness and headaches in most bruxism patients. However, if you have an established TMJ disorder, additional treatment such as physiotherapy or a specialist referral may be needed.',
      },
    ],
    meta: {
      title: 'Signs You\'re Grinding Your Teeth | East St Kilda Dental',
      description:
        'Bruxism affects up to 10% of adults and often goes undetected. Learn the warning signs of teeth grinding and what to do about it before serious damage occurs.',
    },
  },
  {
    slug: 'dental-implants-vs-bridges-what-you-need-to-know',
    title: 'Dental Implants vs Bridges: What You Need to Know',
    eyebrow: 'Tooth Replacement',
    date: '2025-04-18',
    readTime: '6 min read',
    excerpt:
      'If you\'re missing a tooth (or several), you have choices. We explain when implants are the better long-term decision — and when a bridge makes more sense.',
    body: [
      'Losing a tooth is more consequential than many people realise. Beyond aesthetics, a missing tooth allows adjacent teeth to drift, affects your bite, and triggers bone loss in the jaw beneath the gap. Replacing it matters — the question is how.',
      'A dental bridge has been the standard solution for decades. A false tooth (pontic) is suspended between two crowns that are cemented over the neighbouring teeth, bridging the gap. Bridges are fixed, functional, and relatively fast to place. The main downside is that two healthy teeth must be permanently altered to serve as anchors — a trade-off that becomes more significant the younger the patient.',
      'Dental implants are a newer and increasingly preferred solution. A titanium post is placed in the jawbone to replicate the root, then a ceramic crown is attached. This is self-contained — no adjacent teeth are involved. Implants also stimulate the bone beneath them, preventing the resorption that occurs with bridges over time.',
      'The honest comparison: implants are more expensive upfront ($3,500–$6,500 per tooth versus $2,500–$4,500 for a bridge) and take longer (4–9 months versus 4–6 weeks). But over a 20-year horizon, the comparative cost narrows considerably, and the long-term outcomes for implants are arguably superior.',
      'Bridges remain a good option in certain situations — when bone volume is insufficient for an implant, when adjacent teeth already need crowning, or when the patient wants a faster, less invasive solution.',
      'Book a free implant assessment to discuss which option makes most sense for your situation. Our dentists will give you an honest recommendation — including referring you for a bridge if that\'s genuinely the better choice.',
    ],
    faq: [
      {
        q: 'How long do dental implants last?',
        a: 'Dental implants can last a lifetime with proper oral hygiene and regular check-ups. The porcelain crown on top typically lasts 15–20+ years before it may need replacement. The titanium implant post itself has an excellent long-term success rate.',
      },
      {
        q: 'Is the implant surgery painful?',
        a: 'Implant surgery is performed under local anaesthesia. Most patients report the experience is much more comfortable than they expected. Post-operative discomfort is typically manageable with over-the-counter pain relief for a day or two.',
      },
    ],
    meta: {
      title: 'Dental Implants vs Bridges | East St Kilda Dental',
      description:
        'Missing a tooth? We compare dental implants and bridges honestly — costs, timelines, long-term outcomes, and when each option is the better choice.',
    },
  },
  {
    slug: 'using-your-superannuation-for-dental-treatment',
    title: 'Using Your Superannuation for Dental Treatment',
    eyebrow: 'Fees & Funding',
    date: '2025-03-12',
    readTime: '5 min read',
    excerpt:
      'Many Australians don\'t realise they may be able to access their superannuation early for dental care. We explain how the process works — and when it applies.',
    body: [
      'Significant dental treatment can be a substantial expense, and many Australians struggle to afford the care they need. What\'s less widely known is that it may be possible to access your superannuation early to fund dental treatment under specific circumstances.',
      'The Australian Tax Office (ATO) administers the Compassionate Grounds early release scheme. Eligible medical and dental expenses may qualify — but there are conditions, and not all dental treatment qualifies.',
      'Dental treatment that may qualify includes: procedures to alleviate acute or chronic pain, treatment to prevent serious deterioration of health, and treatment that cannot be funded any other way. Treatment that is primarily cosmetic in nature is unlikely to qualify.',
      'To apply, you\'ll need a letter from your treating dentist explaining the medical necessity of the treatment and a letter from a second dental practitioner confirming the assessment and proposed treatment. Our team can assist with the documentation required.',
      'The application is made directly through MyGov. Approval is not guaranteed and can take several weeks, so this process isn\'t suitable for emergency situations.',
      'Important: accessing your superannuation early has long-term financial consequences, including reduced retirement savings and potential tax implications. We strongly recommend speaking with a financial adviser before proceeding.',
    ],
    faq: [
      {
        q: 'Can I use super for cosmetic dental work?',
        a: 'Generally no. The Compassionate Grounds scheme requires demonstrated medical necessity. Purely cosmetic procedures such as whitening or veneers would not typically qualify. Treatments with a clear health necessity may be eligible.',
      },
      {
        q: 'How long does the super approval process take?',
        a: 'Processing times vary but typically take 2–4 weeks once a complete application is submitted. Applications must be made through the ATO via MyGov. The ATO may request additional documentation.',
      },
    ],
    meta: {
      title: 'Using Superannuation for Dental Treatment | East St Kilda Dental',
      description:
        'Can you use your super for dental care? We explain when the ATO Compassionate Grounds early release scheme applies to dental treatment and how to apply.',
    },
  },
]

export function getArticle(slug: string): ArticleData | undefined {
  return articles.find(a => a.slug === slug)
}
