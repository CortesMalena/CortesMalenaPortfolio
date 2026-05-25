import React from 'react'
import './AboutMe.css'
import { skills, studies } from '../../data/skills-studies'

/**
 * 
 * This component represents the "About Me" section of the portfolio website. 
 * It includes a description of the person, a list of technical skills, and an academic timeline of studies.
 */
function AboutMe() {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        
        {/* Main Section Header */}
        <header className="about-header">
          <h2 className="about-main-title">
            Sobre <span className="highlight-word">Mí</span>
          </h2>
          <div className="title-underline"></div>
          <p className="about-description">
            Entender, crear y mejorar son parte de mi forma de trabajar. 
            Disfruto convertir ideas en proyectos reales, combinando lógica, aprendizaje continuo 
            y atención a los detalles para construir experiencias digitales claras y funcionales.
          </p>
        </header>

        {/* Dual Column Layout Grid Split */}
        <div className="about-grid">
          
          {/* Left Column: Technical Skills Deck */}
          <div className="skills-column">
            <h3 className="column-title">Skills</h3>
            <div className="skills-badge-container">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Timeline Studies Deck */}
          <div className="studies-column">
            <h3 className="column-title">Estudios</h3>
            <div className="timeline-container">
              {studies.map((study, index) => (
                <div key={index} className="timeline-item">
                  {/* Visual tracking marker bullet layout */}
                  <div className="timeline-marker">
                    <div className="marker-core"></div>
                  </div>
                  
                  {/* Academic text payload box content */}
                  <div className="timeline-content-box">
                    <div className="timeline-box-header">
                      <h4 className="study-title">{study.title}</h4>
                      {/* Subdued structural tag seamlessly displaying study years */}
                      <span className="study-years-tag">{study.years}</span>
                    </div>
                    <span className="study-institution">{study.institution}</span>
                    <p className="study-description">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe