import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Results', href: '#stats' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      ref={navRef}
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 215, 0, 0.1)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="#" style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #FFD700, #FFB300)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '0.05em',
      }}>
        NSAI<span style={{ WebkitTextFillColor: '#fff', fontWeight: 300 }}>Agency</span>
      </a>

      {/* Desktop Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
      }}
        className="nav-links"
      >
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              transition: 'color 0.3s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => e.target.style.color = '#FFD700'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-gold" style={{
          padding: '0.6rem 1.5rem',
          fontSize: '0.85rem',
          borderRadius: '6px',
        }}>
          Get Started
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#FFD700',
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
        className="mobile-menu-btn"
        aria-label="Toggle mobile menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 5, 5, 0.95)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          zIndex: 99,
        }}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                color: 'var(--text-primary)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold" onClick={() => setMobileOpen(false)}>
            Get Started
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
