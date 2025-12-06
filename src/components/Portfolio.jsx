import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      category: "E-commerce",
      title: "AuroraStore",
      description: "E-commerce dedicado a la bisutería",
      tech: ["HTML", "Node.js", "CSS"],
      image: "https://github.com/SebastianWRH/mi-portafolio-assets/blob/main/imagen_2025-12-06_002313803.png?raw=true",
      url: "https://www.aurorastore.shop"
    },
    {
      category: "E-Commerce",
      title: "Picchu Wassi Hotel",
      description: "Sistema de gestión con analytics en tiempo real",
      tech: ["HTML", "Node.js", "CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      url: "https://example.com/dashboard"
    },
    {
      category: "Landing",
      title: "MyLanding",
      description: "Sitio institucional con blog y formularios de contacto",
      tech: ["Next.js", "Tailwind", "Sanity"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      url: "https://example.com/corporativa"
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
    <section id="portfolio" style={{ 
      padding: '6rem 2rem', 
      background: '#0a0a0a',
      overflow: 'hidden' 
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem', fontWeight: 800 }}>
          Proyectos destacados
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#999' }}>
          Trabajos que nos enorgullecen
        </p>
      </div>

      <div style={{ 
        position: 'relative', 
        maxWidth: '1400px', 
        margin: '0 auto',
        height: '550px'
      }}>
        <button 
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.3s',
            color: '#000'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <div style={{
          perspective: '1500px',
          perspectiveOrigin: 'center center',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '450px',
            transformStyle: 'preserve-3d'
          }}>
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => currentIndex === index && handleCardClick(project.url)}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-175px',
                  marginTop: '-225px',
                  width: '350px',
                  height: '450px',
                  background: '#111',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #222',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: currentIndex === index ? 'pointer' : 'default',
                  ...getCardStyle(index)
                }}
                onMouseEnter={(e) => {
                  if (currentIndex === index) {
                    e.currentTarget.style.borderColor = '#444';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#222';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  height: '280px',
                  background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${project.image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#000',

                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    {project.category}
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '0.75rem',
                    color: '#fff' 
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    color: '#888', 
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                    fontSize: '0.95rem'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid #fff',
                          color: '#fff',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 600
                        }}
                      >
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
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.3s',
            color: '#000'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <ChevronRight size={24} />
        </button>

        <div style={{
          position: 'absolute',
          bottom: '-2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 100
        }}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                background: currentIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}