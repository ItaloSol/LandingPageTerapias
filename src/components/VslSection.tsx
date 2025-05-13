import React from 'react';
import foto from '../img/foto.webp';

const VslSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-sos-green to-sos-green/90 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${foto})` }}
      />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Descubra Como Transformar Vidas Através da Terapia
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Assista ao vídeo e entenda como você pode se tornar um terapeuta profissional e fazer a diferença na vida das pessoas.
            </p>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wNxZoHfz0Zw"
              title="Curso S.O.S Terapias Integrativas Complementares - VSL"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VslSection;