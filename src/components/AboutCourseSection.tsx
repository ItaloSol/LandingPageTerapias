
import React from 'react';
import { Hands, Certificate, BookOpen } from 'lucide-react';

const Feature: React.FC<{
  icon: React.ReactNode,
  title: string,
  description: string
}> = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="bg-sos-green rounded-full p-4 mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-sos-dark">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const AboutCourseSection: React.FC = () => {
  return (
    <section className="section bg-white" id="about">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sos-dark">
            Seu Sonho de Cuidar, Agora uma Realidade Profissional
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O Curso S.O.S Terapias Integrativas é o seu guia prático para transformar a paixão por ajudar em uma carreira de impacto. Aprenda a técnica Seitai e outras práticas complementares para aliviar dores e promover bem-estar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature 
            icon={<Hands size={36} />}
            title="Técnicas Eficazes"
            description="Domine 25 manobras Seitai para resultados visíveis."
          />
          <Feature 
            icon={<Certificate size={36} />}
            title="Certificação Profissional"
            description="Atue com confiança e credibilidade no mercado."
          />
          <Feature 
            icon={<BookOpen size={36} />}
            title="100% Online e Flexível"
            description="Estude no seu ritmo, de onde estiver, com acesso vitalício."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCourseSection;
