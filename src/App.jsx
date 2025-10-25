import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from './sections/ContactForm';

function App() {
  return (
    <div className="app-root">
      <main className="container" style={{ padding: 24 }}>
        <AboutMe />
      </main>
      <section>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
