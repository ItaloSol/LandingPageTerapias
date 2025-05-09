
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sos-dark text-sos-light py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Curso S.O.S Terapias</h3>
            <p className="mb-4 text-lg">
              Transformando sua vocação para cuidar em uma carreira profissional de sucesso.
            </p>
            <p className="text-base">
              &copy; 2025 Curso S.O.S Terapias Integrativas. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <p className="mb-2 text-lg">Celular: (21) 9 8459-0000</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/institutojorgeavellar/" rel="noopener" target='_blank' className="text-sos-orange hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sos-orange hover:text-white transition-colors text-lg">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#oferta" className="text-sos-orange hover:text-white transition-colors text-lg">
                  Ofertas Especiais
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
