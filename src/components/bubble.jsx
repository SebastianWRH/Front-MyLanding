import React, { useState } from 'react';
import { MessageCircle, X, Mail, Github, Linkedin } from 'lucide-react';

const FloatingBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Configura tu número de WhatsApp (código de país + número sin espacios ni guiones)
  const whatsappNumber = '51954181049'; // Ejemplo: 51987654321 para Perú
  const whatsappMessage = '¡Hola! Me gustaría contactarte.';

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(124, 143, 16, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(124, 143, 16, 0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .floating-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .bubble-btn {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c8f10 0%, #999 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          box-shadow: 0 8px 25px rgba(124, 143, 16, 0.4);
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite, pulse 2s infinite;
          position: relative;
        }

        .bubble-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(124, 143, 16, 0.6);
        }

        .bubble-btn.active {
          background: #333;
          animation: none;
        }

        .notification-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 12px;
          height: 12px;
          background: #ff4444;
          border-radius: 50%;
          border: 2px solid #000;
          animation: pulse 2s infinite;
        }

        .chat-panel {
          position: absolute;
          bottom: 85px;
          right: 0;
          width: 320px;
          background: #111;
          border-radius: 20px;
          border: 2px solid #7c8f10;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
          animation: slideIn 0.3s ease-out;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .chat-header {
          background: linear-gradient(135deg, #7c8f10 0%, #999 100%);
          color: #000;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header h3 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .chat-header p {
          margin: 5px 0 0 0;
          font-size: 0.85rem;
          opacity: 0.9;
        }

        .close-btn {
          background: rgba(0, 0, 0, 0.2);
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          transition: all 0.2s;
        }

        .close-btn:hover {
          background: rgba(0, 0, 0, 0.4);
          transform: rotate(90deg);
        }

        .chat-body {
          padding: 20px;
          background: #0a0a0a;
        }

        .welcome-message {
          background: #1a1a1a;
          padding: 15px;
          border-radius: 12px;
          border-left: 3px solid #7c8f10;
          margin-bottom: 15px;
        }

        .welcome-message p {
          margin: 0 0 8px 0;
          color: #ccc;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .welcome-message p:last-child {
          margin-bottom: 0;
        }

        .quick-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .quick-btn {
          background: #222;
          border: 1px solid #333;
          color: #fff;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .quick-btn:hover {
          background: #7c8f10;
          border-color: #7c8f10;
          color: #000;
          transform: translateY(-2px);
        }

        .quick-btn svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .floating-container {
            bottom: 20px;
            right: 20px;
          }

          .bubble-btn {
            width: 60px;
            height: 60px;
          }

          .chat-panel {
            width: calc(100vw - 40px);
            max-width: 320px;
            right: -10px;
          }
        }

        @media (max-width: 480px) {
          .chat-panel {
            width: calc(100vw - 30px);
            bottom: 80px;
            right: -5px;
          }
        }

        /* Scrollbar personalizado */
        .chat-body::-webkit-scrollbar {
          width: 6px;
        }

        .chat-body::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        .chat-body::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }

        .chat-body::-webkit-scrollbar-thumb:hover {
          background: #7c8f10;
        }
      `}</style>

      <div className="floating-container">
        {isOpen && (
          <div className="chat-panel">
            <div className="chat-header">
              <div>
                <h3>¡Hablemos! 👋</h3>
                <p>Respuesta en minutos</p>
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="chat-body">
              <div className="welcome-message">
                <p>
                  <strong>¡Conectemos!</strong> 💬
                </p>
                <p>
                  Elige tu canal de comunicación preferido:
                </p>
              </div>

              <div className="quick-actions">
                <button 
                  className="quick-btn"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </button>
                <button 
                  className="quick-btn"
                  onClick={() => window.location.href = 'mailto:swenceslaorodriguezhorna@gmail.com'}
                >
                  <Mail size={20} />
                  Email
                </button>
                <button 
                  className="quick-btn"
                  onClick={() => window.open('https://github.com/SebastianWRH', '_blank')}
                >
                  <Github size={20} />
                  GitHub
                </button>
                <button 
                  className="quick-btn"
                  onClick={() => window.open('https://www.linkedin.com/in/sebastian-wenceslao-rodriguez-horna-a2395a384/', '_blank')}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          className={`bubble-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir chat"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <>
              <MessageCircle size={28} />
              <span className="notification-dot" />
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingBubble;