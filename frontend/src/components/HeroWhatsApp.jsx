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
      {/* Video Background - RODANDO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src="https://customer-assets.emergentagent.com/job_f2b18a42-25f4-4837-bb60-b0e2886cc8b3/artifacts/dpfqpqrx_WhatsApp%20Video%202025-11-27%20at%2009.20.11.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-40">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge - VERMELHO METALIZADO */}
          <div className="inline-block scroll-animate">
            <span className="bg-gradient-to-r from-[#8B0000] to-[#DC143C] border border-[#DC143C] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#DC143C]/20">
              30 ANOS TRANSFORMANDO MARCAS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight scroll-animate scroll-animate-delay-1">
            Marketing Digital de
            <span className="block bg-gradient-to-r from-[#DC143C] to-[#FF4444] bg-clip-text text-transparent mt-2">Resultado</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-4xl mx-auto scroll-animate scroll-animate-delay-2">
            Comunicação de respeito para o crescimento da sua empresa.<br />
            Transformamos sua presença digital com estratégias que <strong>geram resultados reais</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6 scroll-animate scroll-animate-delay-3">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#DC143C] to-[#B91230] hover:from-[#B91230] hover:to-[#8B0000] text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 text-lg shadow-lg shadow-[#DC143C]/30"
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
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-6 max-w-5xl mx-auto mt-28">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#DC143C] to-[#FF4444] bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* PDF Download */}
        <div className="mt-12 text-center">
          <a
            href={contactInfo.pdfLink}
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#DC143C] to-[#B91230] hover:from-[#B91230] hover:to-[#8B0000] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-[#DC143C]/30"
          >
            <FileDown className="w-5 h-5" />
            Faça o Download de nossa Apresentação 2026
          </a>
        </div>
      </div>
    </section>
  );
};