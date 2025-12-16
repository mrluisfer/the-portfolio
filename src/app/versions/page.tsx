import Container from '@/components/container';
import { SharedFooter } from '@/components/shared/footer';
import { SimpleNavigation } from '@/components/shared/navigation/simple-navigation';
import { Sparkles } from 'lucide-react';
import { Metadata } from 'next';
import VersionsView from './_components/versions-view';

export const metadata: Metadata = {
  title: 'Portfolio Evolution | Timeline & Version History - @mrluisfer',
  description:
    'Explore the evolution of my portfolio through the years (2023-2025). See how my skills, design approach, and technology stack have grown. From simple layouts to modern interactive experiences with Next.js 15, React 19, and Motion UI.',
  keywords: [
    'portfolio evolution',
    'web development timeline',
    'frontend developer growth',
    'Next.js portfolio',
    'React portfolio',
    'TypeScript projects',
    'UI/UX evolution',
    'web design history',
    'developer journey',
    'mrluisfer',
  ],
  authors: [{ name: '@mrluisfer', url: 'https://github.com/mrLuisFer' }],
  creator: '@mrluisfer',
  publisher: '@mrluisfer',
  openGraph: {
    title: 'Portfolio Evolution | 2023-2025 Timeline',
    description:
      'Journey through the evolution of my portfolio, showcasing growth in design, technology, and approach. From early versions to cutting-edge Next.js 15 implementation.',
    url: 'https://mrluisfer.vercel.app/versions',
    siteName: 'The Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-versions.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Evolution Timeline - @mrluisfer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Evolution | 2023-2025',
    description:
      'Explore the journey of my portfolio evolution. See how design and technology have evolved over the years.',
    creator: '@_mrluisfer',
    images: ['/og-versions.png'],
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
  alternates: {
    canonical: 'https://mrluisfer.vercel.app/versions',
  },
};

export default function VersionsPage() {
  return (
    <>
      <main className="min-h-screen py-20">
        <Container>
          <div className="space-y-16">
            {/* Header */}
            <div className="space-y-4 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Sparkles className="text-primary h-6 w-6" />
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Portfolio Evolution</h1>
              </div>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
                Journey through the evolution of my portfolio, showcasing growth in design,
                technology, and approach over the years.
              </p>
            </div>

            {/* Content with View Switcher */}
            <VersionsView />
          </div>
          <SimpleNavigation />
          <SharedFooter />
        </Container>
      </main>
    </>
  );
}
