import clsx from 'clsx';
import { type ReactNode } from 'react';

const ShadowBox = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={clsx(
        'relative rounded-lg bg-white shadow-xl shadow-neutral-300/50 transition-shadow duration-500 dark:bg-gray-900 dark:shadow-black/50',
        className
      )}
    >
      {children}
    </div>
  );
};

export default ShadowBox;
