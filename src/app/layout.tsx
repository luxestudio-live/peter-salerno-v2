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

const basePath = process.env.BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxestudio-live.github.io/peter-salerno-v2';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Peter Salerno | The Man With The Magic Message',
    template: '%s | Peter Salerno',
  },
  description:
    'The official digital experience of Peter Salerno — acclaimed Australian keynote speaker, master of psychological illusion, author of "Finding Your Better Self", and host of Happy Business Radio. Australasia & Worldwide keynotes on leadership, laughter therapy, and transformative human performance.',
  keywords: [
    'Peter Salerno',
    'The Man With The Magic Message',
    'Motivational Speaker Australia',
    'Keynote Speaker Melbourne Sydney',
    'Laughter Therapy',
    'Don’t You Hate Wobbly Tables',
    'Finding Your Better Self Book',
    'Happy Business Radio',
    'Executive Coaching Australia',
    'Corporate Entertainer & Mentalist',
    'MDRT Keynote Speaker',
    'Australasian Speakers Bureau',
    'Leadership Retreat Facilitator'
  ],
  authors: [{ name: 'Peter Salerno', url: siteUrl }],
  creator: 'Peter Salerno',
  publisher: 'Peter Salerno Executive Office',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Peter Salerno | The Man With The Magic Message',
    description:
      'Not your ordinary story. Motivational speaker, master of illusion, author, executive mentor, and host of Happy Business Radio.',
    url: siteUrl,
    siteName: 'Peter Salerno',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/peter-salerno-actual.jpg`,
        width: 1200,
        height: 1600,
        alt: 'Peter Salerno - The Man With The Magic Message',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peter Salerno | The Man With The Magic Message',
    description:
      'Transforming corporate audiences and leadership teams worldwide through psychological storytelling, laughter therapy, and business mastery.',
    images: [`${siteUrl}/images/peter-salerno-actual.jpg`],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: 'any' },
      { url: `${basePath}/icon.svg`, type: 'image/svg+xml' },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
