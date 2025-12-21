'use client';

import { divideArray } from '@/utils/divideArray';
import { useTheme } from 'next-themes';
import { memo, ReactNode, useMemo, useSyncExternalStore } from 'react';

const mqlCache = new Map<string, MediaQueryList>();

function getMql(query: string) {
  if (typeof window === 'undefined') return null;
  const cached = mqlCache.get(query);
  if (cached) return cached;
  const mql = window.matchMedia(query);
  mqlCache.set(query, mql);
  return mql;
}

function subscribeMql(query: string, callback: () => void) {
  const mql = getMql(query);
  if (!mql) return () => {};

  const handler = () => callback();

  if ('addEventListener' in mql) {
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  } else {
    // @ts-expect-error: soporte legacy
    mql.addListener(handler);
    // @ts-expect-error: soporte legacy
    return () => mql.removeListener(handler);
  }
}

function getSnapshotMql(query: string) {
  const mql = getMql(query);
  return mql ? mql.matches : false;
}

function getServerSnapshotMql() {
  return false;
}

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => subscribeMql(query, cb),
    () => getSnapshotMql(query),
    () => getServerSnapshotMql()
  );
}

const Row = memo(function Row({ children }: { children: ReactNode }) {
  return <div className="mb-6 flex flex-wrap justify-center gap-6">{children}</div>;
});

import { type Technology, technologies } from './icons';
import TechnologyCard from './technology-card';
const MemoTechnologyCard = memo(TechnologyCard);

export default function Technologies() {
  const isLessThan768 = useMediaQuery('(max-width: 768px)');
  const isLessThan450 = useMediaQuery('(max-width: 450px)');
  const { theme } = useTheme();

  const cols = isLessThan450 ? 3 : isLessThan768 ? 4 : 6;

  const technologiesDivided = useMemo(() => {
    return divideArray<Technology>(technologies, cols);
  }, [cols]);

  return (
    <div className="mask-fade-x justify-center pt-[100px] sm:py-0 lg:py-12">
      {technologiesDivided.map((row, i) => (
        <Row key={`row-${i}`}>
          {row.map(({ name, Icon, DarkIcon, customGlowColor, docs }) => (
            <MemoTechnologyCard
              key={name}
              Icon={theme === 'light' ? Icon : (DarkIcon ?? Icon)}
              customGlowColor={customGlowColor}
              docs={docs}
              name={name}
            />
          ))}
        </Row>
      ))}
    </div>
  );
}
