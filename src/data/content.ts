export interface SpeakingTopic {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  keyTakeaways: string[];
  idealAudience: string[];
  recommendedFormats: string[];
  accentColor: string;
  motif: 'playful' | 'balance' | 'reflection' | 'boundaries' | 'passion' | 'growth' | 'drive' | 'tactics' | 'unity';
  quote: string;
}

export interface PodcastEpisode {
  slug: string;
  episodeNumber: number;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  date: string;
  audioUrl: string; // real audio stream URL
  description: string;
  keyPoints: string[];
  category: 'Leadership' | 'Personal Growth' | 'Sales & Resilience' | 'Entertainment & Mindset';
  transcriptSnippet: string;
}

export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  coverAccent: string;
  synopsis: string;
  excerpt: string;
  chapters: string[];
  themes: string[];
  testimonials: { quote: string; author: string; role: string }[];
}

export interface Article {
  slug: string;
  title: string;
  category: 'Philosophy' | 'Stagecraft' | 'Leadership' | 'Laughter';
  date: string;
  readTime: string;
  lead: string;
  content: string[];
  pullQuote: string;
}

export interface EventItem {
  id: string;
  title: string;
  type: 'Keynote' | 'Masterclass' | 'Corporate Retreat' | 'Public Workshop';
  date: string;
  venue: string;
  location: string;
  status: 'Open' | 'Private' | 'Limited Seats' | 'Past';
  description: string;
}

