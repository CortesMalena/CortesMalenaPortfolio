import React from 'react'
import './Header.css' // Importing the CSS file for styling the header component. This file should contain the styles for the header, such as layout, colors, fonts, etc.

// This component is a placeholder for the header of the portfolio website. 
// Created with rfce snippet in VSCode. That means it was generated using the React Functional Component 
// with Export snippet, which is a common way to quickly create a functional component in React.

//** */

/**
 * 
 * This component represents the header of the portfolio website. 
 * It includes a navigation bar with links to different sections of the site
 */
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Cortes Malena</h1>
        </div>
        
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header