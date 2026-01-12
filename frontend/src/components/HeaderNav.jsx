import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { contactInfo } from '../data/whatsapp-lead-data';

const SENHA_LOGO_SP = "https://customer-assets.emergentagent.com/job_f2b18a42-25f4-4837-bb60-b0e2886cc8b3/artifacts/bny36gyg_logo%20senha.png";

export const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Vim do site e gostaria de saber mais.');
    window.open(`https://wa.me/${contactInfo.phoneLink}?text=${message}`, '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo SP */}
          <div className="flex items-center">
            <img 
              src={SENHA_LOGO_SP}
              alt="Senha Comunicação" 
              className="h-14 w-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-white hover:text-[#E74C3C] transition-colors font-medium text-sm"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-white hover:text-[#E74C3C] transition-colors font-medium text-sm"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio-section')}
              className="text-white hover:text-[#E74C3C] transition-colors font-medium text-sm"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="text-white hover:text-[#E74C3C] transition-colors font-medium text-sm"
            >
              Contato
            </button>
          </nav>

          {/* Social Icons + CTA */}
          <div className="flex items-center gap-3">
            {/* Social Media Icons - ÍCONES CIRCULARES */}
            <div className="hidden lg:flex items-center gap-2">
              <a 
                href="https://www.facebook.com/Senhaonline?fref=ts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#E74C3C] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/senhaonline/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#E74C3C] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/senha-comunicação/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#E74C3C] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/senhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#E74C3C] transition-colors"
              >
                <X className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Button - VERMELHO */}
            <button
              onClick={handleWhatsApp}
              className="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};