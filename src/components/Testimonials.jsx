import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Revenue, TechScale Inc.',
    text: 'NSAIAgency7777 completely transformed our sales pipeline. Their AI chatbot alone generated 3x more qualified leads in the first month. The ROI has been astronomical.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CEO, DataFlow Solutions',
    text: 'The predictive analytics system they built helps us forecast revenue with 94% accuracy. We\'ve eliminated guesswork from our strategic planning entirely.',
    rating: 5,
  },
  {
    name: 'Emily Watts',
    role: 'COO, FinBridge Capital',
    text: 'Their workflow automation saved us 2,000+ hours per quarter. The team is brilliant, responsive, and genuinely invested in our success. Best partnership decision we\'ve made.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Head of Growth, NovaTech',
    text: 'From concept to deployment in 3 weeks — and the system scaled beautifully from Day 1. NSAIAgency7777 delivers enterprise-grade AI without the enterprise timelines.',
    rating: 5,
  },
  {
    name: 'Aisha Patel',
    role: 'Director of Operations, CloudServe',
    text: 'We needed a custom AI solution that integrated with our legacy systems. They made it look easy. Our operational efficiency improved by 340% in 90 days.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef()

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo('#testimonials .section-heading', {
        opacity: 0, y: 40
      }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: '#testimonials', start: 'top 75%' }
      })
    }
    loadGsap()
  }, [])

  return (
    <section id="testimonials" className="section-padding grid-bg" style={{
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-heading">Client Voices</h2>
        <div className="gold-divider" />
        <p className="section-subheading">
          Don't take our word for it — hear from the leaders who've transformed their operations with our AI.
        </p>

        {/* Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: 'relative',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <div ref={trackRef} style={{
            overflow: 'hidden',
            borderRadius: '20px',
          }}>
            <div style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(-${currentIndex * 100}%)`,
            }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  minWidth: '100%',
                  padding: '0.5rem',
                }}>
                  <div className="glass ultra-hover" style={{
                    borderRadius: '16px',
                    padding: '2.5rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}>
                    {/* Stars */}
                    <div style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                      {Array.from({ length: t.rating }, (_, j) => (
                        <span key={j} style={{ color: '#FFD700' }}>★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p style={{
                      fontSize: '1.05rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.8,
                      marginBottom: '1.5rem',
                      fontStyle: 'italic',
                      position: 'relative',
                      paddingLeft: '1rem',
                      borderLeft: '3px solid rgba(255, 215, 0, 0.3)',
                    }}>
                      "{t.text}"
                    </p>

                    {/* Author */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FFD700, #FFB300)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        color: '#050505',
                        fontSize: '1rem',
                      }}>
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          color: 'var(--text-primary)',
                        }}>
                          {t.name}
                        </div>
                        <div style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                        }}>
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
          }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: currentIndex === i ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  background: currentIndex === i
                    ? 'linear-gradient(90deg, #FFD700, #FFB300)'
                    : 'rgba(255, 215, 0, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <button
            onClick={() => setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-3rem',
              transform: 'translateY(-50%)',
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              background: 'rgba(18, 18, 18, 0.6)',
              color: '#FFD700',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentIndex(prev => (prev + 1) % testimonials.length)}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-3rem',
              transform: 'translateY(-50%)',
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              background: 'rgba(18, 18, 18, 0.6)',
              color: '#FFD700',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
