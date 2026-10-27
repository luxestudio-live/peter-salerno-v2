'use client';

import React from 'react';
import Link from 'next/link';
import { SpeakingTopic } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

export function TopicRow({ topic }: { topic: SpeakingTopic }) {
  return (
    <Link
      href={`/speaking/${topic.slug}`}
      data-cursor="explore"
      data-cursor-text="Keynote"
      className="group block border-b border-midnight/15 py-8 md:py-10 transition-all duration-300 hover:px-4 hover:bg-sand/40"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Number and Main Title */}
        <div className="flex items-baseline space-x-6">
          <span className="font-mono text-xs sm:text-sm text-grey font-semibold group-hover:text-vermilion transition-colors">
            {topic.number}
          </span>
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-midnight group-hover:text-vermilion transition-colors leading-tight">
              {topic.title}
            </h3>
            <p className="text-xs uppercase tracking-widest font-sans text-grey mt-1">
              {topic.subtitle}
            </p>
          </div>
        </div>

        {/* Right side: Short description & Arrow */}
        <div className="lg:max-w-md flex items-center justify-between lg:justify-end gap-6 pl-12 lg:pl-0">
          <p className="text-sm text-midnight/70 font-sans leading-relaxed line-clamp-2">
            {topic.shortDescription}
          </p>
          <div className="w-10 h-10 rounded-full border border-midnight/20 flex items-center justify-center shrink-0 group-hover:bg-midnight group-hover:text-bone group-hover:border-midnight transition-all">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
