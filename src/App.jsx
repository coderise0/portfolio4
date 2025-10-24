import { useEffect, useState } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Testimonials from './sections/Testimonials'


function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="app-root">
     
    </div>
  )
}

export default App
