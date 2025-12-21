import catAnimationData from '@/lotties/cat.json';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'motion/react';
import { useRef } from 'react';

export default function Logo() {
  const logoRef = useRef<LottieRefCurrentProps>(null);

  return (
    <motion.div className="group flex cursor-default items-center gap-2">
      <div className="relative h-20 w-20 overflow-hidden">
        <Lottie
          lottieRef={logoRef}
          animationData={catAnimationData}
          className="absolute left-0 h-fit w-fit scale-150 transform"
          autoplay
          loop
        />
      </div>
      <motion.p className="hidden text-2xl font-bold tracking-wider text-blue-500 transition-all duration-300 ease-in-out group-hover:tracking-widest sm:flex dark:text-blue-400">
        Hello
        <span className="hidden w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[7.5rem] md:inline-block">
          ooooooo
        </span>
        !
      </motion.p>
    </motion.div>
  );
}
