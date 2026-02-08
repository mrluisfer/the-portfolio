import Container from '@/components/container';
import Title from '@/components/title';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { BookUserIcon, FolderRootIcon } from 'lucide-react';
import Link from 'next/link';

export const Quote = () => {
  return (
    <Container>
      <div className="px-6 py-16 text-center sm:py-20">
        <div className="mb-6 flex justify-center">
          <Badge variant={'outline'}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"></span>
            Always improving
          </Badge>
        </div>

        <Title>
          <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl">
            A portfolio is a <span className="text-blue-400">journey</span>, not a destination,
            <br className="hidden sm:block" />
            so keep coding and iterating.
          </h2>
        </Title>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant={'outline'} asChild size={'lg'} className="dark:text-white">
            <Link href={`#${NAVIGATION_NAMES.PROJECTS}`}>
              <FolderRootIcon />
              See my projects
            </Link>
          </Button>
          <Button variant={'default'} asChild size={'lg'} className="dark:text-white">
            <Link href={`#${NAVIGATION_NAMES.CONNECT}`}>
              <BookUserIcon />
              Contact me
            </Link>
          </Button>
        </div>

        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
          <Badge variant={'outline'}>Iterate</Badge>
          <Badge variant={'outline'}>Measure</Badge>
          <Badge variant={'outline'}>Optimize</Badge>
          <Badge variant={'outline'}>Ship</Badge>
        </div>
      </div>
    </Container>
  );
};
