import { useEffect, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo('.contact-left', {
        opacity: 0, x: -50,
      }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '#contact', start: 'top 70%' },
      })

      gsap.fromTo('.contact-right', {
        opacity: 0, x: 50,
      }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '#contact', start: 'top 70%' },
      })
    }
    loadGsap()
  }, [])

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 215, 0, 0.1)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)'
    e.target.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.1)'
  }

  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(255, 215, 0, 0.1)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="contact" className="section-padding" style={{
      position: 'relative',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,215,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'start',
      }}
        className="contact-grid"
      >
        {/* Left: Info */}
        <div className="contact-left" style={{ opacity: 0 }}>
          <h2 className="section-heading" style={{ textAlign: 'left' }}>
            Let's Connect
          </h2>
          <div className="gold-divider" style={{ margin: '1rem 0 2rem 0' }} />

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}>
            Ready to transform your revenue operations with AI? Reach out and let's discuss
            how we can build intelligent systems tailored to your business.
          </p>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'rgba(255, 215, 0, 0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}>📞</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Phone
                </div>
                <a href="tel:9390553301" style={{
                  fontSize: '1.1rem', color: '#FFD700', fontFamily: 'var(--font-heading)', fontWeight: 500,
                }}>
                  9390553301
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'rgba(255, 215, 0, 0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}>✉️</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Email
                </div>
                <a href="mailto:nsaiagency7777@gmail.com" style={{
                  fontSize: '1.05rem', color: '#FFD700', fontFamily: 'var(--font-heading)', fontWeight: 500,
                }}>
                  nsaiagency7777@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'rgba(255, 215, 0, 0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}>⚡</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Response Time
                </div>
                <span style={{
                  fontSize: '1.05rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 500,
                }}>
                  Within 24 Hours
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'rgba(255, 215, 0, 0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}>📸</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Instagram
                </div>
                <a href="https://www.instagram.com/nsaiagency7777?igsh=dWVibDJ1bjNyMXM3" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '1.05rem', color: '#FFD700', fontFamily: 'var(--font-heading)', fontWeight: 500,
                }}>
                  @nsaiagency7777
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-right glass" style={{
          borderRadius: '20px',
          padding: '2.5rem',
          opacity: 0,
        }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.3rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
          }}>
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="John Doe"
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="john@company.com"
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Your Company"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Tell us about your project..."
                rows={4}
                required
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn-gold" style={{
              width: '100%',
              justifyContent: 'center',
              marginTop: '0.5rem',
              fontSize: '1rem',
              padding: '1rem',
            }}>
              Send Message →
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
