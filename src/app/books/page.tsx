import React from 'react';
import Link from 'next/link';
import { BOOKS } from '@/data/content';
import { DimensionalBook } from '@/components/DimensionalBook';
import { BookOpen, Sparkles, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Books & Publications | Peter Salerno',
  description: 'Explore books by Peter Salerno, including "Finding Your Better Self" and "The Magic Message". Guides to personal alignment and human connection.',
};

export default function BooksPage() {
  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Library Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-midnight/10 pb-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-vermilion" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
              The Library • Published Works
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-midnight leading-[0.98]">
            Stories, ideas, and <br />
            <span className="italic font-normal text-midnight/80">everything</span> in between.
          </h1>

          <p className="font-sans text-base sm:text-lg text-midnight/75 max-w-2xl leading-relaxed">
            A quiet space dedicated to Peter Salerno’s published literature. Distilling decades across consultative sales, psychological illusion, radio broadcasting, and executive reflection into practical guides for inner clarity.
          </p>
        </div>
      </section>

      {/* Book Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {BOOKS.map((book) => (
            <div
              key={book.slug}
              className="p-8 sm:p-12 rounded-3xl bg-sand/30 border border-midnight/10 shadow-sm space-y-8 flex flex-col justify-between"
            >
              <div className="flex justify-center">
                <DimensionalBook book={book} />
              </div>

              <div className="space-y-4 pt-4 border-t border-midnight/10">
                <div className="flex items-center justify-between text-xs font-mono text-grey">
                  <span>Published • {book.year}</span>
                  <span className="text-vermilion font-semibold">Available for Order</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-midnight leading-snug">
                  {book.title}
                </h2>
                <p className="text-xs uppercase font-sans tracking-wider text-grey">
                  {book.subtitle}
                </p>

                <p className="text-sm text-midnight/80 font-sans leading-relaxed">
                  {book.synopsis}
                </p>

                {/* Excerpt callout */}
                <div className="p-4 rounded-xl bg-bone border border-midnight/10 text-xs italic font-serif text-midnight/90 leading-relaxed">
                  "{book.excerpt.slice(0, 180)}..."
                </div>

                {/* Themes */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {book.themes.map((theme) => (
                    <span
                      key={theme}
                      className="px-2.5 py-1 rounded-sm bg-sand/60 text-[10px] font-mono uppercase tracking-wider text-midnight"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href={`/books/${book.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-midnight text-bone text-xs uppercase tracking-widest font-semibold hover:bg-vermilion transition-colors"
                  >
                    <span>Read Synopsis & Excerpts</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Book Bulk Orders */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto pt-12 text-center space-y-6">
        <div className="p-10 rounded-2xl bg-sand/60 border border-midnight/10 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block">
            Conference & Delegate Gifting
          </span>
          <h3 className="font-serif text-3xl font-bold text-midnight">
            Bulk Orders for Event Attendees
          </h3>
          <p className="text-sm text-midnight/70 max-w-xl mx-auto leading-relaxed">
            Many corporate clients gift copies of "Finding Your Better Self" to convention delegates and leadership cohorts in conjunction with Peter’s keynotes.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=books"
              className="px-8 py-3.5 rounded-full bg-midnight text-bone text-xs uppercase tracking-widest font-semibold hover:bg-vermilion transition-colors inline-block"
            >
              Inquire About Bulk Copies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
