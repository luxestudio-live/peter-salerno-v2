import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PODCAST_EPISODES } from '@/data/content';
import { EpisodePlayer } from '@/components/EpisodePlayer';
import { ArrowLeft, Clock, User, Check } from 'lucide-react';

export async function generateStaticParams() {
  return PODCAST_EPISODES.map((ep) => ({
    slug: ep.slug,
  }));
}

export default async function PodcastEpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = PODCAST_EPISODES.find((ep) => ep.slug === slug);

  if (!episode) {
    notFound();
  }

  const related = PODCAST_EPISODES.filter((ep) => ep.slug !== slug).slice(0, 2);

  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Top Back Link */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/podcast"
          className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest font-mono text-grey hover:text-vermilion font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Happy Business Radio</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        {/* Header Metadata */}
        <div className="space-y-4 border-b-2 border-midnight/10 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-midnight/80">
            <span className="px-3 py-1 rounded-sm bg-sand/60 border border-midnight/15 font-bold text-vermilion">
              Episode #{episode.episodeNumber}
            </span>
            <span>•</span>
            <span className="font-semibold">{episode.date}</span>
            <span>•</span>
            <span className="flex items-center space-x-1 font-semibold">
              <Clock className="w-4 h-4 text-vermilion" />
              <span>{episode.duration}</span>
            </span>
            <span>•</span>
            <span className="text-grey uppercase tracking-wider">{episode.category}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-midnight leading-[1.05]">
            {episode.title}
          </h1>

          <div className="flex items-center space-x-3 text-base text-midnight/80 pt-2 font-medium">
            <User className="w-4 h-4 text-vermilion" />
            <span>Featured Guest: <strong className="text-midnight">{episode.guest}</strong> — {episode.guestRole}</span>
          </div>
        </div>

        {/* Big Audio Player Box */}
        <EpisodePlayer episode={episode} />

        {/* Executive Summary */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight">Episode Overview</h2>
          <p className="text-base sm:text-lg text-midnight/80 font-sans leading-relaxed">
            {episode.description}
          </p>
        </div>

        {/* Key Discussion Points */}
        <div className="p-8 sm:p-10 rounded-2xl bg-sand/40 border-2 border-midnight/10 space-y-4 shadow-sm">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-midnight">Key Takeaways & Timestamps</h3>
          <ul className="space-y-3">
            {episode.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-3 text-base text-midnight/85 font-sans leading-relaxed">
                <Check className="w-5 h-5 text-vermilion shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transcript Excerpt */}
        <div className="space-y-4 pt-4 border-t-2 border-midnight/10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight">Transcript Excerpt</h3>
          <div className="p-6 sm:p-8 rounded-xl bg-white border-2 border-midnight/15 text-base sm:text-lg font-sans italic text-midnight/90 leading-relaxed shadow-lg relative">
            <span className="text-xs font-mono uppercase tracking-widest text-vermilion font-bold block not-italic mb-2">
              On-Air Studio Excerpt
            </span>
            "{episode.transcriptSnippet}"
          </div>
          <p className="text-sm text-grey font-medium">
            Complete unedited broadcast audio available via player above and on Happy Business Radio syndicated feeds.
          </p>
        </div>
      </article>

      {/* Related Episodes */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pt-20 border-t-2 border-midnight/10 mt-16 space-y-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight">
          More from Happy Business Radio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {related.map((ep) => (
            <Link
              key={ep.slug}
              href={`/podcast/${ep.slug}`}
              className="p-6 rounded-xl bg-sand/30 hover:bg-sand/60 border-2 border-midnight/10 transition-all block space-y-2 group shadow-sm hover:shadow-md"
            >
              <span className="text-xs font-mono text-vermilion uppercase font-bold">Ep #{ep.episodeNumber} • {ep.duration}</span>
              <h4 className="font-serif text-xl font-bold text-midnight group-hover:text-vermilion transition-colors">
                {ep.title}
              </h4>
              <p className="text-sm text-midnight/70">With {ep.guest}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
