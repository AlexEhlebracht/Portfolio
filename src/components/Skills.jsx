import React, { useState, useEffect } from 'react'
import LogoLoop from '../components/LogoLoop.jsx'
import {
  SiReact,
  SiDjango,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiWebgl,
  SiJsonwebtokens,
  SiGit,
} from 'react-icons/si'
import { AiOutlineJava } from 'react-icons/ai'
import '../styles/Skills.css'
import { href } from 'react-router-dom'

const techLogos = [
  { node: <SiReact />, alt: 'React', href: 'https://reactjs.org/' },
  { node: <SiDjango />, alt: 'Django', href: 'https://www.djangoproject.com/' },
  { node: <SiPython />, alt: 'Python', href: 'https://www.python.org/' },
  {
    node: <SiJavascript />,
    alt: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { node: <SiCplusplus />, alt: 'C++', href: 'https://isocpp.org/' },
  { node: <AiOutlineJava />, alt: 'Java', href: 'https://www.java.com/' },
  {
    node: <SiHtml5 />,
    alt: 'HTML5',
    href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  { node: <SiCss3 />, alt: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  {
    node: <SiWebgl />,
    alt: 'WebGL',
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
  },
  { node: <SiJsonwebtokens />, alt: 'JSON Web Tokens', href: 'https://jwt.io/' },
  { node: <SiGit />, alt: 'Git', href: 'https://git-scm.com/' },
]

const Skills = () => {
  const [logoHeight, setLogoHeight] = useState(60)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLogoHeight(30)
      } else if (window.innerWidth < 1150) {
        setLogoHeight(40)
      } else {
        setLogoHeight(60)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="Skills-section" aria-label="Technical Skills">
      <h1>Skills</h1>
      <div className="Skills-divider" />
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={logoHeight}
        gap={60}
        hoverSpeed={10}
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Technology partners"
      />
    </div>
  )
}

export default Skills
