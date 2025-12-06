import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Code, Award, Briefcase, GraduationCap, Download } from 'lucide-react';
import '../styles/Home.css';

export default function CV() {
  const skills = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 90 }
  ];

  const education = [
    {
      year: "2021",
      title: "Certificación Full Stack",
      institution: "Platzi / Udemy",
      description: "Especialización en desarrollo MERN Stack"
    },
    {
      year: "2018",
      title: "Ingeniería en Sistemas",
      institution: "Universidad Tecnológica",
      description: "Enfoque en desarrollo de software y bases de datos"
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con pasarela de pagos",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Dashboard Analytics",
      description: "Sistema de análisis de datos en tiempo real con gráficos interactivos",
      tech: ["Vue.js", "D3.js", "Firebase"]
    },
    {
      title: "Social Media App",
      description: "Aplicación social con chat en tiempo real y sistema de posts",
      tech: ["React Native", "Socket.io", "PostgreSQL"]
    }
  ];

  return (
    <div className="cv-container">
      {/* Header Section */}
      <section className="cv-header">
        <div className="cv-header-content">
          <div className="cv-profile">
            <div className="profile-image">
              <img src="https://ui-avatars.com/api/?name=Alex+Martinez&size=200&background=ff0000&color=fff&bold=true" alt="Profile" />
              <div className="profile-status"></div>
            </div>
          </div>
          
          <div className="cv-info">
            <h1 className="cv-name">Sebastian Rodriguez</h1>
            <h2 className="cv-role">Estudiante de Ingeniería de Sistemas (7mo ciclo)</h2>
            <p className="cv-bio">
      
Apasionado por la programación y el desarrollo web. Cuento con experiencia en el uso de tecnologías modernas como React, Vite y Node.js para crear aplicaciones web escalables y eficientes. Mi objetivo es seguir aprendiendo y profundizar mis conocimientos en arquitecturas web y backend, siempre enfocado en brindar soluciones innovadoras y de alta calidad.
            </p>
            
            <div className="cv-contact">
              <a href="mailto:swenceslaorodriguezhorna@gmail.com" className="contact-item">
                <Mail size={18} />
                <span>swenceslaorodriguezhorna@gmail.com</span>
              </a>
              <a href="tel:+51987654321" className="contact-item">
                <Phone size={18} />
                <span>+51 954 181 049</span>
              </a>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Lima, Perú</span>
              </div>
            </div>

            <div className="cv-social">
              <a href="https://github.com/SebastianWRH" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sebastian-wenceslao-rodriguez-horna-a2395a384/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://front-my-landing.vercel.app/#servicios" target="_blank" rel="noopener noreferrer" className="social-link">
                <Globe size={20} />
              </a>
            </div>

            <button className="btn-download">
              <Download size={20} />
              Descargar CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}