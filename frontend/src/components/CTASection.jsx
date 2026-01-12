import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/whatsapp-lead-data';

export const CTASection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Senha Comunicação.');
    window.open(`https://wa.me/${contactInfo.phoneLink}?text=${message}`, '_blank');
  };

  const scrollToForm = () => {
    document.getElementById('contact-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#E74C3C] to-[#C0392B]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar sua empresa a alcançar resultados excepcionais
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-white text-[#E74C3C] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Solicitar Proposta Gratuita
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};