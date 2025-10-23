import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/colors.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FooterSection from './sections/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FooterSection />
  </StrictMode>
);