// ================= SPEAKING TOPICS =================
export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    slug: 'laughter-therapy',
    number: '01',
    title: 'Laughter Therapy',
    subtitle: 'Harnessing the Psychological & Biological Power of Genuine Mirth',
    shortDescription: 'How humor, laughter clubs, and lightness break high-stakes corporate tension and foster unbreakable team cohesion.',
    fullDescription: [
      'Laughter is not a distraction from serious work; it is the biological prerequisite for sustained creative resilience. Drawing on Peter’s deep leadership with the Laughter Clubs of Australasia, this keynote demonstrates how deliberate levity shifts neural chemistry.',
      'In high-pressure corporate environments, chronic stress triggers cognitive tunnel vision. Peter transforms the auditorium into a live demonstration of how shared humor resets emotional baselines, breaks down inter-departmental silos, and accelerates trust faster than any traditional seminar.'
    ],
    keyTakeaways: [
      'The neurochemical impact of endorphins and dopamine in reducing workplace burnout.',
      'Actionable micro-habits to de-escalate tension in contentious team meetings.',
      'Why organizations with a culture of healthy humor report 34% higher employee retention.',
      'The distinction between superficial sarcasm and connective, empathetic laughter.'
    ],
    idealAudience: ['Executive leadership teams', 'Healthcare and emergency services professionals', 'High-stress sales organizations', 'Annual company conferences'],
    recommendedFormats: ['45-60 Minute Opening/Closing Keynote', 'Interactive 90-Minute Masterclass'],
    accentColor: '#BF4E36', // Burnt Vermilion
    motif: 'playful',
    quote: 'Laughter is the shortest distance between two human minds.'
  },
  {
    slug: 'wobbly-tables',
    number: '02',
    title: "Don't You Hate Wobbly Tables?",
    subtitle: 'Eliminating the Subtle Annoyances that Sabotage Team Excellence',
    shortDescription: 'A metaphor for the small, unaddressed friction points that quietly drain collective focus and workplace morale.',
    fullDescription: [
      'Everyone has sat at a cafe table that wobbles just enough to spill their coffee. Nobody breaks the table, yet everyone suffers it. In business, wobbly tables are the outdated processes, unspoken resentments, and ambiguous handoffs that drain energy daily.',
      'Peter shows leaders how to identify their organization’s unseen wobble. By addressing subtle operational imbalances before they fracture into major crises, teams regain effortless alignment and psychological security.'
    ],
    keyTakeaways: [
      'How to spot the "invisible wobbles" in cross-functional workflows.',
      'Why tolerating small defects conditions teams to accept mediocrity.',
      'The 3-question diagnostic to identify operational friction in weekly standups.',
      'Building a culture where raising friction is rewarded rather than dismissed.'
    ],
    idealAudience: ['Operations directors', 'Product & engineering teams', 'Frontline managers', 'Customer experience leaders'],
    recommendedFormats: ['60-Minute Keynote', 'Half-Day Operational Workshop'],
    accentColor: '#B49468', // Muted Gold
    motif: 'balance',
    quote: 'It is rarely the boulder that stops a mountain climber; it is the pebble in their boot.'
  },
  {
    slug: 'finding-your-better-self',
    number: '03',
    title: 'Finding Your Better Self',
    subtitle: 'The Architecture of Personal Growth & Inner Calibration',
    shortDescription: 'Peter’s signature personal development framework: discovering the quiet center where authentic confidence lives.',
    fullDescription: [
      'Success without internal alignment is merely sophisticated exhaustion. Peter shares the deeply personal realizations earned through decades across competitive finance, public entertainment, and private executive coaching.',
      'This presentation invites audiences to stop outsourcing their validation to external milestones. By examining the dialogue between who you are and who you feel expected to be, Peter provides a clear compass for values-driven leadership.'
    ],
    keyTakeaways: [
      'The three traps of external validation that lead to executive plateau.',
      'How to conduct an honest self-audit without harsh self-judgment.',
      'The daily evening review ritual that realigns priorities in 5 minutes.',
      'Transitioning from reactive defensiveness to calm, grounded authority.'
    ],
    idealAudience: ['Senior leadership retreats', 'Entrepreneurs & founders', 'Personal development conventions', 'University commencement ceremonies'],
    recommendedFormats: ['60-Minute Keynote', 'Full-Day Leadership Retreat'],
    accentColor: '#171716', // Midnight Ink
    motif: 'reflection',
    quote: 'You do not invent your better self; you strip away everything that is not you.'
  },
  {
    slug: 'sales-skills',
    number: '04',
    title: 'Sales Skills with Sincerity',
    subtitle: 'Lessons from the Million Dollar Round Table & Decades of Human Persuasion',
    shortDescription: 'High-performance consultative selling that creates lifelong client relationships without pushy gimmicks.',
    fullDescription: [
      'Qualifying for the prestigious Million Dollar Round Table taught Peter that top-tier sales has nothing to do with slick manipulation. True persuasion is the art of deep listening, identifying unvoiced anxieties, and offering ethical resolution.',
      'Drawing on decades in financial planning and real estate, Peter deconstructs the psychology of high-stakes advisory conversations. Attendees learn how to replace the anxiety of "closing" with the privilege of serving.'
    ],
    keyTakeaways: [
      'The 80/20 listening framework: asking questions that make prospects feel truly seen.',
      'Overcoming objection fear by converting resistance into mutual discovery.',
      'The ethics of influence: building accounts that renew for twenty years.',
      'How body language, vocal cadence, and intentional pauses command respect.'
    ],
    idealAudience: ['Commercial sales forces', 'Wealth advisors & financial planners', 'Real estate professionals', 'B2B enterprise account executives'],
    recommendedFormats: ['90-Minute Keynote', 'Intensive Sales Masterclass'],
    accentColor: '#B49468',
    motif: 'tactics',
    quote: 'People do not buy because they understand you; they buy because they feel understood.'
  },
  {
    slug: 'motivation-comes-from-within',
    number: '05',
    title: 'Motivation Comes From Within',
    subtitle: 'Moving Beyond the Quick Fix into Self-Sustaining Drive',
    shortDescription: 'Why external hype fades by Monday morning, and how to ignite an internal furnace of intrinsic purpose.',
    fullDescription: [
      'Most motivational speakers pump up an audience with high-tempo music and emotional platitudes, only for the effect to evaporate within 48 hours. Peter rejects temporary sugar rushes.',
      'Through compelling personal narrative and stagecraft, he demonstrates that sustainable drive requires clarity of personal purpose. When your daily actions align with what genuinely matters to your soul, motivation ceases to be a struggle.'
    ],
    keyTakeaways: [
      'Why relying on will-power fails and why environmental design succeeds.',
      'Uncovering your primary intrinsic driver: mastery, connection, or autonomy.',
      'Overcoming the mid-project dip that derails 70% of strategic initiatives.',
      'Creating personal rituals that safeguard momentum regardless of mood.'
    ],
    idealAudience: ['All-hands corporate meetings', 'Sales kickoffs', 'Educators & mentors', 'Sports organizations'],
    recommendedFormats: ['45-60 Minute Keynote'],
    accentColor: '#BF4E36',
    motif: 'drive',
    quote: 'A spark from the outside warms your hands; a fire on the inside lights your path.'
  },
  {
    slug: 'accepting-change',
    number: '06',
    title: 'Accepting Change as Positive Growth',
    subtitle: 'Thriving in Volatility & Navigating the Discomfort of Becoming',
    shortDescription: 'Reframing corporate restructuring, market disruption, and personal upheaval into creative opportunities.',
    fullDescription: [
      'Change is neither good nor bad; it is simply momentum. Having successfully pivoted across insurance, entertainment, broadcasting, and authorship, Peter speaks with authentic authority on reinvention.',
      'This keynote helps teams trade anxiety for curiosity. Instead of clinging to obsolete orthodoxies, audiences learn to anticipate shifts, view uncertainty as a creative canvas, and foster institutional agility.'
    ],
    keyTakeaways: [
      'The psychology of loss aversion and why humans naturally fight evolution.',
      'The "Beginner’s Mindset" framework for veteran corporate leaders.',
      'Navigating mergers, acquisitions, and digital transformation with emotional poise.',
      'How to build psychological safety so teams take calculated, innovative risks.'
    ],
    idealAudience: ['Organizations undergoing restructuring or digital transformation', 'Merger integration summits', 'Industry associations'],
    recommendedFormats: ['60-Minute Keynote', 'Executive Roundtable'],
    accentColor: '#898780',
    motif: 'growth',
    quote: 'The caterpillar thinks the world is over right before it spreads its wings.'
  },
  {
    slug: 'limiting-beliefs',
    number: '07',
    title: 'Pushing Beyond Limiting Beliefs',
    subtitle: 'Shattering the Invisible Ceilings We Build in Our Minds',
    shortDescription: 'Using the psychology of stage magic to reveal how assumptions trick our perception of what is possible.',
    fullDescription: [
      'As a master of illusion, Peter knows precisely how the human eye and brain deceive themselves. We believe we see reality, but we only see our expectations. The same mechanism traps people in self-imposed limitations.',
      'In this spellbinding keynote, Peter weaves tasteful demonstrations of illusion with cognitive psychology. Audience members visibly witness their own cognitive blind spots dissolve in real time.'
    ],
    keyTakeaways: [
      'The anatomy of an assumption: how past failures construct invisible cages.',
      'The "Reframing the Impossible" mental model used by elite illusionists.',
      'Dismantling imposter syndrome by separating identity from temporary performance.',
      'Empowering team members to attempt targets they previously deemed unreachable.'
    ],
    idealAudience: ['Innovation teams', 'R&D departments', 'High-potential leadership cohorts', 'Annual association conventions'],
    recommendedFormats: ['60-75 Minute Theatrical Keynote'],
    accentColor: '#171716',
    motif: 'boundaries',
    quote: 'The magician does not trick your eyes; you trick your own mind with what you assume.'
  },
  {
    slug: 'passion-into-productivity',
    number: '08',
    title: 'Putting Passion Into Productivity',
    subtitle: 'Harmonizing Heart & Operational Rigor for Peak Performance',
    shortDescription: 'Bridging the gap between enthusiastic inspiration and systematic execution.',
    fullDescription: [
      'Passion without structure is chaos; structure without passion is sterile drudgery. Real excellence occurs at the intersection of deep personal enthusiasm and meticulous operational craft.',
      'Peter delivers a masterclass in converting emotional energy into tangible output. Attendees leave with concrete systems to protect their deep work, eliminate low-value friction, and celebrate progress.'
    ],
    keyTakeaways: [
      'The Energy Audit: tracking when you are most cognitively and creatively fertile.',
      'Designing calendar boundaries that protect high-leverage creative work.',
      'How to translate vague strategic visions into weekly behavioral non-negotiables.',
      'The secret to preventing high performers from sliding into cynicism.'
    ],
    idealAudience: ['Scale-up companies', 'Creative agencies', 'Professional services firms', 'Management trainees'],
    recommendedFormats: ['60-Minute Keynote', 'Interactive Workshop'],
    accentColor: '#BF4E36',
    motif: 'passion',
    quote: 'Inspiration is the fuel; disciplined systems are the engine.'
  },
  {
    slug: 'team-building-workshops',
    number: '09',
    title: 'Team Building Workshops',
    subtitle: 'High-Impact Experiential Learning That Forges Lasting Camaraderie',
    shortDescription: 'Custom, hands-on collaborative sessions that dismantle barriers and ignite shared purpose.',
    fullDescription: [
      'Forget predictable trust falls and awkward icebreakers. Peter designs bespoke experiential challenges that combine group problem-solving, cognitive illusion challenges, and laughter therapy.',
      'Tailored to the specific culture and challenges of your organization, these half-day and full-day workshops create memories that teams reference for years, leaving participants bonded and energized.'
    ],
    keyTakeaways: [
      'Accelerating psychological trust through shared vulnerability and laughter.',
      'Hands-on collaborative challenges that surface communication blind spots.',
      'Establishing team communication charters that persist beyond the workshop.',
      'A revitalized sense of collective ownership and cross-functional empathy.'
    ],
    idealAudience: ['Intact project teams', 'Cross-functional leadership groups', 'Newly merged departments', 'Board retreats'],
    recommendedFormats: ['Half-Day (3.5 Hours)', 'Full-Day (6 Hours) Immersive Experience'],
    accentColor: '#B49468',
    motif: 'unity',
    quote: 'Trust is not built in formal agendas; it is forged when people share real human truth.'
  }
];

