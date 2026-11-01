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
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Listening Room Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-midnight/10 pb-16">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Radio className="w-5 h-5 text-vermilion animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
              The Listening Room • Broadcast Radio
            </span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-midnight leading-[0.95]">
            LET’S TALK.
          </h1>

          <p className="font-sans text-base sm:text-lg text-midnight/80 max-w-2xl leading-relaxed">
            Welcome to Happy Business Radio. Where corporate seriousness steps aside to make room for candor, laughter, human curiosity, and the psychology of peak performance. Hosted by Peter Salerno.
          </p>
        </div>
      </section>

      {/* Featured Episode Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-midnight/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-16/10 rounded-2xl overflow-hidden shadow-xl border-4 border-sand">
            <Image
              src="/images/peter-salerno-radio.jpg"
              alt="Peter Salerno in Happy Business Radio studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full bg-vermilion text-white text-xs font-mono uppercase tracking-wider font-bold shadow-md">
                Featured Episode
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-sm font-mono text-vermilion font-bold">
              <span>Episode #{featured.episodeNumber}</span>
              <span>•</span>
              <span className="text-midnight/70">{featured.date}</span>
              <span>•</span>
              <span className="flex items-center space-x-1 text-midnight/70">
                <Clock className="w-4 h-4 text-vermilion" />
                <span>{featured.duration}</span>
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight">
              {featured.title}
            </h2>

            <div className="flex items-center space-x-2 text-base text-midnight/80 font-medium">
              <User className="w-4 h-4 text-vermilion" />
              <span>With <strong className="text-midnight">{featured.guest}</strong> ({featured.guestRole})</span>
            </div>

            <p className="text-base text-midnight/80 font-sans leading-relaxed">
              {featured.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => playEpisode(featured)}
                className="px-8 py-4 rounded-full bg-vermilion text-white text-sm uppercase tracking-widest font-bold hover:bg-midnight transition-colors flex items-center space-x-2 shadow-xl"
                suppressHydrationWarning
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
                className="text-sm uppercase tracking-widest font-sans font-bold text-midnight hover:text-vermilion underline decoration-vermilion decoration-2 underline-offset-4"
              >
                Read Show Notes & Transcript →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Archive with Search and Filters */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-midnight/10 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-sans uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-vermilion text-white font-bold shadow-md'
                    : 'bg-sand/60 text-midnight hover:bg-sand border border-midnight/15 font-semibold'
                }`}
                suppressHydrationWarning
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-grey" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search episodes or guests..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border-2 border-midnight/15 text-sm text-midnight placeholder:text-grey/70 focus:outline-none focus:border-vermilion shadow-xs"
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* Episode Rows */}
        <div className="divide-y divide-midnight/10">
          {filteredEpisodes.map((ep) => {
            const isThisPlaying = isPlaying && currentEpisode?.slug === ep.slug;
            return (
              <div
                key={ep.slug}
                className="py-6 hover:bg-sand/40 transition-colors rounded-xl px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start space-x-4">
                  <button
                    onClick={() => playEpisode(ep)}
                    className="p-4 rounded-full bg-vermilion text-white hover:bg-midnight transition-colors shrink-0 mt-1 shadow-md"
                    aria-label={isThisPlaying ? 'Pause' : 'Play'}
                    suppressHydrationWarning
                  >
                    {isThisPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-3 text-xs font-mono text-vermilion font-bold">
                      <span>Ep #{ep.episodeNumber}</span>
                      <span>•</span>
                      <span className="text-midnight/70">{ep.date}</span>
                      <span>•</span>
                      <span className="text-midnight/70">{ep.duration}</span>
                      <span>•</span>
                      <span className="text-grey font-sans uppercase tracking-wider">{ep.category}</span>
                    </div>

                    <Link
                      href={`/podcast/${ep.slug}`}
                      className="font-serif text-xl sm:text-2xl font-bold text-midnight group-hover:text-vermilion transition-colors block"
                    >
                      {ep.title}
                    </Link>

                    <p className="text-sm text-midnight/80 font-sans">
                      Guest: <strong className="text-midnight">{ep.guest}</strong> ({ep.guestRole})
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pl-14 md:pl-0">
                  <Link
                    href={`/podcast/${ep.slug}`}
                    className="text-sm uppercase tracking-widest font-mono font-bold text-vermilion hover:text-midnight inline-flex items-center space-x-1"
                  >
                    <span>Transcript</span>
                    <ArrowUpRight className="w-4 h-4" />
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
