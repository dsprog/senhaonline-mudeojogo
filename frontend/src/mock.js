// Mock data for Senha Comunicação Landing Page

export const mockServices = [
  {
    id: 1,
    title: "Gestão de Redes Sociais",
    description: "Estratégias completas para Instagram, Facebook e LinkedIn com foco em engajamento e resultados.",
    icon: "Share2"
  },
  {
    id: 2,
    title: "Marketing Digital",
    description: "Google Ads, SEO, SEM e estratégias de Inbound Marketing para gerar leads qualificados.",
    icon: "TrendingUp"
  },
  {
    id: 3,
    title: "Assessoria de Comunicação",
    description: "Assessoria de imprensa, planejamento estratégico e gestão de comunicação corporativa.",
    icon: "MessageSquare"
  },
  {
    id: 4,
    title: "Branding",
    description: "Construção e reposicionamento de marca com foco em identidade visual e brand equity.",
    icon: "Palette"
  },
  {
    id: 5,
    title: "Sites e E-commerce",
    description: "Desenvolvimento de sites responsivos e lojas virtuais otimizadas para conversão.",
    icon: "Globe"
  },
  {
    id: 6,
    title: "Marketing de Conteúdo",
    description: "Criação de conteúdo estratégico (brandcontent) para fortalecer sua presença digital.",
    icon: "FileText"
  }
];

export const mockPortfolio = [
  {
    id: 1,
    title: "Branding Corporativo",
    client: "Empresa Regional",
    category: "Identidade Visual",
    description: "Desenvolvimento completo de identidade visual e posicionamento de marca.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["Branding", "Design"]
  },
  {
    id: 2,
    title: "Campanha Digital 360°",
    client: "E-commerce",
    category: "Marketing Digital",
    description: "Estratégia completa de marketing digital com aumento de 200% em conversões.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Ads", "Social Media"]
  },
  {
    id: 3,
    title: "Gestão de Redes Sociais",
    client: "Rede de Restaurantes",
    category: "Social Media",
    description: "Crescimento orgânico de 150% e engajamento multiplicado por 3x.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["Instagram", "Conteúdo"]
  },
  {
    id: 4,
    title: "Lançamento de Produto",
    client: "Startup de Tecnologia",
    category: "Comunicação",
    description: "Assessoria completa de comunicação para lançamento com repercussão regional.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    tags: ["PR", "Lançamento"]
  },
  {
    id: 5,
    title: "E-commerce Imobiliário",
    client: "Construtora",
    category: "Desenvolvimento Web",
    description: "Plataforma completa com tour virtual 360° e sistema de agendamento.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Website", "Imóveis"]
  },
  {
    id: 6,
    title: "Reposicionamento de Marca",
    client: "Indústria Tradicional",
    category: "Rebrand",
    description: "Modernização completa da marca com nova identidade e estratégia digital.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    tags: ["Rebrand", "Estratégia"]
  }
];

export const mockCompanyInfo = {
  name: "Senha Comunicação",
  tagline: "Assessoria de Comunicação",
  phone: "19 98133-3233",
  email: "sac@senhaonline.com.br",
  website: "www.senhaonline.com.br",
  socialMedia: {
    facebook: "https://www.facebook.com/Senhaonline?fref=ts",
    instagram: "https://www.instagram.com/senhaonline/",
    linkedin: "https://www.linkedin.com/company/senha-comunica%C3%A7%C3%A3o/"
  }
};

// Mock function to simulate form submission
export const mockSubmitForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted (mock):", formData);
      // Store in localStorage for demo
      const submissions = JSON.parse(localStorage.getItem('senha_submissions') || '[]');
      submissions.push({
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('senha_submissions', JSON.stringify(submissions));
      resolve({ success: true, message: "Agendamento solicitado com sucesso!" });
    }, 1000);
  });
};