import { Button } from '@/components/ui/button';
import socialMediaLinks from '@/constants/social-media-links';
import linkAnimationData from '@/lotties/link.json';
import { Lottie, LottieHandle } from 'lottie-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { TbBrandGithubFilled } from 'react-icons/tb';

const START_YEAR = 2021;

export default function Sharing() {
  const logoRef = useRef<LottieHandle>(null);
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
      {/* Animated ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/sharing:opacity-100">
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-zinc-400/15 blur-3xl dark:bg-zinc-100/[0.04]" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-zinc-400/15 blur-3xl dark:bg-zinc-100/[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        {/* GitHub Badge */}
        <motion.div
          className="w-fit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-xl transition-all hover:shadow-md active:scale-[0.98]"
          >
            <Link
              href={socialMediaLinks.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <TbBrandGithubFilled className="size-4" />
              <span className="text-xs font-medium">GitHub</span>
            </Link>
          </Button>
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
              className="w-full rounded-xl font-semibold transition-all hover:shadow-md active:scale-[0.98] sm:w-auto"
              asChild
              variant="outline"
              size="lg"
            >
              <Link href="/projects" className="flex items-center justify-center gap-2 sm:gap-3">
                {/* Icon */}
                <motion.div
                  className="relative h-6 w-6 sm:h-7 sm:w-7"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie lottieRef={logoRef} src={linkAnimationData} loop={false} />
                </motion.div>

                {/* Text */}
                <span>See my projects</span>

                {/* Arrow indicator */}
                <motion.span
                  className="text-lg"
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
