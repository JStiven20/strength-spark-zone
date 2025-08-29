import React from 'react';

function App() {
  const handleGetStarted = () => {
    alert('¡Bienvenido a nuestra plataforma!');
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Bienvenido a Nuestra Plataforma</h1>
        <p>
          Descubre una experiencia única con nuestra aplicación web moderna, 
          diseñada para brindarte las mejores funcionalidades y un diseño excepcional.
        </p>
        <button className="hero-btn" onClick={handleGetStarted}>
          Comenzar Ahora
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">🚀</span>
          <h3>Rendimiento Optimizado</h3>
          <p>
            Aplicación ultra rápida con tecnologías modernas que garantizan 
            una experiencia fluida y sin interrupciones para todos los usuarios.
          </p>
        </div>
        
        <div className="feature-card">
          <span className="feature-icon">🎨</span>
          <h3>Diseño Moderno</h3>
          <p>
            Interfaz elegante y contemporánea con animaciones suaves y 
            elementos visuales que destacan por su belleza y funcionalidad.
          </p>
        </div>
        
        <div className="feature-card">
          <span className="feature-icon">📱</span>
          <h3>Totalmente Responsivo</h3>
          <p>
            Adaptado perfectamente a todos los dispositivos, desde smartphones 
            hasta pantallas de escritorio de alta resolución.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <span className="stat-number">500+</span>
          <span className="stat-label">Usuarios Activos</span>
        </div>
        
        <div className="stat-card">
          <span className="stat-number">100+</span>
          <span className="stat-label">Proyectos Exitosos</span>
        </div>
        
        <div className="stat-card">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Soporte Disponible</span>
        </div>
        
        <div className="stat-card">
          <span className="stat-number">99.9%</span>
          <span className="stat-label">Tiempo de Actividad</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos un equipo dedicado a crear experiencias digitales extraordinarias. 
          Nuestra misión es proporcionar herramientas innovadoras que impulsen el 
          crecimiento y éxito de nuestros usuarios a través de la tecnología más avanzada.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Nuestra Plataforma. Todos los derechos reservados.</p>
        <p>Desarrollado con React y mucho ❤️</p>
      </footer>
    </div>
  );
}

export default App;