'use client';

import { cn } from '@/lib/utils';
import { ArrowLeftIcon, HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SimpleNavigation({
  className,
  backUrl = '/',
  label,
  showHomeIcon = false,
}: {
  className?: string;
  backUrl?: string;
  label?: string;
  showHomeIcon?: boolean;
}) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Don't render if we're already at the destination
  if (pathname === backUrl || isHome) {
    return null;
  }

  const displayLabel = label || (backUrl === '/' ? 'Home' : 'Back');
  const Icon = showHomeIcon && backUrl === '/' ? HomeIcon : ArrowLeftIcon;

  return (
    <Link
      href={backUrl}
      className={cn(
        'group fixed right-6 bottom-6 z-50 rounded-full transition-all duration-300 ease-out',
        'focus-visible:ring-primary focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        'sm:right-8 sm:bottom-8',
        className
      )}
      aria-label={`Navigate to ${displayLabel}`}
    >
      <nav
        className={cn(
          'flex items-center gap-2.5 rounded-full border border-white/10 bg-black/70 px-4 py-2.5 shadow-lg backdrop-blur-xl backdrop-saturate-150',
          'transition-all duration-300 ease-out',
          'hover:shadow-primary/10 hover:scale-[1.02] hover:border-white/20 hover:bg-black/80 hover:shadow-2xl',
          'active:scale-[0.98]',
          'sm:px-5 sm:py-3',
          // Dark mode optimizations
          'dark:border-white/5 dark:bg-black/60 dark:hover:border-white/15 dark:hover:bg-black/70'
        )}
      >
        {/* Icon with animation */}
        <div
          className={cn(
            'flex items-center justify-center rounded-full bg-white/5 p-1.5 transition-all duration-300',
            'group-hover:-translate-x-0.5 group-hover:scale-110 group-hover:bg-white/10',
            'group-active:scale-95',
            'sm:p-2'
          )}
        >
          <Icon
            className={cn(
              'h-4 w-4 text-white/90 transition-all duration-300',
              'group-hover:text-white',
              'sm:h-4 sm:w-4'
            )}
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </div>

        {/* Label with improved typography */}
        <span
          className={cn(
            'text-sm font-semibold text-white/90 transition-all duration-300',
            'group-hover:translate-x-0.5 group-hover:text-white',
            'sm:text-base',
            // Ensure proper touch target size
            'min-w-[3rem] text-center',
            'tracking-wide'
          )}
        >
          {displayLabel}
        </span>

        {/* Subtle glow effect on hover */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300',
            'from-primary/20 via-primary/10 bg-gradient-to-r to-transparent',
            'group-hover:opacity-100',
            'blur-xl'
          )}
          aria-hidden="true"
        />
      </nav>
    </Link>
  );
}
