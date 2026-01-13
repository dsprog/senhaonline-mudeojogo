import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { companyStats, contactInfo } from '../data/whatsapp-lead-data';

export const HeroWhatsApp = () => {
  const scrollToForm = () => {
    document.getElementById('contact-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Vim do site e gostaria de saber mais sobre os serviços da Senha Comunicação.');
    window.open(`https://wa.me/${contactInfo.phoneLink}?text=${message}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black">
      {/* Video Background - como no original */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.6,
            filter: 'grayscale(50%) brightness(0.8)',
            mixBlendMode: 'normal'
          }}
        >
          <source src="https://customer-assets.emergentagent.com/job_whatsapp-lead-form/artifacts/2wydbsnh_WhatsApp%20Video%202025-11-27%20at%2009.20.11.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - VERMELHO METALIZADO */}
          <div className="inline-block mb-6 px-6 py-3 bg-red-600/20 border border-red-500/40 rounded-full backdrop-blur-md observe-fade shadow-2xl animate-fade-in-up">
            <span className="text-red-500 font-bold text-sm tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              30 Anos Transformando Marcas
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight observe-fade animate-fade-in-up"
            style={{ 
              animationDelay: '0.2s',
              textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)'
            }}
          >
            Marketing Digital de
            <span 
              className="block text-red-600 mt-2"
              style={{ textShadow: '0 0 30px rgba(220,38,38,0.9), 0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)' }}
            >
              Resultado
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed observe-fade font-medium animate-fade-in-up"
            style={{ 
              animationDelay: '0.4s',
              textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            Comunicação de respeito para o crescimento da sua empresa. Transformamos sua presença digital com estratégias que <strong className="text-white font-bold">geram resultados reais</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center observe-fade animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md font-medium shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-all group"
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 border-2 border-red-500/30 hover:border-red-500 text-gray-200 hover:text-white px-8 py-6 text-lg rounded-md font-medium hover:bg-red-600/10 backdrop-blur-sm transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </button>
          </div>

          {/* Stats - NA MESMA LINHA */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto observe-fade animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1 group-hover:text-red-400 group-hover:scale-110 transition-all drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};