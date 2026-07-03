import ExperienceTimeline from '@/components/shared/experience-timeline';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="group/experience relative flex w-full flex-1 flex-col justify-center overflow-hidden rounded-[inherit] p-2">
      {/* Animated ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/experience:opacity-100">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-zinc-400/15 blur-3xl dark:bg-zinc-100/[0.04]" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-zinc-400/15 blur-3xl dark:bg-zinc-100/[0.04]" />
      </div>

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
            className="group rounded-xl transition-all hover:shadow-md active:scale-[0.98]"
          >
            <Link href="/projects#experience">
              View detailed experience
              <ArrowRightIcon
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
