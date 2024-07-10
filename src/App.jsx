import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import TechStacks from './sections/TechStacks/TechStacks'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
      <Navbar />
      <Hero />
      <TechStacks />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </Router>
    </>
  )
}

export default App
