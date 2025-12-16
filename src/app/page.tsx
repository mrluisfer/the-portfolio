'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, Construction, Hammer, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);
  const [progress, setProgress] = useState(100);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    if (cancelled) return;

    if (timeLeft <= 0) {
      router.push('/versions/2024');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      setProgress((prev) => prev - 10);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, router, cancelled]);

  const handleRedirect = () => {
    router.push('/versions/2024');
  };

  const handleCancel = () => {
    setCancelled(true);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/20 p-4 dark:from-neutral-950 dark:via-blue-950/20 dark:to-purple-950/10">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/4 -left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl dark:from-blue-600/10 dark:to-purple-600/10"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -right-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl dark:from-purple-600/10 dark:to-pink-600/10"
        />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <Card className="border-2 shadow-2xl backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50">
          <CardHeader className="text-center">
            {/* Animated Icons */}
            <div className="mb-4 flex justify-center gap-3">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="text-primary"
              >
                <Construction className="h-12 w-12" />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="text-orange-500"
              >
                <Hammer className="h-12 w-12" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="text-yellow-500"
              >
                <Sparkles className="h-12 w-12" />
              </motion.div>
            </div>

            <CardTitle className="text-3xl font-bold md:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Under Construction
              </span>
            </CardTitle>

            <CardDescription className="mt-4 text-base md:text-lg">
              We're building something awesome! Meanwhile, check out our latest portfolio.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Timer Display */}
            {!cancelled && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="flex items-center gap-3">
                  <Clock className="text-muted-foreground h-6 w-6" />
                  <span className="text-muted-foreground text-sm">Redirecting in</span>
                </div>

                {/* Circular Timer */}
                <div className="relative h-32 w-32">
                  {/* Background circle */}
                  <svg className="h-32 w-32 -rotate-90 transform">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-muted/20"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      className="text-primary"
                      initial={{ strokeDasharray: '351.86', strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: (351.86 * (100 - progress)) / 100,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </svg>

                  {/* Timer number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      key={timeLeft}
                      initial={{ scale: 1.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-5xl font-bold tabular-nums"
                    >
                      {timeLeft}
                    </motion.span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ width: '100%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={handleRedirect}
                size="lg"
                className="flex-1 gap-2 text-white dark:text-white"
              >
                Go to Portfolio 2024
                <ArrowRight className="h-4 w-4" />
              </Button>

              {!cancelled && (
                <Button onClick={handleCancel} variant="outline" size="lg" className="flex-1">
                  Stay Here
                </Button>
              )}
            </div>

            {/* Info Text */}
            {cancelled && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-muted-foreground text-center text-sm"
              >
                Auto-redirect cancelled. You can manually navigate using the button above.
              </motion.p>
            )}

            {/* Additional Links */}
            <div className="border-t pt-4 text-center dark:border-neutral-800">
              <p className="text-muted-foreground mb-3 text-sm">
                Explore other versions of the portfolio:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="/versions">View All Versions</a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="/projects">Projects</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <span className="bg-muted inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            Coming Soon - Stay Tuned!
          </span>
        </motion.div>
      </motion.div>
    </main>
  );
}
