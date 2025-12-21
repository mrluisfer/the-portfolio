import { projects } from '@/app/_components/projects/projects-list';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ProjectCard } from './project-card';

export default function Projects() {
  return (
    <section className="px-6 pb-10 sm:px-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-400">
          Principal Projects
        </h2>
        <Button asChild size={'sm'} className="dark:text-white">
          <Link
            href="https://github.com/mrluisfer/repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all <ExternalLink size={14} />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
