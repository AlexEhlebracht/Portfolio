import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-inner">
        <span>© {new Date().getFullYear()} Alex Ehlebracht</span>
        <span className="Footer-sep">•</span>
        <span>Built with React</span>
      </div>
    </footer>
  )
}

export default Footer
