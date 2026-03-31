import React from 'react'
import '../styles/Education.css'

export default function Education() {
  return (
    <section id="education" className="Education-section">
      <div className="Education-card">
        <header className="Education-header">
          <h2 className="Education-title">Education</h2>
          <div className="about-divider" />
        </header>

        <div className="Education-row">
          <div className="Education-left">
            <div className="Education-role">B.S. in Data Science</div>
            <div className="Education-org">University of Minnesota — Twin Cities</div>
          </div>

          <div className="Education-right">
            <div className="Education-dates">Expected May 2028</div>
          </div>
        </div>

        <div className="Education-body">
          <div className="Education-subtitle">Selected coursework</div>
          <ul className="Education-list">
            <li>
              <span className="Education-strong">CS50x</span> — Introduction to Computer Science
              (Harvard, edX)
            </li>
            <li>
              <span className="Education-strong">CS50W</span> — Web Programming with Python and
              JavaScript (Harvard, edX)
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
