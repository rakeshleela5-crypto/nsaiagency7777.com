import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import * as THREE from 'three'
import FloatingParticles from './FloatingParticles'

/* ─────────────────────────────────────────────
   Trident 3D Model (procedural geometry)
   ───────────────────────────────────────────── */
function Trident() {
  const group = useRef()
  const { pointer } = useThree()

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FFD700'),
        emissive: new THREE.Color('#FFB300'),
        emissiveIntensity: 1.5,
        metalness: 0.9,
        roughness: 0.15,
        toneMapped: false,
      }),
    []
  )

  const glowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FFD700'),
        emissive: new THREE.Color('#FFD700'),
        emissiveIntensity: 3,
        transparent: true,
        opacity: 0.3,
        toneMapped: false,
      }),
    []
  )

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        pointer.y * 0.15,
        0.05
      )
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        -pointer.x * 0.1,
        0.05
      )
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={group} scale={1.2}>
        {/* Main Shaft */}
        <mesh material={goldMaterial} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 5, 16]} />
        </mesh>

        {/* Shaft glow */}
        <mesh material={glowMaterial} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 5, 16]} />
        </mesh>

        {/* Central Prong */}
        <mesh material={goldMaterial} position={[0, 3.3, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 1.6, 12]} />
        </mesh>
        <mesh material={goldMaterial} position={[0, 4.3, 0]}>
          <coneGeometry args={[0.1, 0.5, 12]} />
        </mesh>

        {/* Left Prong */}
        <group position={[-0.5, 2.3, 0]} rotation={[0, 0, 0.2]}>
          <mesh material={goldMaterial}>
            <cylinderGeometry args={[0.04, 0.07, 1.8, 12]} />
          </mesh>
          <mesh material={goldMaterial} position={[0, 1.1, 0]}>
            <coneGeometry args={[0.09, 0.45, 12]} />
          </mesh>
        </group>

        {/* Right Prong */}
        <group position={[0.5, 2.3, 0]} rotation={[0, 0, -0.2]}>
          <mesh material={goldMaterial}>
            <cylinderGeometry args={[0.04, 0.07, 1.8, 12]} />
          </mesh>
          <mesh material={goldMaterial} position={[0, 1.1, 0]}>
            <coneGeometry args={[0.09, 0.45, 12]} />
          </mesh>
        </group>

        {/* Cross Guard */}
        <mesh material={goldMaterial} position={[0, 2.2, 0]}>
          <boxGeometry args={[1.6, 0.12, 0.12]} />
        </mesh>
        <mesh material={glowMaterial} position={[0, 2.2, 0]}>
          <boxGeometry args={[1.8, 0.2, 0.2]} />
        </mesh>

        {/* Decorative rings */}
        <mesh material={goldMaterial} position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.15, 0.03, 8, 24]} />
        </mesh>
        <mesh material={goldMaterial} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.15, 0.03, 8, 24]} />
        </mesh>
        <mesh material={goldMaterial} position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.13, 0.03, 8, 24]} />
        </mesh>

        {/* Bottom pommel */}
        <mesh material={goldMaterial} position={[0, -2.7, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
        </mesh>
        <mesh material={glowMaterial} position={[0, -2.7, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
        </mesh>

        {/* Energy orb at center */}
        <mesh position={[0, 2.2, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFFFFF"
            emissiveIntensity={5}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  )
}

/* ─────────────────────────────────────────────
   Grid Floor
   ───────────────────────────────────────────── */
function GridFloor() {
  return (
    <gridHelper
      args={[60, 60, '#FFD700', '#FFD700']}
      position={[0, -6, 0]}
      rotation={[0, 0, 0]}
      material-transparent
      material-opacity={0.06}
    />
  )
}

/* ─────────────────────────────────────────────
   Main Scene Export
   ───────────────────────────────────────────── */
export default function TridentScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 1, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 10, 5]} intensity={1} color="#FFD700" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#FFB300" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#FFD700"
          castShadow
        />

        <Trident />
        <FloatingParticles count={150} />
        <GridFloor />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={1.5}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
