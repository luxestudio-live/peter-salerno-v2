'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const links = [
    { num: '01', title: 'The Story', href: '/about', desc: 'A Life in Six Remarkable Chapters' },
    { num: '02', title: 'On Stage', href: '/speaking', desc: 'Nine Keynotes & Theatrical Keynotes' },
    { num: '03', title: 'On Air', href: '/podcast', desc: 'Happy Business Radio Listening Lounge' },
    { num: '04', title: 'In Print', href: '/books', desc: 'Published Works, Reflections & Guides' },
    { num: '05', title: 'Work Together', href: '/work-with-peter', desc: 'Executive Mentoring & Corporate Workshops' },
    { num: '06', title: 'Journal', href: '/insights', desc: 'Essays on Stagecraft, Humor & Leadership' },
    { num: '07', title: 'Media & Press', href: '/media', desc: 'Bios, Hi-Res Assets & AV Technical Rider' },
    { num: '08', title: 'Appearances', href: '/events', desc: 'Upcoming Live & International Dates' },
    { num: '09', title: 'Contact', href: '/contact', desc: 'Initiate a Speaking or Advisory Dialogue' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-midnight text-bone flex flex-col justify-between overflow-y-auto px-6 py-8 md:px-12 md:py-12 animate-in fade-in duration-200">
      {/* Top Header inside Overlay */}
      <div className="flex items-center justify-between border-b border-bone/10 pb-6">
        <div>
          <span className="font-serif text-2xl font-bold tracking-tight text-bone">PETER SALERNO</span>
          <p className="text-[10px] tracking-widest uppercase font-sans text-grey">Navigation Index</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-3 rounded-full border border-bone/20 text-bone hover:border-vermilion hover:text-vermilion transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Chapter Navigation List */}
      <nav className="my-8 flex flex-col divide-y divide-bone/10">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-4 group flex items-baseline justify-between transition-colors hover:pl-2"
            >
              <div className="flex items-baseline space-x-4">
                <span className="font-mono text-xs text-gold/80 group-hover:text-vermilion transition-colors">
                  {link.num}
                </span>
                <div>
                  <h3 className={`font-serif text-2xl sm:text-3xl font-medium tracking-tight transition-colors ${
                    isActive ? 'text-vermilion font-bold' : 'text-bone group-hover:text-sand'
                  }`}>
                    {link.title}
                  </h3>
                  <p className="text-xs text-grey font-sans hidden sm:block mt-0.5">
                    {link.desc}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-bone/30 group-hover:text-vermilion group-hover:translate-x-1 transition-all" />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Footer Info */}
      <div className="pt-6 border-t border-bone/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-grey gap-4">
        <div>
          <span className="text-bone font-medium">The Man With The Magic Message</span>
          <p>Keynotes & Masterclasses Across Australasia and Worldwide</p>
        </div>
        <Link
          href="/contact"
          onClick={onClose}
          className="px-6 py-3 rounded-full bg-vermilion text-bone font-sans uppercase tracking-widest text-xs font-semibold hover:bg-gold transition-colors"
        >
          Book An Engagement
        </Link>
      </div>
    </div>
  );
}