// ================= PODCAST EPISODES (HAPPY BUSINESS RADIO) =================
export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    slug: 'ep-124-the-power-of-lightness',
    episodeNumber: 124,
    title: 'The Power of Lightness: Why Serious Leaders Don’t Take Themselves Seriously',
    guest: 'Dr. Evelyn Vance',
    guestRole: 'Organizational Psychologist & Author',
    duration: '42:15',
    date: 'October 18, 2026',
    audioUrl: 'https://cdn.freesound.org/previews/612/612092_5674468-lq.mp3', // royalty-free sample broadcast audio
    description: 'Peter sits down with Dr. Evelyn Vance to explore why the most resilient Fortune 500 CEOs use levity, laughter, and intellectual humility to navigate turbulence.',
    keyPoints: [
      'How cognitive rigidity amplifies stress across an organization.',
      'The difference between dismissive humor and connective mirth.',
      'Practical ways to reset meeting culture in remote and hybrid teams.',
      'Dr. Vance’s research on psychological safety in high-stakes healthcare.'
    ],
    category: 'Leadership',
    transcriptSnippet: 'PETER: Welcome back to Happy Business Radio. You know, Evelyn, in all my years on stage and in boardrooms, I’ve noticed that leaders who hold on too tightly to their status are the first to snap when crisis hits...'
  },
  {
    slug: 'ep-123-beyond-the-illusion-of-sales',
    episodeNumber: 123,
    title: 'Beyond the Illusion of Sales: What Million Dollar Producers Actually Do',
    guest: 'Marcus Reed',
    guestRole: 'MDRT Top of the Table Member & Wealth Strategist',
    duration: '38:40',
    date: 'October 04, 2026',
    audioUrl: 'https://cdn.freesound.org/previews/612/612092_5674468-lq.mp3',
    description: 'A candid conversation on deconstructing traditional sales stereotypes. How empathetic listening and genuine care create multi-decade client relationships.',
    keyPoints: [
      'Why closing techniques often ruin long-term advisory trust.',
      'Marcus’s 3-phase client onboarding interview protocol.',
      'Dealing with rejection when large corporate deals fall through.',
      'Peter’s perspective on the ethical responsibilities of persuasive professionals.'
    ],
    category: 'Sales & Resilience',
    transcriptSnippet: 'MARCUS: Peter, you taught me twenty years ago that sales isn’t something you do TO someone; it’s something you do FOR them. Once that switch flipped, my pipeline never looked back...'
  },
  {
    slug: 'ep-122-the-magic-of-reinvention',
    episodeNumber: 122,
    title: 'The Magic of Reinvention: How to Pivot When the Playbook No Longer Works',
    guest: 'Sophia Chen',
    guestRole: 'Venture Partner & Former Media Executive',
    duration: '45:10',
    date: 'September 20, 2026',
    audioUrl: 'https://cdn.freesound.org/previews/612/612092_5674468-lq.mp3',
    description: 'When disruption hits your industry, do you defend old walls or build new doors? Peter and Sophia unpack the mindset needed to pivot gracefully in mid-career.',
    keyPoints: [
      'Overcoming the sunk-cost fallacy of twenty years in one sector.',
      'How to translate existing core competencies to a foreign industry.',
      'The psychological fear of starting over as a novice.',
      'Peter’s transition from stage magic to corporate advisory.'
    ],
    category: 'Personal Growth',
    transcriptSnippet: 'PETER: Everyone asks "What if I fail?" But the scarier question is: "What if I stay in the exact same spot for the next ten years and succeed at something that no longer feeds my curiosity?"'
  },
  {
    slug: 'ep-121-laughter-as-a-business-metric',
    episodeNumber: 121,
    title: 'Laughter as a Business Metric: Lessons from Australasia’s Joy Movement',
    guest: 'David H. Miller',
    guestRole: 'Cultural Transformation Lead',
    duration: '36:20',
    date: 'September 06, 2026',
    audioUrl: 'https://cdn.freesound.org/previews/612/612092_5674468-lq.mp3',
    description: 'A deep dive into the history and science of Laughter Clubs, and how progressive organizations are introducing humor as a preventative wellness strategy.',
    keyPoints: [
      'The physiological cascade that occurs during 10 minutes of hearty laughter.',
      'Breaking cultural resistance to laughter sessions in conservative companies.',
      'Case studies: how absenteeism dropped 18% post-implementation.',
      'Simple daily prompts to infuse levity into personal life.'
    ],
    category: 'Leadership',
    transcriptSnippet: 'DAVID: People used to think we were eccentric. Now Stanford and Harvard have papers confirming what Peter Salerno was doing thirty years ago in Melbourne and Sydney parks...'
  }
];

