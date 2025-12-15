import React from 'react';
import { Share2, TrendingUp, MessageSquare, Palette, Globe, FileText } from 'lucide-react';
import { mockServices } from '../mock';

const iconMap = {
  Share2,
  TrendingUp,
  MessageSquare,
  Palette,
  Globe,
  FileText
};

export const ServicesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E74C3C] to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            O Que <span className="bg-gradient-to-r from-[#E74C3C] to-[#FF6B6B] bg-clip-text text-transparent">Fazemos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluções completas de comunicação e marketing digital para impulsionar seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockServices.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50 hover:border-[#E74C3C]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#E74C3C]/10 hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E74C3C]/20 to-[#C0392B]/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[#E74C3C]/20">
                    <IconComponent className="w-8 h-8 text-[#E74C3C]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E74C3C] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};