import React from 'react';
import { contactInfo } from '../data/whatsapp-lead-data';

export const FooterWhatsApp = ({ logo }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <img 
            src={logo} 
            alt="Senha Comunicação" 
            className="h-10 w-auto object-contain mx-auto"
          />
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Senha Comunicação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};