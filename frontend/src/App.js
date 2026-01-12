import React, { useEffect } from "react";
import "./App.css";
import { HeaderNav } from "./components/HeaderNav";
import { HeroWhatsApp } from "./components/HeroWhatsApp";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ServicesWhatsApp } from "./components/ServicesWhatsApp";
import { PortfolioWhatsApp } from "./components/PortfolioWhatsApp";
import { CTASection } from "./components/CTASection";
import { ContactWhatsApp } from "./components/ContactWhatsApp";
import { FooterWhatsApp } from "./components/FooterWhatsApp";
import { Toaster } from "./components/ui/sonner";

function App() {
  useEffect(() => {
    // Animações ao scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        
        if (isVisible) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Inicializar elementos
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(60px)';
      element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executar uma vez no início

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <HeaderNav />
      <main>
        <HeroWhatsApp />
        <AboutSection />
        <WhyChooseSection />
        <ServicesWhatsApp />
        <PortfolioWhatsApp />
        <CTASection />
        <ContactWhatsApp />
      </main>
      <FooterWhatsApp />
      <Toaster />
    </div>
  );
}

export default App;