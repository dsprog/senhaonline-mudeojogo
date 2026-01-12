import React from "react";
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