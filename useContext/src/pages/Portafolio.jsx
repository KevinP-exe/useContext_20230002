import React from "react";
import "./Portafolio.css";

const App = () => {
  return (
    <div className="container">
      <section className="intro">
        <div className="intro-text">
          <h1>Hola, soy <span className="name">Kevshito</span></h1>
          <p>Desarrollador Web y Entusiasta de la Tecnología</p>
        </div>
      </section>

    
      <section className="skills">
        <h2>Mis Habilidades</h2>
        <div className="skill-set">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">Git</div>
        </div>
      </section>

      
      <section className="projects">
        <h2>Proyectos Destacados</h2>
        <div className="project-card">
          <img src="https://via.placeholder.com/400" alt="Proyecto 1" />
          <h3>Proyecto 1</h3>
          <p>Descripción breve de un proyecto que has realizado. Utiliza esta sección para mostrar tu trabajo.</p>
          <a href="#">Ver más</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/400" alt="Proyecto 2" />
          <h3>Proyecto 2</h3>
          <p>Descripción breve de otro proyecto. Puedes hablar sobre las tecnologías utilizadas y los resultados.</p>
          <a href="#">Ver más</a>
        </div>
      </section>

    
      <section className="contact">
        <h2>Contacto</h2>
        <p>¿Quieres trabajar conmigo? ¡Envíame un mensaje!</p>
        <form>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default App;
