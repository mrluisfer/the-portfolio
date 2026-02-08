'use client';

import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { cn } from '@/lib/utils';
import { ArrowUpIcon } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react';
import React from 'react';

const navigationItems = Object.values(NAVIGATION_NAMES);

export default function Navigation() {
  // Respeta preferencias de accesibilidad
  const prefersReducedMotion = useReducedMotion();

  // Mostrar el botón "arriba" cuando haya desplazamiento
  const { scrollY } = useScroll();
  const [showToTop, setShowToTop] = React.useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowToTop(latest > 200);
  });

  const handleNavigationClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const targetId = href?.startsWith('/#') ? href.slice(2) : href?.replace('#', '');
      if (!targetId) return;

      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        history.replaceState(null, '', `/#${targetId}`);
      }
    },
    [prefersReducedMotion]
  );

  const handleScrollTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [prefersReducedMotion]);

  return (
    <nav
      className="fixed inset-x-0 bottom-[env(safe-area-inset-bottom,0px)] z-50 mb-4 hidden items-center justify-center px-3 pb-[calc(env(safe-area-inset-bottom,0px)/2)] sm:flex"
      aria-label="Navegación principal"
    >
      {/* Pill: estilo glass con neón, similar a simple-navigation */}
      <div
        className={cn(
          'group/pill relative flex w-full max-w-sm items-center gap-3 rounded-2xl px-3 py-2 shadow-lg transition-all duration-300 ease-out',
          'border backdrop-blur-xl backdrop-saturate-150',
          'sm:w-auto sm:max-w-[720px] sm:rounded-full sm:px-4 sm:py-2.5 md:max-w-[800px] lg:max-w-[1000px]',
          // Light: glass sutil + neón
          'border-white/20 bg-white/80 shadow-primary/5 ring-1 ring-primary/10',
          'hover:border-primary/30 hover:shadow-primary/15 hover:shadow-2xl hover:ring-primary/20',
          // Dark: glass oscuro tipo simple-navigation
          'dark:border-white/10 dark:bg-black/70 dark:ring-primary/15',
          'dark:hover:border-primary/40 dark:hover:ring-primary/25'
        )}
      >
        {/* Glow neón al hover (como simple-navigation) */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 sm:rounded-full',
            'bg-gradient-to-r from-primary/25 via-primary/15 to-transparent',
            'group-hover/pill:opacity-100'
          )}
          aria-hidden
        />
        <AnimatePresence mode="wait">
          {showToTop && (
            <motion.button
              key="goToTop"
              type="button"
              onClick={handleScrollTop}
              className={cn(
                'relative z-10 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 ease-out',
                'bg-muted/80 text-foreground hover:bg-primary/20 hover:text-primary',
                'hover:shadow-lg hover:shadow-primary/30 hover:ring-1 hover:ring-primary/30',
                'dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white',
                'focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                'lg:flex'
              )}
              title="Ir arriba"
              aria-label="Ir al comienzo de la página"
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 6 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpIcon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            </motion.button>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex min-w-0 flex-1 items-center">
          <ul
            className="flex w-full items-center gap-1.5 overflow-x-auto overscroll-x-contain scroll-smooth text-sm [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
            role="menubar"
          >
            {navigationItems.map((item) => (
              <li key={item} role="none">
                <motion.a
                  role="menuitem"
                  onClick={handleNavigationClick}
                  href={`/#${item}`}
                  className={cn(
                    'group/link block min-w-[88px] rounded-full px-3 py-2.5 text-center capitalize transition-all duration-200 ease-out select-none',
                    'text-muted-foreground hover:text-foreground hover:scale-[1.02]',
                    'bg-transparent hover:bg-primary/10',
                    'border border-transparent hover:border-primary/30',
                    'hover:shadow-lg hover:shadow-primary/25 hover:ring-1 hover:ring-primary/25',
                    'dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10',
                    'focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                    'active:scale-[0.98]',
                    // Touch target mínimo 44px
                    'flex min-h-[44px] items-center justify-center sm:min-h-[40px]'
                  )}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
