import { useHover } from '@/hooks/use-hover';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';
import { type Principle as TPrinciple, principles } from './principles-list';

export default function Principles() {
  const [ref, isHover] = useHover<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className="relative w-full flex-1 rounded-[inherit] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-3 sm:p-4 lg:p-0"
    >
      <motion.div
        className="absolute top-2 left-2 z-10 w-fit rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm sm:top-3 sm:left-3 lg:top-2 lg:left-2"
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

  // Mejores valores de opacidad y sombras
  const bgColor = `${color}20`; // 12.5% opacity para fondo
  const glowColor = `${color}60`; // 37.5% opacity para glow
  const shadow = `0 4px 30px -8px ${glowColor}, 0 0 40px -10px ${glowColor}`;

  return (
    <motion.li
      className="group relative min-h-[140px] w-full touch-manipulation rounded-2xl p-4 transition-all duration-200 will-change-transform sm:min-h-[160px] sm:p-5"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isHover ? 1.03 : 1,
        background: isHover ? bgColor : 'transparent',
        boxShadow: isHover ? shadow : 'none',
      }}
      transition={{
        duration: 0.2,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect backdrop */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl"
        style={{ background: color }}
        animate={{
          opacity: isHover ? 0.15 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Icon container */}
      <motion.div
        className="mb-2 h-7 w-7 sm:mb-3 sm:h-8 sm:w-8"
        animate={{
          scale: isHover ? 1.1 : 1,
          rotate: isHover ? 5 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Lottie animationData={icon} loop={isHover} />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-foreground mb-1 line-clamp-2 text-sm font-semibold transition-all will-change-transform sm:mb-1.5 sm:text-base"
        animate={{
          letterSpacing: isHover ? '0.02em' : '0em',
          color: isHover ? color : 'currentColor',
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-muted-foreground line-clamp-3 text-xs leading-relaxed sm:line-clamp-none sm:text-sm"
        animate={{
          opacity: isHover ? 1 : 0.7,
        }}
        transition={{ duration: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Decorative corner accent */}
      <motion.div
        className="absolute top-2 right-2 h-1 w-1 rounded-full sm:top-3 sm:right-3 sm:h-1.5 sm:w-1.5"
        style={{ background: color }}
        animate={{
          opacity: isHover ? 1 : 0,
          scale: isHover ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.li>
  );
}
