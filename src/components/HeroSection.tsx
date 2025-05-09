import React from 'react';
import { ChevronDown } from 'lucide-react';

// Import images
import Logo from '../img/logo.webp';
import Jorge from '../img/jorge.webp';
import HeroBg from '../img/hero.webp';
import HeroBgMobile from '../img/hero-m.webp';

const features = [
  {
    icon: '🎯',
    title: '25 Técnicas Seitai',
    desc: 'Manobras exclusivas para coluna, articulações e músculos.',
    aria: 'Target icon',
  },
  {
    icon: '📜',
    title: 'Certificação',
    desc: 'Certificado de conclusão do curso.',
    aria: 'Scroll icon',
  },
  {
    icon: '🤝',
    title: 'Suporte Total',
    desc: 'Acesso vitalício ao conteúdo e material didático.',
    aria: 'Handshake icon',
  },
  {
    icon: '⭐',
    title: 'Resultados',
    desc: 'Alívio imediato e duradouro desde a primeira sessão.',
    aria: 'Star icon',
  },
  {
    icon: '💰',
    title: 'Alta Rentabilidade',
    desc: 'Ganhos de R$100 a R$250 por sessão.',
    aria: 'Money bag icon',
  },
  {
    icon: '🚀',
    title: 'Comece Já',
    desc: 'Pratique e ajude pessoas desde o primeiro dia.',
    aria: 'Rocket icon',
  },
];

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="bg-[#f4f2ec] min-h-screen flex justify-center p-6 relative overflow-hidden"
      id="hero"
    >
      {/* Desktop background */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      {/* Mobile background */}
      <div
        className="block md:hidden absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${HeroBgMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-[#f4f2ec] bg-opacity-80 pointer-events-none z-10"></div>
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 lg:gap-20 relative z-20">
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col lg:items-start justify-center items-center text-center lg:text-left">
          <div className="relative w-28 h-28 mb-10">
            <img
              src={Logo}
              alt="Logo with green circle and text 'Porteo Rivellano' in black and green"
              className="absolute top-0 left-0 w-28 h-28 object-contain"
              width={112}
              height={112}
            />
          </div>
          <h1 className="text-[#1a1a1a] font-extrabold text-3xl sm:text-4xl xl:text-5xl leading-tight mb-6 max-w-xl">
            <span className="block mb-2">Sente o Chamado para Ajudar?</span>
            <span className="block text-sos-green">Transforme Vidas</span>
            <span className="block">(Incluindo a Sua).</span>
          </h1>
          <p className="text-[#7a7a7a] text-base sm:text-lg max-w-md mb-8 leading-relaxed">
            Descubra como sua vocação para cuidar pode se tornar uma profissão gratificante e lucrativa com o Curso S.O.S Terapias Integrativas Complementares.
          </p>
          <a
            rel="noopener"
            href="https://pay.kiwify.com.br/e4evoCe"
            target='_blank'
            className="bg-orange-500 text-white font-bold rounded-md px-6 py-3 mb-12 max-w-md w-full sm:w-auto hover:bg-orange-600 transition block text-center text-base"
          >
            QUERO APRENDER AGORA!
          </a>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl w-full">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 flex flex-col text-center shadow-sm max-w-xs w-full"
              >
                <div className="text-4xl mb-3" aria-label={feature.aria}>{feature.icon}</div>
                <p className="text-xs text-[#4a4a4a] font-semibold leading-tight">
                  {feature.title}
                  <br />
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className="lg:w-1/2 relative flex">
          <img
            src={Jorge}
            alt="Bald man in black kimono with arms crossed standing in front of a large beige circle"
            className="max-w-full h-auto"
            width={600}
            height={600}
            style={{ marginTop: 150, marginBottom: -50 }}
          />
        </div>
      </div>
      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-sos-green hover:text-sos-dark transition-colors duration-300 animate-bounce cursor-pointer bg-white rounded-full p-2 shadow-lg"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;