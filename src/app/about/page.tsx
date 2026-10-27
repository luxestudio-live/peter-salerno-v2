import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Award, Compass, Radio, Mic, Sparkles, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Peter Salerno | A Life in Chapters',
  description: 'Explore the visual biography of Peter Salerno: businessman, entertainer, speaker, mentor, radio host, and author.',
};

export default function AboutPage() {
  const chapters = [
    {
      num: 'Chapter 01',
      title: 'The Businessman',
      era: 'Advisory, MDRT & The Ethics of Persuasion',
      icon: Award,
      accent: 'border-l-vermilion',
      lead: 'Before stepping onto the world’s keynote stages, Peter learned the rigorous reality of high-stakes corporate communication.',
      paragraphs: [
        'Qualifying for the prestigious Million Dollar Round Table (MDRT)—the premier international benchmark for financial advisory excellence—taught Peter that sustainable success is never born from manipulative closing scripts.',
        'Working with business leaders and high-net-worth clients, he recognized that people buy and follow those who make them feel deeply understood. This foundational financial and corporate acumen grounds every keynote Peter delivers, giving him authentic credibility with hard-nosed executive boards and commercial sales teams alike.'
      ],
      quote: 'Consultative excellence is not clever manipulation; it is the discipline of empathetic listening.'
    },
    {
      num: 'Chapter 02',
      title: 'The Entertainer',
      era: 'Stage Illusion, Film & Television',
      icon: Sparkles,
      accent: 'border-l-gold',
      lead: 'A lifelong study of theatrical magic revealed the hidden mechanisms of human perception and cognitive blind spots.',
      paragraphs: [
        'Peter’s stagecraft is not a novelty hobby; it is a profound exploration of how the human brain processes assumptions. Through national television, film, and live variety appearances, Peter mastered the art of holding an audience in rapt attention.',
        'He realized that illusionists do not trick the human eye—the human brain tricks itself based on lazy assumptions and borrowed expectations. On stage, he uses tasteful illusions to physically demonstrate how limiting beliefs operate, leaving audiences speechless and enlightened.'
      ],
      quote: 'What seems impossible is usually just an unexamined assumption.'
    },
    {
      num: 'Chapter 03',
      title: 'The Speaker',
      era: '1,000+ Auditoriums, Countless Transformed Minds',
      icon: Mic,
      accent: 'border-l-vermilion',
      lead: 'Taking the platform across Australasia and international conventions with high-energy stagecraft and heartfelt humor.',
      paragraphs: [
        'Known across industries as "The Man With The Magic Message," Peter has addressed conferences ranging from banking summits to healthcare conventions. He rejects sterile lecture slides in favor of dynamic, interactive theater.',
        'His keynote repertoire—including iconic presentations like "Laughter Therapy" and "Don’t You Hate Wobbly Tables?"—delivers not just temporary motivation, but lasting operational and psychological breakthroughs that teams talk about for years.'
      ],
      quote: 'A speech entertains for an hour; a true message echoes for a career.'
    },
    {
      num: 'Chapter 04',
      title: 'The Mentor',
      era: 'Executive Coaching & Team Transformation',
      icon: Compass,
      accent: 'border-l-midnight',
      lead: 'Guiding C-suite leaders and frontline teams through high-stakes pivots, burnout, and organizational friction.',
      paragraphs: [
        'Behind closed doors, executive leadership can be an isolating journey. Peter serves as a trusted confidant and strategic mentor to managing directors, partners, and high-performing entrepreneurs.',
        'Using his proprietary 4-Pillar framework, Peter helps leaders eliminate internal friction, restore work-life harmony, and develop the emotional poise required to lead through uncertainty.'
      ],
      quote: 'Leadership is the courage to address the wobble before the table collapses.'
    },
    {
      num: 'Chapter 05',
      title: 'The Voice',
      era: 'Happy Business Radio & Syndicated Columns',
      icon: Radio,
      accent: 'border-l-gold',
      lead: 'Broadcasting genuine curiosity, business insight, and lightness across the airwaves.',
      paragraphs: [
        'As host of Happy Business Radio, Peter has spent years interviewing industry disruptors, psychologists, authors, and entrepreneurs. His radio presence brings warmth and candor to business commentary.',
        'Coupled with newspaper and magazine columns, Peter’s voice is a regular fixture for Australians seeking practical optimism and smart, human business perspectives.'
      ],
      quote: 'When business conversations lose their humanity, they lose their profit.'
    },
    {
      num: 'Chapter 06',
      title: 'The Philosophy',
      era: 'Laughter Clubs of Australasia & "Finding Your Better Self"',
      icon: Heart,
      accent: 'border-l-vermilion',
      lead: 'Pioneering biological laughter therapy and writing the definitive guide to inner calibration.',
      paragraphs: [
        'Through his leadership involvement with the Laughter Clubs of Australasia, Peter proved that intentional mirth is a vital preventative wellness strategy that slashes workplace burnout and sparks team cohesion.',
        'His published book, "Finding Your Better Self," synthesizes his four-decade journey into a compassionate handbook for stripping away borrowed noise and discovering quiet, authentic confidence.'
      ],
      quote: 'Laughter is not a distraction from the work; it is the fuel that makes the work sustainable.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-bone text-midnight">
      {/* Editorial Page Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-midnight/10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-semibold block">
              Biographical Essay • The Story
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-midnight leading-[0.98]">
              One life. <br />
              <span className="italic font-normal text-midnight/80">Many remarkable</span> chapters.
            </h1>
            <p className="font-sans text-base sm:text-lg text-midnight/75 leading-relaxed max-w-2xl">
              Peter Salerno has lived multiple distinguished careers—from high-stakes finance to theatrical magic, broadcast radio, and transformative executive mentoring. Each chapter informs the unforgettable stage presence he shares with audiences worldwide.
            </p>
          </div>

          <div className="lg:col-span-4 relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-sand">
            <Image
              src="/images/peter-salerno-hero.jpg"
              alt="Portrait of Peter Salerno"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* The 6 Chapters Timeline */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto py-20 space-y-20">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <article
              key={chapter.num}
              className="pt-12 border-t border-midnight/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative group"
            >
              {/* Left Column: Number, Era & Icon */}
              <div className="md:col-span-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
                    {chapter.num}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                </div>
                <div className="font-serif text-4xl sm:text-5xl font-light text-midnight/25 select-none tracking-tight">
                  {chapter.num.replace('Chapter ', '')}
                </div>
                <p className="text-xs font-mono text-grey uppercase tracking-wider leading-relaxed">
                  {chapter.era}
                </p>
                <div className="inline-flex p-3 rounded-xl bg-sand/60 text-midnight">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Right Column: Title, Lead, Content, Pullquote */}
              <div className="md:col-span-8 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight">
                  {chapter.title}
                </h2>

                <p className="font-serif text-xl sm:text-2xl italic text-midnight/90 leading-snug">
                  {chapter.lead}
                </p>

                <div className="space-y-4 text-sm sm:text-base text-midnight/75 font-sans leading-relaxed">
                  {chapter.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-sand/40 space-y-2 border border-sand">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                    Chapter Axiom
                  </span>
                  <blockquote className="text-base sm:text-lg italic font-serif text-midnight/90 leading-snug">
                    "{chapter.quote}"
                  </blockquote>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Next Steps CTA */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto pt-12 border-t border-midnight/10 text-center space-y-6">
        <h3 className="font-serif text-3xl font-bold text-midnight">
          Discover How Peter Brings These Chapters to Life
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/speaking"
            className="px-8 py-3.5 rounded-full bg-midnight text-bone text-xs uppercase tracking-widest font-semibold hover:bg-vermilion transition-colors inline-flex items-center space-x-2"
          >
            <span>Explore Keynotes On Stage</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work-with-peter"
            className="px-8 py-3.5 rounded-full border border-midnight/25 text-midnight text-xs uppercase tracking-widest font-semibold hover:bg-sand transition-colors"
          >
            <span>Executive Mentoring</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
