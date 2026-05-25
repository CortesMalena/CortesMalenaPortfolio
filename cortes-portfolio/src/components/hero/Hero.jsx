import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Hero.css'
import fotoPorfolio from '../../assets/foto-malena.png'

/**
 * 
 * This component represents the hero section of the portfolio website. 
 * It includes a circular rotating text around a profile image, along with the name, title, and social links.
 *
 * @returns {JSX.Element} The rendered Hero component.
 */
function Hero() {

  const cvFile = 'cv-malena-cortes.pdf' // the CV is in the public folder

  // helper function to trigger the download of the CV file when the button is clicked
  function handleDownloadCV() {
    const link = document.createElement('a')

    link.href = `/${cvFile}`
    link.download = cvFile

    link.click()
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero-wrapper">
        
        {/* Expanded visual core layout connecting the image and the text path */}
        <div className="hero-visual-center">
          
          {/* Circular text wrapper configured to occupy the full absolute layout boundary */}
          <div className="rotating-text-wrapper">
            <svg viewBox="0 0 300 300" className="rotating-svg">
              <defs>
                {/* Optimized path tracking closer to the edge for a perfect full-circle outer fit */}
                <path 
                  id="circlePath" 
                  d="M150,150 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0" 
                  fill="none"
                /> 
              </defs>
              {/* Text path with extended content to ensure a seamless continuous rotation effect */}
              <text className="rotating-text-inner" textLength="817">
                <textPath href="#circlePath" startOffset="0%">
              {"\u00A0"} MALENA CORTES ✦ PORTFOLIO ✦ MALENA CORTES ✦ PORTFOLIO ✦
                </textPath>
              </text>
            </svg>
          </div>

          {/* Upscaled profile image layout nested tight inside the circular text rim */}
          <div className="profile-image-container">
            <img 
              src={fotoPorfolio} 
              alt="Malena Nahir Cortes Profile Picture" 
              className="profile-img"
            />
          </div>
        </div>

        {/* Brand identity presentation block */}
        <div className="text-content">
          <h1 className="hero-title">Malena Cortes</h1>
          <p className="hero-title-sub">Desarroladora Full Stack</p>
          
          <div className="dots-divider">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

          <div className="social-links">
            <a href="https://github.com/CortesMalena"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/malena-cortes-15b05037a"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>

          </div>

          <p className="hero-text">
            Entender, crear y mejorar en cada paso.
          </p>

          <button className="btn-work" onClick={handleDownloadCV}> Descargar CV </button>
        </div>

      </div>
    </section>
  )
}

export default Hero