import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

// Import carousel images
import Save from '../img/Save.webp';
import Save2 from '../img/Save2.webp';
import Save3 from '../img/Save3.webp';

const SolutionSection: React.FC = () => {
  const images = [Save, Save2, Save3];
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
    <section className="section bg-white" id="solution">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Carousel */}
            <div className="relative">
              <img
                src={images[current]}
                alt={`Carrossel imagem ${current + 1}`}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 shadow hover:bg-opacity-100"
                aria-label="Imagem anterior"
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 shadow hover:bg-opacity-100"
                aria-label="Próxima imagem"
              >
                &#8594;
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
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sos-dark">
              O Caminho Claro para Ser um Terapeuta de Impacto
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Com o Curso S.O.S Terapias Integrativas Complementares, você adquire as ferramentas e a confiança para fazer a diferença. Nosso método é direto ao ponto, focado na prática e nos resultados que você e seus futuros clientes buscam.
            </p>
            <ul ref={listRef} className="space-y-4 bg-[#f4f2ec] rounded-xl p-6 shadow-md border border-sos-green/20">
              {[
                "Alivie dores e transforme vidas com técnicas sentai.",
                "Construa uma renda extra ou principal fazendo o que ama.",
                "Junte-se a uma comunidade de terapeutas com propósito."
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-center opacity-0 translate-x-[-20px] ${
                    isVisible ? 'animate-[slide-in_0.5s_ease-out_forwards]' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="bg-sos-green rounded-full p-1 mr-3 text-white">
                    <Check size={18} />
                  </div>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;