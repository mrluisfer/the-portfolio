'use client';
import Container from '@/components/container';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { type HTMLMotionProps, motion } from 'motion/react';
import { type ReactNode } from 'react';
import Experience from './experience';
import Phrase from './phrase';
import Principles from './principles';
import Sharing from './sharing';

export default function Grid() {
  return (
    <Container asChild>
      <div id={NAVIGATION_NAMES.PRINCIPLES} className="mx-auto mt-0 h-auto p-6 sm:my-8 lg:py-0">
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-5">
          {/* Principles */}
          <Card className="w-full lg:col-span-2 lg:row-span-3">
            <Principles />
          </Card>

          {/* Experience */}
          <Card className="h-fit w-full lg:col-start-3 lg:row-span-4">
            <Experience />
          </Card>

          {/* Sharing */}
          <Card className="h-fit w-full md:w-fit md:justify-start lg:row-span-3 lg:row-start-4">
            <Sharing />
          </Card>

          {/* Phrase */}
          <Card className="w-full md:w-fit lg:col-start-2 lg:row-start-4">
            <Phrase />
          </Card>
        </div>
      </div>
    </Container>
  );
}

type CardProps = HTMLMotionProps<'div'> & { children: ReactNode; className?: string };

function Card({ children, className = '', ...props }: CardProps) {
  return (
    <motion.div
      initial={{ scale: 1, ...(typeof props.initial === 'object' ? props.initial : {}) }}
      whileHover={{ scale: 1.01 }}
      className={`group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-zinc-50 via-zinc-100/60 to-zinc-100/80 shadow-sm ring-1 ring-zinc-200/60 transition ring-inset hover:shadow-md lg:w-auto dark:from-zinc-900/50 dark:via-zinc-900/30 dark:to-zinc-950/60 dark:ring-white/10 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
