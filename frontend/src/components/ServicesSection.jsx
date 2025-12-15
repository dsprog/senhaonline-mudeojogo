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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            O Que <span className="text-[#E74C3C]">Fazemos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas de comunicação e marketing digital para impulsionar seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E74C3C]/20"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#E74C3C]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E74C3C] transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-[#E74C3C] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
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