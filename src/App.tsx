import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CircuitBackground from './components/CircuitBackground'
import ScrollToTop from './components/ScrollToTop'
import { FEATURES } from './config'

function App() {
  return (
    <div className="min-h-screen">
      {FEATURES.circuitBackground && <CircuitBackground />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
