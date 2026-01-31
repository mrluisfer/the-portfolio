export type ProjectType = {
  name: string;
  description: string;
  repoUrl: string;
  previewUrl?: string;
  technologies: string[];
  imageCover?: string;
  imgAuthor?: string;
};

export const projects: ProjectType[] = [
  {
    name: 'Monfly',
    description:
      'Personal finance application to track income and expenses, categorize transactions, set alerts, and visualize insights with dashboards. Includes secure authentication and profile management.',
    repoUrl: 'https://github.com/mrluisfer/monfly',
    previewUrl: 'https://monfly.vercel.app',
    technologies: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Shadcn UI',
      'TanStack Query',
      'Prisma',
      'PostgreSQL',
      'Node.js',
    ],
    imageCover: '/projects/monfly.png',
    imgAuthor: 'Nathan Dumlao',
  },
  {
    name: 'Bambú',
    description:
      'Landing page and demo app for a fictional “tech boutique”: focused on clean UX, internationalization (i18n), typed forms, and scalable content. Designed to showcase a modern end-to-end flow.',
    repoUrl: 'https://github.com/mrluisfer/bambu',
    previewUrl: 'https://bambu-landing.vercel.app/en',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Prisma',
      'PostgreSQL',
      'Node.js',
      'i18next',
      'Zod',
    ],
    imageCover: '/projects/bambu.png',
    imgAuthor: 'Evie S.',
  },
  {
    name: 'Portfolio 2025',
    description:
      'Interactive personal portfolio focused on performance and motion. Built with Astro and React components using reusable UI. Animates sections, projects, and experience with accessibility in mind.',
    repoUrl: 'https://github.com/mrluisfer/portfolio-2025',
    previewUrl: 'https://mrluisfer.vercel.app',
    technologies: [
      'Astro',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Node.js',
      'i18next',
      'Octokit',
      'Lucide React',
      'Spotify Web API',
    ],
    imageCover: '/projects/portfolio-preview.png',
    imgAuthor: 'Mohammad Rahmani',
  },
  {
    name: 'Spotify API Kit',
    description:
      'Type-safe SDK for the Spotify Web API, designed for secure Node.js backends. Includes helpers for authentication, common endpoints, and strict typing for a smooth developer experience.',
    previewUrl: 'https://www.npmjs.com/package/spotify-api-kit',
    repoUrl: 'https://github.com/mrluisfer/spotify-api-kit',
    technologies: ['TypeScript', 'Node.js', 'Spotify Web API', 'Express.js', 'Jest', 'NPM'],
    imageCover: '/projects/spotify-preview.webp',
    imgAuthor: 'sadaf amininia',
  },
  {
    name: 'JS Challenges Hub',
    description:
      'Unified collection of Frontend Mentor challenges. Built with Vite and React, including routing, validation, and structured organization to demonstrate solutions and best practices.',
    repoUrl: 'https://github.com/mrluisfer/js-challenge-hub',
    previewUrl: 'https://jschallenges-hub.vercel.app/',
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'React Router', 'Zod'],
    imageCover: '/projects/js-challenge.png',
    imgAuthor: 'Kevin Canlas',
  },
  {
    name: 'Neovim Config',
    description:
      'Custom Neovim configuration optimized for frontend and backend development. Includes LSP, Treesitter, formatting, search, and Git integration. Focused on productivity and fast startup.',
    repoUrl: 'https://github.com/mrluisfer/nvim',
    imageCover: '/projects/nvim-preview.webp',
    technologies: [
      'Neovim',
      'Lua',
      'LSP',
      'Treesitter',
      'Telescope',
      'Mason',
      'Nvim Tree',
      'Lualine',
      'Git',
    ],
    imgAuthor: 'Luca Bravo',
  },
  {
    name: 'SEO Generator',
    description:
      'Lightweight tool for generating SEO metadata (Open Graph and Twitter Cards). Built for quick copy-paste usage to prevent manual errors.',
    repoUrl: 'https://github.com/mrluisfer/seo-generator',
    previewUrl: 'https://seo-generator.vercel.app',
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    imageCover: '/projects/seo-generator.png',
    imgAuthor: 'Myriam Jessier',
  },
  {
    name: 'The Impostor Game',
    description:
      'LAN social deduction game inspired by Among Us. player roles, and interactive gameplay using Vite, DaisyUI, ChatGPT API and React for a smooth experience.',
    repoUrl: 'https://github.com/mrluisfer/impostor-game',
    previewUrl: 'https://el-impostor-mx.vercel.app',
    technologies: ['TypeScript', 'React', 'Vite', 'DaisyUI', 'Node.js', 'DaisyUI', 'OpenAI'],
    imageCover: '/projects/impostor-preview.png',
  },
];
