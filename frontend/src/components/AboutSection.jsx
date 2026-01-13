import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Quem Somos</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
            <p className="text-xl mb-6">
              A <strong className="text-white">Senha Comunicação</strong>, carinhosamente chamada de <strong className="text-white">Senhaonline</strong>, atua há <strong className="text-red-500">30 anos no mercado de Comunicação e Marketing</strong> e é uma das líderes neste segmento.
            </p>
            
            <p className="mb-6">
              Todo o nosso potencial é centrado na <strong className="text-white">construção da imagem institucional e corporativa, branding, aculturamento digital, posicionamento de imagem</strong> e reavaliação completa da apresentação e conteúdo institucional das empresas que atendemos.
            </p>
            
            <p className="mb-6">
              Desenvolvemos uma <strong className="text-white">análise completa do cenário do cliente</strong>, via diagnóstico de sua presença e estrutura de comunicação e vendas, modelando um planejamento estratégico que resgata sua cultura interna para o novo cenário digital.
            </p>

            {/* Purpose Box */}
            <div className="bg-red-600/10 border-l-4 border-red-600 p-6 mt-8 backdrop-blur-sm rounded-r-lg">
              <h3 className="text-2xl font-bold text-white mb-3">Nosso Propósito</h3>
              <p className="text-gray-300 mb-0">
                Auxiliar os clientes a criar negócios sustentáveis, com modelos bem definidos e processos de apresentação corporativa estruturados, agregando cultura de valor, gestão estratégica de marketing e conversão de resultados comerciais mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
