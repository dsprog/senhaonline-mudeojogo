import React from 'react';
import { MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { contactInfo } from '../data/whatsapp-lead-data';

const SENHA_LOGO = "https://customer-assets.emergentagent.com/job_f2b18a42-25f4-4837-bb60-b0e2886cc8b3/artifacts/bny36gyg_logo%20senha.png";

export const FooterWhatsApp = () => {
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Senha Comunicação.');
  const whatsappLink = `https://wa.me/${contactInfo.phoneLink}?text=${whatsappMessage}`;

  return (
    <footer className="bg-black text-white relative z-20">
      {/* WhatsApp CTA Section - SEM BORDA EM CIMA */}
      <div className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl font-bold text-white">
            Fale Conosco no WhatsApp
          </h3>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Iniciar Conversa
          </a>
        </div>
      </div>

      {/* Main Footer - SÓ LOGO + REDES SOCIAIS + COPYRIGHT + BADGE */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <img 
              src={SENHA_LOGO} 
              alt="Senha Comunicação" 
              className="h-12 w-auto"
            />

            {/* Social Media - 4 ÍCONES CIRCULARES */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Senhaonline?fref=ts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#DC143C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/senhaonline/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#DC143C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/senha-comunicação/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#DC143C] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/senhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#DC143C] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Senha Comunicação. Todos os direitos reservados.
            </p>

            {/* Emergent Badge */}
            <a 
              href="https://app.emergent.sh/?utm_source=emergent-badge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors text-xs"
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
      </div>
    </footer>
  );
};
