import skills from "../data/skills"

function Skills() {
  return (
    <section id="skills" className="px-4 py-12 md:px-12 md:py-20 border-t border-[var(--border)]">
      <p className="text-[var(--accent)] text-sm mb-2">SKILLS</p>
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8">
        Tools I work with
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <p className="text-[var(--text)] font-medium">{skill.name}</p>
              <p className="text-[var(--text-muted)] text-xs">{skill.level}</p>
            </div>

            {/* Bar track */}
            <div className="w-full h-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full overflow-hidden">
              {/* Bar fill, width driven by skill.percent */}
              <div
                className="h-full bg-[var(--accent)] rounded-full"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
