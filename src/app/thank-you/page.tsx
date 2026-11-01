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
        <div className="w-20 h-20 rounded-full bg-vermilion text-white mx-auto flex items-center justify-center shadow-xl">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-sm uppercase font-mono tracking-widest text-vermilion font-bold block">
          Transmission Confirmed
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-midnight leading-tight">
          Thank you for reaching out.
        </h1>

        <p className="font-sans text-base sm:text-lg text-midnight/80 leading-relaxed">
          Your inquiry has been received by Peter Salerno’s executive office. We will review your event details and respond within 24 business hours.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-vermilion text-white text-sm uppercase tracking-widest font-bold hover:bg-midnight transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/podcast"
            className="px-8 py-4 rounded-full border-2 border-midnight/25 text-midnight text-sm uppercase tracking-widest font-bold hover:bg-sand transition-colors"
          >
            <span>Listen to Happy Business Radio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
