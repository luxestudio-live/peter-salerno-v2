import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/data/content';
import { ArrowLeft, Clock, Share2, Quote } from 'lucide-react';

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = ARTICLES.filter((a) => a.slug !== slug);

  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Back to Journal */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/insights"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-grey hover:text-vermilion transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 md:px-12 space-y-10">
        {/* Header Metadata */}
        <div className="space-y-4 border-b border-midnight/10 pb-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-grey">
            <span className="text-vermilion font-bold uppercase">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-midnight leading-[1.05]">
            {article.title}
          </h1>

          <div className="flex items-center justify-between text-xs text-grey pt-2">
            <span>By <strong className="text-midnight">Peter Salerno</strong> • Australasia</span>
          </div>
        </div>

        {/* Lead In */}
        <p className="font-serif text-2xl sm:text-3xl italic text-midnight/90 leading-snug">
          {article.lead}
        </p>

        {/* Pull Quote */}
        <div className="p-8 sm:p-10 rounded-2xl bg-sand/50 border border-sand space-y-3 relative overflow-hidden">
          <Quote className="w-8 h-8 text-gold/80" />
          <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-midnight italic leading-snug">
            "{article.pullQuote}"
          </blockquote>
        </div>

        {/* Body Paragraphs with Drop Cap on First Paragraph */}
        <div className="space-y-6 text-base sm:text-lg text-midnight/80 font-sans leading-relaxed">
          {article.content.map((p, index) => (
            <p key={index} className={index === 0 ? 'drop-cap' : ''}>
              {p}
            </p>
          ))}
        </div>

        {/* Author Sign-off */}
        <div className="p-8 rounded-2xl bg-sand/30 border border-midnight/10 space-y-2 pt-6 mt-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-vermilion font-bold block">
            About the Author
          </span>
          <h3 className="font-serif text-xl font-bold text-midnight">Peter Salerno</h3>
          <p className="text-xs text-midnight/70 leading-relaxed font-sans">
            "The Man With The Magic Message" — motivational speaker, author, host of Happy Business Radio, and leadership coach. Addressing auditoriums across Australia, New Zealand, and internationally.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 pt-16 border-t border-midnight/10 mt-16 space-y-8">
        <h3 className="font-serif text-2xl font-bold text-midnight">
          More Essays & Reflections
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              href={`/insights/${rel.slug}`}
              className="p-6 rounded-xl bg-sand/30 hover:bg-sand border border-midnight/10 transition-colors block space-y-2 group"
            >
              <span className="text-[10px] font-mono text-vermilion uppercase font-bold">{rel.category}</span>
              <h4 className="font-serif text-lg font-bold text-midnight group-hover:text-vermilion transition-colors">
                {rel.title}
              </h4>
              <p className="text-xs text-grey line-clamp-2">{rel.lead}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
