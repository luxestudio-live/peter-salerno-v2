import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-midnight/15 mx-auto flex items-center justify-center shadow-xl">
          <Sparkles className="w-10 h-10 text-vermilion" />
        </div>

        <span className="text-sm uppercase font-mono tracking-widest text-vermilion font-bold block">
          Error 404 • Scene Missing
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-midnight leading-tight">
          "Well, that wasn't <br />
          <span className="italic font-normal text-midnight/80">part of the act.</span>"
        </h1>

        <p className="font-sans text-base sm:text-lg text-midnight/80 leading-relaxed max-w-md mx-auto">
          The page you requested seems to have vanished behind the curtain. Even for an illusionist, some things simply aren't where they used to be.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-vermilion text-white text-sm uppercase tracking-widest font-bold hover:bg-midnight transition-colors inline-flex items-center space-x-2 shadow-xl"
          >
            <span>Return to Front of Stage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/speaking"
            className="px-8 py-4 rounded-full border-2 border-midnight/20 text-midnight text-sm uppercase tracking-widest font-bold hover:bg-sand transition-colors"
          >
            <span>Explore Keynotes</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
