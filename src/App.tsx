import React from 'react';

function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Bienvenido a Nuestro Proyecto</h1>
        <p>
          Una aplicación moderna y funcional construida con React y diseño responsivo.
          Descubre todas las características que tenemos para ofrecerte.
        </p>
        <button className="btn" onClick={() => alert('¡Hola! Botón funcionando')}>
          Comenzar Ahora
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>🚀 Rápido y Eficiente</h3>
          <p>
            Construido con las mejores prácticas de desarrollo para garantizar 
            un rendimiento óptimo y una experiencia de usuario fluida.
          </p>
        </div>
        
        <div className="feature-card">
          <h3>📱 Diseño Responsivo</h3>
          <p>
            Adaptado perfectamente a todos los dispositivos, desde móviles 
            hasta pantallas de escritorio de alta resolución.
          </p>
        </div>
        
        <div className="feature-card">
          <h3>🎨 Interfaz Moderna</h3>
          <p>
            Diseño limpio y moderno con animaciones suaves y una experiencia 
            visual atractiva que encanta a los usuarios.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <div className="stat-number">100+</div>
          <div className="stat-label">Usuarios Satisfechos</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Proyectos Completados</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Soporte Disponible</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-number">99%</div>
          <div className="stat-label">Tiempo de Actividad</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Mi Proyecto. Todos los derechos reservados.</p>
        <p>Creado con React y mucho ❤️</p>
      </footer>
    </div>
  );
}

export default App;