import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5521984590000";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o curso de Terapias Integrativas.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50 flex items-center justify-center hover:scale-110 animate-[bounce_2s_ease-in-out_infinite]"
      aria-label="Contate-nos pelo WhatsApp"
      style={{
        animation: 'float 3s ease-in-out infinite'
      }}
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;