// ================= BOOKS & PUBLICATIONS =================
export const BOOKS: Book[] = [
  {
    slug: 'finding-your-better-self',
    title: 'Finding Your Better Self',
    subtitle: 'A Practical Guide to Internal Calibration & Lasting Fulfillment',
    year: '2023',
    coverAccent: '#BF4E36',
    synopsis: 'Peter Salerno synthesizes four decades of insights from entertainment, finance, and motivational speaking into a lucid, compassionate guide for personal realignment.',
    excerpt: 'You do not become your better self by adding more responsibilities or acquiring more possessions. You discover your better self through a gentle process of subtraction—stripping away the borrowed opinions, outdated grudges, and noisy distractions that have concealed your authentic power.',
    chapters: [
      'Chapter 1: The Noise in the Auditorium',
      'Chapter 2: The Myth of the Overnight Epiphany',
      'Chapter 3: The Wobbly Tables We Suffer in Silence',
      'Chapter 4: The Chemistry of Unconditional Joy',
      'Chapter 5: Reframing the Impossible with Illusionist Eyes',
      'Chapter 6: The Art of Compassionate Sincerity',
      'Chapter 7: Your Better Self Awaits'
    ],
    themes: ['Self-discovery', 'Inner clarity', 'Sustainable resilience', 'Authentic leadership'],
    testimonials: [
      { quote: 'Peter writes with the exact warmth and magnetic clarity that he brings to the stage.', author: 'Sir Richard Bennett', role: 'Chairman, Australasian Business Council' },
      { quote: 'A masterclass in quiet wisdom. This book sits permanently on my bedside table.', author: 'Claire Moreau', role: 'Executive Vice President, Apex Global' }
    ]
  },
  {
    slug: 'the-magic-message',
    title: 'The Magic Message',
    subtitle: 'Unlocking Human Connection Through the Principles of Wonder',
    year: '2020',
    coverAccent: '#B49468',
    synopsis: 'How the psychological secrets of illusion, stagecraft, and storytelling transform everyday business presentations into unforgettable human experiences.',
    excerpt: 'The finest magic trick is not making an elephant vanish or sawing a box in half. The finest magic trick is when two strangers, divided by background, politics, and age, lean forward at the same instant and share genuine wonder together.',
    chapters: [
      'Chapter 1: Beyond the Smoke & Mirrors',
      'Chapter 2: Controlling Focus Without Forcing Attention',
      'Chapter 3: The Power of the Calculated Pause',
      'Chapter 4: Reading the Unspoken Audience',
      'Chapter 5: The Climax That Lingers'
    ],
    themes: ['Stagecraft', 'Communication', 'Presence', 'Influence'],
    testimonials: [
      { quote: 'If you ever have to speak in front of more than one person, read this immediately.', author: 'Anthony Vance', role: 'Keynote Speaker & Author' }
    ]
  }
];

