import React from 'react';
import { Shield, Star, Clock, CheckCircle, MessageCircle, HeartHandshake, Sparkles, Target, Lock, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PreCheckout: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sos-green-light/20">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-center">
          <h1 className="text-lg font-semibold text-sos-dark truncate max-w-[300px] md:max-w-none whitespace-pre-line text-center">
            Curso S.O.S Terapias{'\n'}Integrativas Complementares
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 mb-24">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-sos-dark leading-tight">
            Seu Dom de Cuidar Merece<br className="hidden md:block" />
            Reconhecimento Profissional
          </h2>
          
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600">Avaliação Excelente</span>
          </div>

          {/* Trust Indicators */}
          <div className="flex gap-3 py-2">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-sos-green" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-sos-green" />
              <span>7 Dias de Garantia</span>
            </div>
          </div>
        </div>

        {/* Identification Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-sos-dark mb-4">
            Você é Especial Porque:
          </h3>
          <div className="space-y-4">
            {[
              "Tem um dom natural para cuidar\ndas pessoas",
              "Busca conhecimento prático para\ntransformar vidas",
              "Está pronto para profissionalizar\nseu talento",
              "Valoriza uma formação completa\ne reconhecida"
            ].map((trait, index) => (
              <div key={index} className="flex items-start gap-3 bg-sos-green-light/10 p-3 rounded-lg">
                <HeartHandshake className="w-5 h-5 text-sos-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-tight whitespace-pre-line">{trait}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-sos-dark mb-4">
            Seu Caminho para o Sucesso:
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: <Target className="w-5 h-5" />,
                title: "Resultados Garantidos",
                desc: "Você aplicará as técnicas\ndesde o primeiro dia"
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Método Comprovado",
                desc: "25 manobras Seitai\neficazes e testadas"
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Formação Completa",
                desc: "Você receberá certificado\ne suporte contínuo"
              }
            ].map((solution, index) => (
              <div key={index} className="flex items-start gap-3 border-l-4 border-sos-green pl-4">
                <div className="text-sos-green">{solution.icon}</div>
                <div>
                  <h4 className="font-medium text-sos-dark">{solution.title}</h4>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-sos-dark mb-4">
            O Que Está Incluso:
          </h3>
          <div className="space-y-4">
            {[
              "25 Manobras Seitai Detalhadas",
              "Certificado de Conclusão",
              "Acesso Vitalício ao Conteúdo",
              "Fundamentos do Seitai e\nAlinhamento Corporal",
              "Técnicas Práticas para\nAliviar Dores",
              "Alívio Dores Imediato em\nTodo o Corpo",
              "Correção de Desalinhamentos\nPosturais",
              "Aumento da Flexibilidade\nArticular",
              "Redução do Estresse\ne Tensões",
              "Melhora na Qualidade\nde Vida",
              "Garantia de 7 Dias"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sos-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-tight whitespace-pre-line">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Seals */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center p-4 border rounded-lg">
              <Lock className="w-8 h-8 text-sos-green mb-2" />
              <h4 className="font-medium text-sm text-sos-dark">Pagamento 100% Seguro</h4>
              <p className="text-xs text-gray-600">Seus dados estão protegidos</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border rounded-lg">
              <CreditCard className="w-8 h-8 text-sos-green mb-2" />
              <h4 className="font-medium text-sm text-sos-dark">Pagamento Facilitado</h4>
              <p className="text-xs text-gray-600">Parcele em até 12x</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border rounded-lg">
              <Shield className="w-8 h-8 text-sos-green mb-2" />
              <h4 className="font-medium text-sm text-sos-dark">Garantia de 7 Dias</h4>
              <p className="text-xs text-gray-600">Satisfação garantida</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border rounded-lg">
              <MessageCircle className="w-8 h-8 text-sos-green mb-2" />
              <h4 className="font-medium text-sm text-sos-dark">Suporte Exclusivo</h4>
              <p className="text-xs text-gray-600">Atendimento personalizado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <a
            href="https://wa.me/5521984590000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-sos-green text-white font-bold py-4 rounded-xl text-lg active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
            Iniciar Minha Jornada Agora
          </a>
          <p className="text-center text-sm text-gray-500 mt-2">
            O Professor está online para te ajudar
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreCheckout;