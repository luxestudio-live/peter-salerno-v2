import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BOOKS } from '@/data/content';
import { DimensionalBook } from '@/components/DimensionalBook';
import { ArrowLeft, ArrowUpRight, BookOpen, Quote, Check } from 'lucide-react';

export async function generateStaticParams() {
  return BOOKS.map((book) => ({
    slug: book.slug,
  }));
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  const otherBook = BOOKS.find((b) => b.slug !== slug);

  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Back to Library */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/books"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-grey hover:text-vermilion transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Library</span>
        </Link>
      </div>

      <article className="max-w-6xl mx-auto px-6 md:px-12 space-y-16">
        {/* Main Book Overview Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-midnight/10 pb-16">
          <div className="lg:col-span-5 flex justify-center">
            <DimensionalBook book={book} />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-xs font-mono text-grey">
              <span className="text-vermilion font-bold uppercase">Published • {book.year}</span>
              <span>•</span>
              <span>Hardcover Edition</span>
              <span>•</span>
              <span>Author: Peter Salerno</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-midnight leading-[1.05]">
              {book.title}
            </h1>

            <p className="font-serif text-xl sm:text-2xl italic text-midnight/80">
              {book.subtitle}
            </p>

            <p className="text-base text-midnight/75 leading-relaxed font-sans">
              {book.synopsis}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?subject=Book+Order:+${encodeURIComponent(book.title)}`}
                className="px-8 py-3.5 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-midnight transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <span>Order Author Signed Copy</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Extended Excerpt Reading Section */}
        <div className="max-w-3xl mx-auto space-y-6 py-6">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-vermilion">
            <BookOpen className="w-4 h-4" />
            <span>Approved Chapter Excerpt</span>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-sand/30 border border-midnight/10 shadow-inner space-y-4">
            <Quote className="w-8 h-8 text-gold/60" />
            <blockquote className="font-serif text-xl sm:text-2xl text-midnight italic leading-relaxed">
              "{book.excerpt}"
            </blockquote>
            <p className="text-right text-xs font-mono text-grey uppercase tracking-wider">
              — Peter Salerno, from {book.title}
            </p>
          </div>
        </div>

        {/* Chapters Breakdown */}
        <div className="max-w-3xl mx-auto space-y-6 pt-8 border-t border-midnight/10">
          <h2 className="font-serif text-3xl font-bold text-midnight">
            Table of Contents
          </h2>
          <div className="divide-y divide-midnight/10">
            {book.chapters.map((chapter, i) => (
              <div key={i} className="py-4 flex items-baseline justify-between text-sm sm:text-base font-serif text-midnight/90">
                <span>{chapter}</span>
                <span className="font-mono text-xs text-grey">Chapter 0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Reviews */}
        <div className="max-w-4xl mx-auto space-y-6 pt-8 border-t border-midnight/10">
          <h2 className="font-serif text-3xl font-bold text-midnight text-center">
            Praise for {book.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {book.testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-sand/40 border border-midnight/10 space-y-3">
                <p className="font-serif text-base italic text-midnight/90 leading-snug">
                  "{t.quote}"
                </p>
                <div>
                  <span className="font-sans text-xs font-bold text-midnight block">{t.author}</span>
                  <span className="font-sans text-[11px] text-grey">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Book Suggestion */}
        {otherBook && (
          <div className="max-w-4xl mx-auto pt-16 border-t border-midnight/10 text-center space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-grey">Also by Peter Salerno</span>
            <h3 className="font-serif text-2xl font-bold text-midnight">
              {otherBook.title}
            </h3>
            <Link
              href={`/books/${otherBook.slug}`}
              className="text-xs uppercase tracking-widest font-sans font-semibold text-vermilion hover:text-midnight underline block"
            >
              Explore {otherBook.title} →
            </Link>
          </div>
        )}
      </article>
    </div>
  );
}
