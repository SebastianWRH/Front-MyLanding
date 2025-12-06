import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Code size={32} />
          <span>NovaDev</span>
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contacto" className="btn-nav">Contactar</a></li>
        </ul>
      </div>
    </nav>
  );
}