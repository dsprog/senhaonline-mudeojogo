import React from 'react';
import { Phone } from 'lucide-react';

export const Header = ({ logo }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Senha Comunicação" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Contact Button */}
          <a
            href="tel:+5519981333233"
            className="flex items-center gap-2 bg-[#E74C3C] hover:bg-[#C0392B] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Fale Conosco</span>
          </a>
        </div>
      </div>
    </header>
  );
};