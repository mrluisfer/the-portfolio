'use client';

import { Bento } from '@/assets/icons/allIcons';
import Container from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import SocialMediaLinks from '@/constants/social-media-links';
import { cn } from '@/lib/utils';
import { getCurrentFormattedDate } from '@/utils/get-current-date';
import {
  RiGithubFill,
  RiGitlabFill,
  RiLinkedinFill,
  RiSpotifyFill,
  RiTwitterFill,
} from '@remixicon/react';
import { Code2, ExternalLink, Heart } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 14,
    },
  },
} as const;

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

const socialLinks = [
  {
    name: 'GitHub',
    icon: RiGithubFill,
    url: SocialMediaLinks.GITHUB,
    label: 'Visit GitHub profile',
    color: 'hover:text-[#181717] dark:hover:text-white hover:bg-muted/80',
  },
  {
    name: 'LinkedIn',
    icon: RiLinkedinFill,
    url: SocialMediaLinks.LINKEDIN,
    label: 'Connect on LinkedIn',
    color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20',
  },
  {
    name: 'Twitter',
    icon: RiTwitterFill,
    url: SocialMediaLinks.TWITTER,
    label: 'Follow on X (Twitter)',
    color: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 dark:hover:bg-[#1DA1F2]/20',
  },
  {
    name: 'GitLab',
    icon: RiGitlabFill,
    url: SocialMediaLinks.GITLAB,
    label: 'View projects on GitLab',
    color: 'hover:text-[#FC6D26] hover:bg-[#FC6D26]/10 dark:hover:bg-[#FC6D26]/20',
  },
  {
    name: 'Spotify',
    icon: RiSpotifyFill,
    url: SocialMediaLinks.SPOTIFY,
    label: 'Listen on Spotify',
    color: 'hover:text-[#1DB954] hover:bg-[#1DB954]/10 dark:hover:bg-[#1DB954]/20',
  },
];

const quickLinks = [
  { name: 'Projects', href: '/projects', label: 'View projects' },
  { name: 'Versions', href: '/versions', label: 'Version history' },
  { name: 'Poem', href: '/poem', label: 'Read poem' },
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
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? itemVariantsReduced : itemVariants;

  const positionClasses = {
    relative: 'relative',
    absolute: 'absolute bottom-0 left-0 right-0',
    fixed: 'fixed bottom-0 left-0 right-0 z-50',
    sticky: 'sticky bottom-0 z-40',
  };

  return (
    <footer
      role="contentinfo"
      className={cn(
        'relative mt-20 overflow-hidden rounded-2xl border border-border/50 bg-background/95 shadow-[0_-1px_0_0_hsl(var(--border)/0.5)] supports-[backdrop-filter]:bg-background/80 backdrop-blur-md',
        positionClasses[position],
        className
      )}
    >
      {/* Top accent gradient — visible, subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-80"
      />

      <Container className="px-4 py-14 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px', amount: 0.2 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >
          {/* About Section */}
          <motion.section variants={variants} className="space-y-4" aria-labelledby="footer-about">
            <h2 id="footer-about" className="sr-only">
              About this portfolio
            </h2>
            <div className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Code2 className="size-5" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">The Portfolio</h3>
            </div>
            <p className="text-muted-foreground max-w-[280px] text-sm leading-relaxed">
              A modern portfolio showcasing projects, skills, and clean code. Built with Next.js,
              TypeScript, and passion for design.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <ThemeToggle />
              <span className="text-muted-foreground text-xs">Toggle theme</span>
            </div>
          </motion.section>

          {/* Quick Links */}
          <motion.nav
            variants={variants}
            className="space-y-4"
            aria-labelledby="footer-quick-links"
          >
            <h3 id="footer-quick-links" className="text-base font-semibold tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-1.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className={cn(
                      'text-muted-foreground hover:text-foreground group inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-lg px-2 -mx-2 text-sm transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:text-foreground'
                    )}
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {link.name}
                    </span>
                    <ExternalLink
                      className="size-3.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social Links */}
          <motion.section
            variants={variants}
            className="space-y-4"
            aria-labelledby="footer-connect"
          >
            <h3 id="footer-connect" className="text-base font-semibold tracking-tight">
              Connect
            </h3>
            <div className="flex flex-wrap gap-2">
              <TooltipProvider delayDuration={300}>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Tooltip key={social.name}>
                      <TooltipTrigger asChild>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className={cn(
                            'inline-flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-muted-foreground transition-all duration-200',
                            'hover:scale-105 hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                            social.color
                          )}
                        >
                          <IconComponent className="size-5" aria-hidden />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="top" sideOffset={8}>
                        <p>{social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </div>
            <a
              href={SocialMediaLinks.BENTO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all my links on Bento"
              className={cn(
                'group inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-border/60 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 px-4 py-2.5 text-sm font-medium transition-all duration-200',
                'text-foreground hover:from-primary/25 hover:via-primary/15 hover:to-primary/10 hover:border-primary/30 hover:scale-[1.02]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
              )}
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <Bento className="size-4" aria-hidden />
              </span>
              <span className="flex flex-col items-start">
                <span className="font-semibold">Bento</span>
                <span className="text-muted-foreground text-xs font-normal">All my links</span>
              </span>
              <ExternalLink className="ml-auto size-3.5 opacity-60 group-hover:opacity-100" aria-hidden />
            </a>
          </motion.section>

          {/* Info Section */}
          <motion.section variants={variants} className="space-y-4" aria-labelledby="footer-info">
            <h3 id="footer-info" className="text-base font-semibold tracking-tight">
              Info
            </h3>
            <dl className="text-muted-foreground space-y-3 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <dt className="text-foreground font-medium">Version:</dt>
                <dd>
                  <code className="rounded-md bg-muted px-2 py-1 text-xs font-mono">
                    1.0.0
                  </code>
                </dd>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <dt className="text-foreground font-medium">Last update:</dt>
                <dd className="text-xs">{currentDate}</dd>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <dt className="text-foreground font-medium">Built with:</dt>
                <dd className="text-xs">Next.js 15 & TypeScript</dd>
              </div>
            </dl>
          </motion.section>
        </motion.div>

        {/* Divider */}
        <div
          aria-hidden
          className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 0.3 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4"
        >
          <p className="text-muted-foreground text-center text-sm md:text-left">
            <span>© {currentYear} Luis Alvarez.</span>
            <span className="hidden md:inline"> All rights reserved.</span>
          </p>

          <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-1.5 text-sm">
            <span>Made with</span>
            {prefersReducedMotion ? (
              <Heart className="size-4 fill-red-500 text-red-500" aria-hidden />
            ) : (
              <motion.span
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
                aria-hidden
              >
                <Heart className="size-4 fill-red-500 text-red-500" />
              </motion.span>
            )}
            <span>by</span>
            <a
              href={SocialMediaLinks.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View @mrLuisFer's GitHub profile"
              className={cn(
                'text-foreground hover:text-primary font-medium underline-offset-4 transition-colors duration-200 hover:underline',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded'
              )}
            >
              @mrLuisFer
            </a>
          </p>
        </motion.div>

        {/* Decorative bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: 0.4,
            type: 'spring',
            stiffness: 80,
            damping: 15,
          }}
          className="from-primary/40 via-primary/70 to-primary/40 mx-auto mt-10 h-1 w-28 origin-center rounded-full bg-gradient-to-r"
          aria-hidden
        />
      </Container>
    </footer>
  );
}
