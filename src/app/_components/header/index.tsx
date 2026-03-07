'use client';

import Container from '@/components/container';
import SocialLinks from '@/components/social-links';
import { ThemeToggle } from '@/components/theme-toggle';
import { useEffect, useState } from 'react';
import CurrentPlaying from './current-playing';
import Logo from './logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full transition-none">
      <div
        className={`relative border-b transition-all duration-300 ease-out ${
          isScrolled
            ? 'border-white/20 bg-white/50 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] backdrop-blur-2xl backdrop-saturate-[200%] dark:border-white/[0.08] dark:bg-black/50 dark:shadow-[0_2px_20px_-5px_rgba(0,0,0,0.4)]'
            : 'border-transparent bg-white/15 dark:bg-black/15'
        } `}
      >
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transition-opacity duration-300 dark:via-blue-500/20 ${isScrolled ? 'opacity-100' : 'opacity-0'} `}
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
  );
}
