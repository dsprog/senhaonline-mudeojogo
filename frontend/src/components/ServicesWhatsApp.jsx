import React from 'react';
import { Palette, Share2, TrendingUp, FileText, Globe, MessageSquare, Check } from 'lucide-react';
import { services } from '../data/whatsapp-lead-data';

const iconMap = {
  Palette,
  Share2,
  TrendingUp,
  FileText,
  Globe,
  MessageSquare
};

export const ServicesWhatsApp = () => {
  return (
    <section id="services-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Nossos <span className="text-[#E74C3C]">Serviços</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Soluções completas de comunicação e marketing para alavancar seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-gray-900 border-2 border-gray-800 rounded-2xl p-8 hover:border-[#E74C3C] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#E74C3C]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#E74C3C] group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-[#E74C3C] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E74C3C] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-[#E74C3C] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};