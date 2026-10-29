import React from 'react';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Sparkles, Clock, Globe } from 'lucide-react';

export const metadata = {
  title: 'Contact Peter Salerno | Start a Conversation',
  description: 'Connect directly with Peter Salerno’s executive office for keynote bookings, executive mentoring, media interviews, or Happy Business Radio.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Top Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-5 h-5 text-vermilion" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
              Dialogue & Bookings
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-midnight leading-[0.98]">
            Have something in mind? <br />
            <span className="italic font-normal text-midnight/80">Let’s</span> talk.
          </h1>

          <p className="font-sans text-base sm:text-lg text-midnight/75 max-w-2xl leading-relaxed">
            Whether securing a date for an upcoming convention keynote, planning an executive offsite retreat, or discussing media opportunities, Peter’s office welcomes your enquiry.
          </p>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Office Information */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl bg-sand/40 border border-midnight/10 space-y-6 shadow-sm">
              <div className="flex items-center space-x-4 pb-5 border-b border-midnight/10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-vermilion shrink-0 shadow-md">
                  <Image
                    src="/images/peter-salerno-actual.jpg"
                    alt="Peter Salerno"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-midnight leading-tight">
                    Peter Salerno
                  </h2>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-700 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    <span>Booking 2026/2027 Keynotes</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm font-sans text-midnight/80">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-vermilion shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-grey block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:office@petersalerno.com.au"
                      className="font-medium text-midnight hover:text-vermilion transition-colors"
                    >
                      office@petersalerno.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-vermilion shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-grey block">
                      Direct Booking Desk
                    </span>
                    <a
                      href="tel:+61390000000"
                      className="font-medium text-midnight hover:text-vermilion transition-colors"
                    >
                      +61 (0) 3 9000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-grey block">
                      Primary Hub
                    </span>
                    <span className="font-medium text-midnight">
                      Melbourne & Sydney, Australia (Worldwide Keynotes)
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-grey block">
                      Response SLA
                    </span>
                    <span className="font-medium text-midnight">
                      All event and corporate enquiries answered within 24 hours.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-midnight text-bone space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                Bureau Representation Notice
              </span>
              <p className="text-xs text-bone/70 leading-relaxed font-sans">
                Peter works collaboratively with premier speakers bureaus across Australia, New Zealand, the US, and Asia. Bureau inquiries may be dispatched directly through this form.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
