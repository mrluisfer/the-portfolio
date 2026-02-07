import { SharedFooter } from '@/components/shared/footer';
import Navigation from '@/components/shared/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import About from './_components/about';
import Connect from './_components/connect';
import Grid from './_components/grid';
import Hero from './_components/hero';
import Profile from './_components/profile';
import { Projects } from './_components/projects';
import { Quote } from './_components/quote';
import Skills from './_components/skills';
import Terminal from './_components/terminal';

// Constants for reusability and maintainability
const SITE_URL = 'https://mrluisfer.vercel.app';
const PAGE_URL = `${SITE_URL}/versions/2024`;

// Images for SEO previews
const IMAGES = {
  ogImage: `${SITE_URL}/ss.webp`, // Primary preview image (1200x630 recommended)
  profile: `${SITE_URL}/profile.webp`, // Profile picture
  fallback: `${SITE_URL}/projects/portfolio-2024-preview.png`, // Fallback
};

const AUTHOR = {
  name: 'Luis Fernando Alvarez Manriquez',
  username: 'mrluisfer',
  twitter: '@_mrluisfer',
  github: 'https://github.com/mrLuisFer',
  linkedin: 'https://linkedin.com/in/mrluisfer',
  email: 'mrluisfeer@gmail.com',
};

export const metadata: Metadata = {
  // Base URL for resolving relative URLs
  metadataBase: new URL(SITE_URL),

  // Primary Meta Tags
  title: {
    default: 'Luis Alvarez | Full-Stack Engineer · Portfolio 2024',
    template: '%s | @mrluisfer',
  },
  description:
    'Full-Stack Software Engineer with 3+ years of experience building scalable web applications. Specialized in React, Next.js, TypeScript, Node.js, and NestJS. Currently at CredixGS, previously at Nowports and Accenture.',
  keywords: [
    // Personal branding
    'Luis Alvarez',
    'Luis Fernando Alvarez Manriquez',
    'mrluisfer',
    '@mrluisfer',
    // Role
    'Full-Stack Engineer',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    // Core technologies
    'React',
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'NestJS',
    'TailwindCSS',
    // Database & Tools
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Docker',
    'Vercel',
    // Concepts
    'Web Development',
    'API Development',
    'Performance Optimization',
    'Clean Code Architecture',
    // Location
    'Morelia',
    'Mexico',
    'Remote Developer',
    // Portfolio specific
    'Portfolio 2024',
    'Interactive Portfolio',
    'Framer Motion',
  ],
  authors: [{ name: AUTHOR.name, url: AUTHOR.github }],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,

  // Category & Classification
  category: 'technology',
  classification: 'Portfolio',

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, Discord, Slack, WhatsApp, Telegram)
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Luis Alvarez Portfolio',
    title: 'Luis Alvarez | Full-Stack Engineer · Portfolio 2024',
    description:
      'Full-Stack Software Engineer specialized in React, Next.js, TypeScript, and Node.js. 3+ years building scalable, high-performance web applications at Nowports, Accenture, and CredixGS.',
    locale: 'en_US',
    alternateLocale: ['es_MX'],
    images: [
      // Primary image - ss.webp (recommended: 1200x630)
      {
        url: IMAGES.ogImage,
        secureUrl: IMAGES.ogImage,
        width: 1200,
        height: 630,
        alt: 'Luis Alvarez - Full-Stack Engineer Portfolio 2024',
        type: 'image/webp',
      },
      // Profile picture fallback
      {
        url: IMAGES.profile,
        secureUrl: IMAGES.profile,
        width: 400,
        height: 400,
        alt: 'Luis Alvarez Profile Picture',
        type: 'image/webp',
      },
    ],
    countryName: 'Mexico',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: AUTHOR.twitter,
    creator: AUTHOR.twitter,
    title: 'Luis Alvarez | Full-Stack Engineer · Portfolio 2024',
    description:
      'Full-Stack Software Engineer with 3+ years of experience. Specialized in React, Next.js, TypeScript, and Node.js. Interactive portfolio with projects and skills.',
    images: [
      {
        url: IMAGES.ogImage,
        alt: 'Luis Alvarez - Full-Stack Engineer Portfolio 2024',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Alternates & Canonical
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'es-MX': `${SITE_URL}/es/versions/2024`,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0f172a',
      },
    ],
  },

  // App & Theme
  applicationName: 'Luis Alvarez Portfolio',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Luis Alvarez',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // Verification (uncomment and add your IDs)
  // verification: {
  //   google: 'your-google-verification-id',
  //   yandex: 'your-yandex-verification-id',
  //   bing: 'your-bing-verification-id',
  // },

  // Other meta tags
  other: {
    // Geo tags
    'geo.region': 'MX-MIC',
    'geo.placename': 'Morelia, Michoacan',
    'geo.position': '19.7059;-101.1949',
    ICBM: '19.7059, -101.1949',
    // Pinterest
    'pinterest-rich-pin': 'true',
    // Theme
    'theme-color': '#0f172a',
    'color-scheme': 'dark light',
    'msapplication-TileColor': '#0f172a',
    // Google / Schema.org microdata
    thumbnail: IMAGES.ogImage,
    // Slack
    'slack-app-id': '',
    // Additional image meta for various crawlers
    image: IMAGES.ogImage,
  },
};

