import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Malena Nahir Cortes</span>
          </h1>
          <p className="hero-subtitle">
            Desarrolladora Full Stack
          </p>
          <p className="hero-description">
            Esta es una breve descripción sobre mí. 
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Ver Mis Proyectos</button>
            <button className="btn btn-secondary">Descargar CV</button>
          </div>
        </div>
      </div>
      
      <div className="hero-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  )
}

export default Hero;