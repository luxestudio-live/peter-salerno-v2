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
    <div className="p-8 rounded-2xl bg-white border-2 border-midnight/15 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => playEpisode(episode)}
          className="p-5 rounded-full bg-vermilion text-white hover:bg-midnight transition-colors shadow-xl shrink-0 cursor-pointer"
          aria-label={isCurrentPlaying ? 'Pause Broadcast' : 'Play Broadcast'}
          suppressHydrationWarning
        >
          {isCurrentPlaying ? (
            <Pause className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current ml-0.5" />
          )}
        </button>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-vermilion font-bold block mb-1">
            Official Audio Stream
          </span>
          <p className="font-serif text-xl sm:text-2xl font-bold text-midnight">
            {isCurrentPlaying ? 'Now Playing on Air' : 'Click to Listen to Episode'}
          </p>
        </div>
      </div>

      <button
        onClick={handleShare}
        className="flex items-center space-x-2 text-sm uppercase tracking-widest font-mono font-bold text-midnight hover:text-vermilion border-2 border-midnight/20 hover:border-vermilion px-5 py-3 rounded-full cursor-pointer transition-colors shadow-xs"
        suppressHydrationWarning
      >
        <Share2 className="w-4 h-4 text-vermilion" />
        <span>Share Episode</span>
      </button>
    </div>
  );
}
