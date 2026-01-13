import React from 'react';
import { Target } from 'lucide-react';
import { portfolio } from '../data/whatsapp-lead-data';

export const PortfolioWhatsApp = () => {
  return (
    <section id="portfolio-section" className="py-20 bg-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.15) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 observe-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Portfólio</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Projetos que transformaram marcas e geraram resultados reais
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolio.slice(0, 6).map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-red-900/30 bg-gray-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] block observe-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600/80 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-red-600/10 border border-red-600/30 text-red-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-red-600 flex items-center justify-center text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <p className="text-white font-semibold">Ver Projeto</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
