import { useEffect, useRef } from 'react'

export default function GlobalBubbles({ count = 25 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    for (let i = 0; i < count; i++) {
      const bubble = document.createElement('div')
      const size = 10 + Math.random() * 60
      const left = Math.random() * 100
      const duration = 12 + Math.random() * 18
      const delay = Math.random() * duration

      Object.assign(bubble.style, {
        position: 'absolute',
        bottom: '-80px',
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, rgba(255, 215, 0, ${0.06 + Math.random() * 0.08}), rgba(255, 215, 0, 0.01))`,
        border: `1px solid rgba(255, 215, 0, ${0.04 + Math.random() * 0.06})`,
        backdropFilter: 'blur(2px)',
        animation: `bubbleFloat ${duration}s ${delay}s ease-in-out infinite`,
        pointerEvents: 'none',
        willChange: 'transform, opacity',
      })
      container.appendChild(bubble)
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  )
}
