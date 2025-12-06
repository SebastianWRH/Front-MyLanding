import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  if (submitted) {
    return (
      <section id="contacto" className="cta">
        <div className="cta-content">
          <CheckCircle size={64} style={{ margin: '0 auto 1rem', display: 'block' }} />
          <h2>¡Solicitud enviada!</h2>
          <p>Nos pondremos en contacto contigo pronto</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="cta">
      <div className="cta-content">
        <h2>¿Listo para empezar tu proyecto?</h2>
        <p style={{ marginBottom: '2rem' }}>Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos</p>
        
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Nombre completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '2px solid rgba(0, 0, 0, 0.2)',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.9)'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Correo electrónico *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '2px solid rgba(0, 0, 0, 0.2)',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.9)'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              ¿Qué servicio necesitas? *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '2px solid rgba(0, 0, 0, 0.2)',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                cursor: 'pointer'
              }}
            >
              <option value="">Selecciona un servicio</option>
              <option value="web">Desarrollo Web</option>
              <option value="app">Aplicación Móvil</option>
              <option value="ecommerce">E-commerce</option>
              <option value="design">Diseño UI/UX</option>
              <option value="consulting">Consultoría</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Cuéntanos sobre tu proyecto
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe brevemente qué necesitas..."
              rows="4"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '2px solid rgba(0, 0, 0, 0.2)',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <button onClick={handleSubmit} className="btn-cta">
            Solicitar cotización <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}