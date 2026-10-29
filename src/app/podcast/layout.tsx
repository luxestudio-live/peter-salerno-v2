import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Happy Business Radio & Podcast | Peter Salerno',
  description:
    'Listen to Happy Business Radio hosted by Peter Salerno. Weekly broadcasts exploring the intersection of laughter, business resilience, executive leadership, and genuine curiosity.',
};

export default function PodcastLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
