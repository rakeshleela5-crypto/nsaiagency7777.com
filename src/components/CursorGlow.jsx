import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const trailRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Smooth lerp for glow (follows cursor with slight delay — Apple feel)
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${pos.current.x - 10}px, ${pos.current.y - 10}px)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    const raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Large ambient glow that follows cursor */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,0,0.06) 0%, rgba(255,215,0,0) 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'opacity 0.3s ease',
        }}
      />
      {/* Small golden dot that trails the cursor */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,215,0,0.5) 0%, rgba(255,215,0,0) 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
    </>
  )
}
