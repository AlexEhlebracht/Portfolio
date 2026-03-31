import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <section id="about" className="About">
      <div className="About-inner">
        <div className="About-card">
          <header className="About-header">
            <h2 className="About-title">About</h2>
            <div className="about-divider" />
          </header>

          <div className="About-body">
            <p>
              I’m a full-stack developer who enjoys building clean, modern interfaces that feel
              intentional and finished. I care about how things look, how they move, and how they’re
              experienced—not just whether they work.
            </p>

            <p>
              Most of my work lives at the intersection of frontend development and design. I like
              spending time on details most people won’t consciously notice: spacing, motion,
              responsiveness, and subtle interactions that make a product feel polished instead of
              thrown together.
            </p>

            <p>
              Outside of traditional development, I produce music and DJ, which heavily influences
              how I think about rhythm, flow, and visual energy. That creative background carries
              over into how I build software—especially when it comes to animation, timing, and
              overall feel.
            </p>

            <p>
              I’m constantly learning, experimenting, and building side projects to explore new
              ideas. Some of those turn into larger projects, others are just ways to try something
              new. Either way, I enjoy the process as much as the result.
            </p>

            <p>
              I’m always looking for ways to push my work a little further while keeping it simple,
              thoughtful, and human.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
