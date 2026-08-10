import { useEffect } from 'react'

const pillars = [
  {
    icon: '🎯',
    title: 'Mission-Driven',
    text: 'Every solution we build is engineered to deliver measurable business outcomes, not just technology for technology\'s sake.',
  },
  {
    icon: '🔬',
    title: 'Research-Backed',
    text: 'Our team stays at the bleeding edge of AI research, integrating the latest breakthroughs into production-ready systems.',
  },
  {
    icon: '🛡️',
    title: 'Enterprise-Grade',
    text: 'Bank-level security, 99.99% uptime SLAs, and compliance with SOC2, GDPR, and HIPAA standards built into every product.',
  },
]

export default function About() {
  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo('.about-text', {
        opacity: 0,
        x: -60,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 70%',
        },
      })

      gsap.fromTo('.about-pillar', {
        opacity: 0,
        x: 60,
      }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 65%',
        },
      })
    }
    loadGsap()
  }, [])

  return (
    <section id="about" className="section-padding" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-200px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,215,0,0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}
        className="about-grid"
      >
        {/* Left: Text */}
        <div className="about-text reveal-left" style={{ opacity: 0 }}>
          <h2 className="section-heading" style={{ textAlign: 'left' }}>
            Why NSAIAgency7777?
          </h2>
          <div className="gold-divider" style={{ margin: '1rem 0 2rem 0' }} />

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            We're not just another AI agency — we're architects of intelligent revenue systems.
            Founded by engineers and data scientists who've built AI products at scale, we combine
            deep technical expertise with a relentless focus on business outcomes.
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Every system we deploy is custom-built for your specific workflows, integrated seamlessly
            with your existing stack, and designed to compound in value over time.
          </p>

          <a href="#contact" className="btn-gold">
            Let's Build Together →
          </a>
        </div>

        {/* Right: Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {pillars.map(p => (
            <div
              key={p.title}
              className="about-pillar glass ultra-hover"
              style={{
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                cursor: 'pointer',
                opacity: 0,
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                background: 'rgba(255, 215, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}>
                {p.icon}
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#FFD700',
                  marginBottom: '0.4rem',
                }}>
                  {p.title}
                </h4>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
