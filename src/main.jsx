import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/colors.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import  Testimonials from './sections/Testimonials';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import ContactForm from './sections/ContactForm';
import FooterSection from './sections/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Hero />

      <section>
        <AboutMe/>
      </section>
      
      <section className='experience'>
        <Experience />
      </section>

      <section className='projects'>
        <Projects />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <ContactForm />
      </section>

      <section>
        <FooterSection />
      </section>

  </StrictMode>
);
