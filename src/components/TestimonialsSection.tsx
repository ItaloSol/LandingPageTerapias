
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <div className="testimonial-card">
      <div className="mb-4 text-sos-green">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      <p className="text-gray-800 mb-4 italic">{quote}</p>
      <div className="flex items-center">
        <div className="ml-0">
          <p className="font-semibold text-sos-dark">{author}</p>
          <p className="text-gray-700 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section bg-sos-green-light" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sos-dark">
            Quem Fez o Curso S.O.S Recomenda
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Espaço para vídeos de depoimento */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center border-2 border-gray-400">
              <p className="text-gray-800 font-medium">Vídeo de Depoimento {index}</p>
              {/* Aqui é onde o vídeo de depoimento será incorporado */}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="Finalmente encontrei um curso prático que me deu segurança para atender. Já estou ajudando muitas pessoas e amando!"
            author="Joana M."
            role="Nova Terapeuta"
          />
          <TestimonialCard 
            quote="O Seitai é incrível! O curso é muito didático. Consegui uma nova fonte de renda fazendo algo que realmente me realiza."
            author="Pedro L."
            role="Terapeuta Satisfeito"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
