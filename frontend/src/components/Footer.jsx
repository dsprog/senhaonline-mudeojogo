import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Globe, MessageCircle } from 'lucide-react';
import { mockCompanyInfo } from '../mock';

export const Footer = ({ logo }) => {
  const { socialMedia, email, website, phone } = mockCompanyInfo;

  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Senha Comunicação.');
  const whatsappNumber = phone.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/55${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* WhatsApp CTA Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              Informações? <span className="bg-gradient-to-r from-[#E74C3C] to-[#FF6B6B] bg-clip-text text-transparent">Entre em contato conosco</span>
            </h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-[#25D366]/50 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Senha Comunicação" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Assessoria de comunicação e marketing digital com mais de 30 anos de experiência transformando marcas.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contato</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[#E74C3C] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-[#E74C3C] rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">{email}</span>
              </a>
              <a 
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#E74C3C] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-[#E74C3C] rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-sm">{website}</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href={socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#E74C3C] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href={socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#E74C3C] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href={socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#E74C3C] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Senha Comunicação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};