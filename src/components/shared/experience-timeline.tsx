import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline';
import { reverseArray } from '@/lib/reverse-array';
import { defaultTimelineData } from '../../constants/default-timeline-data';

export default function ExperienceTimeline({
  minimal = false,
  className = '',
}: {
  minimal?: boolean;
  className?: string;
}) {
  return (
    <Timeline
      defaultValue={defaultTimelineData.length}
      orientation="vertical"
      className={className}
    >
      {reverseArray(defaultTimelineData).map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          {minimal ? null : (
            <TimelineContent className="max-w-xl leading-relaxed">
              {item.description}
            </TimelineContent>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
}
