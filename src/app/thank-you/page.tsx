import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Thank You | Peter Salerno',
  description: 'Your inquiry has been received by Peter Salerno’s office.',
};

export default function ThankYouPage() {
  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-vermilion text-bone mx-auto flex items-center justify-center shadow-xl">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block">
          Transmission Confirmed
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-midnight leading-tight">
          Thank you for reaching out.
        </h1>

        <p className="font-sans text-base text-midnight/75 leading-relaxed">
          Your inquiry has been received by Peter Salerno’s executive office. We will review your event details and respond within 24 business hours.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-full bg-midnight text-bone text-xs uppercase tracking-widest font-semibold hover:bg-vermilion transition-colors inline-flex items-center space-x-2"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/podcast"
            className="px-8 py-3.5 rounded-full border border-midnight/25 text-midnight text-xs uppercase tracking-widest font-semibold hover:bg-sand transition-colors"
          >
            <span>Listen to Happy Business Radio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
