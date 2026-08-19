import { useHover } from '@/hooks/use-hover';
import { Lottie } from 'lottie-react';
import { motion } from 'motion/react';
import { type Principle as TPrinciple, principles } from './principles-list';

export default function Principles() {
  const [ref, isHover] = useHover<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className="relative w-full flex-1 rounded-[inherit] p-3 sm:p-4 lg:p-0"
    >
      <motion.div
        className="absolute top-2 left-2 z-10 w-fit rounded-xl bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm sm:top-3 sm:left-3 lg:top-2 lg:left-2 dark:bg-white dark:text-zinc-900"
        initial={{ opacity: 0, y: -5 }}
        animate={{
          opacity: isHover ? 1 : 0,
          y: isHover ? 0 : -5,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        Principles
      </motion.div>
      <ul className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-3 px-1 pt-10 sm:gap-4 sm:px-2 sm:pt-12 lg:pt-8 lg:pl-2">
        {principles.map((principle, index) => (
          <Principle key={principle.title} principle={principle} index={index} />
        ))}
      </ul>
    </motion.div>
  );
}

function Principle({ principle, index }: { principle: TPrinciple; index: number }) {
  const [ref, isHover] = useHover<HTMLLIElement>();

  const { title, icon, description, color } = principle;

  // Neutral, homogeneous hover surface — identity stays in the icon + title accent
  const bgColor = 'rgba(113, 113, 122, 0.06)'; // subtle zinc veil, works on light & dark

  return (
    <motion.li
      className="group relative min-h-[140px] w-full touch-manipulation rounded-2xl p-4 sm:min-h-[160px] sm:p-5"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        background: isHover ? bgColor : 'rgba(113, 113, 122, 0)',
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Icon container */}
      <motion.div
        className="mb-2 h-7 w-7 sm:mb-3 sm:h-8 sm:w-8"
        animate={{ scale: isHover ? 1.05 : 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Lottie src={icon} loop={isHover} />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-foreground mb-1 line-clamp-2 text-sm font-semibold sm:mb-1.5 sm:text-base"
        animate={{ color: isHover ? color : 'currentColor' }}
        transition={{ duration: 0.35 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-muted-foreground line-clamp-3 text-xs leading-relaxed sm:line-clamp-none sm:text-sm"
        animate={{ opacity: isHover ? 1 : 0.75 }}
        transition={{ duration: 0.35 }}
      >
        {description}
      </motion.p>

      {/* Decorative corner accent */}
      <motion.div
        className="absolute top-2 right-2 h-1 w-1 rounded-full sm:top-3 sm:right-3 sm:h-1.5 sm:w-1.5"
        style={{ background: color }}
        animate={{ opacity: isHover ? 0.8 : 0 }}
        transition={{ duration: 0.35 }}
      />
    </motion.li>
  );
}
