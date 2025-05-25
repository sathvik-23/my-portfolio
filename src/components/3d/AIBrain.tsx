"use client";

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { useSpring, animated } from '@react-spring/three';

type AIBrainProps = {
  scale?: number;
  position?: [number, number, number];
  isHovered?: boolean;
  color?: string;
  pulseColor?: string;
};

export default function AIBrain({ 
  scale = 1, 
  position = [0, 0, 0], 
  isHovered = false,
  color = '#4f46e5',
  pulseColor = '#10b981'
}: AIBrainProps) {
  const brainRef = useRef<THREE.Group>(null);
  const neuronRefs = useRef<THREE.Mesh[]>([]);
  const synapseRefs = useRef<THREE.Line[]>([]);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  // Create neurons and synapses
  const neuronCount = 20;
  const neurons = Array.from({ length: neuronCount }, (_, i) => ({
    position: [
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    ]
  }));
  
  // Create connections between neurons
  const synapses = [];
  for (let i = 0; i < neuronCount; i++) {
    for (let j = i + 1; j < neuronCount; j++) {
      if (Math.random() > 0.7) { // 30% chance of connection
        synapses.push({ from: i, to: j });
      }
    }
  }

  // Spring animation for hover effect
  const { scaleSpring } = useSpring({
    scaleSpring: (isHovered || hovered) ? 1.2 : 1,
    config: { tension: 300, friction: 10 }
  });
  
  // Rotate the brain slowly
  useFrame((state, delta) => {
    if (brainRef.current) {
      brainRef.current.rotation.y += delta * 0.1;
      brainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Pulse the neurons
      neuronRefs.current.forEach((neuron, i) => {
        if (neuron) {
          const time = state.clock.elapsedTime + i;
          const scale = 0.8 + Math.sin(time * 2) * 0.2;
          neuron.scale.set(scale, scale, scale);
          
          // Change color when active
          if (neuron.material) {
            const material = neuron.material as THREE.MeshStandardMaterial;
            if (active || isHovered || hovered) {
              material.emissive.set(pulseColor);
              material.emissiveIntensity = 0.5 + Math.sin(time * 3) * 0.5;
            } else {
              material.emissiveIntensity = 0.2 + Math.sin(time * 3) * 0.2;
            }
          }
        }
      });
      
      // Animate synapses
      synapseRefs.current.forEach((synapse, i) => {
        if (synapse && synapse.material) {
          const material = synapse.material as THREE.LineBasicMaterial;
          const time = state.clock.elapsedTime + i;
          if (active || isHovered || hovered) {
            material.opacity = 0.3 + Math.sin(time * 2) * 0.7;
          } else {
            material.opacity = 0.1 + Math.sin(time * 2) * 0.2;
          }
        }
      });
    }
  });

  return (
    <animated.group 
      ref={brainRef} 
      position={position} 
      scale={scaleSpring.to(s => [s * scale, s * scale, s * scale])}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
    >
      {/* Neurons */}
      {neurons.map((neuron, i) => (
        <mesh 
          key={`neuron-${i}`}
          position={neuron.position as [number, number, number]}
          ref={(el: THREE.Mesh) => { neuronRefs.current[i] = el; }}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
      
      {/* Synapses (connections) */}
      {synapses.map((synapse, i) => {
        const start = neurons[synapse.from].position as [number, number, number];
        const end = neurons[synapse.to].position as [number, number, number];
        
        return (
          <line
            key={`synapse-${i}`}
            ref={(el: THREE.Line) => { synapseRefs.current[i] = el; }}
          >
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attach="attributes-position"
                array={new Float32Array([...start, ...end])}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              attach="material" 
              color={color} 
              transparent 
              opacity={0.3} 
              linewidth={1}
            />
          </line>
        );
      })}
    </animated.group>
  );
}
