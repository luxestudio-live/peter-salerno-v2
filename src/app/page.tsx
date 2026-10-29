'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import { DimensionalBook } from '@/components/DimensionalBook';
import { SPEAKING_TOPICS, PODCAST_EPISODES, BOOKS } from '@/data/content';
import { ArrowUpRight, Play, Pause, Sparkles, Radio, Mic, Award, Compass, Heart, Users } from 'lucide-react';

export default function HomePage() {
  const { isPlaying, togglePlay, playEpisode, currentEpisode } = useAudio();
  const [activePersona, setActivePersona] = useState<number>(0);

  const personas = [
    {
      title: 'THE SPEAKER',
      subtitle: 'Keynotes That Electrify & Endure',
      description: 'Commanding stages across Australia, New Zealand, and global conventions with high-energy psychological storytelling and profound behavioral shifts.',
      icon: Mic,
      stat: '1,000+',
      statLabel: 'Auditoriums Addressed',
      href: '/speaking',
      tag: 'On Stage'
    },
    {
      title: 'THE STORYTELLER',
      subtitle: 'The Art of the Unexpected',
      description: 'Weaving real-world finance, human resilience, and stagecraft into metaphors that stick in the mind long after the applause settles.',
      icon: Sparkles,
      stat: '4 Decades',
      statLabel: 'Platform Mastery',
      href: '/about',
      tag: 'The Philosophy'
    },
    {
      title: 'THE AUTHOR',
      subtitle: 'Practical Wisdom, Put to Paper',
      description: 'Penning foundational works like "Finding Your Better Self" and "The Magic Message" that strip away distraction and cultivate inner clarity.',
      icon: Compass,
      stat: '2 Titles',
      statLabel: 'Published Works',
      href: '/books',
      tag: 'In Print'
    },
    {
      title: 'THE ENTERTAINER',
      subtitle: 'Master of Psychological Illusion',
      description: 'A lifelong fascination with stage magic that reveals how the mind deceives itself—proving that what seems impossible is merely an unexamined assumption.',
      icon: Sparkles,
      stat: 'TV & Film',
      statLabel: 'National Broadcasts',
      href: '/about',
      tag: 'Stagecraft'
    },
    {
      title: 'THE MENTOR',
      subtitle: 'MDRT Financial Acumen & Leadership',
      description: 'Million Dollar Round Table veteran coaching executive teams, high-performing sales organizations, and leaders navigating acute transition.',
      icon: Award,
      stat: 'MDRT',
      statLabel: 'Top Table Credential',
      href: '/work-with-peter',
      tag: 'Leadership'
    },
    {
      title: 'THE VOICE',
      subtitle: 'Host of Happy Business Radio',
      description: 'Bringing joyful business dialogue and laughter therapy to airwaves, interviewing Fortune 500 visionaries, psychologists, and cultural leaders.',
      icon: Radio,
      stat: 'Weekly',
      statLabel: 'Broadcast Audience',
      href: '/podcast',
      tag: 'On Air'
    },
  ];

  const featuredEpisode = PODCAST_EPISODES[0];
  const featuredBook = BOOKS[0];

  return (
    <div className="space-y-0">
      {/* ================= SCENE 1: THE OPENING STATEMENT (HERO) ================= */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-6 md:px-12 bg-bone overflow-hidden border-b border-midnight/10">
        {/* Subtle background typographic framing */}
        <div
          aria-hidden="true"
          className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.035] font-serif text-[22vw] font-bold text-midnight whitespace-nowrap"
        >
          SALERNO
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-vermilion" />
              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
                The Introduction
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-midnight leading-[0.98]">
              Not your <br />
              <span className="italic font-normal text-midnight/80">ordinary</span> story. <br />
              <span className="text-vermilion">Meet Peter Salerno.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-midnight/75 max-w-xl leading-relaxed pt-2">
              Speaker. Author. Entertainer. Voice. Businessman. A lifetime spent mastering the invisible thread between laughter, psychological illusion, and transformative human performance.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/speaking"
                data-cursor="explore"
                data-cursor-text="Stage"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-midnight text-bone text-xs uppercase tracking-widest font-semibold hover:bg-vermilion transition-all duration-300 shadow-xl"
              >
                <span>Explore Keynotes</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full border border-midnight/25 text-midnight text-xs uppercase tracking-widest font-semibold hover:bg-sand transition-colors"
              >
                <span>Read the Biography</span>
              </Link>
            </div>

            {/* Credential Indicators */}
            <div className="pt-8 border-t border-midnight/10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <span className="font-serif text-2xl font-bold text-midnight block">MDRT</span>
                <span className="text-[11px] font-sans text-grey uppercase tracking-wider">Top Table Record</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-midnight block">Laughter</span>
                <span className="text-[11px] font-sans text-grey uppercase tracking-wider">Club Leadership</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-midnight block">Radio</span>
                <span className="text-[11px] font-sans text-grey uppercase tracking-wider">Host & Executive</span>
              </div>
            </div>
          </div>

          {/* Right Cinematic Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-bone group">
              <Image
                src="/images/peter-salerno-actual.jpg"
                alt="Peter Salerno - The Man With The Magic Message"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-80" />

              {/* Inlaid Tagline Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-bone/90 backdrop-blur-md border border-bone/40 shadow-lg">
                <span className="text-[10px] uppercase font-mono tracking-widest text-vermilion font-bold block mb-1">
                  Brand Tagline
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold text-midnight leading-snug">
                  "The Man With The Magic Message"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCENE 2: THE MANY SIDES OF PETER (CHAPTERS) ================= */}
      <section className="py-24 px-6 md:px-12 bg-sand/30 border-b border-midnight/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-midnight/15 pb-6 gap-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-semibold block mb-2">
                02. The Multiverse of a Life
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-midnight">
                The Many Sides of Peter
              </h2>
            </div>
            <p className="text-sm font-sans text-grey max-w-md">
              Most speakers live in one lane. Peter’s career bridges business leadership, radio broadcasting, stage magic, and deep laughter therapy.
            </p>
          </div>

          {/* Interactive Persona Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona, index) => {
              const Icon = persona.icon;
              const isSelected = activePersona === index;
              return (
                <div
                  key={persona.title}
                  onClick={() => setActivePersona(index)}
                  className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-midnight text-bone border-midnight shadow-2xl scale-[1.02]'
                      : 'bg-bone text-midnight border-midnight/10 hover:border-gold hover:shadow-lg'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        isSelected ? 'bg-gold/20 text-gold' : 'bg-sand text-grey'
                      }`}>
                        {persona.tag}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-vermilion' : 'text-grey'}`} />
                    </div>

                    <h3 className={`font-serif text-2xl sm:text-3xl font-bold tracking-tight ${
                      isSelected ? 'text-bone' : 'text-midnight'
                    }`}>
                      {persona.title}
                    </h3>
                    <p className={`text-xs uppercase tracking-wider font-sans font-semibold ${
                      isSelected ? 'text-gold' : 'text-vermilion'
                    }`}>
                      {persona.subtitle}
                    </p>
                    <p className={`text-sm leading-relaxed ${
                      isSelected ? 'text-bone/80' : 'text-midnight/70'
                    }`}>
                      {persona.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-current/10 flex items-center justify-between">
                    <div>
                      <span className="font-serif text-2xl font-bold block">{persona.stat}</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">
                        {persona.statLabel}
                      </span>
                    </div>
                    <Link
                      href={persona.href}
                      className={`text-xs uppercase tracking-widest font-semibold inline-flex items-center space-x-1 ${
                        isSelected ? 'text-gold hover:text-white' : 'text-vermilion hover:text-midnight'
                      }`}
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SCENE 3: THE HUMAN STORY (PHILOSOPHY QUOTE) ================= */}
      <section className="py-24 px-6 md:px-12 bg-bone border-b border-midnight/10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase font-mono tracking-widest text-grey block">
            03. The Core Philosophy
          </span>
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-midnight leading-tight">
            "Some people follow one path. <br />
            <span className="italic font-bold text-vermilion">Others make their own.</span>"
          </blockquote>
          <div className="w-16 h-1 bg-gold mx-auto" />
          <p className="text-base sm:text-lg text-midnight/70 max-w-2xl mx-auto leading-relaxed">
            Peter has lived across boardrooms, comedy stages, television cameras, and radio mics. That varied journey is not a collection of jobs—it is a single philosophy that curiosity and laughter dissolve what fear builds.
          </p>
        </div>
      </section>

      {/* ================= SCENE 4: THE STAGE (SPEAKING INTRO) ================= */}
      <section className="relative py-28 px-6 md:px-12 bg-midnight text-bone overflow-hidden border-b border-bone/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Stage Imagery */}
          <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border border-bone/20 group">
            <Image
              src="/images/peter-salerno-stage.jpg"
              alt="Peter Salerno presenting on stage in front of auditorium"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-gold">
              <span>Auditorium Keynote • Sydney</span>
              <span className="px-2.5 py-1 rounded-full bg-vermilion text-bone font-sans uppercase font-bold text-[10px]">
                Live Stage
              </span>
            </div>
          </div>

          {/* Right Stagecraft Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-gold block">
              04. The Power of the Stage
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-bone leading-[1.05]">
              Some messages <br />
              <span className="text-sand/80 italic font-normal">stay with you</span> for life.
            </h2>
            <p className="text-sm sm:text-base text-bone/70 leading-relaxed">
              When Peter walks onto a platform, there is no generic PowerPoint sleepwalk. Combining decades of consultative business leadership with theatrical illusion and biological laughter therapy, he awakens audiences to their own creative power.
            </p>

            {/* Quick 3 Key Topics Preview */}
            <div className="space-y-3 pt-2">
              {SPEAKING_TOPICS.slice(0, 3).map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/speaking/${topic.slug}`}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-charcoal/60 hover:bg-charcoal border border-bone/10 hover:border-gold transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-gold font-bold">{topic.number}</span>
                    <span className="font-serif text-lg font-medium text-bone group-hover:text-vermilion transition-colors">
                      {topic.title}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-grey group-hover:text-vermilion transition-colors" />
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/speaking"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors"
              >
                <span>View All 9 Keynote Subjects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCENE 5: THE AIRWAVES (HAPPY BUSINESS RADIO) ================= */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-bone border-b border-bone/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-bone/15 pb-6 gap-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-gold block mb-2">
                05. Broadcast Dialogue
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bone">
                Happy Business Radio
              </h2>
            </div>
            <p className="text-sm font-sans text-grey max-w-md">
              A weekly audio haven where corporate seriousness gives way to genuine curiosity, levity, and transformative business conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Studio Photo Card */}
            <div className="lg:col-span-5 relative aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border border-bone/15 group">
              <Image
                src="/images/peter-salerno-radio.jpg"
                alt="Peter Salerno in Happy Business Radio broadcast studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-vermilion text-bone text-[10px] font-mono uppercase tracking-wider font-bold">
                  On The Air
                </span>
              </div>
            </div>

            {/* Featured Episode Player Card */}
            <div className="lg:col-span-7 bg-midnight border border-gold/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-bone/10 pb-4">
                <span className="text-xs font-mono text-gold uppercase tracking-wider">
                  Featured Episode • #{featuredEpisode.episodeNumber}
                </span>
                <span className="text-xs font-mono text-grey">{featuredEpisode.duration}</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-bone leading-snug">
                  {featuredEpisode.title}
                </h3>
                <p className="text-xs text-gold/90 font-sans mt-1">
                  Guest: {featuredEpisode.guest} — {featuredEpisode.guestRole}
                </p>
                <p className="text-sm text-grey leading-relaxed mt-3">
                  {featuredEpisode.description}
                </p>
              </div>

              {/* Play Button Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => playEpisode(featuredEpisode)}
                  className="px-6 py-3 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors flex items-center space-x-2 shadow-lg"
                  suppressHydrationWarning
                >
                  {isPlaying && currentEpisode?.slug === featuredEpisode.slug ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Pause Episode</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>Listen to Broadcast</span>
                    </>
                  )}
                </button>
                <Link
                  href="/podcast"
                  className="text-xs uppercase tracking-widest font-sans text-bone/70 hover:text-bone underline"
                >
                  Browse Full Podcast Archive →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCENE 6: THE WRITTEN WORD (BOOKS) ================= */}
      <section className="py-24 px-6 md:px-12 bg-bone border-b border-midnight/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-vermilion block">
              06. The Written Word
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-midnight leading-[1.05]">
              Stories, ideas, and <br />
              <span className="italic font-normal text-midnight/80">everything</span> in between.
            </h2>
            <p className="text-sm text-midnight/70 leading-relaxed">
              Peter’s books are written for people seeking clarity without corporate jargon. Drawing from decades of stagecraft and human dialogue, these pages explore the quiet architecture of personal alignment.
            </p>
            <div className="p-4 rounded-xl bg-sand/40 border border-midnight/10 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-grey block">
                Selected Excerpt
              </span>
              <p className="font-serif text-base italic text-midnight leading-snug">
                "{featuredBook.excerpt.slice(0, 160)}..."
              </p>
            </div>
            <div>
              <Link
                href="/books"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-midnight text-bone text-xs uppercase tracking-widest font-semibold hover:bg-vermilion transition-colors"
              >
                <span>Enter The Library</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <DimensionalBook book={featuredBook} />
          </div>
        </div>
      </section>

      {/* ================= SCENE 7: THE PHILOSOPHY (FINDING YOUR BETTER SELF) ================= */}
      <section className="py-24 px-6 md:px-12 bg-sand/30 border-b border-midnight/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-semibold block">
              07. The Framework
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-midnight">
              Finding Your Better Self
            </h2>
            <p className="text-sm text-grey">
              The four foundational pillars Peter shares with executives and audiences across the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Eliminate The Wobble',
                desc: 'Identify the subtle micro-frictions you unconsciously tolerate every day. Address structural imbalance early.'
              },
              {
                step: '02',
                title: 'Practice Strategic Levity',
                desc: 'Laughter resets neurochemical baselines, lowering cortisol and freeing prefrontal executive focus.'
              },
              {
                step: '03',
                title: 'Dissolve False Limits',
                desc: 'Recognize that most of your boundaries are expectations borrowed from others, not physical laws.'
              },
              {
                step: '04',
                title: 'Sincere Contribution',
                desc: 'Shift from self-conscious performance anxiety into high-craft service to your team and clients.'
              }
            ].map((pillar) => (
              <div key={pillar.step} className="p-6 rounded-xl bg-bone border border-midnight/10 shadow-xs space-y-3">
                <span className="font-mono text-xs font-bold text-vermilion block">{pillar.step}</span>
                <h3 className="font-serif text-xl font-bold text-midnight">{pillar.title}</h3>
                <p className="text-xs text-midnight/70 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCENE 8: CLOSING INVITATION ================= */}
      <section className="py-24 px-6 md:px-12 bg-bone text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-xs uppercase font-mono tracking-widest text-grey block">
            08. The Next Chapter
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-midnight leading-tight">
            Ready to bring the magic message to your stage or team?
          </h2>
          <p className="text-base text-midnight/70 max-w-xl mx-auto leading-relaxed">
            Whether planning an annual convention, executive retreat, or masterclass series, let’s design an experience your audience will never forget.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-midnight transition-colors shadow-xl inline-flex items-center space-x-2"
            >
              <span>Initiate An Engagement</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/speaking"
              className="px-8 py-4 rounded-full border border-midnight/20 text-midnight text-xs uppercase tracking-widest font-semibold hover:bg-sand transition-colors"
            >
              <span>Review Keynote Details</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
