'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { BookUserIcon, FolderRootIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export const Quote = () => {
  const { theme } = useTheme();

  return (
    <section
      aria-labelledby="portfolio-headline"
      className="group relative isolate mx-4 max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-sm transition-all hover:shadow-md md:mx-auto xl:max-w-6xl"
    >
      <div className="pointer-events-none absolute inset-0 -z-10"></div>

      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-16 -bottom-28 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-3xl"></div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:radial-gradient(60rem_60rem_at_50%_0%,#fff_2%,transparent_40%),linear-gradient(to_right,transparent_48%,#fff1_50%,transparent_52%),linear-gradient(to_bottom,transparent_48%,#fff1_50%,transparent_52%)]"></div>

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 md:py-28">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <Badge variant={'outline'}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"></span>
            Always improving
          </Badge>
        </div>

        <h2
          id="portfolio-headline"
          className="text-center text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl md:text-6xl"
        >
          <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-green-500 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(59,130,246,0.25)]">
            A portfolio is a journey, not a destination,
          </span>
          <br className="hidden sm:block" />
          <span>so keep coding and iterating.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-pretty sm:text-base">
          Embrace the challenges, learn from failures, and celebrate successes along the way.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant={'default'} asChild size={'lg'} className="dark:text-white">
            <Link href={`#${NAVIGATION_NAMES.PROJECTS}`}>
              <FolderRootIcon />
              See projects
            </Link>
          </Button>
          <Button variant={'outline'} asChild size={'lg'}>
            <Link href={`#${NAVIGATION_NAMES.CONNECT}`}>
              <BookUserIcon />
              Contact
            </Link>
          </Button>
        </div>

        {/* Tags */}
        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
          <Badge variant={theme === 'light' ? 'secondary' : 'outline'}>Iterate</Badge>
          <Badge variant={theme === 'light' ? 'secondary' : 'outline'}>Measure</Badge>
          <Badge variant={theme === 'light' ? 'secondary' : 'outline'}>Optimize</Badge>
          <Badge variant={theme === 'light' ? 'secondary' : 'outline'}>Ship</Badge>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"></div>
    </section>
  );
};
