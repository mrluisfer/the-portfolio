import {
  Astro,
  AstroDark,
  DarkDeno,
  DarkExpressjs,
  DarkMotion,
  DarkPrisma,
  DarkSocketio,
  DarkVercel,
  Deno,
  Docker,
  Expressjs,
  Git,
  JavaScript,
  Jest,
  Motion,
  Neon,
  NestJS,
  Nextjs,
  Nodejs,
  PostgreSQL,
  Prisma,
  Python,
  RadixUI,
  RadixUIDark,
  React,
  Redux,
  Sass,
  Sentry,
  shadcnui,
  shadcnuiDark,
  Socketio,
  StyledComponents,
  TailwindCSS,
  TanStack,
  TypeScript,
  Vercel,
  Vite,
  Vitest,
} from '@/assets/icons/allIcons';
import { type SVGProps } from 'react';

export type SvglIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;
export type Technology = {
  Icon: SvglIcon;
  name: string;
  docs?: string;
  customGlowColor?: string;
  DarkIcon?: SvglIcon;
};

export const technologies: Technology[] = [
  // Lo que los reclutadores buscan primero
  {
    Icon: React,
    name: 'React',
    docs: 'https://react.dev/',
  },
  {
    Icon: Nextjs,
    name: 'Next.js',
    docs: 'https://nextjs.org/docs',
    customGlowColor: '#ffffff',
  },
  {
    Icon: TypeScript,
    name: 'TypeScript',
    docs: 'https://www.typescriptlang.org/docs/',
  },
  {
    Icon: TailwindCSS,
    name: 'Tailwind CSS',
    docs: 'https://tailwindcss.com/docs',
  },
  {
    Icon: JavaScript,
    name: 'JavaScript',
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    Icon: Nodejs,
    name: 'Node.js',
    docs: 'https://nodejs.org/en/docs/',
    customGlowColor: '#8CC84B',
  },
  {
    Icon: Git,
    name: 'Git',
    docs: 'https://git-scm.com/doc',
  },
  {
    Icon: PostgreSQL,
    name: 'PostgreSQL',
    docs: 'https://www.postgresql.org/docs/',
    customGlowColor: '#0064a5',
  },
  {
    Icon: Docker,
    name: 'Docker',
    docs: 'https://docs.docker.com/',
    customGlowColor: '#2496ED',
  },
  {
    Icon: Python,
    name: 'Python',
    docs: 'https://docs.python.org/3/',
    customGlowColor: '#4B8BBE',
  },

  // Frameworks & herramientas muy demandadas
  {
    Icon: NestJS,
    name: 'NestJS',
    docs: 'https://docs.nestjs.com/',
  },
  {
    Icon: Prisma,
    name: 'Prisma',
    docs: 'https://www.prisma.io/docs',
    DarkIcon: DarkPrisma,
  },
  {
    Icon: Redux,
    name: 'Redux',
    docs: 'https://redux.js.org/introduction/getting-started',
  },
  {
    Icon: TanStack,
    name: 'TanStack Query',
    docs: 'https://tanstack.com/query/latest',
    customGlowColor: '#FF4154',
  },
  {
    Icon: Vite,
    name: 'Vite',
    docs: 'https://vitejs.dev/guide/',
    customGlowColor: '#857BFF',
  },
  {
    Icon: Vitest,
    name: 'Vitest',
    docs: 'https://vitest.dev/guide/',
  },
  {
    Icon: Jest,
    name: 'Jest',
    docs: 'https://jestjs.io/docs/getting-started',
  },
  {
    Icon: Vercel,
    name: 'Vercel',
    docs: 'https://vercel.com/docs',
    DarkIcon: DarkVercel,
  },

  // UI libraries & styling
  {
    Icon: shadcnui,
    name: 'shadcn/ui',
    docs: 'https://ui.shadcn.com/',
    customGlowColor: '#ffffff',
    DarkIcon: shadcnuiDark,
  },
  {
    Icon: Motion,
    name: 'Framer Motion',
    docs: 'https://www.framer.com/motion/',
    customGlowColor: '#fff42b',
    DarkIcon: DarkMotion,
  },
  {
    Icon: RadixUI,
    name: 'Radix UI',
    docs: 'https://www.radix-ui.com/docs/primitives/overview/introduction',
    customGlowColor: '#AB6DFF',
    DarkIcon: RadixUIDark,
  },
  // {
  //   Icon: ,
  //   name: 'Zustand',
  //   docs: 'https://zustand-demo.pmnd.rs/',
  //   customGlowColor: '#553C2E',
  // },
  {
    Icon: StyledComponents,
    name: 'Styled Components',
    docs: 'https://styled-components.com/docs',
    customGlowColor: '#FAA0E6',
  },
  {
    Icon: Sass,
    name: 'Sass',
    docs: 'https://sass-lang.com/documentation',
  },
  {
    Icon: Expressjs,
    name: 'Express.js',
    docs: 'https://expressjs.com/',
    DarkIcon: DarkExpressjs,
  },

  // Especialización & nicho
  {
    Icon: Astro,
    name: 'Astro',
    docs: 'https://docs.astro.build/',
    customGlowColor: '#FF5D01',
    DarkIcon: AstroDark,
  },
  {
    Icon: Socketio,
    name: 'Socket.io',
    docs: 'https://socket.io/docs/',
    DarkIcon: DarkSocketio,
  },
  {
    Icon: Neon,
    name: 'NeonDB',
    docs: 'https://neon.tech/docs',
    customGlowColor: '#00E599',
  },
  {
    Icon: Sentry,
    name: 'Sentry',
    docs: 'https://docs.sentry.io/',
    customGlowColor: '#794888',
  },
  {
    Icon: Deno,
    name: 'Deno',
    docs: 'https://deno.land/manual',
    customGlowColor: '#70FFAF',
    DarkIcon: DarkDeno,
  },
];
