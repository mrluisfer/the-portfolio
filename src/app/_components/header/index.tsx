'use client';

import Container from '@/components/container';
import SocialLinks from '@/components/social-links';
import { ThemeToggle } from '@/components/theme-toggle';
import { useEffect, useState } from 'react';
import CurrentPlaying from './current-playing';
import Logo from './logo';

const DESKTOP_BREAKPOINT = 768; // Tailwind md

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const setDesktop = (e: MediaQueryListEvent | { matches: boolean }) => {
      setIsDesktop(e.matches);
    };
    setDesktop(mediaQuery);
    mediaQuery.addEventListener('change', setDesktop);
    return () => mediaQuery.removeEventListener('change', setDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Solo en desktop: fixed + blur al hacer scroll. En mobile siempre relative.
  const isStickyWithBlur = isScrolled && isDesktop;

  return (
    <>
      {/* Placeholder solo en desktop cuando el header es fixed */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isStickyWithBlur ? 'h-[56px] opacity-100 sm:h-[64px]' : 'h-0 opacity-0'
        }`}
        aria-hidden="true"
      />

      <div
        className={`w-full transition-none ${isStickyWithBlur ? 'fixed top-0 z-50' : 'relative'}`}
      >
        <div
          className={`relative border-b transition-all duration-300 ease-out ${
            isStickyWithBlur
              ? 'border-white/20 bg-white/50 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] backdrop-blur-2xl backdrop-saturate-[200%] dark:border-white/[0.08] dark:bg-black/50 dark:shadow-[0_2px_20px_-5px_rgba(0,0,0,0.4)]'
              : 'border-transparent bg-transparent'
          } `}
        >
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transition-opacity duration-300 dark:via-blue-500/20 ${isStickyWithBlur ? 'opacity-100' : 'opacity-0'} `}
          />

          <Container>
            <header className="relative z-10 mx-auto flex items-baseline gap-3 px-2 py-2.5 sm:gap-4 sm:px-4 sm:py-3 md:items-center lg:pr-4 lg:pl-0 xl:px-0">
              <div className="flex shrink-0 items-center lg:flex-1 lg:justify-start">
                <Logo />
              </div>
              <div className="flex min-w-0 flex-1 justify-center lg:justify-end">
                <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:flex-nowrap lg:justify-end lg:gap-4">
                  <CurrentPlaying />
                  <SocialLinks />
                  <ThemeToggle />
                </nav>
              </div>
            </header>
          </Container>
        </div>
      </div>
    </>
  );
}
