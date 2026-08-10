import { useEffect, useRef } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
  { value: 98, suffix: '%', label: 'Client Retention', icon: '🤝' },
  { value: 10, suffix: 'x', label: 'Average ROI', icon: '📈' },
  { value: 24, suffix: '/7', label: 'AI Operations', icon: '⚙️' },
  { value: 50, suffix: 'M+', label: 'Data Points Analyzed', icon: '🧠' },
  { value: 3, suffix: 's', label: 'Avg. Response Time', icon: '⚡' },
]

export default function Stats() {
  const sectionRef = useRef()

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Animate counters
      const counters = document.querySelectorAll('.stat-value')
      counters.forEach((counter) => {
        const target = parseInt(counter.dataset.value)
        gsap.fromTo(counter, { innerText: 0 }, {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          onUpdate: function () {
            counter.textContent = Math.ceil(this.targets()[0].innerText)
          },
        })
      })

      // Stagger cards
      gsap.fromTo('.stat-card', {
        opacity: 0,
        y: 40,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }
    loadGsap()
  }, [])

  return (
    <section id="stats" ref={sectionRef} style={{
      padding: '6rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-heading">Results That Speak</h2>
        <div className="gold-divider" />
        <p className="section-subheading">
          Numbers don't lie. Here's the impact our AI systems deliver across industries.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}>
          {stats.map(stat => (
            <div
              key={stat.label}
              className="stat-card ultra-hover"
              style={{
                padding: '2rem 1rem',
                borderRadius: '16px',
                background: 'rgba(18, 18, 18, 0.5)',
                border: '1px solid rgba(255, 215, 0, 0.06)',
                cursor: 'pointer',
                opacity: 0,
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#FFD700',
                lineHeight: 1,
              }}>
                <span className="stat-value" data-value={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginTop: '0.5rem',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
