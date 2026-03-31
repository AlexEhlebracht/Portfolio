import { useState, useEffect, useMemo, useRef, memo } from 'react'
import PillNav from './components/PillNav.jsx'
import darkmode from './assets/dark-mode.svg?url'
import lightmode from './assets/light-mode.svg?url'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Education from './pages/Education.jsx'
import Experience from './pages/Experience.jsx'
import Footer from './pages/Footer.jsx'
import Hero from './pages/Hero.jsx'
import Projects from './pages/Projects.jsx'
import FloatingLines from './components/FloatingLines'
import Skills from './components/Skills.jsx'

const MemoizedFloatingLines = memo(() => (
  <div
    style={{
      width: '100%',
      height: '100%',
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      pointerEvents: 'none',
    }}
  >
    <FloatingLines
      enabledWaves={['top', 'middle', 'bottom']}
      lineCount={5}
      lineDistance={5}
      bendRadius={5}
      bendStrength={-0.5}
      interactive={true}
      parallax={true}
    />
  </div>
))

function App() {
  const [activeHref, setActiveHref] = useState(window.location.hash || '#home')

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' },
    ],
    []
  )

  // prevents scrollspy from fighting the click-scroll for a moment
  const clickLockRef = useRef(false)
  const clickLockTimerRef = useRef(null)

  useEffect(() => {
    const sectionIds = navItems.map((x) => x.href.replace('#', ''))
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const setFromHref = (href) => {
      setActiveHref((prev) => (prev === href ? prev : href))
    }

    // keep deep-linking working (load with a hash)
    const onHashChange = () => {
      const hash = window.location.hash || '#home'
      setFromHref(hash)
    }
    window.addEventListener('hashchange', onHashChange)

    // Get responsive reveal settings based on window width
    const getRevealSettings = () => {
      const isMobile = window.innerWidth < 900
      return {
        threshold: isMobile ? 0.1 : 0.2,
        rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -10% 0px',
      }
    }

    // One observer: (A) reveal once + (B) scrollspy active section
    const revealSettings = getRevealSettings()
    const observer = new IntersectionObserver(
      (entries) => {
        // A) Reveal-once
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('reveal-visible')
          // reveal should happen once
          observer.unobserve(entry.target)
        }

        // B) ScrollSpy (use currently intersecting set from THIS callback)
        // NOTE: IntersectionObserver callback entries are partial; for stable scrollspy,
        // we also query current intersections using getBoundingClientRect-based heuristic.
        // But your prior approach works fine if we keep it in a separate observer.
      },
      {
        threshold: revealSettings.threshold,
        rootMargin: revealSettings.rootMargin,
      }
    )

    // Observe each section for reveal
    sections.forEach((el) => {
      el.classList.add('reveal') // make sure base class exists
      observer.observe(el)
    })

    // Separate ScrollSpy observer (more stable than mixing with reveal-unobserve)
    const spyObserver = new IntersectionObserver(
      (entries) => {
        if (clickLockRef.current) return

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (!visible.length) return

        const id = visible[0].target.id
        const href = `#${id}`
        setFromHref(href)

        if (window.location.hash !== href && window.history?.replaceState) {
          window.history.replaceState(null, '', href)
        }
      },
      {
        root: null,
        threshold: [0.1, 0.2, 0.35, 0.5],
        rootMargin: '-30% 0px -50% 0px',
      }
    )

    sections.forEach((el) => spyObserver.observe(el))

    // Recreate reveal observer on resize to update settings at 900px breakpoint
    const handleResize = () => {
      const newSettings = getRevealSettings()
      // Only recreate if settings changed
      if (
        newSettings.threshold !== revealSettings.threshold ||
        newSettings.rootMargin !== revealSettings.rootMargin
      ) {
        observer.disconnect()
        const newObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue
              entry.target.classList.add('reveal-visible')
              newObserver.unobserve(entry.target)
            }
          },
          {
            threshold: newSettings.threshold,
            rootMargin: newSettings.rootMargin,
          }
        )
        sections.forEach((el) => {
          if (!el.classList.contains('reveal-visible')) {
            newObserver.observe(el)
          }
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
      spyObserver.disconnect()
      if (clickLockTimerRef.current) clearTimeout(clickLockTimerRef.current)
    }
  }, [navItems])

  const handleNavSelect = (href) => {
    setActiveHref(href)

    clickLockRef.current = true
    if (clickLockTimerRef.current) clearTimeout(clickLockTimerRef.current)
    clickLockTimerRef.current = setTimeout(() => {
      clickLockRef.current = false
    }, 700)
  }

  return (
    <div className="container">
      <MemoizedFloatingLines />

      <PillNav
        logo={darkmode}
        logoAlt="Light/Dark Icon"
        logoLight={lightmode}
        items={navItems}
        activeHref={activeHref}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="var(--text)"
        pillColor="var(--bg)"
        hoveredPillTextColor="var(--bg)"
        pillTextColor="var(--text)"
        onItemSelect={handleNavSelect}
      />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <Skills />

      <div id="projects">
        <Projects />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default App
