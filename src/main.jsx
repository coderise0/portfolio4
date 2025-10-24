import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import './styles/colors.css'
import './index.css'
import App from './App.jsx'
import Skills from './sections/Skills.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app-root">
      <App />
      <main className="container">
        <Skills /> 
      </main>
    </div>
  </StrictMode>,
)
