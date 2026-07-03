'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GithubIcon, HomeIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export function NotFoundComponent() {
  return (
    <div
      className={` ${inter.className} relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white p-4 text-neutral-900 sm:p-8 dark:from-neutral-950 dark:to-neutral-900 dark:text-neutral-100`}
    >
      {/* Blobs decorativos */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(40% 40% at 50% 50%, rgba(113,113,122,0.28), transparent)',
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-28 -bottom-28 h-80 w-80 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(40% 40% at 50% 50%, rgba(161,161,170,0.22), transparent)',
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.1 }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl"
      >
        <Card className="mx-auto border-neutral-200/70 bg-white/70 shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
              404 – Page Not Found
            </CardTitle>
            <CardDescription className="text-neutral-600 dark:text-neutral-300">
              The page you are looking for does not exist.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-200">
              Sorry, the page you are looking for does not exist. Please check the URL or return to
              the homepage.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }}>
                <Button asChild>
                  <Link href="/" className="dark:text-white">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Go to Homepage
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }}>
                <Button asChild variant="outline">
                  <Link href="https://github.com/mrluisfer" target="_blank" rel="noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    More projects on my GitHub
                  </Link>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
