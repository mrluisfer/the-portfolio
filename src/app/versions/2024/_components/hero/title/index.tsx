'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import FirstName from './first-name';
import LastName from './last-name';

export default function Title() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center pt-[85px] sm:pt-[50px]">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col items-center px-5 font-bold tracking-wide uppercase transition will-change-transform select-none"
        initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          perspective: '1000px',
          gap: '2rem',
        }}
      >
        <FirstName />
        <LastName />
      </motion.div>
    </div>
  );
}
