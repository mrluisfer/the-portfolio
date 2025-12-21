import { Button } from '@/components/ui/button';
import socialMediaLinks from '@/constants/social-media-links';
import linkAnimationData from '@/lotties/link.json';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { TbBrandGithubFilled } from 'react-icons/tb';

const START_YEAR = 2021;

export default function Sharing() {
  const logoRef = useRef<LottieRefCurrentProps>(null);
  const [isHovered, setIsHovered] = useState(false);
  const currentYear = new Date().getFullYear();
  const experience = currentYear - START_YEAR;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group/sharing lg:max-w-auto relative flex h-fit w-full flex-col overflow-hidden rounded-[inherit] p-4 sm:max-w-[350px] sm:p-5 lg:max-h-none lg:p-6"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-100/90 to-teal-100 transition-opacity duration-500 group-hover/sharing:opacity-90 dark:from-emerald-950/40 dark:via-green-950/30 dark:to-teal-950/50" />

      {/* Animated gradient overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/sharing:opacity-100">
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-green-400/20 blur-3xl" />
      </div>

      {/* Subtle border gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-emerald-300/40 ring-inset dark:ring-emerald-600/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        {/* GitHub Badge */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Link
            href={socialMediaLinks.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-fit w-fit touch-manipulation items-center gap-2 rounded-xl bg-[#24292f] px-3 py-2 text-xl text-white shadow-md ring-2 ring-transparent transition-all hover:bg-[#2d333b] hover:shadow-xl hover:ring-emerald-400/20 active:scale-95 sm:text-2xl"
            aria-label="Visit GitHub profile"
          >
            <TbBrandGithubFilled />
            <span className="hidden text-xs font-medium sm:inline">GitHub</span>
          </Link>
        </motion.div>

        {/* Content Area */}
        <div className="mt-0 flex min-h-0 flex-col items-start justify-end gap-4 pt-6 sm:gap-5 sm:pt-8">
          {/* Title Section */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="group text-lg leading-relaxed font-semibold text-emerald-900 sm:text-xl lg:text-2xl dark:text-emerald-100"
          >
            Sharing more than{' '}
            <motion.span
              className="inline-block font-bold text-emerald-700 dark:text-emerald-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {experience}+ years
            </motion.span>{' '}
            of expertise building projects.
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-full sm:w-auto"
            onHoverStart={() => {
              setIsHovered(true);
              logoRef.current?.play();
            }}
            onHoverEnd={() => {
              setIsHovered(false);
              logoRef.current?.stop();
            }}
          >
            <Button
              className="group relative w-full touch-manipulation overflow-hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-600 no-underline shadow-md ring-2 ring-emerald-200/50 transition-all hover:shadow-lg hover:shadow-emerald-200/50 hover:ring-emerald-300 active:scale-[0.98] sm:w-auto sm:px-6 sm:py-3 sm:text-base dark:bg-emerald-950 dark:text-emerald-100 dark:ring-emerald-700/50 dark:hover:ring-emerald-600"
              asChild
              variant="link"
            >
              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 no-underline sm:gap-3"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 dark:from-emerald-900/20 dark:to-green-900/20"
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  className="relative h-6 w-6 sm:h-7 sm:w-7"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie lottieRef={logoRef} animationData={linkAnimationData} loop={false} />
                </motion.div>

                {/* Text */}
                <span className="relative">See my projects</span>

                {/* Arrow indicator */}
                <motion.span
                  className="relative text-lg"
                  animate={{
                    x: isHovered ? 4 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-medium text-emerald-700/80 sm:text-sm dark:text-emerald-300/80"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
            <span>Open to collaboration</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
