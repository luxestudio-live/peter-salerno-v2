'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import { PODCAST_EPISODES, PodcastEpisode } from '@/data/content';
import { Play, Pause, Search, Radio, Clock, User, ArrowUpRight } from 'lucide-react';

export default function PodcastPage() {
  const { currentEpisode, isPlaying, playEpisode } = useAudio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featured = PODCAST_EPISODES[0];

  const categories = ['All', 'Leadership', 'Personal Growth', 'Sales & Resilience'];

  const filteredEpisodes = PODCAST_EPISODES.filter((ep) => {
    const matchesCat = selectedCategory === 'All' || ep.category === selectedCategory;
    const matchesSearch =
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-32 bg-midnight text-bone min-h-screen">
      {/* Listening Room Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-bone/10 pb-16">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Radio className="w-5 h-5 text-gold animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold">
              The Listening Room • Broadcast Radio
            </span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-bone leading-[0.95]">
            LET’S TALK.
          </h1>

          <p className="font-sans text-base sm:text-lg text-bone/70 max-w-2xl leading-relaxed">
            Welcome to Happy Business Radio. Where corporate seriousness steps aside to make room for candor, laughter, human curiosity, and the psychology of peak performance. Hosted by Peter Salerno.
          </p>
        </div>
      </section>

      {/* Featured Episode Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal border border-gold/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-bone/15">
            <Image
              src="/images/peter-salerno-radio.jpg"
              alt="Peter Salerno in Happy Business Radio studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-vermilion text-bone text-[10px] font-mono uppercase tracking-wider font-bold">
                Featured Episode
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-xs font-mono text-gold">
              <span>Episode #{featured.episodeNumber}</span>
              <span>•</span>
              <span>{featured.date}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{featured.duration}</span>
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bone leading-tight">
              {featured.title}
            </h2>

            <div className="flex items-center space-x-2 text-sm text-sand/90">
              <User className="w-4 h-4 text-vermilion" />
              <span>With {featured.guest} ({featured.guestRole})</span>
            </div>

            <p className="text-sm text-grey leading-relaxed">
              {featured.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => playEpisode(featured)}
                className="px-8 py-4 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors flex items-center space-x-2 shadow-xl"
              >
                {isPlaying && currentEpisode?.slug === featured.slug ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Broadcast</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Play Episode</span>
                  </>
                )}
              </button>
              <Link
                href={`/podcast/${featured.slug}`}
                className="text-xs uppercase tracking-widest font-sans text-bone/70 hover:text-bone underline"
              >
                Read Show Notes & Transcript →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Archive with Search and Filters */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-bone/10 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold text-midnight font-bold'
                    : 'bg-charcoal text-bone/70 hover:bg-bone/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-grey" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search episodes or guests..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-charcoal border border-bone/15 text-xs text-bone placeholder:text-grey focus:outline-none focus:border-gold"
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* Episode Rows */}
        <div className="divide-y divide-bone/10">
          {filteredEpisodes.map((ep) => {
            const isThisPlaying = isPlaying && currentEpisode?.slug === ep.slug;
            return (
              <div
                key={ep.slug}
                className="py-6 hover:bg-charcoal/40 transition-colors rounded-xl px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start space-x-4">
                  <button
                    onClick={() => playEpisode(ep)}
                    className="p-3.5 rounded-full bg-vermilion text-bone hover:bg-gold transition-colors shrink-0 mt-1 shadow-md"
                    aria-label={isThisPlaying ? 'Pause' : 'Play'}
                  >
                    {isThisPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-3 text-[11px] font-mono text-gold">
                      <span>Ep #{ep.episodeNumber}</span>
                      <span>•</span>
                      <span>{ep.date}</span>
                      <span>•</span>
                      <span>{ep.duration}</span>
                      <span>•</span>
                      <span className="text-grey">{ep.category}</span>
                    </div>

                    <Link
                      href={`/podcast/${ep.slug}`}
                      className="font-serif text-xl sm:text-2xl font-bold text-bone group-hover:text-gold transition-colors block"
                    >
                      {ep.title}
                    </Link>

                    <p className="text-xs text-sand/80 font-sans">
                      Guest: <strong className="text-bone">{ep.guest}</strong> ({ep.guestRole})
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pl-14 md:pl-0">
                  <Link
                    href={`/podcast/${ep.slug}`}
                    className="text-xs uppercase tracking-widest font-mono text-grey hover:text-bone inline-flex items-center space-x-1"
                  >
                    <span>Transcript</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
