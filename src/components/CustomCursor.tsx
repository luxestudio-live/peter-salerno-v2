'use client';

import React, { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'view' | 'listen' | 'drag' | 'explore' | 'hidden'>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check touch screen or reduced motion
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    setIsVisible(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check data attributes on hovered elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
        if (cursorEl) {
          const type = cursorEl.getAttribute('data-cursor') as any;
          const text = cursorEl.getAttribute('data-cursor-text') || '';
          setCursorVariant(type || 'default');
          setCursorText(text);
        } else if (target.closest('a, button, input, textarea, select')) {
          setCursorVariant('default');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny precise dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 z-50 h-2 w-2 rounded-full bg-vermilion transition-opacity duration-200"
      />
      {/* Outer tactile ring */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full border transition-all duration-200 ease-out ${
          cursorVariant === 'listen'
            ? 'h-16 w-16 -ml-8 -mt-8 border-gold bg-midnight/80 text-bone backdrop-blur-sm'
            : cursorVariant === 'view'
            ? 'h-20 w-20 -ml-10 -mt-10 border-bone/60 bg-vermilion/90 text-white shadow-xl'
            : cursorVariant === 'explore'
            ? 'h-16 w-16 -ml-8 -mt-8 border-vermilion bg-bone text-midnight font-bold'
            : 'h-8 w-8 -ml-4 -mt-4 border-foreground/30 bg-foreground/5'
        }`}
      >
        {cursorText && (
          <span className="text-[10px] uppercase tracking-widest font-sans font-medium px-1 select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
