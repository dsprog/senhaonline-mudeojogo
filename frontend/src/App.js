import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// Logo URL from user upload
const LOGO_URL = "https://customer-assets.emergentagent.com/job_f2b18a42-25f4-4837-bb60-b0e2886cc8b3/artifacts/4k29x1d5_Gemini_Generated_Image_dc99uhdc99uhdc99.png";

function App() {
  return (
    <div className="App">
      <Header logo={LOGO_URL} />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactForm />
      </main>
      <Footer logo={LOGO_URL} />
      <Toaster />
    </div>
  );
}

export default App;