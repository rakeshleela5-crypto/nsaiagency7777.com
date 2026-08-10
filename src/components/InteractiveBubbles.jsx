import { useState, useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function Bubble({ position, initialScale }) {
  const mesh = useRef()
  const materialRef = useRef()
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  // Animation targets
  const targetScale = clicked ? initialScale * 1.5 : (hovered ? initialScale * 1.1 : initialScale)
  const targetDistortion = clicked ? 1.0 : (hovered ? 0.5 : 0.1)

  useFrame((state, delta) => {
    if (mesh.current) {
      // Lerp scale for smooth transition
      mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 8)
      
      // Add subtle rotation
      mesh.current.rotation.x += delta * 0.2
      mesh.current.rotation.y += delta * 0.3
    }
    
    if (materialRef.current) {
      // Lerp material properties for glass effects
      materialRef.current.distortion = THREE.MathUtils.lerp(materialRef.current.distortion, targetDistortion, delta * 5)
    }
  })

  const handleClick = (e) => {
    e.stopPropagation()
    setClicked(true)
    
    // Play a "pop" animation by resetting clicked after a short delay
    setTimeout(() => {
      setClicked(false)
    }, 400)
  }

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh
        ref={mesh}
        scale={initialScale}
        onClick={handleClick}
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHover(false); document.body.style.cursor = 'auto' }}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          ref={materialRef}
          background={new THREE.Color('#050505')}
          transmission={0.95}
          thickness={1.5}
          roughness={0.05}
          ior={1.5}
          chromaticAberration={0.4}
          anisotropy={0.3}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color={hovered ? '#FFD700' : '#ffffff'}
          emissive={clicked ? '#FFB300' : '#000000'}
          emissiveIntensity={clicked ? 2 : 0}
        />
      </mesh>
    </Float>
  )
}

export default function InteractiveBubbles({ count = 10 }) {
  const bubbles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      // Distribute randomly around the scene, avoiding the dead center where the trident is
      const angle = (i / count) * Math.PI * 2
      const radius = 3 + Math.random() * 4
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = (Math.random() - 0.5) * 8
      const scale = 0.3 + Math.random() * 0.5
      temp.push({ position: [x, y, z], scale })
    }
    return temp
  }, [count])

  return (
    <group>
      {bubbles.map((props, i) => (
        <Bubble key={i} position={props.position} initialScale={props.scale} />
      ))}
    </group>
  )
}
