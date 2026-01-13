import React from 'react';
import { Download } from 'lucide-react';
import { contactInfo } from '../data/whatsapp-lead-data';

export const DownloadSection = () => {
  return (
    <section className="py-12 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center observe-fade animate-fade-in-up">
          <a
            href={contactInfo.pdfLink}
            download="Apresentacao_Senha_Comunicacao_2026.pdf"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:scale-105 text-lg"
          >
            <Download className="w-6 h-6" />
            Faça o Download de nossa Apresentação 2026
          </a>
        </div>
      </div>
    </section>
  );
};
