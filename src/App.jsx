import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Stats from './components/Stats'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GlobalBubbles from './components/GlobalBubbles'

export default function App() {
  useEffect(() => {
    // Register GSAP ScrollTrigger globally
    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
    }
    init()
  }, [])

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <GlobalBubbles count={35} />
      <Navbar />
      <Hero />
      <Solutions />
      <Stats />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
