import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/colors.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Skills from './sections/Skills';
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials.jsx";
import ContactForm from "./sections/ContactForm";
import FooterSection from "./sections/Footer.jsx";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import TermsOfService from './sections/TermsOfService';

// Initialize AOS
AOS.init({ duration: 800, once: true });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={
          <>
            <Hero />
            <AboutMe />
            <Skills />
            <section className="experience">
              <Experience />
            </section>
            <section className="projects">
              <Projects />
            </section>
            <Testimonials />
            <ContactForm />
            <FooterSection />
          </>
        } />
        
        {/* Privacy Policy page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
        {/* Terms of Service page */}
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);