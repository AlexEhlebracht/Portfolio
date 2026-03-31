import React from 'react'
import '../styles/Experience.css'
import '../styles/About.css'
import ExperienceButtons from '../components/ExperienceButtons'

export default function Experience() {
  return (
    <section className="Experience" id="experience" aria-label="Experience">
      <div className="Experience-inner">
        <div className="Experience-card" role="article" aria-label="CDH Lead experience">
          <header className="Experience-header">
            <h2 className="Experience-title">Experience</h2>
            <div className="about-divider" />
          </header>
          <div className="Experience-topRow">
            <div className="Experience-roleBlock">
              <h3 className="Experience-role">Command and Data Handling (CDH) Lead</h3>
              <div className="Experience-org">University of Minnesota Small Satellite Research</div>
            </div>

            <div className="Experience-meta">
              <span className="Experience-date">February 2025 — February 2026</span>
              <span className="Experience-type">Research • Software Engineering • Leadership</span>
            </div>
          </div>

          <ul className="Experience-bullets">
            <li>
              Owned CDH software deliverables across{' '}
              <span className="Experience-strong">ground tooling</span> and{' '}
              <span className="Experience-strong">satellite internals</span>, coordinating with
              subsystem leads and the comms lead to validate end-to-end command + telemetry
              workflows.
            </li>

            <li>
              Built a <span className="Experience-strong">live commanding GUI</span> for operations
              and testing: a React frontend with a terminal-style interface and autocomplete, backed
              by a Django service that validated commands and invoked a Python command-sender
              script.
            </li>

            <li>
              Implemented a{' '}
              <span className="Experience-strong">real-time health monitoring pipeline</span> on the
              satellite: ingesting packets from GPS, ADCS, EPS, and Detector subsystems on ~10s
              intervals, logging telemetry, and publishing data for ground processing and storage.
            </li>

            <li>
              Designed a <span className="Experience-strong">rule-based fault response layer</span>{' '}
              with configurable thresholds (table/config driven), enabling automatic actions like
              subsystem disablement and ground notification when limits were exceeded.
            </li>

            <li>
              Led a small volunteer team (~5 including me): task breakdown, onboarding, and code
              reviews, while remaining hands-on for core implementation and integration.
            </li>

            <li>
              Tested against real hardware and integration environments; delivered software intended
              for production flight use (planned mission timeline: fall).
            </li>
          </ul>

          <ExperienceButtons />
        </div>
      </div>
    </section>
  )
}
