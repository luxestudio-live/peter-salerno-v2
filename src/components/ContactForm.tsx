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
    <form onSubmit={handleSubmit} className="space-y-8 bg-bone border-2 border-midnight/10 p-8 sm:p-12 rounded-2xl shadow-xl" suppressHydrationWarning>
      {/* 1. Select Enquiry Type (Editorial Segmented Selector) */}
      <div className="space-y-3">
        <label className="text-sm uppercase tracking-widest font-mono text-vermilion font-bold block">
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
              className={`py-3 px-3 rounded-lg text-sm font-sans uppercase tracking-wider transition-all cursor-pointer ${
                enquiryType === type.id
                  ? 'bg-vermilion text-white shadow-md font-bold ring-2 ring-vermilion/20'
                  : 'bg-sand/40 text-midnight/80 hover:bg-sand hover:text-midnight border border-midnight/10 font-semibold'
              }`}
              suppressHydrationWarning
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Contact Details */}
      <div className="space-y-3">
        <label className="text-sm uppercase tracking-widest font-mono text-vermilion font-bold block">
          02. Your Details
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-midnight mb-1.5 block">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Eleanor Vance"
              className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-midnight mb-1.5 block">Business Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. eleanor@organization.com"
              className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-midnight mb-1.5 block">Organization or Event</label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. Australasian Executive Council"
              className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
              suppressHydrationWarning
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-midnight mb-1.5 block">Your Role / Title</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="e.g. VP of People & Culture"
              className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
              suppressHydrationWarning
            />
          </div>
        </div>
      </div>

      {/* 3. Conditional Event Inputs (for speaking or workshop) */}
      {(enquiryType === 'speaking' || enquiryType === 'workshop') && (
        <div className="space-y-3 pt-2 border-t-2 border-midnight/10">
          <label className="text-sm uppercase tracking-widest font-mono text-vermilion font-bold block">
            03. Event Scope & Logistics
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-semibold text-midnight mb-1.5 block">Target Date</label>
              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight focus:outline-none focus:border-vermilion"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-midnight mb-1.5 block">Expected Attendance</label>
              <select
                value={formData.estimatedAudience}
                onChange={(e) => setFormData({ ...formData, estimatedAudience: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight focus:outline-none focus:border-vermilion"
                suppressHydrationWarning
              >
                <option value="">Select range...</option>
                <option value="Under 50">Executive / Intimate (&lt; 50)</option>
                <option value="50-250">Medium Audience (50 - 250)</option>
                <option value="250-1000">Major Conference (250 - 1,000)</option>
                <option value="1000+">Arena / Convention (1,000+)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-midnight mb-1.5 block">City / Venue</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Sydney, Australia"
                className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
                suppressHydrationWarning
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-midnight mb-1.5 block">Preferred Keynote Subject</label>
            <select
              value={formData.selectedTopic}
              onChange={(e) => setFormData({ ...formData, selectedTopic: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight focus:outline-none focus:border-vermilion"
              suppressHydrationWarning
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
      <div className="space-y-3 pt-2 border-t-2 border-midnight/10">
        <label className="text-sm uppercase tracking-widest font-mono text-vermilion font-bold block">
          04. What Challenge Are You Navigating?
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your audience, team context, goals, or what outcome would make this engagement an extraordinary success..."
          className="w-full px-4 py-3 rounded-md bg-white border-2 border-midnight/15 text-base text-midnight placeholder:text-grey/60 focus:outline-none focus:border-vermilion"
          suppressHydrationWarning
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-full bg-vermilion text-white text-sm uppercase tracking-widest font-bold hover:bg-midnight transition-colors duration-300 shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
        suppressHydrationWarning
      >
        <span>{isSubmitting ? 'Transmitting Enquiry...' : 'Transmit Enquiry to Peter’s Office'}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-center text-xs text-midnight/80 font-medium">
        Direct enquiries can also be dispatched directly to <a href="mailto:office@petersalerno.com.au" className="underline font-bold text-midnight hover:text-vermilion">office@petersalerno.com.au</a>.
      </p>
    </form>
  );
}
