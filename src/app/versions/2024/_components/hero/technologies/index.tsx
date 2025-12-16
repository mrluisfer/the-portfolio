import technologies from '@/constants/technologies';
import { motion } from 'motion/react';

const MarqueeAnimation = () => {
  return (
    <div className="absolute top-20 bottom-0 hidden h-full w-full overflow-hidden select-none sm:block sm:w-full lg:w-screen">
      <svg
        className="scale-150 rotate-45 sm:scale-100 sm:rotate-0 md:scale-110 md:pl-[100px] lg:scale-125"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2530.7 740.4"
      >
        <defs>
          <mask id="marqueeMask">
            <rect x="0" y="0" width="2530.7" height="740.4" fill="white" />
          </mask>
        </defs>
        <g mask="url(#marqueeMask)">
          <motion.text
            className="text-5xl font-semibold opacity-20 sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl"
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            <textPath fill="currentColor" xlinkHref="#start" startOffset="0">
              {technologies.join(' - ')}
            </textPath>
          </motion.text>
        </g>
        <path
          id="start"
          stroke="currentColor"
          strokeWidth="0"
          fill="none"
          d="M0.29 193.68 C244.36 193.68 298.61 497.83 539.27 489.34 704.88 464.85 736.35 221.77 1038.78 221.77 1282.85 221.77 1347.1 542.91 1589.76 516.62 1780.25 496.03 1833.21 282.54 2003.81 253.25 2246.97 208.68 2312.12 574.4 2554.78 548.11"
        />
      </svg>
    </div>
  );
};

export default MarqueeAnimation;
