import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/colors.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import { Testimonials } from "./sections/Testimonials.jsx";
import ContactForm from "./sections/ContactForm.jsx";
import Footer from "./sections/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero id="home" />
    <AboutMe id="about" />
    <Projects id="projects" />
    <Experience id="experience" />
    <Testimonials id="testimonials" />
    <ContactForm id="contact" />
    <Footer />
  </StrictMode>
);
