import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Project } from './project';
import { projects } from './projects-list';

export const ProjectList = () => {
  return (
    <Carousel className={'mx-auto mt-5 w-full md:max-w-4xl'}>
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.name}>
            <Project project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
