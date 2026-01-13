# PRD - Senha Comunicação Website

## Original Problem Statement
Criar uma réplica pixel-perfect do site https://whatsapp-lead-form.preview.emergentagent.com/ para a agência de comunicação "Senha Comunicação" (Senhaonline).

## User Personas
- **Clientes potenciais**: Empresas buscando serviços de marketing e comunicação
- **Visitantes**: Pessoas interessadas em conhecer a agência e seus trabalhos

## Core Requirements
1. ✅ Tema preto (#000000) com acentos vermelho metálico (#DC143C)
2. ✅ Vídeo de fundo no hero section
3. ✅ Animações de scroll (elementos aparecem ao descer a página)
4. ✅ Portfolio com imagens grayscale → colorido no hover
5. ✅ Footer com logo e redes sociais
6. ✅ Formulário de contato funcional
7. ✅ WhatsApp floating button

## What's Been Implemented

### Frontend (Completed - 13/01/2026)
- **Hero Section**: Badge "30 Anos Transformando Marcas", título, subtítulo, 2 CTAs, estatísticas (30+, 500+, 200+, 98%)
- **Download Section**: Botão para baixar apresentação PDF 2026
- **About Section**: "Quem Somos" com "Nosso Propósito"
- **Why Choose Section**: 4 cards (Expertise, Resultados, Soluções 360°, Marketing Imobiliário)
- **Services Section**: 6 cards de serviços com ícones e features
- **Portfolio Section**: 6 projetos com efeito grayscale → colorido
- **CTA Section**: Fundo gradiente vermelho
- **Contact Section**: Formulário com 5 campos + info de contato
- **Footer**: WhatsApp CTA, logo, redes sociais, copyright
- **WhatsApp Float Button**: Botão verde pulsante
- **Header**: Fixo com navegação e redes sociais

### Animações Implementadas
- Intersection Observer para fade-in no scroll
- Hover effects em todos os elementos interativos
- Pulse animation no WhatsApp button
- Transições suaves em botões e links

### Backend
- Server.py básico configurado (FastAPI)
- MongoDB configurado mas não utilizado ainda

## Prioritized Backlog

### P0 - Bloqueado (Aguardando Aprovação)
- [ ] **Instruções de Hospedagem**: Guia para deploy em `https://senhaonline.com.br/mudeojogo`

### P1 - Próximas Tarefas
- [ ] **Backend do Formulário de Contato**: Implementar endpoint `/api/contact` para enviar emails para `SAC@SENHAONLINE.COM.BR`

### P2 - Melhorias Futuras
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Google Analytics integration
- [ ] Performance optimization (lazy loading, image optimization)
- [ ] Acessibilidade (ARIA labels, keyboard navigation)

## Technical Architecture

```
/app
├── backend
│   └── server.py (FastAPI)
├── frontend
│   └── src
│       ├── components
│       │   ├── AboutSection.jsx
│       │   ├── ContactWhatsApp.jsx
│       │   ├── CTASection.jsx
│       │   ├── DownloadSection.jsx
│       │   ├── FooterWhatsApp.jsx
│       │   ├── HeaderNav.jsx
│       │   ├── HeroWhatsApp.jsx
│       │   ├── PortfolioWhatsApp.jsx
│       │   ├── ServicesWhatsApp.jsx
│       │   ├── WhatsAppFloatButton.jsx
│       │   └── WhyChooseSection.jsx
│       ├── data
│       │   └── whatsapp-lead-data.js
│       ├── App.css
│       └── App.js
```

## Mocked APIs
- **Contact Form**: Simula envio com toast de sucesso (não envia emails realmente)

## Environment
- Preview URL: https://mude-o-jogo.preview.emergentagent.com
- Original Reference: https://whatsapp-lead-form.preview.emergentagent.com/

## Notes
- Usuário prefere comunicação em Português (Brasil)
- O site deve ser uma cópia exata do original em termos de layout, cores e animações
