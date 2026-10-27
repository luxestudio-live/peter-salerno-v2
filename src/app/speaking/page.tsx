import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SPEAKING_TOPICS } from '@/data/content';
import { TopicRow } from '@/components/TopicRow';
import { ArrowUpRight, Mic, Users, Clock, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Speaking & Keynotes | Peter Salerno',
  description: 'Explore Peter Salerno’s nine keynote topics, including Laughter Therapy, Don’t You Hate Wobbly Tables, and Finding Your Better Self. Australasia & Worldwide.',
};

export default function SpeakingPage() {
  const formats = [
    {
      title: 'Opening & Closing Keynotes',
      duration: '45 to 60 Minutes',
      description: 'High-voltage, emotionally resonant platform presentations that set the tone for an entire conference or send delegates home with electric resolve.',
      ideal: 'Annual Conventions, Association Summits, All-Hands'
    },
    {
      title: 'Interactive Masterclasses',
      duration: '90 Minutes to 2 Hours',
      description: 'Deep-dive tactical and behavioral sessions with real-time audience participation, psychological illusion demonstrations, and breakout exercises.',
      ideal: 'Leadership Conferences, Sales Kickoffs'
    },
    {
      title: 'Executive Retreats & Offsites',
      duration: 'Half-Day or Full-Day',
      description: 'Intimate, candid sessions focused on eliminating organizational friction (wobbly tables), restoring executive levity, and cultivating authentic alignment.',
      ideal: 'C-Suite Boards, Senior Leadership Groups'
    },
    {
      title: 'Team Building Workshops',
      duration: 'Half-Day (3.5 Hours)',
      description: 'High-energy experiential challenges combining group problem-solving, cognitive illusions, and authentic laughter therapy.',
      ideal: 'Cross-Functional Teams, Newly Merged Divisions'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-bone text-midnight">
      {/* Theatrical Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-midnight/10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-vermilion" />
              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
                On Stage • Keynote Index
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-midnight leading-[0.98]">
              A room full of people. <br />
              <span className="italic font-normal text-midnight/80">One message</span> that matters.
            </h1>

            <p className="font-sans text-base sm:text-lg text-midnight/75 leading-relaxed max-w-xl">
              Peter Salerno transforms auditoriums into theatres of insight. Melding four decades of consultative sales leadership with stage illusion, genuine humor, and neuroscience-backed laughter therapy.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-midnight transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <span>Check Date Availability</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="#formats"
                className="px-8 py-3.5 rounded-full border border-midnight/25 text-midnight text-xs uppercase tracking-widest font-semibold hover:bg-sand transition-colors"
              >
                <span>View Session Formats</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-16/10 rounded-2xl overflow-hidden shadow-2xl border-4 border-sand">
            <Image
              src="/images/peter-salerno-stage.jpg"
              alt="Peter Salerno commanding stage"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 9 Interactive Topics Index */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-midnight/15 pb-6 mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-semibold block mb-2">
              The 9 Core Repertoires
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-midnight">
              Speaking Subjects
            </h2>
          </div>
          <p className="text-xs uppercase font-mono text-grey tracking-wider">
            Click any subject to view comprehensive briefing & takeaways
          </p>
        </div>

        <div className="divide-y divide-midnight/15">
          {SPEAKING_TOPICS.map((topic) => (
            <TopicRow key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      {/* Speaking Formats Section */}
      <section id="formats" className="px-6 md:px-12 max-w-7xl mx-auto py-20 border-t border-midnight/10">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-grey block">
              Engagement Architecture
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-midnight">
              Speaking Formats
            </h2>
            <p className="text-sm text-midnight/70">
              Every presentation is customized to your event theme, audience makeup, and overarching organizational objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map((format) => (
              <div
                key={format.title}
                className="p-8 rounded-2xl bg-sand/40 border border-midnight/10 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-vermilion font-bold tracking-wider">
                      {format.duration}
                    </span>
                    <Clock className="w-4 h-4 text-grey" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-midnight">
                    {format.title}
                  </h3>
                  <p className="text-sm text-midnight/75 leading-relaxed">
                    {format.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-midnight/10 text-xs font-sans">
                  <span className="text-grey block mb-1 uppercase tracking-wider font-mono text-[10px]">
                    Ideal For
                  </span>
                  <span className="text-midnight font-medium">{format.ideal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Call to Action */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto pt-16 text-center space-y-6">
        <div className="p-10 rounded-2xl bg-midnight text-bone space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-gold block">
            Booking & Availability
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Bring Peter Salerno to your next conference or summit.
          </h3>
          <p className="text-sm text-bone/70 max-w-lg mx-auto">
            Peter accepts a limited number of keynote and masterclass engagements per quarter to ensure bespoke research and deep audience calibration.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors inline-flex items-center space-x-2"
            >
              <span>Request Keynote Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
