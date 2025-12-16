'use client';

import Container from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import SocialMediaLinks from '@/constants/social-media-links';
import { getCurrentFormattedDate } from '@/utils/get-current-date';
import {
  RiGithubFill,
  RiGitlabFill,
  RiLinkedinFill,
  RiSpotifyFill,
  RiTwitterFill,
} from '@remixicon/react';
import clsx from 'clsx';
import { Code2, ExternalLink, Heart, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 10,
    },
  },
} as const;

const socialLinks = [
  {
    name: 'GitHub',
    icon: RiGithubFill,
    url: SocialMediaLinks.GITHUB,
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: RiLinkedinFill,
    url: SocialMediaLinks.LINKEDIN,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Twitter',
    icon: RiTwitterFill,
    url: SocialMediaLinks.TWITTER,
    color: 'hover:text-blue-400',
  },
  {
    name: 'GitLab',
    icon: RiGitlabFill,
    url: SocialMediaLinks.GITLAB,
    color: 'hover:text-orange-600',
  },
  {
    name: 'Spotify',
    icon: RiSpotifyFill,
    url: SocialMediaLinks.SPOTIFY,
    color: 'hover:text-green-500',
  },
];

const quickLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Versions', href: '/versions' },
  { name: 'Poem', href: '/poem' },
];

export function SharedFooter({
  className,
  position = 'relative',
}: {
  className?: string;
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
}) {
  const currentYear = new Date().getFullYear();
  const currentDate = getCurrentFormattedDate();

  const positionClasses = {
    relative: 'relative',
    absolute: 'absolute bottom-0 left-0 right-0',
    fixed: 'fixed bottom-0 left-0 right-0 z-50',
    sticky: 'sticky bottom-0 z-40',
  };

  return (
    <footer
      className={clsx(
        'border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 mt-20 rounded-2xl border-t backdrop-blur',
        positionClasses[position],
        className
      )}
    >
      {/* Decorative gradient line */}
      <div className="via-primary/50 absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent to-transparent" />

      <Container className="px-4 py-12 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="text-primary h-5 w-5" />
              <h3 className="text-lg font-semibold">The Portfolio</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A modern portfolio showcasing projects, skills, and creative work. Built with Next.js,
              TypeScript, and passion for clean code.
            </p>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <span className="text-muted-foreground text-xs">Toggle theme</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-muted-foreground hover:text-foreground inline-flex items-center text-sm transition-colors"
                  >
                    <span className="transition-transform group-hover:translate-x-1">
                      {link.name}
                    </span>
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-2">
              <TooltipProvider>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Tooltip key={social.name}>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className={`transition-all hover:scale-110 ${social.color}`}
                        >
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                          >
                            <IconComponent className="h-4 w-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </div>
            <div className="pt-2">
              <a
                href={SocialMediaLinks.BENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>All my links</span>
              </a>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Info</h3>
            <div className="text-muted-foreground space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-foreground font-medium">Version:</span>
                <code className="bg-muted rounded px-2 py-1 text-xs">1.0.0</code>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-foreground font-medium">Last update:</span>
                <span className="text-xs">{currentDate}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-foreground font-medium">Built with:</span>
                <span className="text-xs">Next.js 15 & TypeScript</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <span>© {currentYear} Luis Alvarez.</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>

          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            </motion.div>
            <span>by</span>
            <a
              href={SocialMediaLinks.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              @mrLuisFer
            </a>
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="from-primary/50 via-primary to-primary/50 mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r"
        />
      </Container>
    </footer>
  );
}
