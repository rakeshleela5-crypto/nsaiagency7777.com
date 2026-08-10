import { useEffect, useState } from 'react'

const solutions = [
  {
    icon: '🤖',
    title: 'AI Chatbots',
    description: 'Deploy intelligent conversational agents that handle customer inquiries 24/7, qualify leads, and close deals while you sleep.',
    features: ['Natural Language Processing', 'Multi-channel Support', 'Lead Qualification'],
    details: 'Our AI Chatbots are designed to revolutionize your customer engagement by providing instant, human-like interactions 24/7. Using advanced Natural Language Processing (NLP), they understand context, nuance, and sentiment to resolve queries efficiently. They seamlessly route complex issues to human agents while capturing valuable lead data and qualifying prospects in real-time. Whether deployed on your website, WhatsApp, or social media channels, our chatbots dramatically reduce response times, lower support costs, and continuously learn from every interaction to increase your overall conversion rates.',
  },
  {
    icon: '⚡',
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks with smart automation pipelines that connect your tools, reduce errors, and save thousands of hours.',
    features: ['Process Mining', 'RPA Integration', 'Smart Triggers'],
    details: 'We build intelligent automation pipelines that eliminate the tedious, repetitive tasks slowing down your team. By implementing smart triggers and Robotic Process Automation (RPA), we seamlessly connect your CRM, email, billing, and project management tools into a unified ecosystem. This ensures zero data-entry errors, faster turnaround times, and massive reductions in operational overhead. Your team is freed from manual drudgery, allowing them to focus entirely on high-value, strategic work that directly drives revenue and accelerates your business growth.',
  },
  {
    icon: '📊',
    title: 'Revenue Intelligence',
    description: 'Unlock hidden revenue opportunities with AI that analyzes your sales pipeline, predicts outcomes, and recommends winning strategies.',
    features: ['Pipeline Analytics', 'Win/Loss Analysis', 'Revenue Forecasting'],
    details: 'Stop guessing and start predicting with our Revenue Intelligence AI. We deeply analyze your entire sales pipeline, historical data, and customer touchpoints to uncover hidden opportunities and identify at-risk deals before they churn. The system provides real-time win/loss analysis and actionable recommendations for your sales team, telling them exactly who to call and what to say. By accurately forecasting revenue and highlighting bottlenecks, our intelligence platform empowers your executives to make confident, data-driven decisions that consistently maximize your bottom line.',
  },
  {
    icon: '🔮',
    title: 'Predictive Analytics',
    description: 'Harness the power of machine learning to forecast trends, detect anomalies, and make data-driven decisions before your competitors.',
    features: ['Trend Forecasting', 'Anomaly Detection', 'Customer Churn Prediction'],
    details: 'Transform your raw data into a strategic crystal ball with our Predictive Analytics solutions. We deploy sophisticated machine learning models that identify hidden patterns and forecast future market trends with unprecedented accuracy. By detecting anomalies early, you can mitigate risks before they impact your business, optimize your inventory or resource allocation, and proactively address customer churn. Stay miles ahead of your competition by knowing exactly what your market is going to do next, ensuring you are always positioned for maximum profitability.',
  },
  {
    icon: '🎙️',
    title: 'AI Voice Agents',
    description: 'Deploy lifelike conversational voice AI to handle inbound calls, outbound outreach, and appointment scheduling seamlessly.',
    features: ['Natural Voice Synthesis', 'Inbound Call Routing', 'Outbound Campaigns'],
    details: 'Redefine your phone communications with hyper-realistic AI Voice Agents. Leveraging state-of-the-art voice synthesis, our agents sound completely natural and can handle both inbound call routing and dynamic outbound campaigns. They can instantly answer customer FAQs, pre-qualify leads over the phone, and seamlessly schedule appointments directly into your calendar without any human intervention. Say goodbye to hold times and missed opportunities; our voice AI ensures every caller receives immediate, personalized attention, scaling your call center operations infinitely and effortlessly.',
  },
  {
    icon: '📅',
    title: 'Smart Booking Systems',
    description: 'Automate your scheduling with intelligent booking systems that integrate directly with your calendar and send automated reminders.',
    features: ['Automated Scheduling', 'Calendar Sync', 'SMS/Email Reminders'],
    details: 'Eliminate the back-and-forth friction of scheduling with our fully automated Smart Booking Systems. Our AI seamlessly syncs with your team\'s calendars to offer real-time availability to your clients across all time zones. The system automatically handles booking confirmations, sends strategic SMS and email reminders to drastically reduce no-shows, and reschedules appointments on the fly. By integrating directly with your CRM and sales workflows, it guarantees a flawless booking experience that impresses your prospects and keeps your pipeline fully booked and highly active.',
  },
]

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(null)

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

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedSolution) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedSolution])

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
              onClick={() => setSelectedSolution(sol)}
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

              {/* Learn More Prompt */}
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--gold)',
                fontWeight: 500,
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                Learn more <span>→</span>
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

      {/* Detail Modal */}
      {selectedSolution && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            zIndex: 9999, 
            background: 'rgba(5, 5, 5, 0.85)', 
            backdropFilter: 'blur(12px)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.3s ease-out',
          }}
          onClick={() => setSelectedSolution(null)}
        >
          <div 
            className="glass-strong"
            style={{
              maxWidth: '650px', 
              width: '100%', 
              borderRadius: '24px',
              padding: '3rem 2.5rem', 
              position: 'relative',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              boxShadow: '0 0 60px rgba(255, 215, 0, 0.15)',
              transform: 'scale(1)',
              animation: 'modalSlideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedSolution(null)}
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)', 
                border: 'none', 
                color: 'var(--text-secondary)',
                width: '40px', height: '40px',
                borderRadius: '50%',
                fontSize: '1.5rem', 
                cursor: 'pointer', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.target.style.color = 'var(--gold)';
                e.target.style.background = 'rgba(255, 215, 0, 0.1)';
              }}
              onMouseLeave={e => {
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              ×
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
              <div style={{
                 width: 70, height: 70, borderRadius: 18, background: 'rgba(255, 215, 0, 0.1)',
                 display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem',
                 border: '1px solid rgba(255, 215, 0, 0.2)',
              }}>
                {selectedSolution.icon}
              </div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: '#fff', margin: 0 }}>
                {selectedSolution.title}
              </h3>
            </div>
            
            <p style={{ color: 'var(--gold)', fontSize: '1.15rem', marginBottom: '1.5rem', fontWeight: 500 }}>
              {selectedSolution.description}
            </p>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginBottom: '2rem',
            }}>
              <p style={{ 
                color: 'var(--text-primary)', 
                lineHeight: 1.8, 
                fontSize: '1.05rem', 
                margin: 0,
              }}>
                {selectedSolution.details}
              </p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {selectedSolution.features.map(f => (
                <span key={f} style={{
                  background: 'rgba(255, 215, 0, 0.08)', 
                  color: 'var(--gold)',
                  padding: '0.5rem 1rem', 
                  borderRadius: '100px', 
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <span style={{ width: 6, height: 6, background: 'var(--gold)', borderRadius: '50%' }}></span>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  )
}
