'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRESS_KIT } from '@/data/content';
import { Copy, Check, Download, Mic, FileText, ArrowUpRight } from 'lucide-react';

export default function MediaPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-midnight/10 pb-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-vermilion" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
              Press & Media Resources
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-midnight leading-[0.98]">
            Behind the <br />
            <span className="italic font-normal text-midnight/80">spotlight.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-midnight/75 max-w-2xl leading-relaxed">
            Authorized biographical profiles, high-resolution portrait assets, introduction scripts, and stage technical rider for conference organizers, journalists, and event production teams.
          </p>
        </div>
      </section>

      {/* Approved Biographies with 1-Click Copy */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 space-y-12">
        <div className="border-b border-midnight/15 pb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block mb-2">
            Program Materials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-midnight">
            Official Biographies
          </h2>
          <p className="text-sm text-grey">
            Click copy to capture the exact bio suited for your program guide, print brochure, or emcee introduction.
          </p>
        </div>

        <div className="space-y-8">
          {/* 50-word Bio */}
          <div className="p-8 rounded-2xl bg-sand/30 border border-midnight/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-vermilion font-bold">
                Short Bio (50 Words) • Ideal for Social, Pocket Programs & Mobile Apps
              </span>
              <button
                onClick={() => copyToClipboard(PRESS_KIT.shortBio, 'short')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-midnight text-bone hover:bg-vermilion transition-colors text-xs font-sans uppercase tracking-wider"
              >
                {copiedKey === 'short' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'short' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-sm font-sans text-midnight/80 leading-relaxed">
              {PRESS_KIT.shortBio}
            </p>
          </div>

          {/* 150-word Bio */}
          <div className="p-8 rounded-2xl bg-sand/30 border border-midnight/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-vermilion font-bold">
                Medium Bio (150 Words) • Ideal for Conference Websites & Printed Schedules
              </span>
              <button
                onClick={() => copyToClipboard(PRESS_KIT.mediumBio, 'med')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-midnight text-bone hover:bg-vermilion transition-colors text-xs font-sans uppercase tracking-wider"
              >
                {copiedKey === 'med' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'med' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-sm font-sans text-midnight/80 leading-relaxed">
              {PRESS_KIT.mediumBio}
            </p>
          </div>

          {/* Full Bio */}
          <div className="p-8 rounded-2xl bg-sand/30 border border-midnight/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-vermilion font-bold">
                Comprehensive Bio (350 Words) • Keynote Introduction & Feature Articles
              </span>
              <button
                onClick={() => copyToClipboard(PRESS_KIT.fullBio, 'full')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-midnight text-bone hover:bg-vermilion transition-colors text-xs font-sans uppercase tracking-wider"
              >
                {copiedKey === 'full' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'full' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="text-sm font-sans text-midnight/80 leading-relaxed space-y-3 whitespace-pre-line">
              {PRESS_KIT.fullBio}
            </div>
          </div>
        </div>
      </section>

      {/* High-Resolution Media Assets */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 border-t border-midnight/10">
        <div className="space-y-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block mb-2">
              Photography
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-midnight">
              Approved Press Photographs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Official Studio Portrait',
                src: '/images/peter-salerno-actual.jpg',
                aspect: 'aspect-3/4',
                desc: 'Print-ready editorial close-up'
              },
              {
                title: 'Live Stage Performance',
                src: '/images/peter-salerno-stage.jpg',
                aspect: 'aspect-16/10',
                desc: 'Keynote delivery in full auditorium'
              },
              {
                title: 'Broadcast Studio Session',
                src: '/images/peter-salerno-radio.jpg',
                aspect: 'aspect-16/10',
                desc: 'Happy Business Radio microphone'
              }
            ].map((img) => (
              <div key={img.title} className="p-4 rounded-2xl bg-sand/30 border border-midnight/10 space-y-3">
                <div className={`relative ${img.aspect} rounded-xl overflow-hidden shadow-md`}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-midnight">{img.title}</h4>
                    <p className="text-[11px] text-grey">{img.desc}</p>
                  </div>
                  <a
                    href={img.src}
                    download
                    className="p-2 rounded-full bg-midnight text-bone hover:bg-vermilion transition-colors"
                    title="Download Photo"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage Technical Rider */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto py-16 border-t border-midnight/10 space-y-8">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block mb-2">
            AV Production
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-midnight">
            AV Technical & Stage Rider
          </h2>
        </div>

        <div className="p-8 rounded-3xl bg-midnight text-bone space-y-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-bold text-gold">Audio Requirements</h4>
              <ul className="space-y-2 text-bone/80 text-xs sm:text-sm">
                <li>• 1 × Professional wireless Shure / Sennheiser omni lavalier or discreet headset mic.</li>
                <li>• House audio feed with active foldback / stage monitors.</li>
                <li>• 3.5mm or HDMI audio output from stage for multimedia playback.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-xl font-bold text-gold">Stage & Staging</h4>
              <ul className="space-y-2 text-bone/80 text-xs sm:text-sm">
                <li>• Unobstructed stage with freedom of physical movement (prefer no fixed lectern).</li>
                <li>• 1 × Small cocktail table or high table for stage illusion props.</li>
                <li>• Confidence monitor displaying countdown timer and current cue.</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-bone/10 flex items-center justify-between text-xs text-grey">
            <span>For customized AV consultations, contact Peter’s production team directly.</span>
            <Link href="/contact?type=media" className="text-gold hover:text-white underline font-mono">
              Inquire With Production →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
