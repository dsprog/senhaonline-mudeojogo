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