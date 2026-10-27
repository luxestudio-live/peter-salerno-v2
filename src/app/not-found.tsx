import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-28 pb-32 bg-midnight text-bone min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-charcoal border border-gold/40 text-gold mx-auto flex items-center justify-center shadow-2xl">
          <Sparkles className="w-8 h-8 text-vermilion" />
        </div>

        <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block">
          Error 404 • Scene Missing
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-bone leading-tight">
          "Well, that wasn't <br />
          <span className="text-sand/80 italic font-normal">part of the act.</span>"
        </h1>

        <p className="font-sans text-sm sm:text-base text-bone/70 leading-relaxed max-w-md mx-auto">
          The page you requested seems to have vanished behind the curtain. Even for an illusionist, some things simply aren't where they used to be.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors inline-flex items-center space-x-2"
          >
            <span>Return to Front of Stage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/speaking"
            className="px-8 py-3.5 rounded-full border border-bone/20 text-bone text-xs uppercase tracking-widest font-semibold hover:bg-charcoal transition-colors"
          >
            <span>Explore Keynotes</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
