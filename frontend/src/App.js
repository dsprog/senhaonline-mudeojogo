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
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/sonner";

// Logo URL
const LOGO_URL = "https://customer-assets.emergentagent.com/job_f2b18a42-25f4-4837-bb60-b0e2886cc8b3/artifacts/4k29x1d5_Gemini_Generated_Image_dc99uhdc99uhdc99.png";

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
      <FooterWhatsApp logo={LOGO_URL} />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default App;