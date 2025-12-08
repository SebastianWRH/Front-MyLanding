import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/home.css';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      category: "E-commerce",
      title: "AuroraStore",
      description: "E-commerce dedicado a la bisutería",
      tech: ["Vite", "Node.js", "CSS"],
      image: "https://github.com/SebastianWRH/Front-MyLanding/blob/main/src/assets/Untitled.png?raw=true",
      url: "https://www.aurorastore.shop"
    },
    {
      category: "E-Commerce",
      title: "Picchu Wassi Hotel",
      description: "Sistema de gestión con analytics en tiempo real",
      tech: ["React", "Node.js", "CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1860&h=920&fit=crop",
      url: "https://example.com/dashboard"
    },
    {
      category: "Landing",
      title: "MyLanding",
      description: "Mi Pagina Actual",
      tech: ["Vite", "React", "css"],
      image: "https://github.com/SebastianWRH/Front-MyLanding/blob/main/src/assets/imagen_2025-12-08_023209939.png?raw=true",
      url: "https://www.nova-dev.site/#contacto"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const totalCards = projects.length;
    
    let position = diff;
    if (diff > totalCards / 2) position = diff - totalCards;
    if (diff < -totalCards / 2) position = diff + totalCards;

    const isActive = position === 0;
    const rotation = position * 15;
    const translateZ = isActive ? 0 : -200;
    const translateX = position * 320;
    const scale = isActive ? 1 : 0.85;
    const opacity = Math.abs(position) > 2 ? 0 : 1 - Math.abs(position) * 0.3;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotation}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: isActive ? 10 : 10 - Math.abs(position),
      pointerEvents: isActive ? 'auto' : 'none'
    };
  };

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-header">
        <h2>Proyectos destacados</h2>
        <p>Trabajos que nos enorgullecen</p>
      </div>

      <div className="portfolio-carousel-container">
        <button 
          onClick={prevSlide}
          className="carousel-btn carousel-btn-left"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-perspective">
          <div className="carousel-3d-space">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => currentIndex === index && handleCardClick(project.url)}
                className={`portfolio-card-3d ${currentIndex === index ? 'active' : ''}`}
                style={getCardStyle(index)}
              >
                <div 
                  className="portfolio-image-3d"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${project.image})`
                  }}
                >
                  <div className="portfolio-category">
                    {project.category}
                  </div>
                </div>
                
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="carousel-btn carousel-btn-right"
        >
          <ChevronRight size={24} />
        </button>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}