// JSON-LD Structured Data
const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: AUTHOR.name,
  alternateName: ['Luis Alvarez', 'mrluisfer', '@mrluisfer'],
  url: SITE_URL,
  image: {
    '@type': 'ImageObject',
    url: IMAGES.profile,
    width: 400,
    height: 400,
    caption: 'Luis Alvarez - Full-Stack Software Engineer',
  },
  email: `mailto:${AUTHOR.email}`,
  jobTitle: 'Full-Stack Software Engineer',
  description:
    'Full-Stack Software Engineer with expertise in building scalable, high-performance web applications using React, Next.js, TypeScript, and Node.js.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Morelia',
    addressRegion: 'Michoacan',
    addressCountry: 'MX',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Instituto Tecnológico de Morelia',
    url: 'https://morelia.tecnm.mx/',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'CredixGS',
  },
  knowsLanguage: [
    { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
    { '@type': 'Language', name: 'English', alternateName: 'en' },
  ],
  knowsAbout: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'TailwindCSS',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Docker',
    'Frontend Development',
    'Backend Development',
    'Web Performance Optimization',
    'Clean Code Architecture',
  ],
  sameAs: [
    AUTHOR.github,
    AUTHOR.linkedin,
    `https://twitter.com/${AUTHOR.twitter.replace('@', '')}`,
  ],
};

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'Luis Alvarez | Full-Stack Engineer · Portfolio 2024',
  description:
    'Interactive portfolio showcasing projects, skills, and professional experience of Luis Alvarez, Full-Stack Software Engineer.',
  // Primary image for the page
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: IMAGES.ogImage,
    width: 1200,
    height: 630,
    caption: 'Luis Alvarez Portfolio 2024 Preview',
  },
  thumbnailUrl: IMAGES.ogImage,
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Luis Alvarez Portfolio',
    publisher: {
      '@id': `${SITE_URL}/#person`,
    },
  },
  about: {
    '@id': `${SITE_URL}/#person`,
  },
  inLanguage: 'en-US',
  datePublished: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Versions',
        item: `${SITE_URL}/versions`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Portfolio 2024',
        item: PAGE_URL,
      },
    ],
  },
};

const jsonLdProfilePage = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${PAGE_URL}/#profilepage`,
  url: PAGE_URL,
  name: 'Luis Alvarez Portfolio 2024',
  mainEntity: {
    '@id': `${SITE_URL}/#person`,
  },
  // Image for profile page
  image: {
    '@type': 'ImageObject',
    url: IMAGES.ogImage,
    width: 1200,
    height: 630,
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        strategy="afterInteractive"
      />
      <Script
        id="json-ld-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        strategy="afterInteractive"
      />
      <Script
        id="json-ld-profile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfilePage) }}
        strategy="afterInteractive"
      />

      <main
        id="main-content"
        role="main"
        aria-label="Portfolio content"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Hero Section */}
        <section aria-label="Introduction" id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <section aria-label="About me" id="about">
          <About />
        </section>

        {/* Interactive Terminal */}
        <section aria-label="Interactive terminal" id="terminal">
          <Terminal />
        </section>

        {/* Skills Section */}
        <section aria-label="Technical skills" id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section aria-label="Featured projects" id="projects">
          <Projects />
        </section>

        {/* Grid/Bento Section */}
        <section aria-label="Additional information" id="grid">
          <Grid />
        </section>

        {/* Quote Section */}
        <aside aria-label="Featured quote">
          <Quote />
        </aside>

        {/* Profile Section */}
        <section aria-label="Profile details" id="profile">
          <Profile />
        </section>

        {/* Connect Section */}
        <section aria-label="Contact and social links" id="connect">
          <Connect />
        </section>

        {/* Navigation */}
        <Navigation />

        <SharedFooter position='relative' className='mb-20' />
      </main>
    </>
  );
}
