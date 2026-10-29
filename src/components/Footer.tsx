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
    <footer className="bg-midnight text-bone pt-24 pb-32 border-t border-bone/10 relative overflow-hidden">
      {/* Decorative large typographic watermark in the background */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 translate-y-1/3 select-none pointer-events-none opacity-[0.03] font-serif text-[18vw] font-bold text-bone whitespace-nowrap"
      >
        PETER SALERNO
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Theatrical Closing Headline */}
        <div className="border-b border-bone/15 pb-16 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-gold block mb-4">
            The Closing Scene
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-8 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bone leading-[1.05]">
              Some messages fade. <br />
              <span className="text-sand/80 font-normal italic">The right one</span> changes everything.
            </h2>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-all duration-300 shadow-xl"
              >
                <span>Initiate a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-grey mt-3">Worldwide & Australasian Keynotes</span>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-bone/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="block">
              <span className="font-serif text-2xl font-bold text-bone">PETER SALERNO</span>
              <p className="text-xs uppercase tracking-widest text-gold font-sans">
                The Man With The Magic Message
              </p>
            </Link>
            <p className="text-sm text-grey leading-relaxed max-w-sm">
              Motivational speaker, author, entertainer, and mentor. Translating four decades of finance, illusion, broadcast radio, and laughter therapy into unforgettable stagecraft.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-sm border border-gold/30 text-gold text-[11px] font-mono">
                MDRT Qualified • Radio Host • Author
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-gold">The Journey</h4>
            <ul className="space-y-2 text-sm text-bone/70">
              <li><Link href="/about" className="hover:text-vermilion transition-colors">The Story</Link></li>
              <li><Link href="/speaking" className="hover:text-vermilion transition-colors">On Stage</Link></li>
              <li><Link href="/podcast" className="hover:text-vermilion transition-colors">On Air</Link></li>
              <li><Link href="/books" className="hover:text-vermilion transition-colors">In Print</Link></li>
              <li><Link href="/work-with-peter" className="hover:text-vermilion transition-colors">Work Together</Link></li>
            </ul>
          </div>

          {/* Col 3: Topics & Resources */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-gold">Selected Topics</h4>
            <ul className="space-y-2 text-sm text-bone/70">
              <li><Link href="/speaking/laughter-therapy" className="hover:text-vermilion transition-colors">Laughter Therapy</Link></li>
              <li><Link href="/speaking/wobbly-tables" className="hover:text-vermilion transition-colors">Don’t You Hate Wobbly Tables?</Link></li>
              <li><Link href="/speaking/finding-your-better-self" className="hover:text-vermilion transition-colors">Finding Your Better Self</Link></li>
              <li><Link href="/insights" className="hover:text-vermilion transition-colors">Journal & Essays</Link></li>
              <li><Link href="/media" className="hover:text-vermilion transition-colors">Media & Press Kit</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-gold">Quarterly Reflections</h4>
            <p className="text-xs text-grey leading-relaxed">
              Curated notes on stagecraft, leadership, laughter, and personal alignment. Zero spam.
            </p>
            {subscribed ? (
              <div className="flex items-center space-x-2 text-xs text-gold">
                <CheckCircle2 className="w-4 h-4 text-vermilion" />
                <span>You are subscribed to Peter’s reflections.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2" suppressHydrationWarning>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full bg-charcoal border border-bone/15 text-xs text-bone placeholder:text-grey focus:outline-none focus:border-vermilion"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 rounded-full bg-bone text-midnight text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors"
                  suppressHydrationWarning
                >
                  Join Reflections
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-grey gap-4">
          <p>© 2026 Peter Salerno. All rights reserved. The Man With The Magic Message.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-bone transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-bone transition-colors">Terms of Use</Link>
            <Link href="/media" className="hover:text-bone transition-colors">Press Kit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
