'use client';

import { startViewTransitionWithCircle } from '@/lib/view-transition';
import { Moon, Sun } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useRef } from 'react';

import { cn } from '@/lib/utils';

const TRACK_WIDTH = 80;
const PADDING = 4;
const SLOT_WIDTH = (TRACK_WIDTH - PADDING * 2) / 2; // 36px

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isDark = resolvedTheme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  const label = isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';

  const handleClick = () => {
    startViewTransitionWithCircle(() => setTheme(nextTheme), buttonRef.current);
  };

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className={cn(
        'relative flex h-10 items-center rounded-full',
        'border border-border/80 bg-muted/50 shadow-sm',
        'hover:bg-muted/80 dark:border-white/10 dark:bg-muted/30 dark:hover:bg-muted/50',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'min-h-[44px] sm:min-h-10'
      )}
      style={{ width: TRACK_WIDTH }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Sliding thumb - same size as one slot, centered in slot */}
      <motion.span
        className="absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border/50 dark:ring-white/10"
        style={{
          left: PADDING,
          width: SLOT_WIDTH,
          height: SLOT_WIDTH,
        }}
        animate={{
          x: isDark ? SLOT_WIDTH : 0,
        }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 400, damping: 30 }
        }
        aria-hidden
      />

      {/* Two slots: icons perfectly centered in each half (w-9 = 36px = SLOT_WIDTH) */}
      <span className="relative z-10 flex w-full px-1">
        <span
          className={cn(
            'flex w-9 flex-1 items-center justify-center transition-colors',
            !isDark && 'text-foreground',
            isDark && 'text-muted-foreground/60'
          )}
          aria-hidden
        >
          <Sun className="size-4 shrink-0 sm:size-[1.15rem]" />
        </span>
        <span
          className={cn(
            'flex w-9 flex-1 items-center justify-center transition-colors',
            isDark && 'text-foreground',
            !isDark && 'text-muted-foreground/60'
          )}
          aria-hidden
        >
          <Moon className="size-4 shrink-0 sm:size-[1.15rem]" />
        </span>
      </span>

      <span className="sr-only">{label}</span>
    </motion.button>
  );
}