// ================= JOURNAL & INSIGHTS =================
export const ARTICLES: Article[] = [
  {
    slug: 'the-wobbly-table-syndrome',
    title: 'The Wobbly Table Syndrome: Why Smart Organizations Suffer Stupid Problems',
    category: 'Leadership',
    date: 'October 15, 2026',
    readTime: '6 min read',
    lead: 'We have all walked into a bistro, sat down, and discovered that the table rocks on two diagonally opposed legs. What happens next reveals everything about human organizational behavior.',
    content: [
      'Almost universally, the first reaction is accommodation. Someone folds a napkin. Someone else balances their elbow carefully. For the next two hours, four intelligent adults expend subconscious mental bandwidth protecting their beverages from an unaddressed structural defect.',
      'In business, wobbly tables abound. They are the legacy spreadsheet that requires manual re-entry every Thursday. They are the ambiguous reporting line where two managers both assume the other approved the campaign. They are the unspoken resentment between sales and operations that nobody addresses in the quarterly review.',
      'Why do smart teams tolerate wobbly tables? Because accommodation feels cheaper than repair in the micro-moment. But the cumulative drag of accommodation over three years erodes competitive advantage faster than external disruption.'
    ],
    pullQuote: 'The mark of great leadership is not handling giant catastrophes; it is refusing to tolerate the small wobbles that normalize mediocrity.'
  },
  {
    slug: 'what-magicians-know-about-negotiation',
    title: 'What Magicians Know About High-Stakes Negotiation',
    category: 'Stagecraft',
    date: 'September 28, 2026',
    readTime: '8 min read',
    lead: 'Every illusion relies on misdirection. But real misdirection is not waving a silk scarf with your left hand while your right hand steals a watch. It is shaping where the mind believes the story is taking place.',
    content: [
      'In high-stakes commercial negotiations, amateur negotiators focus intensely on the tangible contract terms: price, payment schedules, penalty clauses. They fixate on the cards.',
      'Elite negotiators, like seasoned illusionists, know that the outcome was decided before the meeting began—in the emotional framing, the physical environment, and the unspoken status cues exchanged in the hallway.',
      'When you learn to manage expectations, respect cognitive rhythm, and listen to what the other party is desperate not to say, negotiation stops being a battle and becomes a collaborative revelation.'
    ],
    pullQuote: 'You cannot force someone to agree with you; you can only illuminate a truth that makes your proposal their natural choice.'
  },
  {
    slug: 'laughter-is-serious-business',
    title: 'Laughter Is Serious Business: Biological Resilience Under Pressure',
    category: 'Laughter',
    date: 'August 14, 2026',
    readTime: '5 min read',
    lead: 'When we tell executives to laugh more, they look at us as though we suggested they juggle bowling pins during an audit. But neurobiology does not lie.',
    content: [
      'Cortisol and adrenaline were designed by evolution for fleeing saber-toothed predators, not for sitting through six consecutive hours of video conference calls. When high cortisol becomes your baseline, divergent thinking drops by over 40%.',
      'A single minute of belly laughter reduces serum cortisol, elevates salivary immunoglobulin A, and triggers a surge of nitric oxide that dilates blood vessels. It is the cheapest, most accessible biohack available to modern corporate knowledge workers.',
      'Next time your project hits a catastrophic roadblock, pause the meeting and find the absurdity in the situation. Your prefrontal cortex will thank you.'
    ],
    pullQuote: 'Taking your mission seriously does not require taking yourself solemnly.'
  }
];

