'use client';

import Container from '@/components/container';
import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { FolderRootIcon } from 'lucide-react';
import Link from 'next/link';
import { ProjectList } from './project-list';

export function Projects() {
  return (
    <Container>
      <section
        id={NAVIGATION_NAMES.PROJECTS}
        className="mt-6 px-4 py-6 sm:mt-10 sm:px-6 sm:py-8 lg:px-8"
      >
        <div className="mb-8 text-center sm:mb-10">
          <Title>
            <h1>My Projects</h1>
          </Title>
          <p className="text-muted-foreground mx-auto mt-2 max-w-sm px-4 text-[13px] sm:mt-3 sm:max-w-md sm:px-0 sm:text-sm">
            A selection of projects I've built, from web apps to developer tools
          </p>
        </div>
        <ProjectList />
        <div className="mt-8 flex items-center justify-center sm:mt-12">
          <Button asChild variant="outline" size="lg" className="group w-full sm:w-auto">
            <Link href="/projects">
              <FolderRootIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              View all projects
            </Link>
          </Button>
        </div>
      </section>
    </Container>
  );
}
