import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const variants = [
  { text: 'alvarez', emoji: '👨‍💻', color: 'text-gray-900 dark:text-white' },
  {
    text: 'アルヴァレス',
    emoji: '🍜',
    color: 'text-pink-600 dark:text-pink-400',
    message: 'Konnichiwa!',
  }, // Japonés
  { text: '艾尔瓦雷斯', emoji: '🐉', color: 'text-red-600 dark:text-red-400', message: 'Nǐ hǎo!' }, // Chino
  { text: 'Альварез', emoji: '🪆', color: 'text-blue-700 dark:text-blue-400', message: 'Привет!' }, // Ruso
  {
    text: 'आल्वारेस',
    emoji: '🕉️',
    color: 'text-orange-600 dark:text-orange-400',
    message: 'Namaste!',
  }, // Hindi
  {
    text: '알바레스',
    emoji: '🐧',
    color: 'text-red-600 dark:text-red-400',
    message: 'T1 Fighting!',
  }, // Coreano
  { text: 'אלווארז', emoji: '✡️', color: 'text-blue-600 dark:text-blue-300', rtl: true }, // Hebreo
  { text: 'Άλβαρεθ', emoji: '🏛️', color: 'text-cyan-700 dark:text-cyan-400', message: 'Yassou!' }, // Griego
  {
    text: 'อัลวาเรซ',
    emoji: '🐘',
    color: 'text-yellow-700 dark:text-yellow-400',
    message: 'Sawasdee!',
  }, // Tailandés
  {
    text: 'الفاريز',
    emoji: '🕌',
    color: 'text-teal-700 dark:text-teal-400',
    rtl: true,
    message: 'Marhaba!',
  }, // Árabe
  {
    text: 'アルバレス',
    emoji: '🎌',
    color: 'text-rose-600 dark:text-rose-400',
    message: '{ code }',
  }, // Japonés (variante)
  {
    text: 'Алварес',
    emoji: '⚡',
    color: 'text-indigo-700 dark:text-indigo-400',
    message: 'Full Stack!',
  }, // Búlgaro/Serbio
];

export default function LastName() {
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVariantIndex((prevIndex) => (prevIndex + 1) % variants.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentVariant = variants[variantIndex];

  return (
    <div className="relative flex h-20 items-center justify-center opacity-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={variantIndex}
          className="absolute flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className={`flex items-center text-5xl will-change-[opacity] sm:text-6xl md:text-9xl ${currentVariant.color}`}
            style={{ gap: 0, direction: currentVariant.rtl ? 'rtl' : 'ltr' }}
            whileHover={{ gap: '0.5rem' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {currentVariant.text.split('').map((letter, id) => (
              <motion.span
                key={id}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: id * 0.05 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>

          {/* Easter egg: emoji y mensaje */}
          {(currentVariant.emoji || currentVariant.message) && (
            <motion.div
              className="flex items-center gap-2 text-sm font-medium opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3 }}
            >
              {currentVariant.emoji && (
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {currentVariant.emoji}
                </motion.span>
              )}
              {currentVariant.message && (
                <motion.span
                  className={currentVariant.color}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {currentVariant.message}
                </motion.span>
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
