import { motion } from 'motion/react';

import { useCurrentTime } from '@/hooks/use-current-time';
import { getMonthById } from '@/utils/get-month';

export default function CurrentTime() {
  const { time, hour, minutes, meridiem } = useCurrentTime();
  const monthId = time.getMonth() + 1;
  const day = time.getDate();

  return (
    <motion.div className="hidden shrink-0 items-center gap-1.5 sm:flex sm:gap-2">
      <motion.p className="flex items-baseline text-xl font-bold tracking-tight text-blue-500 transition hover:text-blue-600 sm:text-2xl md:text-3xl lg:text-4xl lg:tracking-wider dark:text-blue-400 dark:hover:text-blue-300">
        {hour}:{minutes}
      </motion.p>
      <div className="text-xs opacity-80 transition hover:opacity-100 sm:text-sm">
        <p className="leading-tight lowercase">{meridiem}</p>
        <p className="leading-tight">
          {getMonthById(monthId)} {day}
        </p>
      </div>
    </motion.div>
  );
}
