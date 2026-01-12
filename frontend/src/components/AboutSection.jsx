export const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-4xl">
        {/* Centralizado */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white scroll-animate">
            Quem <span className="text-[#DC143C]">Somos</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed scroll-animate scroll-animate-delay-1">
            <p>
              A <strong className="text-white">Senha Comunicação</strong>, carinhosamente chamada de <strong className="text-[#DC143C]">Senhaonline</strong>, atua há <strong className="text-[#DC143C]">30 anos no mercado de Comunicação e Marketing</strong> e é uma das líderes neste segmento.
            </p>
            
            <p>
              Todo o nosso potencial é centrado na <strong className="text-white">construção da imagem institucional e corporativa, branding, aculturamento digital, posicionamento de imagem</strong> e reavaliação completa da apresentação e conteúdo institucional das empresas que atendemos.
            </p>
            
            <p>
              Desenvolvemos uma <strong className="text-white">análise completa do cenário do cliente</strong>, via diagnóstico de sua presença e estrutura de comunicação e vendas, modelando um planejamento estratégico que resgata sua cultura interna para o novo cenário digital.
            </p>
          </div>

          {/* Purpose */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-xl border-l-4 border-[#DC143C] max-w-3xl mx-auto scroll-animate scroll-animate-delay-2">
            <h3 className="text-2xl font-bold text-white mb-4">Nosso Propósito</h3>
            <p className="text-gray-300 leading-relaxed">
              Auxiliar os clientes a criar negócios sustentáveis, com modelos bem definidos e processos de apresentação corporativa estruturados, agregando cultura de valor, gestão estratégica de marketing e conversão de resultados comerciais mensuráveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};