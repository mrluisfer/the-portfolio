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
      <div id={NAVIGATION_NAMES.PROJECTS} className="mt-16">
        <div>
          <Title>
            <h1>My Projects</h1>
          </Title>
          <motion.span
            className="block text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            I'm currently working on
          </motion.span>
        </div>
        <ProjectList />
        <div className="mt-8 flex items-center justify-center">
          <Button asChild className="text-white" size={'lg'}>
            <Link href="/projects">
              <FolderRootIcon />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
