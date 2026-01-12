import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/whatsapp-lead-data';

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Olá! Vim do site e gostaria de mais informações.');
    window.open(`https://wa.me/${contactInfo.phoneLink}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Fale Conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};