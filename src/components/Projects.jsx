import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects" className="px-4 py-12 md:px-12 md:py-20 border-t border-[var(--border)]">
      <p className="text-[var(--accent)] text-sm mb-2">FEATURED PROJECTS</p>
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8">
        Things I've built
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
