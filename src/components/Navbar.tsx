'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAudio } from '@/context/AudioContext';
import { Volume2, Menu, X, ArrowUpRight } from 'lucide-react';
import { MobileNav } from './MobileNav';

export function Navbar() {
  const pathname = usePathname();
  const { isPlaying, togglePlay, currentEpisode } = useAudio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Story', href: '/about' },
    { label: 'On Stage', href: '/speaking' },
    { label: 'On Air', href: '/podcast' },
    { label: 'In Print', href: '/books' },
    { label: 'Work Together', href: '/work-with-peter' },
    { label: 'Journal', href: '/insights' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-bone/90 backdrop-blur-md border-b border-midnight/10 py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Tagline */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl md:text-3xl tracking-tight text-midnight font-bold transition-colors group-hover:text-vermilion">
              PETER SALERNO
            </span>
            <span className="text-[10px] tracking-widest uppercase font-sans text-grey transition-colors group-hover:text-midnight">
              The Man With The Magic Message
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-sans transition-colors relative py-1 ${
                    active ? 'text-vermilion font-semibold' : 'text-midnight/70 hover:text-midnight'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-vermilion rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Audio Indicator */}
          <div className="flex items-center space-x-4">
            {/* Audio Indicator */}
            {currentEpisode && (
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause Podcast' : 'Play Podcast'}
                className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full border border-midnight/15 bg-sand/60 hover:bg-sand transition-colors text-midnight text-xs"
                title={`Happy Business Radio: ${currentEpisode.title}`}
              >
                <div className="flex items-end space-x-0.5 h-3">
                  <span className={`w-0.5 bg-vermilion rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse h-3' : 'h-1.5'}`} />
                  <span className={`w-0.5 bg-vermilion rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse h-2.5 opacity-80' : 'h-2'}`} />
                  <span className={`w-0.5 bg-vermilion rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse h-3.5 opacity-90' : 'h-1'}`} />
                </div>
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider hidden md:inline">
                  {isPlaying ? 'On Air' : 'Radio'}
                </span>
              </button>
            )}

            {/* Direct Booking CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-midnight text-bone text-xs font-sans uppercase tracking-widest font-medium hover:bg-vermilion transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <span>Book Peter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 rounded-md text-midnight hover:bg-sand/60 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
