'use client';

import { Spotify, SpotifyDark } from '@/assets/icons/allIcons';
import { Badge } from '@/components/ui/badge';
import SocialMediaLinks from '@/constants/social-media-links';
import spotifyAnimationData from '@/lotties/spotify.json';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';

// 🎵 Lista de álbumes
const ALBUMS = [
  {
    title: 'The Color Violet',
    image: '/assets/albums/color-violet.webp',
    author: 'Tory Lanez',
    url: 'https://open.spotify.com/track/3azJifCSqg9fRij2yKIbWz',
  },
  {
    title: 'Remember When',
    image: '/assets/albums/remember-when.webp',
    author: 'Wallows',
    url: 'http://open.spotify.com/track/5naar7XewEOAjOywIp6Jjq',
  },
  {
    title: 'Then It All Goes',
    image: '/assets/albums/then-it-all-goes.webp',
    author: 'Dayglow',
    url: 'https://open.spotify.com/track/7MzjD4Ayl07w0TRsYSqfCh',
  },
  {
    title: 'Toxicity',
    image: '/assets/albums/toxicity.webp',
    author: 'System of a Down',
    url: 'https://open.spotify.com/track/0snQkGI5qnAmohLE7jTsTn',
  },
];

export default function CurrentPlaying() {
  const spotifyRefAnimationData = useRef<LottieRefCurrentProps>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⏰ Cambia la imagen cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ALBUMS.length);
    }, 10000); // 10 segundos
    return () => clearInterval(interval);
  }, []);

  const currentAlbum = ALBUMS[currentIndex];

  return (
    <Popover>
      <div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAlbum.image}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentAlbum.image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Badge
              asChild
              variant={'secondary'}
              className="absolute top-3 left-3 flex items-center gap-2"
            >
              <Link href={currentAlbum.url} target="_blank" rel="noopener noreferrer">
                <div className="relative h-5 w-5 overflow-hidden">
                  <Lottie
                    lottieRef={spotifyRefAnimationData}
                    animationData={spotifyAnimationData}
                    className="absolute left-0 h-fit w-fit transform"
                    autoplay={false}
                    loop={false}
                  />
                </div>
                <p className="text-xs font-semibold text-white drop-shadow">Listen Now</p>
              </Link>
            </Badge>

            <motion.div
              className="absolute bottom-5 w-[280px] rounded-xl bg-yellow-500/10 px-4 py-3 text-white backdrop-blur-md"
              whileHover={{ scale: 0.95 }}
            >
              <p className="text-lg font-bold">{currentAlbum.title}</p>
              <p className="text-sm">{currentAlbum.author}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Popover>
  );
}

function Popover({ children }: { children: ReactNode }) {
  const [showPopover, setShowPopover] = useState(false);
  const { theme } = useTheme();
  const useDarkIcon = theme === 'dark' || theme === 'system';

  return (
    <motion.div>
      <motion.div
        className="relative"
        onMouseOver={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
      >
        <Link
          href={SocialMediaLinks.SPOTIFY}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-neutral-700 transition-all hover:text-blue-500 dark:text-neutral-100 dark:hover:text-blue-400"
        >
          {useDarkIcon ? <SpotifyDark /> : <Spotify />}
        </Link>

        <AnimatePresence mode="wait">
          {showPopover && (
            <motion.div
              className="absolute top-7 -left-10 z-20 min-w-[170px] rounded-xl border border-neutral-400 bg-white shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              key="box"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
