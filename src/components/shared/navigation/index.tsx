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

type IndicatorLayout = { left: number; width: number; top: number; height: number };

export default function Navigation() {
  const prefersReducedMotion = useReducedMotion();
  const listContainerRef = React.useRef<HTMLDivElement>(null);
  const [indicatorLayout, setIndicatorLayout] = React.useState<IndicatorLayout | null>(null);

  const { scrollY } = useScroll();
  const [showToTop, setShowToTop] = React.useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowToTop(latest > 200);
  });

  const updateIndicator = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const container = listContainerRef.current;
    if (!container) return;
    const linkRect = link.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setIndicatorLayout({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      top: linkRect.top - containerRect.top,
      height: linkRect.height,
    });
  }, []);

  const clearIndicator = React.useCallback(() => {
    setIndicatorLayout(null);
  }, []);

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
          'shadow-primary/5 ring-primary/10 border-white/20 bg-white/80 ring-1',
          'hover:border-primary/30 hover:shadow-primary/15 hover:ring-primary/20 hover:shadow-2xl',
          // Dark: glass oscuro tipo simple-navigation
          'dark:ring-primary/15 dark:border-white/10 dark:bg-black/70',
          'dark:hover:border-primary/40 dark:hover:ring-primary/25'
        )}
      >
        {/* Glow neón al hover (como simple-navigation) */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 sm:rounded-full',
            'from-primary/25 via-primary/15 bg-gradient-to-r to-transparent',
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
                'hover:shadow-primary/30 hover:ring-primary/30 hover:shadow-lg hover:ring-1',
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

        <div
          ref={listContainerRef}
          className="relative z-10 flex min-w-0 flex-1 items-center"
          onMouseLeave={clearIndicator}
        >
          {/* Indicador que se desliza de un ítem a otro al hacer hover */}
          <AnimatePresence>
            {indicatorLayout && (
              <motion.span
                className={cn(
                  'pointer-events-none absolute rounded-full',
                  'bg-primary/15 dark:bg-white/10',
                  'ring-primary/20 ring-1 dark:ring-white/15'
                )}
                aria-hidden
                initial={false}
                animate={{
                  left: indicatorLayout.left,
                  width: indicatorLayout.width,
                  top: indicatorLayout.top,
                  height: indicatorLayout.height,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  type: prefersReducedMotion ? 'tween' : 'spring',
                  stiffness: 400,
                  damping: 30,
                  duration: prefersReducedMotion ? 0.01 : undefined,
                }}
                style={{ willChange: prefersReducedMotion ? 'auto' : 'left, width' }}
              />
            )}
          </AnimatePresence>

          <ul
            className="flex w-full items-center gap-1.5 overflow-x-auto overscroll-x-contain scroll-smooth text-sm [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
            role="menubar"
          >
            {navigationItems.map((item) => (
              <li key={item} role="none">
                <motion.a
                  role="menuitem"
                  href={`/#${item}`}
                  onClick={handleNavigationClick}
                  onMouseEnter={updateIndicator}
                  className={cn(
                    'relative z-10 block min-w-[88px] rounded-full px-3 py-2.5 text-center capitalize transition-colors duration-200 select-none',
                    'text-muted-foreground hover:text-foreground',
                    'dark:text-white/80 dark:hover:text-white',
                    'focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                    'active:scale-[0.98]',
                    'flex min-h-[44px] items-center justify-center sm:min-h-[40px]'
                  )}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
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
