
import React from 'react';
import { Check } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="section bg-white" id="solution">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="https://via.placeholder.com/300x200?text=Terapeuta+Sorrindo+com+Cliente" 
              alt="Terapeuta aplicando técnica com cliente satisfeito" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sos-dark">
              O Caminho Claro para Ser um Terapeuta de Impacto
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Com o Curso S.O.S, você adquire as ferramentas e a confiança para fazer a diferença. Nosso método é direto ao ponto, focado na prática e nos resultados que você e seus futuros clientes buscam.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-sos-green rounded-full p-1 mr-3 text-white">
                  <Check size={18} />
                </div>
                <span className="text-gray-800">Alivie dores e transforme vidas com técnicas comprovadas.</span>
              </li>
              <li className="flex items-center">
                <div className="bg-sos-green rounded-full p-1 mr-3 text-white">
                  <Check size={18} />
                </div>
                <span className="text-gray-800">Construa uma renda extra ou principal fazendo o que ama.</span>
              </li>
              <li className="flex items-center">
                <div className="bg-sos-green rounded-full p-1 mr-3 text-white">
                  <Check size={18} />
                </div>
                <span className="text-gray-800">Junte-se a uma comunidade de terapeutas com propósito.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
