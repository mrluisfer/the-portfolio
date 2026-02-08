'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  alt?: string;
  hoverClassName?: string;
  children: ReactNode;
};

export default function SocialLink({ href, alt, hoverClassName, children }: SocialLinkProps) {
  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <a
          href={href}
          aria-label={alt}
          title={alt}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-muted-foreground transition-all duration-200',
            'hover:scale-105 hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            hoverClassName
          )}
        >
          <span className="[&_svg]:size-5" aria-hidden>
            {children}
          </span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={8}>
        <p>{alt}</p>
      </TooltipContent>
    </Tooltip>
  );
}
