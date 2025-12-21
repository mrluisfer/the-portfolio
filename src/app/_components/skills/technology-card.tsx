'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { getGlowColor } from '@/utils/get-glow-color';
import { type MotionStyle, motion } from 'motion/react';
import Link from 'next/link';
import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { type SvglIcon } from './icons';

type Props = {
  Icon?: SvglIcon;
  customGlowColor?: string;
  docs?: string;
  name?: string;
};

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const HOVER = { scale: 1.1 } as const;
const TAP = { scale: 0.9 } as const;

const MotionLink = motion.create(Link);

function TechnologyCardBase({ Icon, customGlowColor, docs, name }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastColorRef = useRef<string | undefined>(undefined);

  const [autoGlow, setAutoGlow] = useState<string | undefined>(undefined);

  const glowColor = customGlowColor ?? autoGlow;

  useIsoLayoutEffect(() => {
    if (!Icon || customGlowColor) return;

    rafRef.current = requestAnimationFrame(() => {
      try {
        const color = getGlowColor(svgRef);
        if (color !== lastColorRef.current) {
          lastColorRef.current = color;
          setAutoGlow(color);
        }
      } catch {
        /* noop */
      }
    });

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [Icon, customGlowColor]);

  const cardStyle: MotionStyle = {
    '--glow-color': glowColor,
  } as MotionStyle;

  return (
    <Tooltip delayDuration={800}>
      <TooltipTrigger>
        <MotionLink
          className="technology-card-glow relative grid h-24 w-24 place-items-center rounded-xl border-0 bg-transparent backdrop-blur-xl transition-colors hover:border-2 sm:border sm:bg-neutral-200 dark:bg-neutral-950"
          style={cardStyle}
          whileHover={Icon ? { ...HOVER, borderColor: glowColor ?? '#d4d4d4' } : undefined}
          whileTap={Icon ? TAP : undefined}
          href={docs ?? '#'}
          target={docs ? '_blank' : undefined}
          rel={docs ? 'noopener noreferrer' : undefined}
        >
          <div className="relative z-10 flex items-center justify-center rounded-xl bg-transparent text-4xl sm:size-fit sm:bg-neutral-200 md:size-full dark:bg-neutral-950">
            {Icon ? <Icon ref={svgRef} /> : null}
          </div>
        </MotionLink>
      </TooltipTrigger>
      <TooltipContent className="text-white">{name}</TooltipContent>
    </Tooltip>
  );
}

function areEqual(prev: Props, next: Props) {
  return prev.Icon === next.Icon && prev.customGlowColor === next.customGlowColor;
}

export default memo(TechnologyCardBase, areEqual);
