import React, { useState, useEffect } from 'react'
import './Header.css' // Importing the CSS file for styling the header component. This file should contain the styles for the header, such as layout, colors, fonts, etc.
import logo from '../../assets/malena-logo.png'
import { navItems } from '../../data/navItems'

// This component is a placeholder for the header of the portfolio website. 
// Created with rfce snippet in VSCode. That means it was generated using the React Functional Component 
// with Export snippet, which is a common way to quickly create a functional component in React.

/**
 * 
 * This component represents the header of the portfolio website. 
 * It includes a navigation bar with links to different sections of the site
 * and a logo. The header also has a responsive design with a mobile menu toggle.
 * 
 * @returns {JSX.Element} The rendered Header component.
 */
function Header() {
  // state to track the currently active section in the viewport
  const [activeSection, setActiveSection] = useState('inicio'); 

  // state to manage mobile menu open/closed toggle position
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // automatically detects which section is on screen while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // to switch active state a bit before the section top for better UX

      navItems.forEach(item => {
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id)
          }
        }
      })
    }

    /**
     * Adding a scroll event listener to the window object that calls the handleScroll function whenever the user scrolls.
     */
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // helper to close menu on link select click action
  const handleNavigation = (id) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    
    <header className="header">
      <nav className="navbar">
        {/* Container for the profile picture or logo brand */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* Mobile toggle button structure (hamburger icons grid wrapper) */}
        <button 
          className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        
        {/* Navigation links system with dynamic responsive state modifier wrapper class */}
        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header