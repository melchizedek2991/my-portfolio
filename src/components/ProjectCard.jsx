function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded overflow-hidden flex flex-col">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-[var(--text)]">
            {project.title}
          </h3>
          {project.status && (
            <span className="text-xs text-[var(--accent)] border border-[var(--accent)] rounded-full px-2 py-0.5">
              {project.status}
            </span>
          )}
        </div>

        <p className="text-[var(--text-muted)] text-sm mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-[var(--accent)] border border-[var(--accent)] rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          {project.github && (
            
            <a href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)] hover:text-[var(--accent)]"
            >
              GitHub →
            </a>
          )}
          {project.liveDemo && (
            
            <a href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Live demo →
            </a>
          )}
          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="text-[var(--text)] hover:text-[var(--accent)]"
            >
              Case Study →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard