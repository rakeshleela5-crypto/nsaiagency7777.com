import { useState, useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function Bubble({ initialPosition, initialScale, speed, offset }) {
  const mesh = useRef()
  const materialRef = useRef()
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  // Animation targets
  const targetScale = clicked ? initialScale * 1.8 : (hovered ? initialScale * 1.2 : initialScale)
  const targetDistortion = clicked ? 1.5 : (hovered ? 0.8 : 0.2)

  useFrame((state, delta) => {
    if (mesh.current) {
      // Float upwards logic
      mesh.current.position.y += delta * speed
      
      // Horizontal drift using sine wave
      mesh.current.position.x += Math.sin(state.clock.elapsedTime * speed + offset) * delta * 0.5
      
      // Wrap around screen top/bottom (adjusted for larger coordinate space)
      if (mesh.current.position.y > 15) {
        mesh.current.position.y = -15
      }
      
      // Lerp scale
      mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 10)
      
      // Rotate
      mesh.current.rotation.x += delta * 0.2
      mesh.current.rotation.y += delta * 0.3
    }
    
    if (materialRef.current) {
      materialRef.current.distortion = THREE.MathUtils.lerp(materialRef.current.distortion, targetDistortion, delta * 5)
    }
  })

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={mesh}
        position={initialPosition}
        scale={initialScale}
        onClick={(e) => {
          e.stopPropagation()
          setClicked(true)
          setTimeout(() => setClicked(false), 500)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHover(false)
          document.body.style.cursor = 'auto'
        }}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <MeshTransmissionMaterial
          ref={materialRef}
          background={new THREE.Color('#050505')}
          transmission={0.9}
          thickness={1.2}
          roughness={0.1}
          ior={1.4}
          chromaticAberration={0.6}
          color={hovered ? '#FFD700' : '#ffffff'}
          emissive={clicked ? '#FFB300' : '#000000'}
          emissiveIntensity={clicked ? 2.5 : 0}
        />
      </mesh>
    </Float>
  )
}

export default function GlobalBubbles({ count = 35 }) {
  const [rootElement, setRootElement] = useState(null)

  useEffect(() => {
    setRootElement(document.getElementById('root'))
  }, [])

  const bubbles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      // Spread across a wide area (X: -20 to 20, Y: -15 to 15, Z: -5 to 2)
      const x = (Math.random() - 0.5) * 40
      const y = (Math.random() - 0.5) * 30
      const z = (Math.random() - 0.5) * 10 - 2
      const scale = 0.2 + Math.random() * 0.7
      const speed = 0.5 + Math.random() * 2
      const offset = Math.random() * Math.PI * 2
      temp.push({ position: [x, y, z], scale, speed, offset })
    }
    return temp
  }, [count])

  if (!rootElement) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, pointerEvents: 'none' }}>
      <Canvas
        eventSource={rootElement}
        eventPrefix="client"
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#FFD700" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#FFB300" />
        
        {bubbles.map((props, i) => (
          <Bubble 
            key={i} 
            initialPosition={props.position} 
            initialScale={props.scale} 
            speed={props.speed}
            offset={props.offset}
          />
        ))}
      </Canvas>
    </div>
  )
}
