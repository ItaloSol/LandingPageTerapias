import React, { useRef, useState, useEffect } from 'react';
import { HandMetal, GraduationCap, Globe } from 'lucide-react';

const Feature: React.FC<{
  icon: React.ReactNode,
  title: string,
  description: string,
  index: number,
  isVisible: boolean
}> = ({ icon, title, description, index, isVisible }) => {
  return (
    <div 
      className={`feature-card opacity-0 translate-y-[20px] ${
        isVisible ? 'animate-[slide-in_0.5s_ease-out_forwards]' : ''
      }`}
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      <div className="bg-sos-green rounded-full p-4 mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-sos-dark">{title}</h3>
      <p className="text-gray-800 text-center">{description}</p>
    </div>
  );
};

const AboutCourseSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <HandMetal size={36} />,
      title: "Técnicas Eficazes",
      description: "Domine 25 manobras Seitai para resultados visíveis."
    },
    {
      icon: <GraduationCap size={36} />,
      title: "Certificação Profissional",
      description: "Atue com confiança e credibilidade no mercado."
    },
    {
      icon: <Globe size={36} />,
      title: "100% Online e Flexível",
      description: "Estude no seu ritmo, de onde estiver, com acesso vitalício."
    }
  ];

  return (
    <section className="section bg-white" id="about">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sos-dark">
            Seu Sonho de Cuidar, Agora uma Realidade Profissional
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            O Curso S.O.S Terapias Integrativas Complementares é o seu guia prático para transformar a paixão por ajudar em uma carreira de impacto. Aprenda a técnica Seitai e outras práticas complementares para aliviar dores e promover bem-estar.
          </p>
        </div>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCourseSection;