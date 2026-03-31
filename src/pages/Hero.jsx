import React from 'react'
import '../styles/Hero.css'
import profilePic from '../assets/me.jpeg?url'
import HeroButtons from '../components/HeroButtons.jsx'
import SplitText from '../components/SplitText'

const Hero = () => {
  return (
    <section className="Hero-container">
      <div className="Hero-right">
        <SplitText
          text="Hi, I'm Alex Ehlebracht YAYYY!"
          className="Hero-header-text"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          showCallback
        />
        <h2>Full-Stack Developer | Data Science</h2>
        <p className="Hero-subtitle">
          I build fast, polished web apps and data-driven features—focused on clean UX and solid
          engineering. Explore my projects and experience below.
        </p>

        <HeroButtons />
      </div>

      <div className="Hero-left">
        <div className="Hero-image">
          <img src={profilePic} alt="Portrait of Alex Ehlebracht" />
        </div>
      </div>
    </section>
  )
}

export default Hero
