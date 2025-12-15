import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(231, 76, 60, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(231, 76, 60, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E74C3C]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#C0392B]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E74C3C]/10 border border-[#E74C3C]/30 text-[#E74C3C] px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-sm">
            <Award className="w-4 h-4" />
            Mais de 30 anos transformando marcas
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Transforme sua Comunicação em
            <span className="block mt-2 bg-gradient-to-r from-[#E74C3C] to-[#FF6B6B] bg-clip-text text-transparent">
              Resultados Extraordinários
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Estratégias 360° de marketing digital, gestão de redes sociais e assessoria de comunicação para fazer sua marca <span className="text-[#E74C3C] font-semibold">crescer exponencialmente</span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E74C3C]">30+</div>
              <div className="text-sm text-gray-400 mt-1">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E74C3C]">500+</div>
              <div className="text-sm text-gray-400 mt-1">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E74C3C]">100%</div>
              <div className="text-sm text-gray-400 mt-1">Satisfação</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E74C3C] to-[#C0392B] hover:from-[#C0392B] hover:to-[#A93226] text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-[#E74C3C]/50 hover:scale-105 mt-4"
          >
            Agende uma Consultoria Gratuita
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#E74C3C] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};