'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { portfolioVersions } from '@/constants/portfolio-versions';
import { Calendar, Code2, ExternalLink, Github, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function VersionsContent() {
  return (
    <div className="space-y-12">
      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 md:space-y-12"
      >
        {portfolioVersions.map((version, index) => (
          <motion.div key={version.year} variants={itemVariants}>
            <Card
              className={`overflow-hidden transition-all hover:shadow-xl ${
                version.status === 'current' ? 'border-primary shadow-lg' : 'border-border'
              }`}
            >
              <div className="grid gap-6 md:grid-cols-2">
                {/* Content Section */}
                <div className="order-2 md:order-1">
                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold">
                          {version.year}
                        </div>
                        {version.status === 'current' && <Badge variant={'default'}>Current</Badge>}
                        {version.status === 'archived' && (
                          <Badge variant="secondary">Archived</Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{version.title}</CardTitle>
                    <CardDescription className="text-base">{version.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Release Date */}
                    <div className="text-muted-foreground mt-3 flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>
                        Released:{' '}
                        {new Date(version.releaseDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-semibold">
                        <Sparkles className="text-primary h-4 w-4" />
                        Key Highlights
                      </h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {version.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-semibold">
                        <Code2 className="text-primary h-4 w-4" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {version.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="mt-3 flex flex-wrap gap-3">
                    {version.liveUrl && (
                      <Button asChild variant="default">
                        <Link
                          href={version.liveUrl}
                          target={version.status === 'current' ? '_self' : '_blank'}
                          rel={version.status === 'current' ? undefined : 'noopener noreferrer'}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </Link>
                      </Button>
                    )}
                    {version.githubUrl && (
                      <Button asChild variant="outline">
                        <Link href={version.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </div>

                {/* Image Section */}
                <div className="from-primary/5 to-primary/10 relative order-1 flex min-h-[300px] items-center justify-center rounded-s-2xl bg-gradient-to-br p-8 md:order-2 md:min-h-full">
                  <div className="space-y-4 text-center">
                    <div className="bg-primary/20 mx-auto flex h-24 w-24 items-center justify-center rounded-full">
                      <span className="text-primary text-4xl font-bold">{version.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Version {portfolioVersions.length - index}.0
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-muted/50 mt-16 grid grid-cols-1 gap-6 rounded-lg p-8 sm:grid-cols-3"
      >
        <div className="space-y-2 text-center">
          <p className="text-primary text-4xl font-bold">{portfolioVersions.length}</p>
          <p className="text-muted-foreground text-sm">Total Versions</p>
        </div>
        <div className="space-y-2 text-center">
          <p className="text-primary text-4xl font-bold">
            {new Set(portfolioVersions.flatMap((v) => v.technologies)).size}
          </p>
          <p className="text-muted-foreground text-sm">Technologies Used</p>
        </div>
        <div className="space-y-2 text-center">
          <p className="text-primary text-4xl font-bold">
            {new Date().getFullYear() - Math.min(...portfolioVersions.map((v) => v.year))}+
          </p>
          <p className="text-muted-foreground text-sm">Years of Evolution</p>
        </div>
      </motion.div>
    </div>
  );
}
