import { motion } from 'motion/react';

import { useCurrentTime } from '@/hooks/use-current-time';
import { getMonthById } from '@/utils/get-month';

export default function CurrentTime() {
  const { time, hour, minutes, meridiem } = useCurrentTime();
  const monthId = time.getMonth() + 1;
  const day = time.getDate();

  return (
    <motion.div className="hidden items-center gap-1 sm:flex">
      <motion.p className="flex items-center text-4xl font-bold tracking-wider text-blue-500 transition hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
        {hour}:{minutes}
      </motion.p>
      <div className="text-sm opacity-80 transition hover:opacity-100">
        <p className="lowercase">{meridiem}</p>
        <p>
          {getMonthById(monthId)} {day}
        </p>
      </div>
    </motion.div>
  );
}
