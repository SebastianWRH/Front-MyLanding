import React from 'react';
import { Zap, Globe, ShoppingCart, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Zap size={40} />,
      title: "Landing Page",
      price: "$120",
      period: "Proyecto único",
      description: "Perfecta para campañas y lanzamientos",
      features: [
        "Diseño personalizado",
        "Responsive 100%",
        "Optimización SEO básica",
        "Formulario de contacto",
        "3 secciones incluidas"
      ],
      popular: false
    },
    {
      icon: <Globe size={40} />,
      title: "Página Web",
      price: "$500",
      period: "Proyecto único",
      description: "Sitio completo para tu negocio",
      features: [
        "Hasta 10 páginas",
        "Panel de administración",
        "Blog integrado",
        "Optimización SEO avanzada",
        "Integración Analytics",
        "Formularios personalizados",
        "Galería de imágenes"
      ],
      popular: true
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce",
      price: "$900",
      period: "Proyecto único",
      description: "Tienda online completa y funcional",
      features: [
        "Catálogo ilimitado",
        "Carrito de compras",
        "Pasarela de pago integrada",
        "Panel de administración",
        "Gestión de inventario",
        "Sistema de envíos",
        "Reportes de ventas"
      ],
      popular: false
    }
  ];

  return (
    <section id="servicios" className="services">
      <div className="section-header">
        <h2>Planes y Precios</h2>
        <p>Elige el paquete perfecto para tu proyecto</p>
      </div>
      
      <div className="pricing-grid">
        {services.map((service, index) => (
          <div key={index} className={`pricing-card ${service.popular ? 'popular' : ''}`}>
            {service.popular && (
              <div className="popular-badge">MÁS POPULAR</div>
            )}
            
            <div className="pricing-header">
              <div className="pricing-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="pricing-description">{service.description}</p>
            </div>

            <div className="pricing-price">
              <span className="price">{service.price}</span>
              <span className="period">{service.period}</span>
            </div>

            <ul className="pricing-features">
              {service.features.map((feature, i) => (
                <li key={i}>
                  <Check size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#contacto">
              <button className="btn-pricing">
                Solicitar cotización
              </button>
            </a>
          </div>
        ))}
      </div>

      <div className="pricing-note">
        <p>* Los precios no incluyen Hosting</p>
      </div>
    </section>
  );
}