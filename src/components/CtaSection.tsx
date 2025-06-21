import React, { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
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

  return (
    <section className="section bg-sos-green text-white" id="oferta" aria-labelledby="cta-heading">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 
            id="cta-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="block mb-4 text-yellow-300">
              Curso S.O.S Terapias Integrativas Complementares
            </span>
            <span className="block text-2xl md:text-3xl text-white font-medium">
              Transforme Sua Vida Hoje!
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/15 backdrop-blur rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-yellow-300">O que está incluso:</h3>
              <ul 
                ref={listRef} 
                className="space-y-4 text-left"
                aria-label="Benefícios inclusos no curso"
              >
                {[
                  "Bônus 1: Aula 'Iniciando do Zero' — Domine o Básico com Segurança",
                  "Bônus 2: Curso 100% Online",
                  "Bônus 3: Certificação Completa do Treinamento",
                  "Bônus 4: Aplicação Imediata",
                  "Bônus 5: Acesso Vitalício",
                  "25 Manobras Seitai Detalhadas",
                  "Fundamentos do Seitai e Alinhamento Corporal",
                  "Técnicas Práticas para Aliviar Dores",
                  "Alívio Dores Imediato em Todo o Corpo",
                  "Correção de Desalinhamentos Posturais",
                  "Aumento da Flexibilidade Articular",
                  "Redução do Estresse e Tensões",
                  "Melhora na Qualidade de Vida",
                  "Garantia de 7 Dias"
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
                    <div className="bg-yellow-300 rounded-full p-1 mr-3 text-sos-green">
                      <Check size={16} />
                    </div>
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/15 backdrop-blur rounded-lg p-8 flex flex-col justify-center shadow-lg relative overflow-hidden">
              <div className="absolute -right-16 top-6 rotate-45 bg-yellow-300 px-16 py-1 text-sos-green font-bold shadow-lg">
                PROMOÇÃO
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-lg opacity-75">Por apenas R$ 297,00 no PIX</span>
                </div>
                <div className="mb-2">
                  <div className="text-6xl font-bold text-yellow-300 mt-2">R$ 24,75</div>
                </div>
                <div className="mb-8">
                  <span className="text-xl">em 12x no cartão</span>
                </div>
                <a
                  rel="noopener"
                  href="https://pay.kiwify.com.br/e4evoCe"
                  target="_blank"
                  className="cta-button bg-yellow-300 hover:bg-yellow-400 text-sos-green focus:ring-4 focus:ring-white/50 focus:outline-none block w-full"
                  aria-label="Clique para garantir sua vaga no curso"
                >
                  QUERO GARANTIR MINHA VAGA
                </a>
                <p className="mt-6 text-lg font-medium italic border-t border-white/20 pt-4">
                  Vagas limitadas nesta condição especial!
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-xl font-medium italic max-w-2xl mx-auto text-yellow-300">
            Transforme sua vocação em uma carreira de impacto!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;