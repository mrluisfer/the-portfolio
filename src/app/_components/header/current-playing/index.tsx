'use client';

import { Spotify, SpotifyDark } from '@/assets/icons/allIcons';
import SocialMediaLinks from '@/constants/social-media-links';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';

type Album = {
  title: string;
  artist: string;
  image: string;
  url: string;
  /** Optional metadata — render only when present, so each track can be enriched over time. */
  album?: string;
  year?: string;
  duration?: string; // "m:ss"
};

// 🎵 Lista de canciones. Añade/edita campos opcionales para complementar cada tema.
const ALBUMS: Album[] = [
  {
    title: 'The Color Violet',
    artist: 'Tory Lanez',
    image: '/assets/albums/color-violet.webp',
    url: 'https://open.spotify.com/track/3azJifCSqg9fRij2yKIbWz',
    album: 'Alone at Prom',
    year: '2021',
    duration: '3:47',
  },
  {
    title: 'Remember When',
    artist: 'Wallows',
    image: '/assets/albums/remember-when.webp',
    url: 'http://open.spotify.com/track/5naar7XewEOAjOywIp6Jjq',
    album: 'Model',
    year: '2024',
    duration: '2:53',
  },
  {
    title: 'Then It All Goes',
    artist: 'Dayglow',
    image: '/assets/albums/then-it-all-goes.webp',
    url: 'https://open.spotify.com/track/7MzjD4Ayl07w0TRsYSqfCh',
    album: 'Harmony House',
    year: '2022',
    duration: '3:30',
  },
  {
    title: 'Toxicity',
    artist: 'System of a Down',
    image: '/assets/albums/toxicity.webp',
    url: 'https://open.spotify.com/track/0snQkGI5qnAmohLE7jTsTn',
    album: 'Toxicity',
    year: '2001',
    duration: '3:39',
  },
];

/** Random album index, optionally avoiding the current one so it always visibly changes. */
function getRandomAlbumIndex(exclude = -1) {
  if (ALBUMS.length <= 1) return 0;
  let next = Math.floor(Math.random() * ALBUMS.length);
  while (next === exclude) next = Math.floor(Math.random() * ALBUMS.length);
  return next;
}

/** Animated "now playing" equalizer — pure CSS transform loop, no React re-renders. */
function Equalizer() {
  return (
    <span className="flex h-3.5 items-end gap-[2px]" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="w-[2px] flex-1 origin-bottom rounded-full bg-emerald-500 dark:bg-emerald-400"
          style={{ height: '100%' }}
          animate={{ scaleY: [0.3, 1, 0.45, 0.8, 0.35] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

/**
 * Mini player content: only mounts while open, so the lazy random initializer runs
 * on every hover → a fresh track each time. Client-only, so no SSR mismatch.
 */
function MiniPlayer() {
  // Lazy initializer → random track per mount (per hover).
  const [currentIndex, setCurrentIndex] = useState(() => getRandomAlbumIndex());

  // Keep cycling to a different random track while the user lingers.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => getRandomAlbumIndex(prev));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const track = ALBUMS[currentIndex];
  const meta = [track.album, track.year].filter(Boolean).join(' · ');

  return (
    <div className="w-[300px] p-3">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Equalizer />
          <span className="text-muted-foreground text-xs font-medium">Now playing</span>
        </div>
        <span className="text-muted-foreground [&_svg]:size-4" aria-hidden>
          <Spotify />
        </span>
      </div>

      {/* Track (crossfades on change) */}
      <div className="relative min-h-[76px]">
        <AnimatePresence>
          <motion.div
            key={track.image}
            className="absolute inset-0 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={track.image}
              alt={`${track.title} — ${track.artist}`}
              width={72}
              height={72}
              className="size-[72px] shrink-0 rounded-lg object-cover shadow-sm ring-1 ring-black/5 dark:ring-white/10"
            />
            <div className="min-w-0 flex-1">
              <p className="text-foreground truncate text-sm font-semibold">{track.title}</p>
              <p className="text-muted-foreground truncate text-xs">{track.artist}</p>
              {meta && <p className="text-muted-foreground/70 mt-0.5 truncate text-[11px]">{meta}</p>}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <Link
        href={track.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-background/80 py-2 text-xs font-semibold transition-all hover:bg-muted/60 active:scale-[0.98]"
      >
        <span className="[&_svg]:size-4" aria-hidden>
          <Spotify />
        </span>
        Listen on Spotify
      </Link>
    </div>
  );
}

export default function CurrentPlaying() {
  return <Popover>{(isOpen) => (isOpen ? <MiniPlayer /> : null)}</Popover>;
}

function Popover({ children }: { children: (isOpen: boolean) => ReactNode }) {
  const [showPopover, setShowPopover] = useState(false);
  const { resolvedTheme } = useTheme();
  const useDarkIcon = resolvedTheme === 'dark';

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowPopover(true)}
      onMouseLeave={() => setShowPopover(false)}
    >
      <Link
        href={SocialMediaLinks.SPOTIFY}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify: mrLuisFer"
        title="Spotify"
        className={cn(
          'inline-flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-muted-foreground transition-all duration-200',
          'hover:scale-105 hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          '[&_svg]:size-5'
        )}
      >
        {useDarkIcon ? <SpotifyDark /> : <Spotify />}
      </Link>

      <AnimatePresence>
        {showPopover && (
          <motion.div
            key="box"
            className="absolute top-full -left-10 z-20 mt-2 origin-top overflow-hidden rounded-xl border border-border bg-background shadow-lg"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {children(showPopover)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
