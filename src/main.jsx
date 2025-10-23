import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import './styles/colors.css';
import './index.css';
import { Testimonials } from './sections/Testimonials.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Testimonials />
  </StrictMode>
);
