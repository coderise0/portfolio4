import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/colors.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './sections/AboutMe';
import { Testimonials } from './sections/Testimonials.jsx';
import FooterSection from './sections/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AboutMe/>
    <Testimonials />
    <FooterSection />
  </StrictMode>
);
