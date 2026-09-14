import { useState } from "react"

function Contact() {
  // Track form field values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Updates the matching field whenever the user types
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // We'll wire this up to actually send an email later
  }

  return (
    <section id="contact" className="px-4 py-12 md:px-12 md:py-20 border-t border-[var(--border)]">
      <p className="text-[var(--accent)] text-sm mb-2">CONTACT</p>
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
        Let's work together
      </h2>
      <p className="text-[var(--text-muted)] mb-8 max-w-md">
        Open to frontend roles, remote positions, and freelance projects.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[var(--bg-card)] border border-[var(--border)] rounded px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="bg-[var(--bg-card)] border border-[var(--border)] rounded px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="bg-[var(--bg-card)] border border-[var(--border)] rounded px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)]"
        ></textarea>

        <button
          type="submit"
          className="bg-[var(--text)] text-[var(--bg)] px-4 py-2 rounded font-medium w-fit"
        >
          Send message
        </button>
      </form>
        {/* Alternative ways to reach out */}
        <div className="flex gap-4 mt-8 text-sm">
          
         <a href="https://github.com/melchizedek2991"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            GitHub
          </a>
          
            <a href="https://linkedin.com/in/your-linkedin-here"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            LinkedIn
          </a>
          
          <a href="mailto:hello@ayodele.dev"
            className="text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            Email
          </a>
        </div>
    </section>
  )
}

export default Contact
