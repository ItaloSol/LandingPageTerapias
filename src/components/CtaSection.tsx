import React, { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';

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
            <span className="block mb-4 text-white">
              Curso S.O.S Terapias Integrativas Complementares
            </span>
            <span className="block text-2xl md:text-3xl text-white font-medium">
              Transforme Sua Vida Hoje!
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/95">
            Acesso completo ao Curso S.O.S Terapias Integrativas Complementares:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/15 backdrop-blur rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-white">O que está incluso:</h3>
              <ul 
                ref={listRef} 
                className="space-y-4 text-left"
                aria-label="Benefícios inclusos no curso"
              >
                {[
                  "25 Manobras Seitai Detalhadas",
                  "Bônus: Mandalas Energéticas",
                  "Certificado de Conclusão",
                  "Acesso Vitalício ao Conteúdo",
                  "Fundamentos do Seitai e Alinhamento Corporal",
                  "Técnicas Práticas para Aliviar Dores",
                  "Alívio Imediato de Dores nas Costas",
                  "Correção de Desalinhamentos Posturais",
                  "Aumento da Flexibilidade Articular",
                  "Redução do Estresse e Tensões",
                  "Melhora na Qualidade do Sono",
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
                    <div className="bg-white rounded-full p-1 mr-3 text-sos-green flex-shrink-0" aria-hidden="true">
                      <Check size={16} />
                    </div>
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/15 backdrop-blur rounded-lg p-8 flex flex-col justify-center shadow-lg relative overflow-hidden">
              <div className="absolute -right-16 top-6 rotate-45 bg-sos-orange px-16 py-1 text-sm font-bold shadow-lg">
                PROMOÇÃO
              </div>
              <div className="mb-4" aria-label="Preço original">
                <span className="text-lg line-through opacity-75">De R$ 297,00</span>
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold">Por Apenas R$ 97,00</span>
              </div>
              <div className="mb-6">
                <span className="text-xl">Ou 12x de R$ 9,74</span>
              </div>
              <a
                rel="noopener"
                href="https://pay.kiwify.com.br/e4evoCe" 
                target='_blank'
                className="cta-button focus:ring-4 focus:ring-white/50 focus:outline-none"
                aria-label="Clique para garantir sua vaga no curso"
              >
                QUERO APRENDER AGORA!
              </a>
              <p className="mt-4 text-lg font-medium italic border-t border-white/20 pt-4">
                Vagas limitadas nesta condição especial!
              </p>
            </div>
          </div>
          
          <p className="text-xl font-medium italic max-w-2xl mx-auto text-white">
            Transforme sua vocação em uma carreira de impacto!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;