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
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
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