'use client';
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
      className="general-pattern relative my-10 bg-gradient-to-br px-5 py-16 sm:px-0 sm:py-20"
      id={NAVIGATION_NAMES.TERMINAL}
    >
      <div className="group relative z-30 mx-auto rounded-lg transition-transform duration-300 ease-out hover:-translate-y-1 md:w-[600px]">
        <ShadowBox className="transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-neutral-400/40 dark:group-hover:shadow-black/60">
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
      </div>
    </div>
  );
}
