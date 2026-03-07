'use client';

import { cn } from '@/lib/utils';
import { ArrowLeftRightIcon } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { useTheme } from 'next-themes';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { type SVGProps } from 'react';
import { technologies } from './icons';
import TechnologyCard from './technology-card';

const LOOP_COPIES = 3;
const AUTO_SCROLL_RESUME_MS = 2200;
const AUTO_SCROLL_SPEED_PX_PER_MS = 0.04;

type ThemedTechnology = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  customGlowColor?: string;
  docs?: string;
  name: string;
};

const MemoTechnologyCard = memo(TechnologyCard);

export default function Technologies() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  const scrollerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const lastFrameTsRef = useRef<number | null>(null);
  const pauseUntilRef = useRef(0);
  const pointerIsDownRef = useRef(false);
  const autoUpdateRef = useRef(false);

  const themedTechnologies = useMemo<ThemedTechnology[]>(() => {
    return technologies.map(({ Icon, DarkIcon, ...rest }) => ({
      ...rest,
      Icon: theme === 'light' ? Icon : (DarkIcon ?? Icon),
    }));
  }, [theme]);

  const loopedTechnologies = useMemo(() => {
    return Array.from({ length: LOOP_COPIES }, (_, copyIndex) =>
      themedTechnologies.map((technology) => ({ ...technology, copyIndex }))
    ).flat();
  }, [themedTechnologies]);

  const pauseAutoScroll = useCallback((durationMs = AUTO_SCROLL_RESUME_MS) => {
    pauseUntilRef.current = performance.now() + durationMs;
  }, []);

  const normalizeScrollPosition = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const segmentWidth = scroller.scrollWidth / LOOP_COPIES;
    if (!Number.isFinite(segmentWidth) || segmentWidth <= 0) return;

    let next = scroller.scrollLeft;
    while (next < segmentWidth) next += segmentWidth;
    while (next >= segmentWidth * 2) next -= segmentWidth;

    if (next !== scroller.scrollLeft) {
      autoUpdateRef.current = true;
      scroller.scrollLeft = next;
      autoUpdateRef.current = false;
    }
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const setMiddleStart = () => {
      const segmentWidth = scroller.scrollWidth / LOOP_COPIES;
      if (!Number.isFinite(segmentWidth) || segmentWidth <= 0) return;
      autoUpdateRef.current = true;
      scroller.scrollLeft = segmentWidth;
      autoUpdateRef.current = false;
    };

    setMiddleStart();

    const resizeObserver = new ResizeObserver(() => {
      normalizeScrollPosition();
    });
    resizeObserver.observe(scroller);

    return () => {
      resizeObserver.disconnect();
    };
  }, [normalizeScrollPosition, themedTechnologies.length]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const step = (ts: number) => {
      const scroller = scrollerRef.current;
      if (!scroller) {
        frameRef.current = requestAnimationFrame(step);
        return;
      }

      if (lastFrameTsRef.current == null) {
        lastFrameTsRef.current = ts;
      }

      const deltaMs = Math.min(ts - (lastFrameTsRef.current ?? ts), 32);
      lastFrameTsRef.current = ts;

      normalizeScrollPosition();

      const shouldAutoScroll =
        !document.hidden && !pointerIsDownRef.current && ts >= pauseUntilRef.current;

      if (shouldAutoScroll) {
        autoUpdateRef.current = true;
        scroller.scrollLeft += deltaMs * AUTO_SCROLL_SPEED_PX_PER_MS;
        autoUpdateRef.current = false;
        normalizeScrollPosition();
      }

      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = null;
      lastFrameTsRef.current = null;
    };
  }, [normalizeScrollPosition, prefersReducedMotion]);

  const handleUserScroll = useCallback(() => {
    if (autoUpdateRef.current) return;
    pauseAutoScroll();
    normalizeScrollPosition();
  }, [normalizeScrollPosition, pauseAutoScroll]);

  return (
    <div className="mask-fade-x justify-center pt-[100px] sm:py-0 lg:py-12">
      <p className="text-muted-foreground mb-4 flex items-center justify-center gap-2 text-center text-xs sm:text-sm">
        <ArrowLeftRightIcon className="h-4 w-4" aria-hidden />
        Scroll manually. When idle, the carousel loops automatically.
      </p>

      <div
        ref={scrollerRef}
        role="region"
        aria-label="Technology grid carousel with infinite loop"
        tabIndex={0}
        onScroll={handleUserScroll}
        onWheel={() => pauseAutoScroll(2000)}
        onTouchStart={() => pauseAutoScroll(2800)}
        onKeyDown={() => pauseAutoScroll(2800)}
        onPointerDown={() => {
          pointerIsDownRef.current = true;
          pauseAutoScroll(3200);
        }}
        onPointerUp={() => {
          pointerIsDownRef.current = false;
          pauseAutoScroll(1800);
        }}
        onPointerCancel={() => {
          pointerIsDownRef.current = false;
          pauseAutoScroll(1800);
        }}
        className={cn(
          'focus-visible:ring-primary/40 focus-visible:ring-offset-background overflow-x-auto rounded-lg pb-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        )}
      >
        <ul
          role="list"
          className={cn(
            'mx-auto grid w-max min-w-full grid-flow-col gap-6 px-2 sm:px-4',
            'grid-rows-4'
          )}
        >
          {loopedTechnologies.map(({ name, Icon, customGlowColor, docs, copyIndex }) => (
            <li key={`${name}-${copyIndex}`} className="flex snap-start justify-center">
              <MemoTechnologyCard
                Icon={Icon}
                customGlowColor={customGlowColor}
                docs={docs}
                name={name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
