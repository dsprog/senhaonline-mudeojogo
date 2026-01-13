import React, { useEffect, useRef } from "react";
import "./App.css";
import { HeaderNav } from "./components/HeaderNav";
import { HeroWhatsApp } from "./components/HeroWhatsApp";
import { DownloadSection } from "./components/DownloadSection";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ServicesWhatsApp } from "./components/ServicesWhatsApp";
import { PortfolioWhatsApp } from "./components/PortfolioWhatsApp";
import { CTASection } from "./components/CTASection";
import { ContactWhatsApp } from "./components/ContactWhatsApp";
import { FooterWhatsApp } from "./components/FooterWhatsApp";
import { WhatsAppFloatButton } from "./components/WhatsAppFloatButton";
import { Toaster } from "./components/ui/sonner";

function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer para animações de scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observar elementos com classe observe-fade
    const elements = document.querySelectorAll('.observe-fade');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="App min-h-screen bg-black relative overflow-hidden">
      {/* Background Image fixo como no original */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-90"
        style={{
          backgroundImage: 'url("https://customer-assets.emergentagent.com/job_whatsapp-lead-form/artifacts/tqguagd4_AdobeStock_288456527.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      {/* Overlay escuro */}
      <div className="fixed inset-0 z-0 bg-black/60 pointer-events-none" />
      
      {/* Grid pattern como no original */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.15) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />
        </div>
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-700/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <HeaderNav />
      <main className="relative z-10">
        <HeroWhatsApp />
        <DownloadSection />
        <AboutSection />
        <WhyChooseSection />
        <ServicesWhatsApp />
        <PortfolioWhatsApp />
        <CTASection />
        <ContactWhatsApp />
      </main>
      <FooterWhatsApp />
      <WhatsAppFloatButton />
      <Toaster />
    </div>
  );
}

export default App;