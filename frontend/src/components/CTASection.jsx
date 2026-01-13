import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/whatsapp-lead-data';
import { Button } from './ui/button';

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
    <section className="py-20 bg-gradient-to-br from-red-900 via-red-700 to-red-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-red-500/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-500/30 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl mb-10 text-red-50">
            Vamos conversar sobre como podemos ajudar sua empresa a alcançar resultados excepcionais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToForm}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg group shadow-2xl"
            >
              Solicitar Proposta Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-8 py-6 text-lg transition-all"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
