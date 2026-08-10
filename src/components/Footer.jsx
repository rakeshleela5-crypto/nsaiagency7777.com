export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { label: 'AI Chatbots', href: '#solutions' },
        { label: 'Workflow Automation', href: '#solutions' },
        { label: 'Revenue Intelligence', href: '#solutions' },
        { label: 'Predictive Analytics', href: '#solutions' },
        { label: 'AI Voice Agents', href: '#solutions' },
        { label: 'Smart Booking Systems', href: '#solutions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Results', href: '#stats' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: '📞 9390553301', href: 'tel:9390553301' },
        { label: '✉️ nsaiagency7777@gmail.com', href: 'mailto:nsaiagency7777@gmail.com' },
        { label: '📸 @nsaiagency7777', href: 'https://www.instagram.com/nsaiagency7777?igsh=dWVibDJ1bjNyMXM3' },
      ],
    },
  ]

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 215, 0, 0.08)',
      padding: '4rem 2rem 2rem',
      position: 'relative',
    }}>
      {/* Gold line accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '3rem',
      }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFB300)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>NSAI</span>
            <span style={{ color: '#fff', fontWeight: 300 }}>Agency</span>
          </div>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '300px',
          }}>
            Engineering intelligent revenue systems that transform businesses.
            AI-powered automation for the future of growth.
          </p>
        </div>

        {/* Link Columns */}
        {footerLinks.map(col => (
          <div key={col.title}>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#FFD700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>
              {col.title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col.links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = '#FFD700'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1100px',
        margin: '3rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {currentYear} NSAIAgency7777. All rights reserved.
        </span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Forging the Future with AI ⚡
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
