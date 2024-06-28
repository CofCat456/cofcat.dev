import { ProjectCard } from '~/app/(main)/projects/ProjectCard'
import { allProject } from '~/config/projects'

export default function Projects() {
  return (
    <ul
      className="grid grid-cols-1 gap-x-12 gap-y-16 px-2 sm:grid-cols-2 lg:grid-cols-3"
      role="list"
    >
      {allProject.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </ul>
  )
}
