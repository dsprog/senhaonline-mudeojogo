import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { mockPortfolio } from '../mock';

export const PortfolioSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E74C3C] to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Nosso <span className="bg-gradient-to-r from-[#E74C3C] to-[#FF6B6B] bg-clip-text text-transparent">Portfólio</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos trabalhos que transformaram a comunicação de nossos clientes
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPortfolio.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[#E74C3C]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E74C3C]/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E74C3C]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#E74C3C] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {project.client}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E74C3C]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>Ver detalhes</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.senhaonline.com.br/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#E74C3C] text-[#E74C3C] hover:bg-[#E74C3C] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Ver Portfólio Completo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};