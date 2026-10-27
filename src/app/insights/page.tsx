import React from 'react';
import Link from 'next/link';
import { ARTICLES } from '@/data/content';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

export const metadata = {
  title: 'Journal & Insights | Notes From Peter Salerno',
  description: 'Independent magazine essays and reflections on stagecraft, leadership, laughter therapy, and human performance by Peter Salerno.',
};

export default function InsightsPage() {
  const featured = ARTICLES[0];
  const restArticles = ARTICLES.slice(1);

  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Editorial Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-midnight/10 pb-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-vermilion" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
              The Journal • Notes From Peter
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-midnight leading-[0.98]">
            Notes on craft, <br />
            <span className="italic font-normal text-midnight/80">curiosity,</span> and laughter.
          </h1>

          <p className="font-sans text-base sm:text-lg text-midnight/75 max-w-2xl leading-relaxed">
            An independent editorial archive of essays, observations, and stage reflections written by Peter Salerno. Exploring the subtle intersections of leadership, human illusion, and biological resilience.
          </p>
        </div>
      </section>

      {/* Featured Essay Lead */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-sand/40 border border-midnight/10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center space-x-3 text-xs font-mono text-grey">
              <span className="text-vermilion font-bold uppercase">{featured.category}</span>
              <span>•</span>
              <span>{featured.date}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{featured.readTime}</span>
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight">
              <Link href={`/insights/${featured.slug}`} className="hover:text-vermilion transition-colors">
                {featured.title}
              </Link>
            </h2>

            <p className="text-base sm:text-lg text-midnight/75 font-sans leading-relaxed">
              {featured.lead}
            </p>

            <div className="p-5 rounded-xl bg-bone/90 border border-sand shadow-xs space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                The Central Axiom
              </span>
              <blockquote className="text-base italic font-serif text-midnight/90 leading-snug">
                "{featured.pullQuote}"
              </blockquote>
            </div>

            <div className="pt-2">
              <Link
                href={`/insights/${featured.slug}`}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-midnight text-bone text-xs uppercase tracking-widest font-semibold hover:bg-vermilion transition-colors"
              >
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-2xl bg-midnight text-bone text-center space-y-4 shadow-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
              Editorial Highlight
            </span>
            <p className="font-serif text-2xl font-bold italic leading-snug">
              "Great leadership is refusing to tolerate the small wobbles that normalize mediocrity."
            </p>
            <span className="text-xs text-grey block">— Peter Salerno</span>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-12 space-y-8">
        <h3 className="font-serif text-3xl font-bold text-midnight border-b border-midnight/10 pb-4">
          All Essays & Reflections
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restArticles.map((article) => (
            <article
              key={article.slug}
              className="p-8 rounded-2xl bg-sand/20 hover:bg-sand/40 border border-midnight/10 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-xs font-mono text-grey">
                  <span className="text-vermilion font-bold uppercase">{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-midnight group-hover:text-vermilion transition-colors leading-snug">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h4>

                <p className="text-sm text-midnight/70 font-sans leading-relaxed line-clamp-3">
                  {article.lead}
                </p>
              </div>

              <div className="pt-4 border-t border-midnight/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-grey">Read Article</span>
                <ArrowUpRight className="w-4 h-4 text-grey group-hover:text-vermilion transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
