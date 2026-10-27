import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Work With Peter | Executive Mentoring & Workshops',
  description: 'Engage Peter Salerno for executive coaching, C-suite advisory, corporate workshops, and organizational team building.',
};

export default function WorkWithPeterPage() {
  const offerings = [
    {
      title: 'Executive & Founder Mentoring',
      scope: '1-on-1 Confidential Advisory',
      description: 'A private sounding board for managing directors, founders, and executives navigating high-stakes transition, burnout, or strategic crossroads.',
      outcomes: [
        'Strip away borrowed noise and calibrate internal decision-making authority.',
        'Address emotional fatigue and restore cognitive levity to executive life.',
        'Navigate leadership loneliness with a veteran advisor who has lived through commercial fire.'
      ],
      ideal: 'C-Suite Executives, Managing Partners, Enterprise Founders'
    },
    {
      title: 'Corporate Leadership Retreats',
      scope: 'Half-Day or Multi-Day Offsites',
      description: 'Facilitated immersive retreats that break executive isolation, eliminate unspoken operational friction (wobbly tables), and forge true strategic alignment.',
      outcomes: [
        'Expose and resolve cross-functional friction without political defensiveness.',
        'Reignite collective team passion and clarity of mission.',
        'Leave with a shared behavioral compact that outlives the retreat.'
      ],
      ideal: 'Executive Committees, Board of Directors, Divisional Heads'
    },
    {
      title: 'High-Performance Sales Coaching',
      scope: 'Cohort-Based or Keynote Series',
      description: 'Mastering consultative persuasion, deep listening, and relationship longevity from a Million Dollar Round Table veteran.',
      outcomes: [
        'Replace aggressive transactional closing with high-trust consultative empathy.',
        'Develop vocal presence, psychological posture, and intentional pacing.',
        'Construct advisory accounts that compound over twenty years.'
      ],
      ideal: 'Commercial Sales Organizations, Wealth Advisors, Real Estate Teams'
    },
    {
      title: 'Team Building & Laughter Labs',
      scope: 'Interactive Experiential Workshops',
      description: 'Hands-on experiential workshops combining collaborative challenges, cognitive illusion demonstrations, and biological laughter therapy.',
      outcomes: [
        'Fast-track psychological safety across recently merged or reorganized teams.',
        'Experience neurochemical decompression through structured mirth.',
        'Build enduring camaraderie that transforms day-to-day communication.'
      ],
      ideal: 'Cross-Departmental Teams, Newly Merged Organizations'
    }
  ];

  const pillars = [
    {
      num: '01',
      title: 'The Diagnostic Audit',
      desc: 'We identify the unvoiced frictions—the wobbly tables—that quietly drain your team’s cognitive energy and strategic focus.'
    },
    {
      num: '02',
      title: 'Strategic Levity',
      desc: 'We introduce biological laughter and psychological humility to disarm defensiveness and open channels for creative collaboration.'
    },
    {
      num: '03',
      title: 'Deconstructing Illusions',
      desc: 'Using cognitive reframing techniques from stage illusion, we dismantle the invisible self-imposed ceilings holding your people back.'
    },
    {
      num: '04',
      title: 'Sincere Execution',
      desc: 'We turn inspiration into non-negotiable weekly behaviors and operational systems that protect team momentum.'
    }
  ];

  return (
    <div className="pt-28 pb-32 bg-bone text-midnight min-h-screen">
      {/* Editorial Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-b border-midnight/10 pb-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3">
            <Compass className="w-5 h-5 text-vermilion" />
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
              Advisory & Collaboration
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-midnight leading-[0.98]">
            Growth begins with <br />
            <span className="italic font-normal text-midnight/80">a different</span> conversation.
          </h1>

          <p className="font-sans text-base sm:text-lg text-midnight/75 max-w-2xl leading-relaxed">
            Peter Salerno partners with leaders, high-performing teams, and forward-looking organizations through bespoke executive mentoring, offsite facilitations, and team-building experiences.
          </p>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 space-y-12">
        <div className="border-b border-midnight/15 pb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block mb-2">
            Engagement Pathways
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-midnight">
            How We Can Work Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="p-8 sm:p-10 rounded-3xl bg-sand/30 border border-midnight/10 shadow-xs space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-vermilion font-bold">
                  {offering.scope}
                </span>
                <h3 className="font-serif text-3xl font-bold text-midnight leading-snug">
                  {offering.title}
                </h3>
                <p className="text-sm text-midnight/75 leading-relaxed font-sans">
                  {offering.description}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-grey block">
                    Core Outcomes
                  </span>
                  {offering.outcomes.map((out, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-midnight/85">
                      <CheckCircle2 className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-midnight/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-grey block text-[10px] font-mono uppercase">Target Cohort</span>
                  <span className="font-medium text-midnight">{offering.ideal}</span>
                </div>
                <Link
                  href={`/contact?service=${encodeURIComponent(offering.title)}`}
                  className="px-5 py-2.5 rounded-full bg-midnight text-bone hover:bg-vermilion transition-colors inline-flex items-center space-x-1 uppercase tracking-widest text-[11px] font-semibold"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 4-Pillar Method */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 border-t border-midnight/10">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-vermilion font-bold block">
              Methodology
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-midnight">
              The 4-Pillar Approach
            </h2>
            <p className="text-sm text-midnight/70">
              A humane, psychologically grounded architecture designed to transform organizational culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="p-8 rounded-2xl bg-sand/40 border border-midnight/10 space-y-3">
                <span className="font-mono text-xl font-bold text-vermilion block">{pillar.num}</span>
                <h3 className="font-serif text-2xl font-bold text-midnight">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-midnight/75 leading-relaxed font-sans">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Trigger CTA */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto pt-12 text-center space-y-6">
        <div className="p-10 rounded-2xl bg-midnight text-bone space-y-4 shadow-xl">
          <span className="text-xs uppercase font-mono tracking-widest text-gold block">
            Direct Dialogue
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold">
            Start an exploratory conversation with Peter.
          </h3>
          <p className="text-sm text-bone/70 max-w-lg mx-auto">
            Share your organization’s immediate context or leadership goals. All executive inquiries are treated with strict confidentiality.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=coaching"
              className="px-8 py-4 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors inline-flex items-center space-x-2"
            >
              <span>Request Advisory Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
