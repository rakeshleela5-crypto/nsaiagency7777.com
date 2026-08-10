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
import CursorGlow from './components/CursorGlow'

export default function App() {
  useEffect(() => {
    // Register GSAP ScrollTrigger globally
    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
    }
    init()

    // Intersection Observer for smooth reveal animations (Apple-style)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe all reveal elements after a short delay to let DOM render
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach((el) => {
        observer.observe(el)
      })
    }, 100)

    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <CursorGlow />
      <GlobalBubbles count={20} />
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
