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
      className="lg:max-w-auto flex h-fit w-full flex-col rounded-[inherit] bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 p-4 shadow-sm sm:max-w-[350px] sm:p-5 lg:max-h-none lg:p-6"
    >
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
          className="inline-flex h-fit w-fit touch-manipulation items-center gap-2 rounded-xl bg-[#24292f] px-3 py-2 text-xl text-white shadow-md transition-all hover:bg-[#2d333b] hover:shadow-xl active:scale-95 sm:text-2xl"
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
          className="group text-lg leading-relaxed font-semibold text-gray-800 sm:text-xl lg:text-2xl"
        >
          Sharing more than{' '}
          <motion.span
            className="inline-block font-bold text-emerald-700"
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
            className="group relative w-full touch-manipulation overflow-hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-600 no-underline shadow-md transition-all hover:shadow-lg hover:shadow-emerald-200/50 active:scale-[0.98] sm:w-auto sm:px-6 sm:py-3 sm:text-base"
            asChild
            variant="link"
          >
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 no-underline sm:gap-3"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100"
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

        {/* Stats badge (opcional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-emerald-700/80 sm:text-sm"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span>Open to collaboration</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
