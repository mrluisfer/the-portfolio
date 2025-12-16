'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { portfolioVersions } from '@/constants/portfolio-versions';
import { Calendar, Code2, ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function VersionsCompact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {portfolioVersions.map((version) => (
        <motion.div
          key={version.year}
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className="group"
        >
          <div
            className={`bg-card relative h-full rounded-lg border p-6 transition-all duration-300 hover:shadow-lg ${
              version.status === 'current' ? 'border-primary shadow-md' : 'border-border'
            }`}
          >
            {/* Status Badge */}
            {version.status === 'current' && (
              <Badge variant="default" className="absolute top-4 right-4">
                Current
              </Badge>
            )}

            {/* Year Badge */}
            <div className="bg-primary/10 text-primary mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold">
              {version.year}
            </div>

            {/* Title */}
            <h3 className="group-hover:text-primary mb-2 line-clamp-2 text-lg font-bold transition-colors">
              {version.title}
            </h3>

            {/* Release Date */}
            <div className="text-muted-foreground mb-3 flex items-center gap-2 text-xs">
              <Calendar className="h-3 w-3" />
              <span>
                {new Date(version.releaseDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                })}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{version.description}</p>

            {/* Technologies */}
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-2">
                <Code2 className="text-primary h-3 w-3" />
                <span className="text-xs font-semibold">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {version.technologies.slice(0, 3).map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {version.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{version.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto flex gap-2 border-t pt-4">
              {version.liveUrl && (
                <Button asChild size="sm" variant="default" className="flex-1">
                  <Link
                    href={version.liveUrl}
                    target={version.status === 'current' ? '_self' : '_blank'}
                    rel={version.status === 'current' ? undefined : 'noopener noreferrer'}
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    View
                  </Link>
                </Button>
              )}
              {version.githubUrl && (
                <Button asChild size="sm" variant="outline">
                  <Link href={version.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3 w-3" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
