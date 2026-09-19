import { useState, useEffect } from "react"

function Hero() {
  const fullText = "Frontend Developer"
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  // Runs the typing loop
  useEffect(() => {
    const typingSpeed = 120 // milliseconds per letter
    const pauseBeforeRestart = 1500 // pause once fully typed, before looping

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      const restartTimeout = setTimeout(() => {
        setDisplayedText("")
        setIndex(0)
      }, pauseBeforeRestart)

      return () => clearTimeout(restartTimeout)
    }
  }, [index])

  return (
    <section id="home" className="px-4 py-12 md:px-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <p className="text-[var(--accent)] text-sm mb-2">HELLO, I'M</p>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Ayodele Ayomidotun Emmanuel
          </h1>

          <p className="text-[var(--text-muted)] max-w-md mb-6">
            A frontend developer with a strong visual design background —
            building clean, responsive interfaces with React and Tailwind CSS.
          </p>

          <div className="flex gap-4 mb-8">
            <a href="#projects" className="bg-[var(--text)] text-[var(--bg)] px-4 py-2 rounded font-medium">
              View projects
            </a>
            <a href={`${import.meta.env.BASE_URL}myCV.pdf`}  className="border border-[var(--accent)] text-[var(--accent)] px-4 py-2 rounded font-medium">
              Download CV
            </a>
          </div>

          {/* Terminal-style card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded p-4 font-mono text-sm max-w-md">
            <p className="text-[var(--text-muted)]">$ whoami</p>
            <p className="text-[var(--text)]">
              Ayodele —{" "}
              <span className="text-[var(--accent)]">
                {displayedText}
                <span className="cursor-blink">|</span>
              </span>
            </p>
            <p className="text-[var(--text-muted)]">$ stack --list</p>
            <p className="text-[var(--text)]">React · Tailwind · TypeScript</p>
          </div>
        </div>

        <div className="flex-1">
          <img
            src= {`${import.meta.env.BASE_URL}images/8.jpg`}
            alt="Ayodele Ayomidotun"
            className="w-full max-w-md h-full max-h-[420px] object-cover rounded"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero