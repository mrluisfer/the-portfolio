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
            : 'border-transparent bg-transparent'
        } `}
      >
        <Container>
          <header className="relative z-10 mx-auto flex items-center gap-3 px-2 py-2.5 sm:gap-4 sm:px-4 sm:py-3 lg:pr-4 lg:pl-0 xl:px-0">
            <div className="flex shrink-0 items-center lg:flex-1 lg:justify-start">
              <Logo />
            </div>
            <div className="flex min-w-0 flex-1 justify-end">
              <nav className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <CurrentPlaying />
                {/* Full social row: shown only where there's room; also available in the Connect section */}
                <div className="hidden items-center gap-2 lg:flex lg:gap-4">
                  <SocialLinks />
                </div>
                <ThemeToggle />
              </nav>
            </div>
          </header>
        </Container>
      </div>
    </div>
  );
}
