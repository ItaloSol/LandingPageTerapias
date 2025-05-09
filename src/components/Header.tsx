
import React, { useState, useEffect } from 'react';
import Logo from '../img/logo.webp';
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
          : 'hidden'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src={Logo} 
            alt="Logo Curso S.O.S Terapias Integrativas Complementares" 
            className="h-10 md:h-12"
          />
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-sos-dark hover:text-sos-green font-medium transition-colors text-lg">Sobre o Curso</a>
          <a href="#problem" className="text-sos-dark hover:text-sos-green font-medium transition-colors text-lg">Desafios</a>
          <a href="#solution" className="text-sos-dark hover:text-sos-green font-medium transition-colors text-lg">Soluções</a>
          <a href="#testimonials" className="text-sos-dark hover:text-sos-green font-medium transition-colors text-lg">Depoimentos</a>
        </nav>
        <a rel="noopener" href="https://pay.kiwify.com.br/e4evoCe" target='_blank' className="btn-primary text-sm md:text-base py-2 px-4">Quero aprender agora</a>
      </div>
    </header>
  );
};

export default Header;
