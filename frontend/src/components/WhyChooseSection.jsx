import React from 'react';
import { Award, Target, Zap, Building } from 'lucide-react';
import { whyChooseUs } from '../data/whatsapp-lead-data';

const iconMap = {
  Award,
  Target,
  Zap,
  Building
};

export const WhyChooseSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white fade-in-up">
            Por Que Escolher a <span className="text-[#E74C3C]">Senha?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto fade-in-up">
            Somos especialistas em transformar empresas com soluções 360° de comunicação e marketing digital
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-800 fade-in-up"
              >
                <div className="w-16 h-16 bg-[#E74C3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#E74C3C]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};