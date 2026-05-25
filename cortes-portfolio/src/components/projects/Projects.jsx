import React, { useState, useEffect, useRef } from 'react'
import './Projects.css'
import { projectsData } from '../../data/projects'

/**
 * 
 * This component represents the "Projects" section of the portfolio website. 
 * It displays a carousel of recent projects with interactive navigation.
 * @returns {JSX.Element} The rendered Projects component.
 */
function Projects() {
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (isPaused) {
      if (timeoutRef.current) clearInterval(timeoutRef.current)
      return
    }

    timeoutRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current)
    }
  }, [isPaused])

  const handleTabSelect = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className="projects" id="proyectos">
      <div className="projects-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Mis <span className="highlight-word">Proyectos</span>
          </h2>
          <p className="section-subtitle">Una sección con mis trabajos recientes</p>
          
          <div className="header-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>

        {/* Cinematic Slider Viewport Layer */}
        <div 
          className="projects-carousel-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="projects-slider-track"
            style={{ transform: `translateX(calc(-${activeIndex * 100}%))` }}
          >
            {projectsData.map((project, index) => {
              let positionClass = "slide-upcoming"
              if (index === activeIndex) {
                positionClass = "slide-active"
              } else if (
                index === activeIndex - 1 || 
                (activeIndex === 0 && index === projectsData.length - 1)
              ) {
                positionClass = "slide-previous"
              }

              return (
                <div 
                  key={project.id} 
                  className={`project-slide-card ${positionClass}`}
                >
                  <div className="project-card-inner">
                    {/* Project Image Panel with persistent visual layout wrapper */}
                    <div className="project-image">
                      <img src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"} alt={project.title} />
                    </div>
                    
                    {/* Integrated Project Content Area */}
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      {/* Technology Badges Stack */}
                      <div className="project-technologies">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>

                      {/* Highly intuitive persistent action button dock links */}
                      <div className="project-action-links">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="btn-project btn-code"
                        >
                          <span className="btn-icon">＜/＞</span> Ver Código
                        </a>
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="btn-project btn-demo"
                          >
                            <span className="btn-icon">✦</span> Ir a la aplicación
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="card-accent"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Intuitive Project Selector Tabs Navigator */}
        <div className="projects-selector-tabs">
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              className={`project-tab-btn ${index === activeIndex ? 'tab-active' : ''}`}
              onClick={() => handleTabSelect(index)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <span className="tab-index">0{index + 1}</span>
              <span className="tab-title">{project.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Projects