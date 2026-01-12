export const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-5xl">
        {/* JUSTIFICADO À ESQUERDA */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white fade-in-up">
            Quem <span className="text-[#DC143C]">Somos</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-justify text-lg fade-in-up" style={{animationDelay: '0.2s'}}>
            <p>
              A <strong className="text-white">Senha Comunicação</strong>, carinhosamente chamada de <strong className="text-[#DC143C]">Senhaonline</strong>, atua há <strong className="text-[#DC143C]">30 anos no mercado de Comunicação e Marketing</strong> e é uma das líderes neste segmento. Nossa trajetória é marcada pela excelência no atendimento e pela entrega de resultados que transformam negócios e fortalecem marcas no mercado.
            </p>
            
            <p>
              Todo o nosso potencial é centrado na <strong className="text-white">construção da imagem institucional e corporativa, branding, aculturamento digital, posicionamento de imagem</strong> e reavaliação completa da apresentação e conteúdo institucional das empresas que atendemos. Trabalhamos de forma estratégica para garantir que cada cliente tenha uma presença digital forte e consistente.
            </p>
            
            <p>
              Desenvolvemos uma <strong className="text-white">análise completa do cenário do cliente</strong>, via diagnóstico de sua presença e estrutura de comunicação e vendas, modelando um planejamento estratégico que resgata sua cultura interna para o novo cenário digital. Nossa metodologia combina experiência de mercado com as mais modernas técnicas de marketing e comunicação.
            </p>

            <p>
              Com uma equipe multidisciplinar e altamente qualificada, oferecemos soluções personalizadas que atendem às necessidades específicas de cada negócio, sempre com foco em resultados mensuráveis e sustentáveis no longo prazo.
            </p>
          </div>

          {/* Purpose - JUSTIFICADO À ESQUERDA */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-xl border-l-4 border-[#DC143C] fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold text-white mb-4">Nosso Propósito</h3>
            <p className="text-gray-300 leading-relaxed text-justify text-lg">
              Auxiliar os clientes a criar negócios sustentáveis, com modelos bem definidos e processos de apresentação corporativa estruturados, agregando cultura de valor, gestão estratégica de marketing e conversão de resultados comerciais mensuráveis. Buscamos ser parceiros de longo prazo, contribuindo ativamente para o crescimento e consolidação de cada marca que atendemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};