import React, { useState } from 'react';
import foto from '../img/foto.webp';

const VslSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoId = "wNxZoHfz0Zw";
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  const loadVideo = () => {
    setIsVideoLoaded(true);
  };

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
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl relative bg-black">
            {!isVideoLoaded ? (
              <button
                onClick={loadVideo}
                className="w-full h-full relative group cursor-pointer"
                aria-label="Play video"
              >
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>
              </button>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Curso S.O.S Terapias Integrativas Complementares - VSL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VslSection;