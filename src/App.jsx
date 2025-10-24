import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="app-root">
     

      <main style={{ padding: 0 }}>
      
        <section className='experience'>
          <Experience />
        </section>

        <section className='projects'>
          <Projects />
        </section>

      </main>
    </div>
  )
}

export default App
