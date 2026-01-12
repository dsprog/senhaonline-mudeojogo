import React from 'react';
import { ExternalLink } from 'lucide-react';
import { portfolio } from '../data/whatsapp-lead-data';

export const PortfolioWhatsApp = () => {
  return (
    <section id="portfolio-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-[#E74C3C]">Portfólio</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Projetos que transformaram marcas e geraram resultados reais
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-800"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* External Link Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-gray-900" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#E74C3C] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-medium border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="text-[#E74C3C] text-sm font-semibold group-hover:underline">
                    Ver Projeto →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};