
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="section bg-sos-green-light" id="problem">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sos-dark">
              Sua Vontade de Ajudar Encontra Barreiras?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Você vê o sofrimento e sente um forte desejo de intervir, mas falta o conhecimento prático? A incerteza sobre como transformar seu dom em uma profissão real te paralisa? Muitos sentem essa angústia.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-sos-orange mr-2">✓</span>
                <span>Medo de não ter conhecimento suficiente para ajudar</span>
              </li>
              <li className="flex items-start">
                <span className="text-sos-orange mr-2">✓</span>
                <span>Insegurança para transformar sua vocação em profissão</span>
              </li>
              <li className="flex items-start">
                <span className="text-sos-orange mr-2">✓</span>
                <span>Dúvidas sobre como iniciar na área terapêutica</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://via.placeholder.com/300x200?text=Pessoa+Pensativa+ou+Frustrada" 
              alt="Ilustração de pessoa refletindo sobre como ajudar" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
