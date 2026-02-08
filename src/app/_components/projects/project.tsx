'use client';

import { GitHub, GithubDark } from '@/assets/icons/allIcons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getSlugFromString } from '@/utils/get-slug-from-string';
import clsx from 'clsx';
import { BookMarkedIcon, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { cardVariants } from './masonry-grid';
import type { ProjectType } from './projects-list';

export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '…' : text;
}

export const Project = ({ className, project }: { className?: string; project: ProjectType }) => {
  const projectDescription = truncateText(project.description, 100);
  const projectSlug = getSlugFromString(project.name);

  return (
    <motion.article
      variants={cardVariants}
      aria-labelledby={`project-title-${projectSlug}`}
      className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1 sm:hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/80',
        'focus-within:ring-primary/50 focus-within:ring-2 focus-within:ring-offset-2',
        className
      )}
    >
      {/* Cover Image */}
      {project.imageCover && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 sm:aspect-[16/10] dark:bg-neutral-800">
          <Image
            src={project.imageCover}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover transition-transform duration-500 sm:group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay for text contrast */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:from-black/40 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100"
            aria-hidden="true"
          />

          {/* Quick action buttons - hidden on mobile (shown in footer), visible on hover for desktop */}
          <div
            className="absolute right-2.5 bottom-2.5 hidden gap-1.5 sm:flex sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:opacity-100"
            role="group"
            aria-label={`Quick actions for ${project.name}`}
          >
            <Button
              asChild
              size="icon"
              variant="secondary"
              className="h-7 w-7 rounded-full bg-white/95 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white focus-visible:ring-2 focus-visible:ring-white dark:bg-neutral-900/95 dark:hover:bg-neutral-900"
            >
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
              >
                <GitHub className="block h-3.5 w-3.5 dark:hidden" aria-hidden="true" />
                <GithubDark className="hidden h-3.5 w-3.5 dark:block" aria-hidden="true" />
              </Link>
            </Button>
            {project.previewUrl && (
              <Button
                asChild
                size="icon"
                variant="secondary"
                className="h-7 w-7 rounded-full bg-white/95 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white focus-visible:ring-2 focus-visible:ring-white dark:bg-neutral-900/95 dark:hover:bg-neutral-900"
              >
                <Link
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        {/* Header */}
        <div className="mb-auto">
          <h3
            id={`project-title-${projectSlug}`}
            className="text-[15px] font-semibold tracking-tight sm:text-base"
          >
            <Link
              href={project.previewUrl || project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title hover:text-primary focus-visible:ring-primary inline-flex items-center gap-1 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {project.name}
              <ExternalLink
                className="hidden h-3 w-3 opacity-0 transition-opacity group-hover/title:opacity-70 sm:block"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in new tab)</span>
            </Link>
          </h3>
          <p className="text-muted-foreground mt-1.5 line-clamp-2 min-h-[2.75rem] text-[13px] leading-snug sm:mt-1 sm:min-h-[2.5rem] sm:text-sm">
            {projectDescription}
          </p>
        </div>

        {/* Technologies */}
        <ul
          className="mt-3 flex flex-wrap gap-1.5 sm:gap-1"
          aria-label={`Technologies used in ${project.name}`}
        >
          {project.technologies.slice(0, 4).map((tech, index) => (
            <li key={index}>
              <Badge
                variant="secondary"
                className="rounded-md px-2 py-0.5 text-[11px] font-medium sm:px-1.5 sm:py-0 sm:text-[10px]"
              >
                {tech}
              </Badge>
            </li>
          ))}
          {project.technologies.length > 4 && (
            <li>
              <Badge
                variant="outline"
                className="text-muted-foreground rounded-md px-2 py-0.5 text-[11px] font-medium sm:px-1.5 sm:py-0 sm:text-[10px]"
                aria-label={`And ${project.technologies.length - 4} more technologies`}
              >
                +{project.technologies.length - 4}
              </Badge>
            </li>
          )}
        </ul>

        {/* Footer */}
        <footer className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3 sm:pt-2.5 dark:border-neutral-800">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground -ml-2 h-8 px-2 text-xs focus-visible:ring-offset-0 sm:h-7 sm:text-[11px]"
          >
            <Link href={`/projects/${projectSlug}`}>
              <BookMarkedIcon className="mr-1 h-3 w-3" aria-hidden="true" />
              Read more
              <span className="sr-only"> about {project.name}</span>
            </Link>
          </Button>

          {/* Action buttons - visible on mobile only (desktop uses image overlay) */}
          <nav
            className="flex items-center gap-1 sm:hidden"
            aria-label={`External links for ${project.name}`}
          >
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-8 w-8 focus-visible:ring-offset-0"
            >
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code on GitHub`}
              >
                <GithubDark className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {project.previewUrl && (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground h-8 w-8 focus-visible:ring-offset-0"
              >
                <Link
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
          </nav>
        </footer>
      </div>
    </motion.article>
  );
};
