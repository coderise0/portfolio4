import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { header } from 'framer-motion/client'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div>
      <header className="skills-header">
        
      </header>
    </div>
  )
}

export default App
