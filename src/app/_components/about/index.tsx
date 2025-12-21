'use client';
import { motion } from 'motion/react';

import Container from '@/components/container';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import craft from '@/lotties/craft.json';
import Lottie from 'lottie-react';
import { LayoutDashboardIcon, ServerIcon } from 'lucide-react';
import FocusedOn from './focused-on';

export default function About() {
  return (
    <Container asChild>
      <div
        className="px-6 py-16 text-center sm:px-10 sm:py-20 md:py-24"
        id={NAVIGATION_NAMES.ABOUT}
      >
        <span className="mb-6 block text-2xl opacity-60">👋 Hey, I'm Luis Alvarez</span>

        <motion.div
          className="my-6 text-5xl leading-tight font-semibold"
          initial={{
            opacity: 0.5,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
        >
          <p className="mb-3 font-bold">Full Stack Developer</p>
          <div className="mt-2 flex flex-wrap items-start justify-center gap-3 text-lg leading-relaxed">
            <div className="flex items-center gap-1">
              <div className="h-7 w-8">
                <Lottie animationData={craft} />
              </div>
              Crafting
            </div>{' '}
            both
            <span className="flex items-center gap-2 text-yellow-400">
              <LayoutDashboardIcon />
              Front-end
            </span>{' '}
            and
            <span className="flex items-center gap-2 text-violet-400">
              <ServerIcon />
              Back-end
            </span>{' '}
            solutions
          </div>
        </motion.div>

        <span className="mx-auto mt-8 block w-full max-w-[800px] text-lg leading-relaxed font-medium opacity-70 sm:text-xl lg:text-2xl">
          specialized in designing and building scalable, maintainable, user-centric web apps
          focused on
        </span>

        <div className="-mt-2">
          <FocusedOn />
        </div>
      </div>
    </Container>
  );
}
