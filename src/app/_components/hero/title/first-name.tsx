'use client';

import { PixelPerfect } from '@/assets/icons/allIcons';
import { cn } from '@/lib/utils';
import { ThemeKey } from '@/types/theme-key';
import { type RemixiconComponentType, RiCodeAiFill, RiMusicAiLine } from '@remixicon/react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { ComponentType, type ReactNode, useRef } from 'react';
import { RiGameLine } from 'react-icons/ri';
import { RxSpeakerLoud } from 'react-icons/rx';

type ThemeName = 'light' | 'dark';

type ThemeHexMap = Partial<Record<ThemeName, `#${string}`>> & {
  fallback: `#${string}`;
};

function resolveThemeHex(map: ThemeHexMap, resolved: 'light' | 'dark') {
  return map[resolved] ?? map.fallback;
}

type IconComponent = ComponentType<{
  size?: number;
  color?: string;
  className?: string;
}>;

export default function FirstName() {
  return (
    <motion.div
      className="relative flex items-center text-7xl sm:text-8xl md:text-9xl"
      style={{ gap: '1rem' }}
      whileHover={{ gap: '2rem' }}
    >
      <SpeakerName />

      <Letter
        icon={RiCodeAiFill as unknown as IconComponent}
        hoveredColors={{ light: '#074799', dark: '#7BB6FF', fallback: '#0A62D0' }}
      >
        L
      </Letter>

      <Letter
        icon={RiGameLine as unknown as IconComponent}
        hoveredColors={{ light: '#FF7F3E', dark: '#FFB38A', fallback: '#FF7F3E' }}
      >
        U
      </Letter>

      <Letter
        icon={RiMusicAiLine as unknown as IconComponent}
        hoveredColors={{ light: '#8B5DFF', dark: '#B299FF', fallback: '#8B5DFF' }}
      >
        I
      </Letter>

      <Letter
        icon={PixelPerfect as unknown as RemixiconComponentType}
        hoveredColors={{ light: '#118B50', dark: '#4BD399', fallback: '#118B50' }}
      >
        S
      </Letter>
    </motion.div>
  );
}

function Letter({
  children,
  icon,
  hoveredColors,
  className = '',
}: {
  children: ReactNode;
  icon: IconComponent | RemixiconComponentType;
  hoveredColors: ThemeHexMap;
  className?: string;
}) {
  const { theme } = useTheme();

  const Icon = icon;
  const baseTextByTheme: Record<'light' | 'dark', string> = {
    light: '#000000',
    dark: '#FFFFFF',
  };

  const hoverHex = resolveThemeHex(hoveredColors, theme as ThemeKey);

  return (
    <motion.span
      className={cn('group flex flex-col items-center justify-center uppercase', className)}
      whileHover={{ color: hoverHex }}
      style={{ color: baseTextByTheme[theme as ThemeKey] }}
    >
      <motion.span
        className="opacity-0 transition group-hover:opacity-100"
        initial={{ rotateX: '45deg' }}
        animate={{ rotateX: '0' }}
      >
        <Icon size={25} color={hoverHex} />
      </motion.span>
      {children}
    </motion.span>
  );
}

function SpeakerName() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const play = async () => {
    await audioRef.current?.play();
  };

  return (
    <motion.div
      className="absolute top-12 -right-5 -rotate-12 cursor-pointer transition"
      style={{ opacity: 0.3, scale: 1 }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={play}
    >
      <audio src={'/first-name.mp3'} ref={audioRef} />
      <RxSpeakerLoud size={20} />
    </motion.div>
  );
}
