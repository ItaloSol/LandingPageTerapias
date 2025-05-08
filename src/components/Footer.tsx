
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sos-dark text-sos-light py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Curso S.O.S Terapias</h3>
            <p className="mb-4">
              Transformando sua vocação para cuidar em uma carreira profissional de sucesso.
            </p>
            <p className="text-sm">
              &copy; 2025 Curso S.O.S Terapias Integrativas. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <p className="mb-2">CNPJ: XX.XXX.XXX/0001-XX</p>
            <p className="mb-4">Email: contato@cursosterapias.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sos-orange hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-sos-orange hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-sos-orange hover:text-white transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sos-orange hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sos-orange hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#about" className="text-sos-orange hover:text-white transition-colors">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#oferta" className="text-sos-orange hover:text-white transition-colors">
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
