'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import { Play, Pause, Volume2, VolumeX, Radio, ChevronUp, ChevronDown, RotateCcw } from 'lucide-react';

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function AudioPlayerBar() {
  const {
    currentEpisode,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    seek,
    volume,
    setVolume,
    playbackRate,
    setPlaybackRate
  } = useAudio();

  const [isMinimized, setIsMinimized] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.85);

  if (!currentEpisode) return null;

  const handleMuteToggle = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume || 0.85);
    }
  };

  const cycleSpeed = () => {
    if (playbackRate === 1) setPlaybackRate(1.25);
    else if (playbackRate === 1.25) setPlaybackRate(1.5);
    else setPlaybackRate(1);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center space-x-3 px-4 py-3 rounded-full bg-midnight/95 text-bone border border-gold/40 shadow-2xl backdrop-blur-md hover:border-vermilion transition-all group"
        >
          <div className="flex items-end space-x-1 h-3.5">
            <span className={`w-0.5 bg-vermilion rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse h-3.5' : 'h-1.5'}`} />
            <span className={`w-0.5 bg-gold rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse h-3 opacity-80' : 'h-2'}`} />
            <span className={`w-0.5 bg-vermilion rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse h-4 opacity-90' : 'h-1'}`} />
          </div>
          <span className="text-xs font-sans tracking-wider uppercase font-medium">
            Happy Business Radio
          </span>
          <ChevronUp className="w-4 h-4 text-grey group-hover:text-bone" />
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Happy Business Radio Broadcast Player"
      className="fixed bottom-0 left-0 right-0 z-40 bg-midnight/95 text-bone border-t border-gold/25 backdrop-blur-xl shadow-2xl transition-all duration-300"
    >
      {/* Top progress scrubber bar */}
      <div
        className="w-full h-1 bg-charcoal cursor-pointer relative group"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickPos = (e.clientX - rect.left) / rect.width;
          seek(clickPos * duration);
        }}
      >
        <div
          className="h-full bg-vermilion relative transition-all"
          style={{ width: `${progressPercent}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-bone rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left: Episode Information */}
        <div className="flex items-center space-x-3 min-w-0 flex-1">
          <div className="hidden sm:flex p-2.5 rounded-full bg-charcoal border border-gold/20 text-gold shrink-0">
            <Radio className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gold font-semibold">
                Happy Business Radio • Ep {currentEpisode.episodeNumber}
              </span>
            </div>
            <Link
              href={`/podcast/${currentEpisode.slug}`}
              className="text-xs sm:text-sm font-serif font-medium text-bone hover:text-vermilion truncate block transition-colors"
            >
              {currentEpisode.title}
            </Link>
            <p className="text-[11px] text-grey truncate hidden md:block">
              Guest: {currentEpisode.guest} ({currentEpisode.guestRole})
            </p>
          </div>
        </div>

        {/* Center: Playback Controls & Times */}
        <div className="flex flex-col items-center shrink-0">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => seek(Math.max(0, currentTime - 15))}
              aria-label="Rewind 15 seconds"
              className="p-1.5 text-grey hover:text-bone transition-colors"
              title="Rewind 15s"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="p-2.5 sm:p-3 rounded-full bg-vermilion text-bone hover:bg-gold transition-colors shadow-md flex items-center justify-center"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={cycleSpeed}
              aria-label="Change playback speed"
              className="text-[11px] font-mono px-2 py-1 rounded-sm bg-charcoal text-bone/80 hover:text-bone border border-bone/10 transition-colors"
              title="Playback Speed"
            >
              {playbackRate}x
            </button>
          </div>

          <div className="text-[10px] font-mono text-grey mt-1 hidden sm:block">
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right: Volume & Collapse */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={handleMuteToggle}
              aria-label="Toggle mute"
              className="text-grey hover:text-bone transition-colors"
            >
              {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 h-1 bg-charcoal rounded-lg appearance-none cursor-pointer accent-vermilion"
              aria-label="Audio Volume Slider"
            />
          </div>

          <button
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize Player"
            className="p-1.5 text-grey hover:text-bone transition-colors"
            title="Minimize"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
