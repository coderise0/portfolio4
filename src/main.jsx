
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/colors.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials.jsx";
import ContactForm from "./sections/ContactForm";
import FooterSection from "./sections/Footer.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>


    <Hero />
    <AboutMe />
    <section className="experience">
      <Experience />
    </section>
    <section className="projects">
      <Projects />
    </section>
    <Testimonials />
    <ContactForm />
    <FooterSection />


  </StrictMode>
);
