function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 py-6 md:px-12 border-t border-[var(--border)] flex flex-col items-center justify-center gap-2 text-sm text-[var(--text-muted)] text-center">
      <p>
        © {year} Ayodele Emmanuel — Built with{" "}
        <span className="text-[var(--text)]">React</span> &{" "}
        <span className="text-[var(--text)]">Tailwind CSS</span>
      </p>
      <p>Abuja, Nigeria</p>
    </footer>
  )
}

export default Footer
