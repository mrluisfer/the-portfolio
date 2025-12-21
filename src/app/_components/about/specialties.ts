import { type MotionStyle, type TargetAndTransition } from 'motion/react';
import { CgDesignmodo } from 'react-icons/cg';
import { FaRocket } from 'react-icons/fa6';
import { IoAccessibility } from 'react-icons/io5';
import { type IconType } from 'react-icons/lib';
import { SiFireship } from 'react-icons/si';

export type TSpecialty = {
  text: string;
  icon: IconType;
  styles: MotionStyle;
  whileInView?: TargetAndTransition;
};

export const specialties: TSpecialty[] = [
  {
    text: 'performance',
    icon: FaRocket,
    styles: {
      borderColor: '#D97706',
      background: '#FBBF24',
      color: '#92400E',
    },
    whileInView: {
      rotate: '-10deg',
      top: '-115px',
      left: '-80px',
    },
  },
  {
    text: 'accessibility',
    icon: IoAccessibility,
    styles: {
      borderColor: '#047857',
      background: '#34D399',
      color: '#065F46',
    },
    whileInView: {
      rotate: '-5deg',
      top: '-20px',
    },
  },
  {
    text: 'UI/UX',
    icon: CgDesignmodo,
    styles: {
      borderColor: '#2563EB',
      background: '#93C5FD',
      color: '#1E40AF',
    },
    whileInView: {
      rotate: '15deg',
      top: '-50px',
      left: '190px',
    },
  },
  {
    text: 'trends',
    icon: SiFireship,
    styles: {
      borderColor: '#DC2626',
      background: '#F87171',
      color: '#7F1D1D',
    },
    whileInView: {
      rotate: '25deg',
      left: '-50px',
      bottom: '-55px',
    },
  },
];
