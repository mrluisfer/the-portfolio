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
import { defaultTimelineData, TimelineItemData } from '../../constants/default-timeline-data';

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
      {reverseArray(defaultTimelineData).map((item: TimelineItemData, id) => (
        <TimelineItem
          key={`${item.title}`}
          step={id}
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
              <p className='group-hover/timeline-item:text-primary transition'>
              {minimal ? null : item.modality}
              </p>
              <p className='group-hover/timeline-item:text-black dark:group-hover/timeline-item:text-white transition'>
              {item.description}
              </p>
            </TimelineContent>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
}
