import Navigation from '@/components/shared/navigation';
import type { Metadata } from 'next';
import About from './_components/about';
import Connect from './_components/connect';
import Grid from './_components/grid';
import Hero from './_components/hero';
import Profile from './_components/profile';
import { Projects } from './_components/projects';
import { Quote } from './_components/quote';
import Skills from './_components/skills';
import Terminal from './_components/terminal';

export const metadata: Metadata = {
  title: 'Portfolio 2024 - Enhanced Experience | @mrluisfer',
  description:
    'Explore the 2024 version of my portfolio - redesigned with focus on user experience, featuring interactive UI components, improved performance, and mobile-first approach. Built with Next.js 14, React 18, and Framer Motion.',
  keywords: [
    'portfolio 2024',
    'mrluisfer portfolio',
    'frontend developer',
    'fullstack developer',
    'Next.js 14',
    'React 18',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Radix UI',
    'web development',
    'interactive portfolio',
    'UX design',
    'modern web',
  ],
  authors: [
    { name: 'Luis Fernando Alvarez', url: 'https://github.com/mrLuisFer' },
    { name: '@mrluisfer' },
  ],
  creator: '@mrluisfer',
  publisher: '@mrluisfer',
  openGraph: {
    title: 'Portfolio 2024 - Enhanced Experience',
    description:
      'The 2024 version featuring interactive UI components, project timeline, enhanced performance, and SEO optimizations. Built with Next.js 14 and modern web technologies.',
    type: 'website',
    url: 'https://mrluisfer.vercel.app/versions/2024',
    siteName: 'The Portfolio - @mrluisfer',
    locale: 'en_US',
    images: [
      {
        url: '/projects/portfolio-2024-preview.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio 2024 - Enhanced Experience by @mrluisfer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio 2024 - Enhanced Experience | @mrluisfer',
    description:
      'Redesigned portfolio with interactive components, improved performance, and mobile-first approach. Built with Next.js 14, React 18, and Framer Motion.',
    images: ['/projects/portfolio-2024-preview.png'],
    creator: '@_mrluisfer',
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
    canonical: 'https://mrluisfer.vercel.app/versions/2024',
  },
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://mrluisfer.vercel.app'),
};

export default function page() {
  return (
    <main>
      <Hero />
      <About />
      <Terminal />
      <Skills />
      <Projects />
      <Grid />
      <Quote />
      <Profile />
      <Connect />
      <Navigation />
    </main>
  );
}
