import ExperienceTimeline from '@/components/shared/experience-timeline';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Experience() {
  return (
    <div className="flex w-full flex-1 flex-col justify-center rounded-[inherit] bg-gradient-to-tr from-blue-50 to-blue-100 p-2 group-hover:bg-neutral-100 dark:from-blue-950 dark:to-zinc-900">
      <ScrollArea
        type={'always'}
        className="h-[100%] w-full rounded-[inherit] md:h-[500px] lg:h-full"
      >
        <ExperienceTimeline minimal className="h-full p-1" />
      </ScrollArea>
    </div>
  );
}
