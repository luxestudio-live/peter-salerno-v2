import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Use | Peter Salerno',
  description: 'Terms of Use and intellectual property guidelines for Peter Salerno official website.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-grey hover:text-vermilion transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        <div className="space-y-4 border-b border-midnight/10 pb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block">
            Legal & Governance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-midnight">
            Terms of Use
          </h1>
          <p className="text-xs font-mono text-grey">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-midnight/80 font-sans leading-relaxed">
          <p>
            Welcome to the official website of Peter Salerno. By browsing or utilizing this site, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="font-serif text-2xl font-bold text-midnight pt-4">1. Intellectual Property</h2>
          <p>
            All original text, essays, book excerpts, audio recordings from Happy Business Radio, photographic assets, brand taglines ("The Man With The Magic Message"), and keynote concept frameworks ("Don't You Hate Wobbly Tables?", "Finding Your Better Self") are the proprietary intellectual property of Peter Salerno. Reproduction without written consent is strictly prohibited.
          </p>

          <h2 className="font-serif text-2xl font-bold text-midnight pt-4">2. Keynote & Speaking Engagements</h2>
          <p>
            Keynote dates and bookings are formally secured upon execution of a confirmed speaking contract and deposit. Inquiries submitted via this website do not constitute a binding booking commitment until confirmed by Peter’s executive office.
          </p>

          <h2 className="font-serif text-2xl font-bold text-midnight pt-4">3. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of Australia. Any disputes shall be subject to the exclusive jurisdiction of the Australian courts.
          </p>
        </div>
      </div>
    </div>
  );
}
