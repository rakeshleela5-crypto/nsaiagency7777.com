import { useEffect } from 'react'

const solutions = [
  {
    icon: '🤖',
    title: 'AI Chatbots',
    description: 'Deploy intelligent conversational agents that handle customer inquiries 24/7, qualify leads, and close deals while you sleep.',
    features: ['Natural Language Processing', 'Multi-channel Support', 'Lead Qualification'],
  },
  {
    icon: '⚡',
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks with smart automation pipelines that connect your tools, reduce errors, and save thousands of hours.',
    features: ['Process Mining', 'RPA Integration', 'Smart Triggers'],
  },
  {
    icon: '📊',
    title: 'Revenue Intelligence',
    description: 'Unlock hidden revenue opportunities with AI that analyzes your sales pipeline, predicts outcomes, and recommends winning strategies.',
    features: ['Pipeline Analytics', 'Win/Loss Analysis', 'Revenue Forecasting'],
  },
  {
    icon: '🔮',
    title: 'Predictive Analytics',
    description: 'Harness the power of machine learning to forecast trends, detect anomalies, and make data-driven decisions before your competitors.',
    features: ['Trend Forecasting', 'Anomaly Detection', 'Customer Churn Prediction'],
  },
  {
    icon: '🎙️',
    title: 'AI Voice Agents',
    description: 'Deploy lifelike conversational voice AI to handle inbound calls, outbound outreach, and appointment scheduling seamlessly.',
    features: ['Natural Voice Synthesis', 'Inbound Call Routing', 'Outbound Campaigns'],
  },
  {
    icon: '📅',
    title: 'Smart Booking Systems',
    description: 'Automate your scheduling with intelligent booking systems that integrate directly with your calendar and send automated reminders.',
    features: ['Automated Scheduling', 'Calendar Sync', 'SMS/Email Reminders'],
  },
]

export default function Solutions() {
  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo('.solution-card', {
        opacity: 0,
        y: 60,
        scale: 0.95,
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#solutions',
          start: 'top 75%',
        },
      })
    }
    loadGsap()
  }, [])

  return (
    <section id="solutions" className="section-padding grid-bg" style={{
      position: 'relative',
    }}>
      <div className="reveal" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-heading">Our Solutions</h2>
        <div className="gold-divider" />
        <p className="section-subheading">
          Cutting-edge AI systems engineered to accelerate your growth and maximize revenue at every touchpoint.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}>
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className="solution-card glass ultra-hover"
              style={{
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'left',
                cursor: 'pointer',
                opacity: 0,
              }}
            >
              {/* Icon */}
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: 'rgba(255, 215, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                marginBottom: '1.2rem',
              }}>
                {sol.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}>
                {sol.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.2rem',
              }}>
                {sol.description}
              </p>

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {sol.features.map(f => (
                  <div key={f} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    color: 'var(--gold)',
                  }}>
                    <span style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: '#FFD700',
                      flexShrink: 0,
                    }} />
                    {f}
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div style={{
                marginTop: '1.5rem',
                height: 2,
                background: 'linear-gradient(90deg, #FFD700, transparent)',
                borderRadius: 1,
                opacity: 0.4,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
