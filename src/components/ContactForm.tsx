'use client';

import React, { useState } from 'react';
import { SPEAKING_TOPICS } from '@/data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function ContactForm() {
  const [enquiryType, setEnquiryType] = useState<'speaking' | 'workshop' | 'coaching' | 'podcast' | 'media' | 'general'>('speaking');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    eventDate: '',
    estimatedAudience: '',
    location: '',
    selectedTopic: 'laughter-therapy',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="bg-sand/60 border border-gold/30 rounded-2xl p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-vermilion text-bone mx-auto flex items-center justify-center shadow-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-mono text-vermilion">Enquiry Received</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight">
            Thank you, {formData.name || 'there'}.
          </h3>
          <p className="text-sm text-midnight/70 max-w-md mx-auto leading-relaxed">
            Your dialogue request regarding <strong>{enquiryType.toUpperCase()}</strong> has been submitted. Peter’s executive office will review your event details and respond within 24 business hours.
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              organization: '',
              role: '',
              eventDate: '',
              estimatedAudience: '',
              location: '',
              selectedTopic: 'laughter-therapy',
              message: '',
            });
          }}
          className="inline-block text-xs uppercase tracking-widest font-sans font-semibold text-vermilion hover:text-midnight underline"
        >
          Submit another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-bone border border-midnight/10 p-8 sm:p-12 rounded-2xl shadow-xl">
      {/* 1. Select Enquiry Type (Editorial Segmented Selector) */}
      <div className="space-y-3">
        <label className="text-xs uppercase tracking-widest font-mono text-grey block">
          01. Nature of Your Conversation
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { id: 'speaking', label: 'Keynote Speech' },
            { id: 'workshop', label: 'Team Workshop' },
            { id: 'coaching', label: 'Executive Mentoring' },
            { id: 'podcast', label: 'Radio / Podcast' },
            { id: 'media', label: 'Press & Media' },
            { id: 'general', label: 'General Dialogue' },
          ].map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setEnquiryType(type.id as any)}
              className={`py-3 px-3 rounded-lg text-xs font-sans uppercase tracking-wider font-medium text-center transition-all ${
                enquiryType === type.id
                  ? 'bg-midnight text-bone shadow-md'
                  : 'bg-sand/40 text-midnight/70 hover:bg-sand hover:text-midnight border border-midnight/5'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Contact Details */}
      <div className="space-y-3">
        <label className="text-xs uppercase tracking-widest font-mono text-grey block">
          02. Your Details
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[11px] font-sans text-midnight/80 mb-1 block">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Eleanor Vance"
              className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
            />
          </div>
          <div>
            <label className="text-[11px] font-sans text-midnight/80 mb-1 block">Business Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. eleanor@organization.com"
              className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
            />
          </div>
          <div>
            <label className="text-[11px] font-sans text-midnight/80 mb-1 block">Organization or Event</label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. Australasian Executive Council"
              className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
            />
          </div>
          <div>
            <label className="text-[11px] font-sans text-midnight/80 mb-1 block">Your Role / Title</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="e.g. VP of People & Culture"
              className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
            />
          </div>
        </div>
      </div>

      {/* 3. Conditional Event Inputs (for speaking or workshop) */}
      {(enquiryType === 'speaking' || enquiryType === 'workshop') && (
        <div className="space-y-3 pt-2 border-t border-midnight/10">
          <label className="text-xs uppercase tracking-widest font-mono text-grey block">
            03. Event Scope & Logistics
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-sans text-midnight/80 mb-1 block">Target Date</label>
              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight focus:outline-none focus:border-vermilion"
              />
            </div>
            <div>
              <label className="text-[11px] font-sans text-midnight/80 mb-1 block">Expected Attendance</label>
              <select
                value={formData.estimatedAudience}
                onChange={(e) => setFormData({ ...formData, estimatedAudience: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight focus:outline-none focus:border-vermilion"
              >
                <option value="">Select range...</option>
                <option value="Under 50">Executive / Intimate (&lt; 50)</option>
                <option value="50-250">Medium Audience (50 - 250)</option>
                <option value="250-1000">Major Conference (250 - 1,000)</option>
                <option value="1000+">Arena / Convention (1,000+)</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-sans text-midnight/80 mb-1 block">City / Venue</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Sydney, Australia"
                className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-sans text-midnight/80 mb-1 block">Preferred Keynote Subject</label>
            <select
              value={formData.selectedTopic}
              onChange={(e) => setFormData({ ...formData, selectedTopic: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight focus:outline-none focus:border-vermilion"
            >
              {SPEAKING_TOPICS.map((topic) => (
                <option key={topic.slug} value={topic.slug}>
                  {topic.number} — {topic.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* 4. The Message */}
      <div className="space-y-3 pt-2 border-t border-midnight/10">
        <label className="text-xs uppercase tracking-widest font-mono text-grey block">
          04. What Challenge Are You Navigating?
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your audience, team context, goals, or what outcome would make this engagement an extraordinary success..."
          className="w-full px-4 py-3 rounded-md bg-sand/30 border border-midnight/15 text-sm text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-full bg-vermilion text-bone text-xs uppercase tracking-widest font-semibold hover:bg-midnight transition-colors duration-300 shadow-xl flex items-center justify-center space-x-2"
      >
        <span>{isSubmitting ? 'Transmitting Enquiry...' : 'Transmit Enquiry to Peter’s Office'}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-center text-[11px] text-grey">
        Direct enquiries can also be dispatched directly to <a href="mailto:office@petersalerno.com.au" className="underline hover:text-midnight">office@petersalerno.com.au</a>.
      </p>
    </form>
  );
}
