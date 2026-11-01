'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#EBE4D6] text-midnight pt-24 pb-32 border-t-2 border-midnight/15 relative overflow-hidden">
      {/* Decorative large typographic watermark in the background */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 translate-y-1/3 select-none pointer-events-none opacity-[0.04] font-serif text-[18vw] font-bold text-midnight whitespace-nowrap"
      >
        PETER SALERNO
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Theatrical Closing Headline */}
        <div className="border-b border-midnight/15 pb-16 mb-16">
          <span className="text-sm uppercase tracking-widest font-mono text-vermilion font-bold block mb-4">
            The Closing Scene
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-8 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-midnight leading-[1.05]">
              Some messages fade. <br />
              <span className="text-vermilion font-normal italic">The right one</span> changes everything.
            </h2>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-vermilion text-white text-sm uppercase tracking-widest font-bold hover:bg-midnight transition-all duration-300 shadow-xl"
              >
                <span>Initiate a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="text-sm text-midnight/70 font-medium mt-3">Worldwide & Australasian Keynotes</span>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-midnight/15">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="block">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-midnight">PETER SALERNO</span>
              <p className="text-sm uppercase tracking-wider text-midnight/80 font-sans font-bold mt-1">
                The Man With The Magic Message
              </p>
            </Link>
            <p className="text-base text-midnight/80 leading-relaxed max-w-sm">
              Motivational speaker, author, entertainer, and mentor. Translating four decades of finance, illusion, broadcast radio, and laughter therapy into unforgettable stagecraft.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3.5 py-1.5 rounded-md border-2 border-midnight/20 text-midnight text-xs font-mono font-bold bg-sand/60">
                MDRT Qualified • Radio Host • Author
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm uppercase tracking-widest font-mono text-vermilion font-bold">The Journey</h4>
            <ul className="space-y-2.5 text-base text-midnight/80 font-medium">
              <li><Link href="/about" className="hover:text-vermilion transition-colors">The Story</Link></li>
              <li><Link href="/speaking" className="hover:text-vermilion transition-colors">On Stage</Link></li>
              <li><Link href="/podcast" className="hover:text-vermilion transition-colors">On Air</Link></li>
              <li><Link href="/books" className="hover:text-vermilion transition-colors">In Print</Link></li>
              <li><Link href="/work-with-peter" className="hover:text-vermilion transition-colors">Work Together</Link></li>
            </ul>
          </div>

          {/* Col 3: Topics & Resources */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm uppercase tracking-widest font-mono text-vermilion font-bold">Selected Topics</h4>
            <ul className="space-y-2.5 text-base text-midnight/80 font-medium">
              <li><Link href="/speaking/laughter-therapy" className="hover:text-vermilion transition-colors">Laughter Therapy</Link></li>
              <li><Link href="/speaking/wobbly-tables" className="hover:text-vermilion transition-colors">Don’t You Hate Wobbly Tables?</Link></li>
              <li><Link href="/speaking/finding-your-better-self" className="hover:text-vermilion transition-colors">Finding Your Better Self</Link></li>
              <li><Link href="/insights" className="hover:text-vermilion transition-colors">Journal & Essays</Link></li>
              <li><Link href="/media" className="hover:text-vermilion transition-colors">Media & Press Kit</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm uppercase tracking-widest font-mono text-vermilion font-bold">Quarterly Reflections</h4>
            <p className="text-sm text-midnight/80 leading-relaxed">
              Curated notes on stagecraft, leadership, laughter, and personal alignment. Zero spam.
            </p>
            {subscribed ? (
              <div className="flex items-center space-x-2 text-sm text-vermilion font-bold">
                <CheckCircle2 className="w-5 h-5 text-vermilion" />
                <span>You are subscribed to Peter’s reflections.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5" suppressHydrationWarning>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 rounded-full bg-white border-2 border-midnight/20 text-sm text-midnight placeholder:text-midnight/50 focus:outline-none focus:border-vermilion font-medium shadow-xs"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="w-full px-5 py-3 rounded-full bg-vermilion text-white text-sm uppercase tracking-widest font-bold hover:bg-midnight transition-colors shadow-md cursor-pointer"
                  suppressHydrationWarning
                >
                  Join Reflections
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-midnight/70 font-medium gap-4">
          <p>© 2026 Peter Salerno. All rights reserved. The Man With The Magic Message.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-vermilion transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-vermilion transition-colors">Terms of Use</Link>
            <Link href="/media" className="hover:text-vermilion transition-colors">Press Kit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
