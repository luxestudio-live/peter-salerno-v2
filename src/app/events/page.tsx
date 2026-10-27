import React from 'react';
import Link from 'next/link';
import { EVENTS } from '@/data/content';
import { Calendar, MapPin, ArrowUpRight, Ticket } from 'lucide-react';

export const metadata = {
  title: 'Events & Appearances | Peter Salerno',
  description: 'Upcoming keynote addresses, masterclasses, and executive summit appearances across Australia, New Zealand, and internationally.',
};

export default function EventsPage() {
  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-midnight/10 pb-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-vermilion" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
              Live Appearances • Schedule
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-midnight leading-[0.98]">
            Where to <br />
            <span className="italic font-normal text-midnight/80">find</span> Peter.
          </h1>

          <p className="font-sans text-base sm:text-lg text-midnight/75 max-w-2xl leading-relaxed">
            Upcoming public keynotes, executive summits, and masterclasses across Australia, New Zealand, and international stages.
          </p>
        </div>
      </section>

      {/* Events Schedule List */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto py-20 space-y-6">
        {EVENTS.map((event) => (
          <div
            key={event.id}
            className="p-8 sm:p-10 rounded-3xl bg-sand/30 border border-midnight/10 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-sand/50 transition-colors"
          >
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-midnight text-bone text-[10px] font-mono uppercase tracking-wider font-bold">
                  {event.type}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold ${
                    event.status === 'Open'
                      ? 'bg-vermilion/15 text-vermilion'
                      : event.status === 'Limited Seats'
                      ? 'bg-gold/25 text-midnight'
                      : 'bg-grey/20 text-grey'
                  }`}
                >
                  Status: {event.status}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight leading-snug">
                {event.title}
              </h2>

              <p className="text-xs sm:text-sm text-midnight/75 font-sans leading-relaxed">
                {event.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-grey pt-1">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-vermilion" />
                  <span>{event.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>{event.venue}, {event.location}</span>
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center md:flex-col gap-2">
              {event.status === 'Open' || event.status === 'Limited Seats' ? (
                <Link
                  href="/contact?type=speaking"
                  className="px-6 py-3 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-midnight transition-colors inline-flex items-center space-x-1.5 shadow-md"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Delegate Registration</span>
                </Link>
              ) : (
                <span className="px-4 py-2 rounded-full border border-midnight/15 text-grey text-xs font-mono">
                  Private Corporate Event
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Host Peter at your event */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto pt-12 text-center space-y-6">
        <div className="p-10 rounded-2xl bg-midnight text-bone space-y-4 shadow-xl">
          <span className="text-xs uppercase font-mono tracking-widest text-gold block">
            Booking For 2026/2027
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold">
            Looking to add your conference to Peter’s calendar?
          </h3>
          <p className="text-sm text-bone/70 max-w-lg mx-auto">
            Peter travels extensively for keynote presentations, masterclasses, and executive offsites.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors inline-flex items-center space-x-2"
            >
              <span>Hold a Date on the Calendar</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
