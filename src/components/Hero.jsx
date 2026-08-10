import { useEffect, useRef } from 'react'
import TridentScene from './TridentScene'

export default function Hero() {
  const heroRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.hero-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
        .fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, '-=0.4')
        .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-buttons', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')

      gsap.to('.hero-parallax', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 150,
        opacity: 0.3,
      })
    }
    loadGsap()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* 3D Background */}
      <TridentScene />

      {/* Radial gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0.9) 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div
        ref={textRef}
        className="hero-parallax"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 2rem',
        }}
      >
        {/* Badge */}
        <div className="hero-badge" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1.2rem',
          borderRadius: '50px',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          background: 'rgba(255, 215, 0, 0.05)',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--gold)',
          fontFamily: 'var(--font-body)',
          opacity: 0,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFD700', display: 'inline-block', animation: 'pulse-gold 2s infinite' }} />
          AI-Powered Revenue Systems
        </div>

        {/* Title */}
        <h1 className="hero-title" style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: '1.5rem',
          opacity: 0,
        }}>
          <span style={{ color: 'var(--text-primary)' }}>Forge the Future</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #FFD700, #FFB300, #FFD700)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            with AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle" style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
          opacity: 0,
        }}>
          We build intelligent automation systems that transform your revenue operations.
          From AI chatbots to predictive analytics — we engineer the future of growth.
        </p>

        {/* Buttons */}
        <div className="hero-buttons" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem',
          opacity: 0,
        }}>
          <a href="#contact" className="btn-gold">
            Start Your Transformation
            <span>→</span>
          </a>
          <a href="#solutions" className="btn-outline">
            Explore Solutions
          </a>
        </div>

        {/* Mini Stats */}
        <div className="hero-stats" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          opacity: 0,
        }}>
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Retention' },
            { value: '10x', label: 'Average ROI' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#FFD700',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'float 3s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scroll Down
        </span>
        <div style={{
          width: 24,
          height: 38,
          borderRadius: 12,
          border: '2px solid rgba(255, 215, 0, 0.3)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 6,
        }}>
          <div style={{
            width: 3,
            height: 8,
            borderRadius: 2,
            background: '#FFD700',
            animation: 'float 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  )
}
