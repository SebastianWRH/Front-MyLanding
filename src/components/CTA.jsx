// src/components/CTA.jsx
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('🚀 Form submitted:', formData);
    
    setStatus('loading');
    setErrorMessage('');

    try {
      console.log('📡 Sending to backend...');
      
      const response = await fetch('https://back-mylanding.vercel.app/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('📥 Response status:', response.status);

      const data = await response.json();
      console.log('📥 Response data:', data);

      if (response.ok) {
        console.log('✅ Success!');
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', service: '', message: '' });
        }, 5000);
      } else {
        console.error('❌ Server error:', data.message);
        setStatus('error');
        setErrorMessage(data.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('❌ Connection error:', error);
      setStatus('error');
      setErrorMessage('No se pudo conectar con el servidor. Por favor, intenta más tarde.');
    }
  };

  if (status === 'success') {
    return (
      <section id="contacto" className="cta">
        <div className="cta-content">
          <CheckCircle size={64} style={{ margin: '0 auto 1rem', display: 'block', color: '#4ade80' }} />
          <h2>¡Solicitud enviada exitosamente!</h2>
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
        
        {status === 'error' && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '2px solid #ef4444',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            maxWidth: '600px',
            margin: '0 auto 1.5rem'
          }}>
            <AlertCircle size={24} style={{ color: '#ef4444', flexShrink: 0 }} />
            <p style={{ margin: 0, color: '#ef4444', textAlign: 'left' }}>{errorMessage}</p>
          </div>
        )}
        
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
              disabled={status === 'loading'}
              placeholder="Tu nombre"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '2px solid rgba(0, 0, 0, 0.2)',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#000000',
                opacity: status === 'loading' ? 0.6 : 1
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
              disabled={status === 'loading'}
              placeholder="tu@email.com"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '2px solid rgba(0, 0, 0, 0.2)',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#000000',
                opacity: status === 'loading' ? 0.6 : 1
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
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '2px solid rgba(0, 0, 0, 0.2)',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#000000',
                cursor: 'pointer',
                opacity: status === 'loading' ? 0.6 : 1
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
              disabled={status === 'loading'}
              placeholder="Describe brevemente qué necesitas..."
              rows="4"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '2px solid rgba(0, 0, 0, 0.2)',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#000000',
                resize: 'vertical',
                fontFamily: 'inherit',
                opacity: status === 'loading' ? 0.6 : 1
              }}
            />
          </div>

          <button 
            onClick={handleSubmit} 
            className="btn-cta"
            disabled={status === 'loading'}
            style={{
              opacity: status === 'loading' ? 0.7 : 1,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer'
            }}
          >
            {status === 'loading' ? (
              <>
                <Loader size={20} style={{ animation: 'spin 1s linear infinite' }} />
                Enviando...
              </>
            ) : (
              <>
                Solicitar cotización <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Asegurar que el texto sea visible en todos los inputs */
        input::placeholder,
        textarea::placeholder,
        select option {
          color: #666666 !important;
          opacity: 0.7;
        }
        
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: #7c8f10;
          box-shadow: 0 0 0 3px rgba(124, 143, 16, 0.2);
        }
      `}</style>
    </section>
  );
}