import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AudioProvider } from '@/context/AudioContext';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { AudioPlayerBar } from '@/components/AudioPlayerBar';
import { Footer } from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Peter Salerno | The Man With The Magic Message',
  description: 'The official digital experience of Peter Salerno. Acclaimed motivational speaker, master of illusion, author, executive mentor, and host of Happy Business Radio. Australasia & Worldwide keynotes.',
  keywords: [
    'Peter Salerno',
    'The Man With The Magic Message',
    'Motivational Speaker Australia',
    'Keynote Speaker Melbourne Sydney',
    'Laughter Therapy',
    'Don’t You Hate Wobbly Tables',
    'Happy Business Radio',
    'Executive Coaching'
  ],
  openGraph: {
    title: 'Peter Salerno | The Man With The Magic Message',
    description: 'Not your ordinary story. Meet Peter Salerno — speaker, entertainer, mentor, and author.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Peter Salerno',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-bone text-midnight antialiased min-h-screen flex flex-col selection:bg-vermilion selection:text-champagne font-sans" suppressHydrationWarning>
        <AudioProvider>
          <SmoothScroll>
            <CustomCursor />
            <Suspense fallback={null}>
              <Navbar />
            </Suspense>
            <main className="flex-1">
              <Suspense fallback={<div className="min-h-screen bg-bone" />}>
                {children}
              </Suspense>
            </main>
            <Footer />
            <Suspense fallback={null}>
              <AudioPlayerBar />
            </Suspense>
          </SmoothScroll>
        </AudioProvider>
      </body>
    </html>
  );
}
