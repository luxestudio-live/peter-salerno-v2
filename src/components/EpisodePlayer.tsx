'use client';

import React from 'react';
import { PodcastEpisode } from '@/data/content';
import { useAudio } from '@/context/AudioContext';
import { Play, Pause, Share2 } from 'lucide-react';

export function EpisodePlayer({ episode }: { episode: PodcastEpisode }) {
  const { isPlaying, currentEpisode, playEpisode } = useAudio();
  const isCurrentPlaying = isPlaying && currentEpisode?.slug === episode.slug;

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Episode link copied to clipboard!');
    }
  };

  return (
    <div className="p-8 rounded-2xl bg-charcoal border border-gold/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => playEpisode(episode)}
          className="p-5 rounded-full bg-vermilion text-bone hover:bg-gold transition-colors shadow-xl shrink-0 cursor-pointer"
          aria-label={isCurrentPlaying ? 'Pause Broadcast' : 'Play Broadcast'}
        >
          {isCurrentPlaying ? (
            <Pause className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current ml-0.5" />
          )}
        </button>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
            Official Audio Stream
          </span>
          <p className="font-serif text-xl font-bold text-bone">
            {isCurrentPlaying ? 'Now Playing on Air' : 'Click to Listen to Episode'}
          </p>
        </div>
      </div>

      <button
        onClick={handleShare}
        className="flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-grey hover:text-bone border border-bone/15 px-4 py-2.5 rounded-full cursor-pointer"
      >
        <Share2 className="w-3.5 h-3.5" />
        <span>Share Episode</span>
      </button>
    </div>
  );
}
