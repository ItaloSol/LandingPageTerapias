import React from 'react';
import { ArrowRight, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import foto from '../img/foto.webp';

const FinalCtaSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-sos-green to-sos-green/90 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${foto})` }}
      />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">
            Não Perca Mais Tempo!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Junte-se a milhares de terapeutas de sucesso que já transformaram suas vidas através do Curso S.O.S Terapias Integrativas Complementares.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Acesso Imediato</h3>
              <p className="text-sm text-white/80">Comece seus estudos hoje mesmo após a confirmação do pagamento</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 flex flex-col items-center">
              <Shield className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Garantia de 7 Dias</h3>
              <p className="text-sm text-white/80">Satisfação garantida ou seu dinheiro de volta</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 flex flex-col items-center">
              <Award className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Certificado Incluso</h3>
              <p className="text-sm text-white/80">Certificado de conclusão do curso</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-bold mb-2 text-yellow-300">
              <span className=" opacity-75">Por apenas R$ 297,00 no PIX</span>
            </p>
            <p className="text-4xl font-bold mb-4 text-yellow-300">
            ou R$ 24,75
            </p>
            <p className="text-xl mb-6">em 12x no cartão</p>
            
            <Link 
              to="/checkout"
              className="group inline-flex items-center justify-center bg-yellow-300 hover:bg-yellow-400 text-sos-green font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
            
            <p className="mt-4 text-sm text-white/80">
              Oferta por tempo limitado. Não perca esta oportunidade!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;