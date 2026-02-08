import { ProjectGrid } from './masonry-grid';
import { Project } from './project';
import { projects } from './projects-list';

export const ProjectList = () => {
  return (
    <ProjectGrid>
      {projects.slice(0, 6).map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </ProjectGrid>
  );
};
