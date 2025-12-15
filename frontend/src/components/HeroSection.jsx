import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#E74C3C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C0392B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E74C3C]/10 text-[#C0392B] px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Mais de 30 anos de experiência
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Transforme sua Comunicação em
            <span className="text-[#E74C3C]"> Resultados Reais</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estratégias 360° de marketing digital, gestão de redes sociais e assessoria de comunicação para fazer sua marca crescer.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[#E74C3C] hover:bg-[#C0392B] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Agende uma Consultoria Gratuita
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};