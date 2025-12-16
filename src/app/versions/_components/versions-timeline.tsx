'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { portfolioVersions } from '@/constants/portfolio-versions';
import { Calendar, Code2, ExternalLink, Github, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function VersionsTimeline() {
  return (
    <motion.div variants={timelineVariants} initial="hidden" animate="visible" className="relative">
      {/* Timeline Line */}
      <div className="from-primary via-primary/50 absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b to-transparent md:left-1/2" />

      <div className="space-y-12">
        {portfolioVersions.map((version, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={version.year}
              variants={itemVariants}
              className={`relative grid items-start gap-8 md:grid-cols-2 ${
                isEven ? '' : 'md:grid-flow-dense'
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`bg-primary ring-background absolute top-0 left-6 z-10 -ml-[7px] h-4 w-4 rounded-full ring-4 md:left-1/2 ${
                  version.status === 'current' ? 'animate-bounce' : ''
                }`}
              />

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 ${
                  isEven ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-card rounded-lg border p-6 transition-shadow hover:shadow-lg"
                >
                  {/* Header */}
                  <div
                    className={`mb-4 flex items-center gap-3 ${
                      isEven ? 'md:flex-row-reverse md:justify-end' : ''
                    }`}
                  >
                    <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold">
                      {version.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{version.title}</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <Calendar className="text-muted-foreground h-3 w-3" />
                        <span className="text-muted-foreground text-xs">
                          {new Date(version.releaseDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </span>
                        {version.status === 'current' && (
                          <Badge variant="default" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm">{version.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                      <Sparkles className="text-primary h-4 w-4" />
                      Highlights
                    </h4>
                    <ul className="space-y-1">
                      {version.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                      <Code2 className="text-primary h-4 w-4" />
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {version.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {version.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{version.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2">
                    {version.liveUrl && (
                      <Button asChild size="sm" variant="default">
                        <Link
                          href={version.liveUrl}
                          target={version.status === 'current' ? '_self' : '_blank'}
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          View
                        </Link>
                      </Button>
                    )}
                    {version.githubUrl && (
                      <Button asChild size="sm" variant="outline">
                        <Link href={version.githubUrl} target="_blank">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
