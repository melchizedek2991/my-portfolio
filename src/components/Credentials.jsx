const credentials = [
  {
    number: "01",
    title: "ALX Software Engineering",
    description: "Certification in software engineering fundamentals and practical build skills.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "React, responsive layouts, and interface builds for freelance and small business clients.",
  },
  {
    number: "03",
    title: "Visual & Brand Design",
    description: "Branding, social graphics, and marketing visuals — an added strength alongside development.",
  },
]

function Credentials() {
  return (
    <section id="credentials" className="px-4 py-12 md:px-12 md:py-20 border-t border-[var(--border)]">
      <p className="text-[var(--accent)] text-sm mb-2">CREDENTIALS & SERVICES</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {credentials.map((item) => (
          <div
            key={item.number}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded p-5"
          >
            <p className="text-[var(--accent)] text-xs font-mono mb-2">{item.number}</p>
            <h3 className="text-[var(--text)] font-bold mb-2">{item.title}</h3>
            <p className="text-[var(--text-muted)] text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Credentials
