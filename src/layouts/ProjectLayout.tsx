import Card from '@/components/PagesComponents/Project/Card';

import { Project, projects } from '@/data/projects';

export default function ProjectLayout() {
  return (
    <>
      <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {projects.map((project: Project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
