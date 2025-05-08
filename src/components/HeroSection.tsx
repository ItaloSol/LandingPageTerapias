
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-0" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-75 z-10"></div> {/* Aumentado a opacidade para melhor contraste */}
        <img 
          src="https://via.placeholder.com/1200x600?text=Terapeuta+Ajudando+Paciente+Sorrindo" 
          alt="Terapeuta ajudando paciente" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-20 text-white text-center px-4 animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Sente o Chamado para Ajudar? <br className="hidden md:block" />
          Transforme Vidas (Incluindo a Sua).
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium">
          Descubra como sua vocação para cuidar pode se tornar uma profissão gratificante e lucrativa com o Curso S.O.S Terapias Integrativas.
        </p>
        
        <a 
          href="#oferta" 
          className="btn-primary text-lg md:text-xl inline-block"
        >
          QUERO REALIZAR MEU CHAMADO
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
