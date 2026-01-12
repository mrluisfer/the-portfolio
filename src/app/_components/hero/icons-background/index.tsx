'use client';

import {
  Deno,
  Expressjs,
  Git,
  GitHub,
  JavaScript,
  Jest,
  Motion,
  NestJS,
  Nodejs,
  PostgreSQL,
  Prisma,
  Python,
  React as ReactIcon,
  Redux,
  Sass,
  TailwindCSS,
  TypeScript,
  Vite,
  Vitest,
} from '@/assets/icons/allIcons';
import '@/styles/icons-background.css';
import type { ComponentType, SVGProps } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

// Array of tech icons to display in the background
const techIcons: ComponentType<SVGProps<SVGSVGElement>>[] = [
  ReactIcon,
  TypeScript,
  JavaScript,
  Nodejs,
  Vite,
  NestJS,
  Git,
  TailwindCSS,
  Sass,
  PostgreSQL,
  Prisma,
  Redux,
  Jest,
  Vitest,
  Motion,
  Python,
  Expressjs,
  GitHub,
  Deno,
];

// Generate random icons ensuring no two consecutive icons are the same
function generateRandomIcons(count: number): ComponentType<SVGProps<SVGSVGElement>>[] {
  const result: ComponentType<SVGProps<SVGSVGElement>>[] = [];
  let lastIcon: ComponentType<SVGProps<SVGSVGElement>> | null = null;

  for (let i = 0; i < count; i++) {
    let randomIcon: ComponentType<SVGProps<SVGSVGElement>>;
    do {
      randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)];
    } while (randomIcon === lastIcon);

    result.push(randomIcon);
    lastIcon = randomIcon;
  }
  return result;
}

interface IconData {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  id: number;
}

export default function IconsBackground() {
  const [icons, setIcons] = useState<IconData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // Generate icons on mount (client-side only) - use useMemo-like pattern
  const generatedIcons = useMemo(
    () => generateRandomIcons(techIcons.length * 4),
    []
  );

  useEffect(() => {
    setIcons(generatedIcons.map((Icon, index) => ({ Icon, id: index })));
  }, [generatedIcons]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if desktop
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const iconElements = container.querySelectorAll<HTMLDivElement>('[data-icon]');
        const maxDistance = 200;

        iconElements.forEach((iconElement) => {
          const iconRect = iconElement.getBoundingClientRect();
          const iconX = iconRect.left + iconRect.width / 2 - rect.left;
          const iconY = iconRect.top + iconRect.height / 2 - rect.top;

          const distance = Math.hypot(mouseX - iconX, mouseY - iconY);
          const proximity = Math.max(0, 1 - distance / maxDistance) ** 2;

          iconElement.style.setProperty('--proximity', proximity.toFixed(3));
        });

        rafRef.current = null;
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      const iconElements = container.querySelectorAll<HTMLDivElement>('[data-icon]');
      iconElements.forEach((iconElement) => {
        iconElement.style.setProperty('--proximity', '0');
      });
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="icons-background-container pointer-events-none absolute inset-0 z-10 hidden content-center justify-center gap-6 p-[3%] sm:flex sm:flex-wrap md:gap-10"
    >
      {icons.map(({ Icon, id }) => (
        <div key={id} data-icon className="tech-icon pointer-events-auto">
          <Icon className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
