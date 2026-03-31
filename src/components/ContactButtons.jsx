import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SiGmail, SiLinkedin, SiGithub, SiFiles } from 'react-icons/si'

export default function ContactButtons({ ease = 'power3.easeOut' }) {
  const circleRefs = useRef([])
  const tlRefs = useRef([])
  const activeTweenRefs = useRef([])

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle?.parentElement) return

        const pill = circle.parentElement
        const rect = pill.getBoundingClientRect()
        const { width: w, height: h } = rect

        // same math as PillNav
        const R = ((w * w) / 4 + h * h) / (2 * h)
        const D = Math.ceil(2 * R) + 2
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
        const originY = D - delta

        circle.style.width = `${D}px`
        circle.style.height = `${D}px`
        circle.style.bottom = `-${delta}px`

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        })

        const label = pill.querySelector('.pill-label')
        const white = pill.querySelector('.pill-label-hover')

        if (label) gsap.set(label, { y: 0 })
        if (white) gsap.set(white, { y: h + 12, opacity: 0 })

        tlRefs.current[i]?.kill()
        const tl = gsap.timeline({ paused: true })

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0)

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0)
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0)
        }

        tlRefs.current[i] = tl
      })
    }

    layout()

    const onResize = () => layout()
    window.addEventListener('resize', onResize)

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {})
    }

    return () => window.removeEventListener('resize', onResize)
  }, [ease])

  const handleEnter = (i) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto',
    })
  }

  const handleLeave = (i) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    })
  }

  return (
    <div className="Hero-buttons Hero-buttons-contact">
      <a
        className="Hero-pill Hero-pill--primary Hero-pill-contact"
        href="#projects"
        onMouseEnter={() => handleEnter(0)}
        onMouseLeave={() => handleLeave(0)}
      >
        <span
          className="hover-circle"
          aria-hidden="true"
          ref={(el) => {
            circleRefs.current[0] = el
          }}
        />
        <span className="label-stack">
          <span className="pill-label">
            <SiGmail className="pill-label-icon" />
            ehleb002@umn.edu
          </span>
          <span className="pill-label-hover" aria-hidden="true">
            <SiGmail className="pill-label-icon" />
            ehleb002@umn.edu
          </span>
        </span>
      </a>

      <a
        className="Hero-pill Hero-pill--secondary Hero-pill-contact"
        href="https://www.linkedin.com/in/alex-ehlebracht/"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => handleEnter(1)}
        onMouseLeave={() => handleLeave(1)}
      >
        <span
          className="hover-circle"
          aria-hidden="true"
          ref={(el) => {
            circleRefs.current[1] = el
          }}
        />
        <span className="label-stack">
          <span className="pill-label">
            <SiLinkedin className="pill-label-icon" />
            alex-ehlebracht
          </span>
          <span className="pill-label-hover" aria-hidden="true">
            <SiLinkedin className="pill-label-icon" />
            alex-ehlebracht
          </span>
        </span>
      </a>

      <a
        className="Hero-pill Hero-pill--secondary Hero-pill-contact"
        href="https://github.com/AlexEhlebracht"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => handleEnter(2)}
        onMouseLeave={() => handleLeave(2)}
      >
        <span
          className="hover-circle"
          aria-hidden="true"
          ref={(el) => {
            circleRefs.current[2] = el
          }}
        />
        <span className="label-stack">
          <span className="pill-label">
            <SiGithub className="pill-label-icon" />
            AlexEhlebracht
          </span>
          <span className="pill-label-hover" aria-hidden="true">
            <SiGithub className="pill-label-icon" />
            AlexEhlebracht
          </span>
        </span>
      </a>
    </div>
  )
}
