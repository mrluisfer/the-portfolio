'use client';
import { motion } from 'motion/react';
import { FiMaximize2 } from 'react-icons/fi';
import { GoDash } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { type IconType } from 'react-icons/lib';

import ShadowBox from '@/components/shadow-box';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import 'src/styles/general-pattern.scss';
import Content from './content';

function TerminalDot({ color, Icon }: { color: string; Icon?: IconType }) {
  const IconComponent = Icon || (() => null);
  return (
    <div
      className={`group flex h-3 w-3 items-center justify-center rounded-full active:scale-95 ${color}`}
    >
      <IconComponent className="text-gray-600 opacity-0 transition group-hover:opacity-70" />
    </div>
  );
}

export default function Terminal() {
  return (
    <div
      className="general-pattern relative my-[100px] bg-gradient-to-br px-5 py-[200px] sm:px-0"
      id={NAVIGATION_NAMES.TERMINAL}
    >
      <motion.div className="mx-auto rounded-lg shadow-2xl shadow-neutral-200 md:w-[600px]">
        <ShadowBox>
          <header className="relative flex items-center rounded-t-lg bg-neutral-200 px-4 py-2 transition hover:brightness-95 dark:bg-neutral-800">
            <div className="absolute flex items-center gap-2">
              <TerminalDot color="bg-red-400" Icon={IoClose} />
              <TerminalDot color="bg-yellow-400" Icon={GoDash} />
              <TerminalDot color="bg-green-400" Icon={FiMaximize2} />
            </div>
            <p className="mx-auto font-mono opacity-50 dark:text-neutral-400">Terminal</p>
          </header>
          <div className="rounded-b-lg bg-neutral-100 px-4 py-4 dark:bg-neutral-900">
            <Content />
          </div>
        </ShadowBox>
      </motion.div>
    </div>
  );
}
