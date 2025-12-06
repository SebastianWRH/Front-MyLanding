import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Transformamos tus ideas en
          <span className="highlight"> experiencias digitales</span>
        </h1>
        <p className="hero-subtitle">
          Desarrollo web profesional que impulsa tu negocio al siguiente nivel
        </p>
        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">
            Comenzar proyecto <ArrowRight size={20} />
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver trabajos
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="code-card">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="code-body">
            <code>
              <span className="code-keyword">function</span> <span className="code-function">crearExito</span>() {"{"}<br/>
              &nbsp;&nbsp;<span className="code-keyword">return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-tag">&lt;Web</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;diseño=<span className="code-string">"moderno"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rendimiento=<span className="code-string">"óptimo"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-tag">/&gt;</span><br/>
              &nbsp;&nbsp;);<br/>
              {"}"}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}