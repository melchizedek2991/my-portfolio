function About() {
  return (
    <section id="about" className="px-4 py-12 md:px-12 md:py-20 border-t border-[var(--border)]">
      <p className="text-[var(--accent)] text-sm mb-2">ABOUT</p>
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8">
        Frontend developer, with a design eye
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <img
        src={`${import.meta.env.BASE_URL}images/11.jpg`}
          alt="Ayodele Ayomidotun"
          className="w-full md:w-64 h-64 object-cover object-top rounded shrink-0"
        />

        <div className="flex-1">
          <p className="text-[var(--text-muted)] mb-6 max-w-xl">
            I'm a frontend/web developer and graphics designer based in
            Nigeria, with a background in Computer Science and an ALX
            Software Engineering certification. I build with React, Vite,
            and Tailwind CSS — and my years in graphics design (branding,
            marketing visuals) shape how I approach layout, hierarchy, and
            typography on the web.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded px-4 py-3">
              <p className="text-xs text-[var(--text-muted)]">EMAIL</p>
              <p className="text-[var(--text)]">ayodeleayomidotun@gmail.com</p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded px-4 py-3">
              <p className="text-xs text-[var(--text-muted)]">LOCATION</p>
              <p className="text-[var(--text)]">Abuja, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About