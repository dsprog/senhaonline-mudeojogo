import React from 'react';
import { ArrowRight, MessageCircle, FileDown } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background - MARCA D'ÁGUA */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="https://cdn.pixabay.com/video/2022/03/15/110747-688195835_large.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-40">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-block animate-fade-in">
            <span className="bg-transparent border-2 border-[#E74C3C] text-[#E74C3C] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
              30 ANOS TRANSFORMANDO MARCAS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Marketing Digital de
            <span className="block text-[#E74C3C] mt-2">Resultado</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Comunicação de respeito para o crescimento da sua empresa.<br />
            Transformamos sua presença digital com estratégias que <strong>geram resultados reais</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-3 bg-[#E74C3C] hover:bg-[#C0392B] text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Solicitar Proposta
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </button>
          </div>
        </div>

        {/* Stats - NA MESMA LINHA */}
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-6 max-w-5xl mx-auto mt-28 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[#E74C3C] mb-2">{stat.number}</div>
              <div className="text-xs uppercase tracking-wider text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* PDF Download */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href={contactInfo.pdfLink}
            download
            className="inline-flex items-center gap-3 bg-[#E74C3C] hover:bg-[#C0392B] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FileDown className="w-5 h-5" />
            Faça o Download de nossa Apresentação 2026
          </a>
        </div>
      </div>
    </section>
  );
};