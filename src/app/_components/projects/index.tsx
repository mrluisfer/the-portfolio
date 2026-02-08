'use client';

import Container from '@/components/container';
import Title from '@/components/title';
import { Button } from '@/components/ui/button';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { FolderRootIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ProjectList } from './project-list';

export function Projects() {
  return (
    <Container>
      <section
        id={NAVIGATION_NAMES.PROJECTS}
        className="mt-10 px-4 py-6 sm:mt-16 sm:px-6 sm:py-8 lg:px-8"
      >
        <motion.div
          className="mb-8 text-center sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Title>
            <h1>My Projects</h1>
          </Title>
          <p className="text-muted-foreground mx-auto mt-2 max-w-sm px-4 text-[13px] sm:mt-3 sm:max-w-md sm:px-0 sm:text-sm">
            A selection of projects I've built, from web apps to developer tools
          </p>
        </motion.div>
        <ProjectList />
        <motion.div
          className="mt-8 flex items-center justify-center sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button asChild variant="outline" size="lg" className="group w-full sm:w-auto">
            <Link href="/projects">
              <FolderRootIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              View all projects
            </Link>
          </Button>
        </motion.div>
      </section>
    </Container>
  );
}
