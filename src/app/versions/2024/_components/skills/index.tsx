import Container from '@/components/container';
import Title from '@/components/title';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { cn } from '@/lib/utils';
import { CpuIcon, FlameIcon } from 'lucide-react';
import Technologies from './technologies';

export default function Skills() {
  return (
    <Container>
      <div
        className={cn('technologies-shadow-y general-pattern my-6 p-10')}
        id={NAVIGATION_NAMES.SKILLS}
      >
        <Title>
          <h1 className="absolute -top-[20px] z-20 drop-shadow-2xl lg:-top-[50px]">
            Building projects with the most{' '}
            <span
              className={
                'inline-flex items-center gap-1 border-b-2 border-transparent transition hover:border-orange-400'
              }
            >
              <CpuIcon className={'text-orange-400'} />
              Powerful
            </span>{' '}
            and{' '}
            <span
              className={
                'inline-flex items-center gap-1 border-b-2 border-transparent transition hover:border-red-400'
              }
            >
              <FlameIcon className={'text-red-400'} />
              Trending
            </span>{' '}
            <span
              className={
                'border-b-2 border-transparent text-yellow-400 transition hover:border-yellow-400'
              }
            >
              Frontend
            </span>{' '}
            and{' '}
            <span
              className={
                'border-b-2 border-transparent text-violet-400 transition hover:border-violet-400'
              }
            >
              Backend
            </span>{' '}
            technologies.
          </h1>
        </Title>
        <Technologies />
      </div>
    </Container>
  );
}
