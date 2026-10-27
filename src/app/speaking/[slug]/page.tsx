import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SPEAKING_TOPICS, SpeakingTopic } from '@/data/content';
import { ArrowLeft, ArrowUpRight, Check, Users, Clock, Sparkles } from 'lucide-react';

export async function generateStaticParams() {
  return SPEAKING_TOPICS.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function SpeakingTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = SPEAKING_TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  const relatedTopics = SPEAKING_TOPICS.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-bone text-midnight">
      {/* Top Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/speaking"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-grey hover:text-vermilion transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All 9 Keynotes</span>
        </Link>
      </div>

      {/* Topic Hero */}
      <article className="max-w-5xl mx-auto px-6 md:px-12 border-b border-midnight/10 pb-16 space-y-8">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold px-3 py-1 rounded-full bg-sand/60">
            Keynote {topic.number} of 09
          </span>
          <span className="text-xs font-mono text-grey uppercase tracking-wider">
            {topic.recommendedFormats[0]}
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-midnight leading-[1.02]">
          {topic.title}
        </h1>

        <p className="font-serif text-2xl sm:text-3xl italic text-midnight/80 leading-snug">
          {topic.subtitle}
        </p>

        {/* Thematic Quote Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-sand/50 border border-sand space-y-2">
          <span className="text-[10px] uppercase font-mono tracking-widest text-vermilion font-bold block">
            Core Thematic Axiom
          </span>
          <blockquote className="font-serif text-xl sm:text-2xl font-bold text-midnight italic leading-snug">
            "{topic.quote}"
          </blockquote>
        </div>

        {/* Narrative Description */}
        <div className="space-y-6 pt-4 text-base sm:text-lg text-midnight/80 font-sans leading-relaxed">
          {topic.fullDescription.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Key Takeaways Section */}
        <div className="pt-8 border-t border-midnight/10 space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block">
            Executive & Behavioral Takeaways
          </span>
          <h2 className="font-serif text-3xl font-bold text-midnight">
            What Audiences Leave With
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {topic.keyTakeaways.map((takeaway, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-sand/30 border border-midnight/10 flex items-start space-x-3"
              >
                <div className="p-1 rounded-full bg-vermilion text-bone shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-midnight/85 font-sans leading-relaxed">
                  {takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Audience & Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-midnight/10">
          <div className="p-6 rounded-2xl bg-bone border border-midnight/10 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-vermilion font-mono text-xs uppercase tracking-wider font-bold">
              <Users className="w-4 h-4" />
              <span>Recommended Audiences</span>
            </div>
            <ul className="space-y-1.5 text-xs text-midnight/80 font-sans">
              {topic.idealAudience.map((aud, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-bone border border-midnight/10 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-gold font-mono text-xs uppercase tracking-wider font-bold">
              <Clock className="w-4 h-4" />
              <span>Session Formats</span>
            </div>
            <ul className="space-y-1.5 text-xs text-midnight/80 font-sans">
              {topic.recommendedFormats.map((fmt, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{fmt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* In-Page Booking Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-midnight text-bone flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
              Direct Engagement
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Book "{topic.title}"
            </h3>
            <p className="text-xs text-grey">
              Schedule an executive conversation to tailor this keynote for your convention.
            </p>
          </div>
          <Link
            href={`/contact?topic=${topic.slug}`}
            className="px-8 py-3.5 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors shrink-0 inline-flex items-center space-x-2"
          >
            <span>Inquire for Your Date</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      {/* Related Speaking Topics */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-16 space-y-8">
        <h3 className="font-serif text-2xl font-bold text-midnight">
          Other Keynotes by Peter Salerno
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedTopics.map((rel) => (
            <Link
              key={rel.slug}
              href={`/speaking/${rel.slug}`}
              className="p-6 rounded-xl bg-sand/30 hover:bg-sand border border-midnight/10 transition-colors group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs text-vermilion font-bold">{rel.number}</span>
                <h4 className="font-serif text-xl font-bold text-midnight group-hover:text-vermilion transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-midnight/70 font-sans line-clamp-2">
                  {rel.shortDescription}
                </p>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-grey group-hover:text-midnight mt-4 block">
                Read Briefing →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
