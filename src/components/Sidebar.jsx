import { useState } from "react"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  // Track which link is currently active
  const [activeLink, setActiveLink] = useState("Home")

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <header className="md:fixed md:left-0 md:top-0 md:h-screen md:w-64 bg-[var(--bg-card)] border-b md:border-b-0 md:border-r border-[var(--border)] text-[var(--text)]">
      <div className="flex items-center justify-between px-4 py-4 md:block">
        <div>
          <p className="font-bold text-lg">
            ayodele<span className="text-[var(--accent)]">.dev</span>
          </p>
          <p className="text-xs text-[var(--text-muted)]">Frontend Developer</p>
        </div>

        <button className="md:hidden text-[var(--text)]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <nav className={`${isOpen ? "flex" : "hidden"} md:flex flex-col gap-1 px-4 pb-4 md:pb-0`}>
        {navLinks.map((link) => {
          const isActive = activeLink === link

          return (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={`py-2 pl-3 border-l-2 transition-colors ${
                isActive
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--accent)]"
              }`}
            >
              {link}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

export default Sidebar