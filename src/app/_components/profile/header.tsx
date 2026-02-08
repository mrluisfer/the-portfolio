'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import '@/styles/white-pattern.scss';
import { motion, useReducedMotion } from 'motion/react';
import { FaCheck } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';

const GITHUB_PROFILE_IMG = 'https://avatars.githubusercontent.com/u/65029792?v=4';
const LOCATION = 'Morelia, México';
const ROLE = 'Full Stack Developer';

const Header = () => {
  const prefersReducedMotion = useReducedMotion();

  const headerTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const };

  const fadeIn = prefersReducedMotion ? { opacity: 1, y: 0, x: 0, scale: 1 } : undefined;
  const initialHidden = prefersReducedMotion
    ? { opacity: 1, y: 0, x: 0, scale: 1 }
    : { opacity: 0, y: -20 };

  return (
    <motion.header
      initial={initialHidden}
      animate={{ opacity: 1, y: 0 }}
      transition={headerTransition}
      className="white-pattern relative flex flex-col items-center gap-4 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[50px] bg-white/60 px-4 pt-12 pb-6 backdrop-blur-md sm:flex-row sm:items-start sm:gap-6 sm:px-6 sm:pt-16 sm:pb-8 lg:gap-8 lg:px-8 lg:pt-20 dark:bg-slate-900/70 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
      role="banner"
      aria-label="Profile information"
    >
      {/* Dark mode overlay so pattern doesn't clash */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:from-slate-950/40 dark:to-slate-900/60"
        aria-hidden
      />

      {/* Avatar Section */}
      <motion.div
        initial={prefersReducedMotion ? undefined : { scale: 0.8, opacity: 0 }}
        animate={fadeIn ?? { scale: 1, opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { delay: 0.2, duration: 0.4, type: 'spring', stiffness: 200 }
        }
        className="relative z-10 shrink-0"
      >
        <motion.div
          whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
          transition={
            prefersReducedMotion ? undefined : { type: 'spring', stiffness: 400, damping: 17 }
          }
          className="group relative inline-block"
        >
          <Avatar className="h-20 w-20 shadow-lg ring-4 ring-blue-200/60 transition-all duration-300 group-hover:ring-blue-400/50 sm:h-24 sm:w-24 lg:h-28 lg:w-28 dark:ring-blue-800/60 dark:group-hover:ring-blue-500/50">
            <AvatarImage
              src={GITHUB_PROFILE_IMG}
              alt="Luis Alvarez - Full Stack Developer"
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
              LA
            </AvatarFallback>
          </Avatar>

          {/* Verified Badge - decorative, not interactive */}
          <span
            className="absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md ring-2 ring-white sm:h-9 sm:w-9 dark:from-blue-400 dark:to-blue-500 dark:ring-slate-900"
            role="img"
            aria-label="Verified Developer"
          >
            <FaCheck className="text-sm" aria-hidden />
          </span>

          {/* Subtle glow on hover */}
          <div
            className="absolute inset-0 -z-10 rounded-full bg-blue-400/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-blue-500/20"
            aria-hidden
          />
        </motion.div>
      </motion.div>

      {/* Info Section */}
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
        animate={fadeIn ?? { opacity: 1, x: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.3, duration: 0.5 }}
        className="relative z-10 flex min-w-0 flex-1 flex-col gap-2.5 text-center sm:gap-3 sm:text-left"
      >
        {/* Name - no hover effect to avoid layout shift / reflow */}
        <motion.h1
          className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl dark:text-white"
          id="profile-name"
        >
          Luis Alvarez
          <span className="ml-1.5 inline-block text-xl" aria-hidden>
            👋
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-600 sm:justify-start sm:text-base dark:text-neutral-300"
        >
          <span
            className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500 dark:bg-green-400"
            aria-hidden
          />
          <span>{ROLE}</span>
        </motion.p>

        {/* Location */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 sm:justify-start sm:text-sm dark:text-neutral-400"
        >
          <HiLocationMarker
            className="size-4 shrink-0 text-blue-500 dark:text-blue-400"
            aria-hidden
          />
          <span>{LOCATION}</span>
        </motion.div>

        {/* Status Badge - clear and accessible */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={fadeIn ?? { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.6 }}
          className="mt-0.5 sm:mt-1"
        >
          <div
            className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-3 py-2 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-100 sm:min-h-0 sm:min-w-0 sm:py-1.5 dark:border-blue-700/50 dark:bg-blue-900/40 dark:hover:border-blue-600 dark:hover:bg-blue-900/50"
            role="status"
            aria-live="polite"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75 dark:bg-blue-500" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            </span>
            <span className="text-xs font-medium text-blue-700 dark:text-blue-200">
              Available for projects
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative orb - hidden when reduced motion, subtle in dark */}
      {!prefersReducedMotion && (
        <div className="absolute top-4 right-4 z-0 hidden lg:block" aria-hidden>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-sm dark:from-blue-500/25 dark:to-purple-500/25"
          />
        </div>
      )}
    </motion.header>
  );
};

export default Header;
