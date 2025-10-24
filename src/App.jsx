import React from 'react';
import { useEffect } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import ContactForm from './sections/ContactForm';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="app-root">
      <Hero />
      
      <main>
        <Skills />
      </main>
      
      <section>
        <ContactForm />
      </section>
    </div>
  )
}

export default App;