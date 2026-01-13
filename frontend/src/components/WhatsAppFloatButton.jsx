import React from 'react';
import { MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/whatsapp-lead-data';

export const WhatsAppFloatButton = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Vim do site e gostaria de saber mais sobre os serviços da Senha Comunicação.');
    window.open(`https://wa.me/${contactInfo.phoneLink}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all group shadow-[0_0_30px_rgba(34,197,94,0.5)] animate-bounce-subtle"
      aria-label="Falar no WhatsApp"
    >
      <MessageSquare className="h-7 w-7 animate-pulse-soft" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-red-600/30">
        Fale Conosco no WhatsApp
      </span>
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping-slow opacity-75" />
    </button>
  );
};
