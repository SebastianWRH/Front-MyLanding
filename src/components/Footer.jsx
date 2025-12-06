import React from 'react';
import { Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Code size={28} />
          <span>DevStudio</span>
        </div>
        <p>Creando experiencias digitales excepcionales desde 2020</p>
        <div className="footer-links">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
}