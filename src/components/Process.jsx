import React from 'react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description: "Entendemos tu visión, objetivos y necesidades específicas"
    },
    {
      number: "02",
      title: "Diseño",
      description: "Creamos prototipos y diseños que capturan la esencia de tu marca"
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Construimos tu sitio con código limpio y tecnologías modernas"
    },
    {
      number: "04",
      title: "Lanzamiento",
      description: "Desplegamos y optimizamos para un rendimiento excepcional"
    }
  ];

  return (
    <section id="proceso" className="process">
      <div className="section-header">
        <h2>Nuestro proceso</h2>
        <p>De la idea a la realidad en 4 pasos</p>
      </div>

      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}