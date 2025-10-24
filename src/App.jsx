import { useEffect, useState } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import ContactForm from './sections/ContactForm'

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="app-root">
      <Hero />
      
      <main style={{ padding: 0 }}>
        <section className='experience'>
          <Experience />
        </section>

        <section className='projects'>
          <Projects />
        </section>
      </main>

      <section>
        <ContactForm/>
      </section>
    </div>
  )
}

export default App
