import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images using ES6 import syntax
import SaveClip1 from '../img/SaveClip1.webp';
import SaveClip2 from '../img/SaveClip2.webp';
import SaveClip3 from '../img/SaveClip3.webp';
import SaveClip4 from '../img/SaveClip4.webp';
import SaveClip5 from '../img/SaveClip5.webp';
import SaveClip6 from '../img/SaveClip6.webp';
import SaveClip7 from '../img/SaveClip7.webp';

const ProblemSection: React.FC = () => {
  const images = [
    SaveClip1,
    SaveClip2,
    SaveClip3,
    SaveClip4,
    SaveClip5,
    SaveClip6,
    SaveClip7,
  ];
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  
  return (
    <section className="section bg-sos-green-light" id="problem">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sos-dark">
              Sua Vontade de Ajudar Encontra Barreiras?
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Você vê o sofrimento e sente um forte desejo de intervir, mas falta o conhecimento prático? A incerteza sobre como transformar seu dom em uma profissão real te paralisa? Muitos sentem essa angústia.
            </p>
            <ul ref={listRef} className="space-y-4 bg-[#f4f2ec] rounded-xl p-6 shadow-md border border-sos-green/20">
              {[
                "Medo de não ter conhecimento suficiente para ajudar",
                "Insegurança para transformar sua vocação em profissão",
                "Dúvidas sobre como iniciar na área terapêutica"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start opacity-0 translate-x-[-20px] ${
                    isVisible ? 'animate-[slide-in_0.5s_ease-out_forwards]' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <span className="text-sos-orange mr-2 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img
                src={images[current]}
                alt={`Carrossel imagem ${current + 1}`}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-300"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-300"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="flex justify-center space-x-2 mt-4 absolute left-1/2 -translate-x-1/2 bottom-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === current ? 'bg-sos-orange' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;