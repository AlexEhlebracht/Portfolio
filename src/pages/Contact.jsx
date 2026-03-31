import React, { useEffect, useRef, useState } from 'react'
import '../styles/Contact.css'
import ContactButtons from '../components/ContactButtons'

const Contact = () => {
  const cardRef = useRef(null)
  const [pulseResume, setPulseResume] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    // If user prefers reduced motion, keep it static
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return

        // trigger stagger animation
        el.classList.add('is-visible')

        // one-time pulse on Resume
        setPulseResume(true)

        // only run once
        io.disconnect()
      },
      { threshold: 0.25 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="Contact-section" id="contact">
      <div className="Contact-card" ref={cardRef}>
        <h2 className="Contact-title">Contact</h2>
        <div className="about-divider" />

        <p className="Contact-description">
          I’m always open to conversations about software, design, or new ideas. If something here
          resonated with you, feel free to reach out.
        </p>
        <ContactButtons />
      </div>
    </section>
  )
}

export default Contact
