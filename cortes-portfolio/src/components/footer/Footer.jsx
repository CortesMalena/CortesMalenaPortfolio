import React from 'react'
import './Footer.css'
import { FaHeart } from 'react-icons/fa'

/**
 * This component represents the footer section of the portfolio website. 
 * It includes copyright information and a note about the technologies used to build the site.
 * The current year is dynamically displayed using JavaScript's Date object.
 * 
 * @returns {JSX.Element} The rendered Footer component.
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Left Side: Copyright Payload Mappings */}
        <div className="footer-copyright">
          <p>
            &copy; {currentYear} <span className="footer-brand">Malena Nahir Cortes</span>. Todos los derechos reservados.
          </p>
        </div>

        {/* Right Side: Structural Tech Stack Subtext Info */}
        <div className="footer-craft">
          <p>
            Desarrollado con React con fines de aprendizaje.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer