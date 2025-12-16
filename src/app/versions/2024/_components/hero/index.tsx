'use client';

import '@/styles/hero-pattern.scss';
import Header from '../header';
import Technologies from './technologies';
import Title from './title';

export default function Hero() {
  return (
    <div className="hero-pattern relative h-[600px] pt-5 inset-shadow-white">
      <Header />
      <div className="h-full w-full">
        <Technologies />
        <Title />
      </div>
    </div>
  );
}
