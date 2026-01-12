import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/whatsapp-lead-data';

const SENHA_LOGO = "https://customer-assets.emergentagent.com/job_f2b18a42-25f4-4837-bb60-b0e2886cc8b3/artifacts/bny36gyg_logo%20senha.png";

export const FooterWhatsApp = () => {
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Senha Comunicação.');
  const whatsappNumber = contactInfo.phoneLink.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/55${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img 
            src={SENHA_LOGO} 
            alt="Senha Comunicação" 
            className="h-12 w-auto"
          />

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Senha Comunicação. Todos os direitos reservados.
          </p>

          {/* Emergent Badge */}
          <a 
            href="https://app.emergent.sh/?utm_source=emergent-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-xs"
          >
            <img 
              src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4"
              alt="Emergent"
              className="w-5 h-5 rounded-full"
            />
            Made with Emergent
          </a>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 font-bold"
      >
        <MessageCircle className="w-5 h-5" />
        Fale Conosco no WhatsApp
      </a>
    </footer>
  );
};