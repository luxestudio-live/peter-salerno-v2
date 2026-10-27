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
    <div className="pt-28 pb-32 bg-midnight text-bone min-h-screen">
      {/* Top Back Link */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/podcast"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-grey hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Happy Business Radio</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        {/* Header Metadata */}
        <div className="space-y-4 border-b border-bone/10 pb-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-gold">
            <span className="px-2.5 py-1 rounded-sm bg-charcoal border border-gold/30 font-bold">
              Episode #{episode.episodeNumber}
            </span>
            <span>•</span>
            <span>{episode.date}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{episode.duration}</span>
            </span>
            <span>•</span>
            <span className="text-grey">{episode.category}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-bone leading-[1.05]">
            {episode.title}
          </h1>

          <div className="flex items-center space-x-3 text-sm text-sand/90 pt-2">
            <User className="w-4 h-4 text-vermilion" />
            <span>Featured Guest: <strong className="text-bone">{episode.guest}</strong> — {episode.guestRole}</span>
          </div>
        </div>

        {/* Big Audio Player Box */}
        <EpisodePlayer episode={episode} />

        {/* Executive Summary */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-gold">Episode Overview</h2>
          <p className="text-base sm:text-lg text-bone/80 font-sans leading-relaxed">
            {episode.description}
          </p>
        </div>

        {/* Key Discussion Points */}
        <div className="p-8 rounded-2xl bg-charcoal/50 border border-bone/10 space-y-4">
          <h3 className="font-serif text-xl font-bold text-bone">Key Takeaways & Timestamps</h3>
          <ul className="space-y-3">
            {episode.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-3 text-sm text-bone/70">
                <Check className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transcript Excerpt */}
        <div className="space-y-4 pt-4 border-t border-bone/10">
          <h3 className="font-serif text-2xl font-bold text-gold">Transcript Excerpt</h3>
          <div className="p-6 sm:p-8 rounded-xl bg-charcoal border border-bone/10 text-sm font-sans italic text-sand/90 leading-relaxed shadow-lg relative">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block not-italic mb-2">
              On-Air Studio Excerpt
            </span>
            "{episode.transcriptSnippet}"
          </div>
          <p className="text-xs text-grey">
            Complete unedited broadcast audio available via player above and on Happy Business Radio syndicated feeds.
          </p>
        </div>
      </article>

      {/* Related Episodes */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pt-20 border-t border-bone/10 mt-16 space-y-8">
        <h3 className="font-serif text-2xl font-bold text-bone">
          More from Happy Business Radio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {related.map((ep) => (
            <Link
              key={ep.slug}
              href={`/podcast/${ep.slug}`}
              className="p-6 rounded-xl bg-charcoal hover:bg-charcoal/80 border border-bone/10 transition-colors block space-y-2 group"
            >
              <span className="text-[10px] font-mono text-gold uppercase">Ep #{ep.episodeNumber} • {ep.duration}</span>
              <h4 className="font-serif text-lg font-bold text-bone group-hover:text-gold transition-colors">
                {ep.title}
              </h4>
              <p className="text-xs text-grey">With {ep.guest}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
