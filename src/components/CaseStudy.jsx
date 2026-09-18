function CaseStudy({ project, onClose }) {
  const study = project.caseStudy

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[var(--bg-card)] border border-[var(--border)] rounded max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-[var(--text)]">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-[var(--text-muted)] hover:text-[var(--accent)] text-xl"
          >
            ✕
          </button>
        </div>

        {/* Screenshots */}
        {study.screenshots && study.screenshots.length > 0 && (
          <div className="mb-4">
            <h3 className="text-[var(--accent)] text-sm mb-2">SCREENSHOTS</h3>
            <div className="grid grid-cols-2 gap-3">
              {study.screenshots.map((src) => (
                <img key={src} src={src} className="h-32 w-full object-cover rounded" />
              ))}
            </div>
          </div>
        )}

        {/* Demo video */}
        {study.video && (
          <div className="mb-6">
            <h3 className="text-[var(--accent)] text-sm mb-2">DEMO</h3>
            <div className="aspect-video rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src={study.video}
                title={`${project.title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {study.overview && (
          <div className="mb-6">
            <h3 className="text-[var(--accent)] text-sm mb-2">OVERVIEW</h3>
            <p className="text-[var(--text-muted)]">{study.overview}</p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-[var(--accent)] text-sm mb-2">THE PROBLEM</h3>
          <p className="text-[var(--text-muted)]">{study.problem}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-[var(--accent)] text-sm mb-2">THE SOLUTION</h3>
          <p className="text-[var(--text-muted)]">{study.solution}</p>
        </div>

        {study.features && (
          <div className="mb-6">
            <h3 className="text-[var(--accent)] text-sm mb-2">FEATURES</h3>
            <ul className="text-[var(--text-muted)] text-sm grid grid-cols-1 sm:grid-cols-2 gap-1">
              {study.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-[var(--accent)] text-sm mb-2">ARCHITECTURE</h3>
          <p className="text-[var(--text-muted)] font-mono text-sm">{study.architecture}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-[var(--accent)] text-sm mb-2">TECHNICAL DECISIONS</h3>
          {study.decisions.map((item) => (
            <div key={item.question} className="mb-3">
              <p className="text-[var(--text)] font-medium text-sm">{item.question}</p>
              <p className="text-[var(--text-muted)] text-sm">{item.answer}</p>
            </div>
          ))}
        </div>

        {study.challenges && study.challenges.length > 0 && (
          <div className="mb-6">
            <h3 className="text-[var(--accent)] text-sm mb-2">CHALLENGES & SOLUTIONS</h3>
            {study.challenges.map((item) => (
              <div key={item.challenge} className="mb-3">
                <p className="text-[var(--text)] font-medium text-sm">Challenge: {item.challenge}</p>
                <p className="text-[var(--text-muted)] text-sm">Solution: {item.solution}</p>
              </div>
            ))}
          </div>
        )}

        <div>
          <h3 className="text-[var(--accent)] text-sm mb-2">WHAT I LEARNED</h3>
          <div className="flex flex-wrap gap-2">
            {study.learned.map((skill) => (
              <span
                key={skill}
                className="text-xs text-[var(--text)] border border-[var(--border)] rounded px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy