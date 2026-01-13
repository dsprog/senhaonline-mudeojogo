import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { whyChooseUs } from '../data/whatsapp-lead-data';
import { Card, CardContent } from './ui/card';

const iconMap = {
  Award,
  Target,
  Zap: Users,
  Building: TrendingUp
};

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-black relative">
      {/* Glow effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 observe-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Por Que Escolher a Senha?
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos especialistas em transformar empresas com soluções 360° de comunicação e marketing digital
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <Card 
                key={item.id}
                className="border border-red-900/30 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 hover:border-red-600/50 transition-all group shadow-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] observe-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 text-red-500 mb-4 group-hover:scale-110 group-hover:bg-red-600/30 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