// ================= EVENTS & APPEARANCES =================
export const EVENTS: EventItem[] = [
  {
    id: 'evt-2026-11-15',
    title: 'Australasian Leadership Summit 2026',
    type: 'Keynote',
    date: 'November 15, 2026',
    venue: 'Sydney International Convention Centre',
    location: 'Sydney, Australia',
    status: 'Open',
    description: 'Opening keynote presentation: "Don’t You Hate Wobbly Tables? Rebuilding Collective Focus in Turbulent Times".'
  },
  {
    id: 'evt-2026-12-04',
    title: 'Asia-Pacific Financial Leaders Conference',
    type: 'Keynote',
    date: 'December 04, 2026',
    venue: 'Marina Bay Sands Expo Center',
    location: 'Singapore',
    status: 'Limited Seats',
    description: 'Keynote on consultative sales excellence and ethics: "Sales Skills with Sincerity".'
  },
  {
    id: 'evt-2027-01-22',
    title: 'Executive Laughter & Wellness Masterclass',
    type: 'Masterclass',
    date: 'January 22, 2027',
    venue: 'Crown Palladium',
    location: 'Melbourne, Australia',
    status: 'Open',
    description: 'A 3-hour immersive interactive workshop for executive leadership cohorts on cognitive decompression and resilience.'
  },
  {
    id: 'evt-2027-02-18',
    title: 'National Retailers Annual Gala & Awards',
    type: 'Keynote',
    date: 'February 18, 2027',
    venue: 'Brisbane Convention & Exhibition Centre',
    location: 'Brisbane, Australia',
    status: 'Private',
    description: 'Keynote & entertainment presentation celebrating resilience, front-line motivation, and customer empathy.'
  }
];

