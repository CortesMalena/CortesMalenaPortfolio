import React, { useState } from 'react'
import './Contact.css'
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaLinkedin, FaArrowRight } from 'react-icons/fa'

/**
 * 
 * This component represents the "Contact" section of the portfolio website. 
 * It includes a contact form that allows users to send an email directly from the website, as well as contact information cards with icons.
 * The form uses a mailto link to open the user's default email client with a pre-filled email containing the form data.
 * @returns {JSX.Element} The rendered Contact component.
 */
function Contact() {

  // State to manage the form data for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Handler function to update the form data state when the user types in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handler function to manage the form submission event. It constructs a mailto URL with the form data and opens the user's email client.
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Constructing standard mailto structure
    const mailtoUrl = `mailto:malenanahir16@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contacto desde Portfolio')}&body=${encodeURIComponent(`Hola Malena,\n\nMi nombre es ${formData.name} (mi email es ${formData.email}).\n\n${formData.message}`)}`
    
    window.location.href = mailtoUrl
  }

  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Mi <span className="highlight-word">Contacto</span>
          </h2>
          <p className="section-subtitle">Constuyamos juntos algo increíble</p>
          <div className="header-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>

        {/* Dual Column Layout Grid Split */}
        <div className="contact-grid">
          
          {/* Left Column: Personal Context Meta Info Cards */}
          <div className="contact-info-column">
            <h3 className="column-title">Información de contacto</h3>
            <p className="info-intro">
              Si querés conocer más sobre mi trabajo, discutir sobre un proyecto o sabes de alguna oportunidad, no dudes en escribirme.
            </p>

            <div className="info-cards-stack">
              {/* Email Info Card */}
              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-details">
                  <span className="info-label">Email</span>
                  <a href="mailto:malenanahir16@gmail.com" className="info-value">malenanahir16@gmail.com</a>
                </div>
              </div>

              {/* LinkedIn Info Card */}
              <div className="info-card info-card-linkedin">
                <div className="info-icon">
                  <FaLinkedin />
                </div>
                <div className="info-details">
                  <span className="info-label">LinkedIn</span>
                  <a 
                    href="https://linkedin.com/in/malena-cortes-15b05037a" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="info-value"
                  >
                    Clickeame para visitar mi perfil
                  </a>
                </div>
              </div>

              {/* Location Info Card */}
              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-details">
                  <span className="info-label">Ubicación</span>
                  <span className="info-value">Lanús Este, Buenos Aires (Argentina)</span>
                </div>
              </div>

              {/* Availability Info Card */}
              <div className="info-card">
                <div className="info-icon">
                  <FaBriefcase />
                </div>
                <div className="info-details">
                  <span className="info-label">Disponibilidad</span>
                  <span className="info-value">Abierta a oportunidades Freelance y Full-time </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Action Form */}
          <div className="contact-form-column">
            <h3 className="column-title">Enviar mensaje</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@ejemplo.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Aqui escribe el asunto de tu mensaje"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre los detalles..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Enviar email <span className="submit-icon"><FaArrowRight /></span>
              </button>
            </form>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact