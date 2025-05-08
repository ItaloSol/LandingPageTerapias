
import React from 'react';
import { Check } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="section bg-sos-green text-white" id="oferta">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua Transformação Começa Hoje: Oferta Especial!
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Acesso completo ao Curso S.O.S Terapias Integrativas:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">O que está incluso:</h3>
              <ul className="space-y-3 text-left">
                {[
                  "25 Manobras Seitai Detalhadas",
                  "Apostila Completa em PDF",
                  "Bônus: Mandalas Energéticas",
                  "Certificado Profissional",
                  "Acesso Vitalício ao Conteúdo",
                  "Garantia de 7 Dias"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-sos-orange rounded-full p-1 mr-3 text-white flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-lg line-through opacity-75">De R$ 297,00</span>
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold">Por Apenas R$ 97,00</span>
              </div>
              <div className="mb-6">
                <span className="text-lg">Ou 12x de R$ 9,74</span>
              </div>
              <a 
                href="#seu-link-de-checkout" 
                className="btn-primary text-xl py-4"
                aria-label="Clique para garantir sua vaga no curso"
              >
                QUERO MINHA VAGA AGORA!
              </a>
              <p className="mt-4 text-sm">Vagas limitadas nesta condição especial!</p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-4 inline-block">
            <p className="text-lg">
              Transforme sua vocação em uma carreira de impacto!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
