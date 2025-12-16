export interface PortfolioVersion {
  year: number;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  status: 'current' | 'archived';
  releaseDate: string;
}

export const portfolioVersions: PortfolioVersion[] = [
  {
    year: 2025,
    title: 'Portfolio 2025 - Modern & Interactive',
    description:
      'Current version featuring a modern design with advanced animations, MDX support, and real-time GitHub integration. Built with Next.js 15 and cutting-edge technologies.',
    highlights: [
      'Server Components & App Router',
      'MDX for dynamic content',
      'Real-time GitHub API integration',
      'Advanced animations with Motion',
      'Dark mode support',
      'Responsive design system',
    ],
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Motion UI',
      'Shadcn/ui',
      'MDX',
      'TanStack Query',
    ],
    image: '/projects/portfolio-preview.png',
    liveUrl: '/',
    githubUrl: 'https://github.com/mrluisfer/the-portfolio',
    status: 'current',
    releaseDate: '2025-01-15',
  },
  {
    year: 2024,
    title: 'Portfolio 2024 - Enhanced Experience',
    description:
      'Redesigned portfolio with focus on user experience, featuring interactive components and improved performance. Introduced project showcases and timeline views.',
    highlights: [
      'Interactive UI components',
      'Project timeline feature',
      'Enhanced performance',
      'SEO optimizations',
      'Accessibility improvements',
      'Mobile-first approach',
    ],
    technologies: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Radix UI',
    ],
    image: '/projects/portfolio-2024-preview.png',
    liveUrl: '/versions/2024',
    githubUrl: 'https://github.com/mrluisfer/the-portfolio/src/app/versions/2024',
    status: 'archived',
    releaseDate: '2024-01-10',
  },
  {
    year: 2023,
    title: 'Portfolio 2023 - First Edition',
    description:
      'Initial portfolio version showcasing fundamental projects and skills. Clean and minimalist design focusing on content and readability.',
    highlights: [
      'Clean minimalist design',
      'Project gallery',
      'Skills showcase',
      'Contact form',
      'Blog integration',
      'Responsive layout',
    ],
    technologies: ['Next.js 13', 'React 18', 'TypeScript', 'Tailwind CSS', 'CSS Modules'],
    image: '/projects/portfolio-2023-preview.png',
    liveUrl: '/versions/2023',
    githubUrl: 'https://github.com/mrluisfer/the-portfolio/src/app/versions/2023',
    status: 'archived',
    releaseDate: '2023-02-20',
  },
];
