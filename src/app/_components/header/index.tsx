'use client';

import Container from '@/components/container';
import SocialLinks from '@/components/social-links';
import { ThemeToggle } from '@/components/theme-toggle';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';
import CurrentPlaying from './current-playing';
import CurrentTime from './current-time';
import Logo from './logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 100);
  });

  return (
    <>
      {/* Placeholder para mantener el espacio cuando el header sea fixed */}
      <motion.div
        initial={false}
        animate={{
          height: isScrolled ? 'auto' : 0,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="overflow-hidden"
      >
        <div className="h-[56px] sm:h-[64px]" />
      </motion.div>

      <motion.div
        className="w-full"
        initial={false}
        animate={{
          position: isScrolled ? 'fixed' : 'relative',
          top: isScrolled ? 0 : 'auto',
          zIndex: isScrolled ? 50 : 'auto',
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <motion.div
          initial={false}
          animate={{
            backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
            boxShadow: isScrolled
              ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
              : '0 0 0 0 rgba(0, 0, 0, 0)',
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0)',
          }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative border-b border-transparent transition-colors"
          style={{
            WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
            borderBottomColor: isScrolled ? 'rgba(229, 231, 235, 0.4)' : 'transparent',
          }}
        >
          {/* Dark mode overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 dark:opacity-100"
            initial={false}
            animate={{
              backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(10, 10, 10, 0)',
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
          />

          {/* Gradient border superior sutil */}
          {isScrolled && (
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent dark:via-blue-500/20" />
          )}

          <Container>
            <header className="relative z-10 mx-auto flex flex-wrap items-center justify-between gap-3 px-2 py-2.5 sm:gap-4 sm:px-4 sm:py-3 lg:px-0">
              <div className="flex flex-1 items-center justify-between sm:justify-start">
                <Logo />
                <div className="block sm:hidden">
                  <ThemeToggle />
                </div>
              </div>
              <nav className="flex flex-wrap items-center justify-center gap-3 sm:ml-auto sm:gap-4 lg:justify-end">
                <CurrentPlaying />
                <SocialLinks />
                <div className="hidden sm:block">
                  <ThemeToggle />
                </div>
                <CurrentTime />
              </nav>
            </header>
          </Container>
        </motion.div>
      </motion.div>
    </>
  );
}
