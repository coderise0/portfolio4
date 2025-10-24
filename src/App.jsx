import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import ContactForm from './sections/ContactForm'

function App() {
  return (
    <div className="app-root">
      <main className="container" style={{ padding: 24 }}>
        <AboutMe />
      </main>
      <section >
          <ContactForm/>
      </section>
    
    
    </div>
    
  )
}

export default App;
