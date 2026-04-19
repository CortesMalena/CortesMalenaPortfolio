import React from 'react'
import './Projects.css'
import { projects } from '../../data/projects' // Importing the projects data from a separate file. This file should contain an array of project objects with properties like id, title, description, image, technologies, link, and demo.

// This component is responsible for displaying the projects section of the portfolio website. 
// It maps through the projects data and renders a card for each project, including an image, title, description, technologies used, and links to the code and demo.

function Projects() {
  

    return (
    <section className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="section-subtitle">Algunos de mis trabajos más destacados</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <a href={project.link} className="btn-icon">Ver Código</a>
                    <a href={project.demo} className="btn-icon">Ver Demo</a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects