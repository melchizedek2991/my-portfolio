import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Credentials from "./components/Credentials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen">
      <Sidebar />

      <main className="md:ml-64">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
