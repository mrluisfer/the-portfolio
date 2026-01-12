'use client';

import '@/styles/hero-pattern.scss';
import Header from '../header';
import IconsBackground from './icons-background';
import Title from './title';

export default function Hero() {
  return (
    <div className="hero-pattern relative h-[600px] pt-5 inset-shadow-white">
      <Header />
      <div className="relative h-full w-full">
        <IconsBackground />
        <Title />
      </div>
    </div>
  );
}
