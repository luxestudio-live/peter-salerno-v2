import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Peter Salerno',
  description: 'Privacy Policy and data protection standards for Peter Salerno official website.',
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-grey">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-midnight/80 font-sans leading-relaxed">
          <p>
            Peter Salerno and his executive office are committed to respecting and protecting the privacy of our visitors, clients, and partners. This policy outlines how information submitted through our website is gathered, processed, and secured.
          </p>

          <h2 className="font-serif text-2xl font-bold text-midnight pt-4">1. Collection of Information</h2>
          <p>
            When you complete an enquiry form, subscribe to Peter’s quarterly reflections, or request a keynote booking proposal, we collect identifying information such as your name, corporate email address, organization name, role, and event details. We do not sell, rent, or trade your data to third parties under any circumstances.
          </p>

          <h2 className="font-serif text-2xl font-bold text-midnight pt-4">2. Use of Information</h2>
          <p>
            Information collected is strictly utilized to respond to your specific speaking or executive advisory requests, coordinate event logistics, and (if opted in) deliver Peter’s periodic insights on stagecraft and leadership.
          </p>

          <h2 className="font-serif text-2xl font-bold text-midnight pt-4">3. Data Security & Retention</h2>
          <p>
            All data transmitted through our website is encrypted using industry-standard Transport Layer Security (TLS). Data is retained only for the duration necessary to manage your ongoing business engagement or until you request deletion.
          </p>

          <h2 className="font-serif text-2xl font-bold text-midnight pt-4">4. Contacting Our Privacy Officer</h2>
          <p>
            For any privacy inquiries or to request removal of your contact details, please email <a href="mailto:privacy@petersalerno.com.au" className="text-vermilion underline">privacy@petersalerno.com.au</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
