import React from 'react';

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Quem <span className="text-[#E74C3C]">Somos</span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A <strong>Senha Comunicação</strong>, carinhosamente chamada de <strong>Senhaonline</strong>, atua há <strong>30 anos no mercado de Comunicação e Marketing</strong> e é uma das líderes neste segmento.
              </p>
              
              <p>
                Todo o nosso potencial é centrado na <strong>construção da imagem institucional e corporativa, branding, aculturamento digital, posicionamento de imagem</strong> e reavaliação completa da apresentação e conteúdo institucional das empresas que atendemos.
              </p>
              
              <p>
                Desenvolvemos uma <strong>análise completa do cenário do cliente</strong>, via diagnóstico de sua presença e estrutura de comunicação e vendas, modelando um planejamento estratégico que resgata sua cultura interna para o novo cenário digital.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#E74C3C]">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nosso Propósito</h3>
              <p className="text-gray-700 leading-relaxed">
                Auxiliar os clientes a criar negócios sustentáveis, com modelos bem definidos e processos de apresentação corporativa estruturados, agregando cultura de valor, gestão estratégica de marketing e conversão de resultados comerciais mensuráveis.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              alt="Equipe Senha Comunicação"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#E74C3C] text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-sm">Anos de História</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};