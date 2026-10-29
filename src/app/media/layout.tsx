import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media & Press Kit | Peter Salerno',
  description:
    'Official media resources, approved press photographs, high-resolution bios, speaker introductions, and booking guidelines for conference organizers and journalists.',
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
