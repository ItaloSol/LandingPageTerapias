import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const phoneNumber = "5521984590000";
  const message = encodeURIComponent("Olá professor! Tenho uma dúvida sobre o curso.");
  
  return (
    <section className="section bg-sos-green-light" id="contact">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sos-dark">
            QUALQUER DÚVIDA, FALE COM O PROFESSOR
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Estamos aqui para ajudar você em sua jornada de transformação. Tire suas dúvidas diretamente com o professor.
          </p>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-sos-green hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com o Professor
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;