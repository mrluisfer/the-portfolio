import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const variants = ['alvarez', 'アルヴァレス', '艾尔瓦雷斯', 'Альварез', 'आल्वारेस'];

export default function LastName() {
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVariantIndex((prevIndex) => (prevIndex + 1) % variants.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-20 items-center justify-center opacity-50">
      <AnimatePresence mode="wait">
        <motion.p
          key={variantIndex}
          className="absolute flex items-center text-5xl will-change-[opacity] sm:text-6xl md:text-9xl"
          style={{ gap: 0 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          whileHover={{ gap: '0.5rem' }}
        >
          {variants[variantIndex].split('').map((letter, id) => (
            <motion.span key={id}>{letter}</motion.span>
          ))}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
