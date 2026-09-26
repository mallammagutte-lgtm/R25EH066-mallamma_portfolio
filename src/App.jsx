import { useEffect, useMemo, useState } from 'react'
import './App.css'
import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Interests from './components/Interests'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const themeStorageKey = 'mallamma-theme'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(themeStorageKey)
      return storedTheme || 'light'
    }
    return 'light'
  })
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem(themeStorageKey, theme)
  }, [theme])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        threshold: [0.3, 0.6, 0.9],
        rootMargin: '-10% 0px -50% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const careerObjective = useMemo(
    () =>
      'To strengthen my technical and problem-solving abilities through practical experience, contribute to innovative projects, and continuously learn and grow in the field of Artificial Intelligence and Data Science.',
    [],
  )

  return (
    <>
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Interests />

        <section className="section objective-section">
          <div className="container objective-box">
            <p className="section-tag">Career Objective</p>
            <h2>Career Objective</h2>
            <p>{careerObjective}</p>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
