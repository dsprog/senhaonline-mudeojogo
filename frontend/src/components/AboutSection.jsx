import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Image - MARCA D'ÁGUA */}
      <div className=\"absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5 pointer-events-none\">
        <img
          src=\"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop\"
          alt=\"Background\"
          className=\"w-full h-full object-cover\"
        />
      </div>

      <div className=\"container mx-auto max-w-6xl relative z-10\">
        <div className=\"max-w-3xl\">
          {/* Text Content */}
          <div className=\"space-y-6\">
            <h2 className=\"text-4xl font-bold text-white\">
              Quem <span className=\"text-[#E74C3C]\">Somos</span>
            </h2>
            
            <div className=\"space-y-4 text-gray-300 leading-relaxed\">
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
            <div className=\"bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#E74C3C]\">
              <h3 className=\"text-xl font-bold text-white mb-3\">Nosso Propósito</h3>
              <p className=\"text-gray-300 leading-relaxed\">
                Auxiliar os clientes a criar negócios sustentáveis, com modelos bem definidos e processos de apresentação corporativa estruturados, agregando cultura de valor, gestão estratégica de marketing e conversão de resultados comerciais mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};