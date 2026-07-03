'use client';

import { type HTMLMotionProps, motion, useReducedMotion } from 'motion/react';
import { type ReactNode } from 'react';

type RevealProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode;
  /** Optional stagger offset in seconds (e.g. for adjacent reveals). */
  delay?: number;
};

/**
 * Unified scroll-reveal wrapper.
 *
 * Every top-level section on the page uses this so the entrance rhythm is
 * consistent from top to bottom: a subtle fade + rise, played once when the
 * block scrolls into view. Respects `prefers-reduced-motion`.
 */
export default function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
