'use client';

import { ProjectType } from '@/app/_components/projects/projects-list';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { getSlugFromString } from '@/utils/get-slug-from-string';
import { BookMarkedIcon, ExternalLink, Github } from 'lucide-react';
import { MotionConfig, motion, useReducedMotion, type Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProjectCard({ project }: { project: ProjectType }) {
  const maxChips = 4;
  const extra = Math.max(0, (project.technologies?.length ?? 0) - maxChips);
  const prefersReducedMotion = useReducedMotion();

  const itemVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 6 },
        show: { opacity: 1, y: 0 },
      };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? {} : { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  const buttonVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        show: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 },
      };

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? 'always' : 'never'}>
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{ duration: 0.4, ease: EASE }}
        className="relative h-full"
      >
        <Card className="group relative h-full overflow-hidden border-2 border-neutral-200 bg-white pt-0 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-300/30 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:shadow-2xl dark:hover:shadow-black/40">
          {/* Cover Image with Action Buttons */}
          <CardContent className="relative p-0">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="will-change-transform"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <Image
                  src={project.imageCover ?? '/placeholder.svg'}
                  alt={project.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                  priority={false}
                />

                {/* Action buttons overlay - Positioned on image */}
                <div className="absolute right-3 bottom-3 z-20 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-4 sm:bottom-4">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <motion.div
                        variants={buttonVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Button
                          size="sm"
                          asChild
                          className="h-9 gap-2 bg-white/90 font-medium text-neutral-900 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:bg-neutral-900"
                        >
                          <Link href={`/projects/${getSlugFromString(project.name)}`}>
                            <BookMarkedIcon className="h-4 w-4" />
                            <span className="hidden sm:inline">Story</span>
                          </Link>
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="sm:hidden">
                      <p className="text-xs">Read technical story</p>
                    </TooltipContent>
                  </Tooltip>

                  <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <Button
                      size="sm"
                      asChild
                      className="h-9 gap-2 bg-neutral-900/90 font-medium text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-neutral-900 dark:bg-white/90 dark:text-neutral-900 dark:hover:bg-white"
                    >
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open repository on GitHub"
                      >
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline">Code</span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </CardContent>

          {/* Content */}
          <CardHeader className="space-y-4 p-5 sm:p-6">
            {/* Title with external link */}
            <CardTitle className="space-y-3">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <Link
                  href={project.previewUrl || project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2.5 text-xl font-bold text-neutral-900 transition-all sm:text-2xl dark:text-neutral-100"
                >
                  <span className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text transition-all group-hover/link:from-blue-600 group-hover/link:via-purple-600 group-hover/link:to-pink-600 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 dark:group-hover/link:from-blue-400 dark:group-hover/link:via-purple-400 dark:group-hover/link:to-pink-400">
                    {project.name}
                  </span>
                  <ExternalLink
                    size={18}
                    className="flex-shrink-0 text-neutral-400 transition-all group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-blue-600 dark:text-neutral-600 dark:group-hover/link:text-blue-400"
                  />
                </Link>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] w-full origin-left bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800"
              />
            </CardTitle>

            {/* Description */}
            <motion.p
              className="line-clamp-2 text-base leading-relaxed text-neutral-700 sm:line-clamp-3 sm:text-base dark:text-neutral-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {project.description}
            </motion.p>

            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-2 pt-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            >
              {project.technologies?.slice(0, maxChips).map((t) => (
                <motion.div
                  key={t}
                  variants={itemVariants}
                  transition={{ duration: 0.25, ease: EASE }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="border-2 border-neutral-300 bg-gradient-to-br from-neutral-50 to-neutral-100 px-3 py-1 text-sm font-semibold text-neutral-800 shadow-sm transition-all hover:border-neutral-400 hover:shadow-md dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-600"
                  >
                    {t}
                  </Badge>
                </motion.div>
              ))}
              {extra > 0 && (
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.25, ease: EASE }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -2 }}
                >
                  <Badge
                    variant="outline"
                    className="border-2 border-dashed border-neutral-400 bg-neutral-50 px-3 py-1 text-sm font-bold text-neutral-600 transition-all hover:border-neutral-500 hover:bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:bg-neutral-700"
                  >
                    +{extra} more
                  </Badge>
                </motion.div>
              )}
            </motion.div>
          </CardHeader>
        </Card>
      </motion.article>
    </MotionConfig>
  );
}
