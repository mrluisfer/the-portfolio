'use client';

import Container from '@/components/container';
import SocialLinks from '@/components/social-links';
import { ThemeToggle } from '@/components/theme-toggle';
import { useEffect, useState } from 'react';
import CurrentPlaying from './current-playing';
import CurrentTime from './current-time';
import Logo from './logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Check initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Placeholder para mantener el espacio cuando el header sea fixed */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isScrolled ? 'h-[56px] opacity-100 sm:h-[64px]' : 'h-0 opacity-0'
        }`}
        aria-hidden="true"
      />

      <div
        className={`w-full transition-none ${
          isScrolled ? 'fixed top-0 z-50' : 'relative'
        }`}
      >
        <div
          className={`
            relative border-b transition-all duration-300 ease-out
            ${
              isScrolled
                ? 'border-white/20 bg-white/50 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] backdrop-blur-2xl backdrop-saturate-[200%] dark:border-white/[0.08] dark:bg-black/50 dark:shadow-[0_2px_20px_-5px_rgba(0,0,0,0.4)]'
                : 'border-transparent bg-transparent'
            }
          `}
        >
          {/* Gradient border superior sutil */}
          <div
            className={`
              pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transition-opacity duration-300 dark:via-blue-500/20
              ${isScrolled ? 'opacity-100' : 'opacity-0'}
            `}
          />

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
        </div>
      </div>
    </>
  );
}
