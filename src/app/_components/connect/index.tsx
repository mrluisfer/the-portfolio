'use client';
import SocialLinks from '@/components/social-links';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import ChangingText from './changing-text';

export default function Connect() {
  return (
    <div
      className="mb-12 flex flex-col items-center gap-4 px-4 pt-8"
      id={NAVIGATION_NAMES.CONNECT}
    >
      <ChangingText />
      <div className="flex w-full max-w-md flex-wrap items-center justify-center gap-3 sm:gap-4">
        <SocialLinks />
      </div>
    </div>
  );
}
