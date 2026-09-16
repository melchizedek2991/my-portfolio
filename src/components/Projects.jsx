import { useState } from "react"
import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import CaseStudy from "./CaseStudy"

function Projects() {
  // Tracks which project's case study is currently open (or null if none)
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)

  return (
    <section id="projects" className="px-4 py-12 md:px-12 md:py-20 border-t border-[var(--border)]">
      <p className="text-[var(--accent)] text-sm mb-2">FEATURED PROJECTS</p>
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8">
        Things I've built
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpenCaseStudy={setActiveCaseStudy}
          />
        ))}
      </div>

      {activeCaseStudy && (
        <CaseStudy
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}
    </section>
  )
}

export default Projects