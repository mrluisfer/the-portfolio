import ExperienceTimeline from '@/components/shared/experience-timeline';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="group/experience relative flex w-full flex-1 flex-col justify-center overflow-hidden rounded-[inherit] p-2">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-indigo-100/80 transition-opacity duration-500 group-hover/experience:opacity-90 dark:from-slate-900 dark:via-blue-950/40 dark:to-indigo-950/60" />

      {/* Animated gradient overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/experience:opacity-100">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Subtle border gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-blue-200/50 ring-inset dark:ring-blue-400/10" />

      <ScrollArea
        type={'always'}
        className="relative z-10 h-[100%] w-full rounded-[inherit] md:h-[500px] lg:h-full"
      >
        <ExperienceTimeline minimal className="h-full p-1" />
        <div className="mt-4 flex justify-center px-2 pb-2">
          <Button
            variant={'outline'}
            asChild
            size={'sm'}
            className="transition-all hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            <Link href="/projects#experience">
              View detailed experience
              <ArrowRightIcon size={14} />
            </Link>
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
