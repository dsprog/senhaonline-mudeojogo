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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/04/84013-584020347_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-40">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-block">
            <span className="bg-[#E74C3C]/20 backdrop-blur-sm border border-[#E74C3C] text-[#E74C3C] px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide">
              30 ANOS TRANSFORMANDO MARCAS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Marketing Digital de
            <span className="block text-[#E74C3C] mt-2">Resultado</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
            Comunicação de respeito para o crescimento da sua empresa.<br />
            Transformamos sua presença digital com estratégias que <strong>geram resultados reais</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-3 bg-[#E74C3C] hover:bg-[#C0392B] text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 text-lg"
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

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mt-28">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-[#E74C3C] mb-3">{stat.number}</div>
              <div className="text-sm uppercase tracking-wider text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* PDF Download */}
        <div className="mt-16 text-center">
          <a
            href={contactInfo.pdfLink}
            download
            className="inline-flex items-center gap-3 bg-[#E74C3C] hover:bg-[#C0392B] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300"
          >
            <FileDown className="w-5 h-5" />
            Faça o Download de nossa Apresentação 2026
          </a>
        </div>
      </div>
    </section>
  );
};