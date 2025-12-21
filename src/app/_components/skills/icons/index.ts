import {
  DarkDeno,
  DarkExpressjs,
  DarkMotion,
  DarkPrisma,
  DarkSocketio,
  DarkVercel,
  Deno,
  Expressjs,
  Git,
  JavaScript,
  Jest,
  Motion,
  NestJS,
  Nodejs,
  PostgreSQL,
  Prisma,
  Python,
  React,
  Redux,
  Sass,
  Sentry,
  Socketio,
  StyledComponents,
  TailwindCSS,
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
  {
    Icon: Expressjs,
    name: 'Express.js',
    docs: 'https://expressjs.com/',
    DarkIcon: DarkExpressjs,
  },
  {
    Icon: React,
    name: 'React',
    docs: 'https://react.dev/',
  },
  {
    Icon: Nodejs,
    name: 'Node.js',
    docs: 'https://nodejs.org/en/docs/',
    customGlowColor: '#8CC84B',
  },
  {
    Icon: TailwindCSS,
    name: 'Tailwind CSS',
    docs: 'https://tailwindcss.com/docs',
  },
  {
    Icon: Git,
    name: 'Git',
    docs: 'https://git-scm.com/doc',
  },
  {
    Icon: TypeScript,
    name: 'TypeScript',
    docs: 'https://www.typescriptlang.org/docs/',
  },
  {
    Icon: Socketio,
    name: 'Socket.io',
    docs: 'https://socket.io/docs/',
    DarkIcon: DarkSocketio,
  },
  {
    Icon: Motion,
    name: 'Framer Motion',
    docs: 'https://www.framer.com/motion/',
    customGlowColor: '#fff42b',
    DarkIcon: DarkMotion,
  },
  {
    Icon: Vercel,
    name: 'Vercel',
    docs: 'https://vercel.com/docs',
    DarkIcon: DarkVercel,
  },
  {
    Icon: NestJS,
    name: 'NestJS',
    docs: 'https://docs.nestjs.com/',
  },
  {
    Icon: JavaScript,
    name: 'JavaScript',
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    Icon: PostgreSQL,
    name: 'PostgreSQL',
    docs: 'https://www.postgresql.org/docs/',
    customGlowColor: '#0064a5',
  },
  {
    Icon: StyledComponents,
    name: 'Styled Components',
    docs: 'https://styled-components.com/docs',
    customGlowColor: '#FAA0E6',
  },
  {
    Icon: Prisma,
    name: 'Prisma',
    docs: 'https://www.prisma.io/docs',
    DarkIcon: DarkPrisma,
  },
  {
    Icon: Vitest,
    name: 'Vitest',
    docs: 'https://vitest.dev/guide/',
  },
  {
    Icon: Vite,
    name: 'Vite',
    docs: 'https://vitejs.dev/guide/',
    customGlowColor: '#857BFF',
  },
  {
    Icon: Jest,
    name: 'Jest',
    docs: 'https://jestjs.io/docs/getting-started',
  },
  {
    Icon: Redux,
    name: 'Redux',
    docs: 'https://redux.js.org/introduction/getting-started',
  },
  {
    Icon: Python,
    name: 'Python',
    docs: 'https://docs.python.org/3/',
    customGlowColor: '#4B8BBE',
  },
  {
    Icon: Sass,
    name: 'Sass',
    docs: 'https://sass-lang.com/documentation',
  },
  {
    Icon: Deno,
    name: 'Deno',
    docs: 'https://deno.land/manual',
    customGlowColor: '#70FFAF',
    DarkIcon: DarkDeno,
  },
  {
    Icon: Sentry,
    name: 'Sentry',
    docs: 'https://docs.sentry.io/',
    customGlowColor: '#794888',
  },
];