// ================= PRESS & BIO LENGTHS =================
export const PRESS_KIT = {
  shortBio: `Peter Salerno, known as "The Man With The Magic Message," is an acclaimed motivational speaker, author, entertainer, and business coach. With decades spanning MDRT financial advisory, stage illusion, radio broadcasting on Happy Business Radio, and leadership with the Laughter Clubs of Australasia, Peter combines high-impact stagecraft with profound human insights.`,
  mediumBio: `Peter Salerno is a multifaceted motivational speaker, author, executive coach, and entertainer who has inspired audiences across Australia, New Zealand, and internationally. Renowned as "The Man With The Magic Message," Peter's career defies easy categorization: an accomplished financial advisor and Million Dollar Round Table qualifier, a master illusionist with national television appearances, host of Happy Business Radio, and a pioneer in laughter therapy. Peter blends compelling storytelling, theatrical stagecraft, and practical psychological frameworks to help leaders and teams push beyond limiting beliefs, eliminate workplace friction, and cultivate enduring joy.`,
  fullBio: `Peter Salerno is one of Australasia's most distinctive and versatile platform speakers, mentors, and creative thinkers. Universally recognized by his brand tagline, "The Man With The Magic Message," Peter has lived multiple accomplished careers that inform his dynamic stage presence.

Starting in the competitive world of financial services and real estate, Peter achieved the coveted Million Dollar Round Table (MDRT) status, mastering the subtle art of consultative persuasion, trust, and ethical salesmanship. Parallel to his business achievements, Peter cultivated a lifelong passion for stage magic, illusion, and entertainment, appearing on national television, radio, and theatrical stages.

As the voice behind Happy Business Radio and a key leader in the Laughter Clubs of Australasia, Peter has dedicated the past twenty years to human potential, resilience, and executive well-being. His keynotes—ranging from "Laughter Therapy" and "Don't You Hate Wobbly Tables?" to "Finding Your Better Self"—bridge the gap between entertainment and profound behavioral change. Peter lives in Australia and delivers bespoke keynotes, retreats, and masterclasses worldwide.`
};
