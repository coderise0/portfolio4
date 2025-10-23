import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import ContactForm from './sections/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="app-root">
      <header className="logos">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <main className="container" style={{ padding: 24 }}>
        <h1 data-aos="fade-up">Vite + React + AOS + Framer Motion</h1>

        <section data-aos="fade-up" style={{ marginTop: 24 }}>
          <div className="card">
            <button className="btn btn-primary" onClick={() => setCount((c) => c + 1)}>
              count is {count}
            </button>
            <p>Click to increment. AOS animates this section on scroll.</p>
          </div>
        </section>

        <section style={{ marginTop: 40 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 border rounded"
          >
            <h3>Framer Motion example</h3>
            <p>This box animates on mount using Framer Motion.</p>
          </motion.div>
        </section>
      </main>
      <section >
          <ContactForm/>
      </section>
    
    
    </div>
    
  )
}

export default App
