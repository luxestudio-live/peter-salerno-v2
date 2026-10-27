'use client';

import React from 'react';
import Link from 'next/link';
import { Book } from '@/data/content';
import { BookOpen } from 'lucide-react';

export function DimensionalBook({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      data-cursor="view"
      data-cursor-text="Read"
      className="group block perspective-1000 py-6"
    >
      <div className="relative w-64 sm:w-72 h-96 sm:h-[420px] mx-auto transition-transform duration-500 ease-out transform-style-3d group-hover:-rotate-y-12 group-hover:rotate-x-6 group-hover:scale-105 shadow-2xl">
        {/* Book Spine (left 3D face) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-8 origin-left -translate-x-full rotate-y-90 flex items-center justify-center py-4"
          style={{ backgroundColor: book.coverAccent }}
        >
          <span className="font-serif text-bone text-xs font-bold tracking-widest uppercase rotate-90 whitespace-nowrap opacity-80">
            {book.title} • PETER SALERNO
          </span>
        </div>

        {/* Book Cover (front) */}
        <div
          className="w-full h-full rounded-r-md p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden text-bone select-none shadow-[inset_8px_0_12px_rgba(0,0,0,0.35)]"
          style={{ backgroundColor: book.coverAccent }}
        >
          {/* Subtle textured grain effect */}
          <div className="absolute inset-0 bg-radial-gradient opacity-15 pointer-events-none" />

          {/* Top metadata */}
          <div className="relative z-10 flex justify-between items-start border-b border-bone/20 pb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-75">
              Publication • {book.year}
            </span>
            <BookOpen className="w-4 h-4 opacity-75" />
          </div>

          {/* Title and Subtitle */}
          <div className="relative z-10 my-auto py-6">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-bone leading-tight">
              {book.title}
            </h3>
            <div className="w-12 h-0.5 bg-bone/40 my-3" />
            <p className="font-sans text-xs text-bone/80 leading-relaxed">
              {book.subtitle}
            </p>
          </div>

          {/* Bottom Author line */}
          <div className="relative z-10 border-t border-bone/20 pt-4 flex justify-between items-end">
            <div>
              <span className="text-[9px] uppercase tracking-widest font-sans opacity-70 block">
                Author
              </span>
              <span className="font-serif text-base font-bold text-bone tracking-wide">
                PETER SALERNO
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase bg-bone/15 px-2 py-0.5 rounded-sm">
              Hardcover
            </span>
          </div>
        </div>

        {/* 3D Pages block on the right */}
        <div className="absolute top-2 right-0 bottom-2 w-4 bg-[#EDE8DE] -z-10 translate-x-2 rounded-r-xs shadow-inner border-y border-r border-[#D3CABC]" />
      </div>

      <div className="mt-4 text-center">
        <h4 className="font-serif text-xl font-bold text-midnight group-hover:text-vermilion transition-colors">
          {book.title}
        </h4>
        <span className="text-xs text-grey uppercase tracking-wider font-sans">
          Explore Chapter Excerpts →
        </span>
      </div>
    </Link>
  );
}
