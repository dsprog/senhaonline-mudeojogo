import React from 'react';
import { Palette, Share2, TrendingUp, FileText, Globe, MessageSquare, CheckCircle2 } from 'lucide-react';
import { services } from '../data/whatsapp-lead-data';
import { Card, CardContent } from './ui/card';

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
    <section id="services-section" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.15) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 observe-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas de comunicação e marketing para alavancar seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Palette;
            return (
              <Card 
                key={service.id}
                className="border border-red-900/30 bg-gray-900/50 backdrop-blur-sm hover:border-red-600/50 transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] group observe-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-red-600/20 text-red-500 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
