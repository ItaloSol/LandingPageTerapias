
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="https://via.placeholder.com/150x50?text=Sua+Marca+Aqui" 
            alt="Logo Curso S.O.S Terapias Integrativas" 
            className="h-10 md:h-12"
          />
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-sos-dark hover:text-sos-green font-medium transition-colors">Sobre o Curso</a>
          <a href="#problem" className="text-sos-dark hover:text-sos-green font-medium transition-colors">Desafios</a>
          <a href="#solution" className="text-sos-dark hover:text-sos-green font-medium transition-colors">Soluções</a>
          <a href="#testimonials" className="text-sos-dark hover:text-sos-green font-medium transition-colors">Depoimentos</a>
        </nav>
        <a href="#oferta" className="btn-primary text-sm py-2 px-4">Quero minha vaga</a>
      </div>
    </header>
  );
};

export default Header;
