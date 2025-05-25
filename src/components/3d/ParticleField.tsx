"use client";

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

type ParticleFieldProps = {
  count?: number;
  size?: number;
  color?: string;
  areaSize?: number;
  speed?: number;
  connected?: boolean;
  mouseInteractive?: boolean;
  position?: [number, number, number];
};

export default function ParticleField({
  count = 1000,
  size = 0.02,
  color = '#4f46e5',
  areaSize = 10,
  speed = 0.05,
  connected = true,
  mouseInteractive = true,
  position = [0, 0, 0],
}: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null);
  const linesMesh = useRef<THREE.LineSegments>(null);
  
  // Create particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * areaSize;
      const y = (Math.random() - 0.5) * areaSize;
      const z = (Math.random() - 0.5) * areaSize;
      
      // Add velocity for animation
      const vx = (Math.random() - 0.5) * 0.01;
      const vy = (Math.random() - 0.5) * 0.01;
      const vz = (Math.random() - 0.5) * 0.01;
      
      temp.push({ x, y, z, vx, vy, vz, initialX: x, initialY: y, initialZ: z });
    }
    return temp;
  }, [count, areaSize]);
  
  // Create positions Float32Array for Three.js
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  
  // Connection lines for particles
  const [lines, linePositions] = useMemo(() => {
    if (!connected) return [null, null];
    
    const maxDistance = 1; // Maximum distance for connection
    const linePositions = new Float32Array(count * count * 6); // Worst case: all points connect to all others
    const indices: number[] = [];
    let lineCount = 0;
    
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dz = p1.z - p2.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < maxDistance) {
          linePositions[lineCount * 6] = p1.x;
          linePositions[lineCount * 6 + 1] = p1.y;
          linePositions[lineCount * 6 + 2] = p1.z;
          linePositions[lineCount * 6 + 3] = p2.x;
          linePositions[lineCount * 6 + 4] = p2.y;
          linePositions[lineCount * 6 + 5] = p2.z;
          
          indices.push(lineCount * 2, lineCount * 2 + 1);
          lineCount++;
        }
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions.slice(0, lineCount * 6), 3));
    geometry.setIndex(indices);
    
    const material = new THREE.LineBasicMaterial({ 
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.2
    });
    
    return [new THREE.LineSegments(geometry, material), linePositions];
  }, [particles, count, connected, color]);
  
  // Mouse interaction
  const mouse = useMemo(() => new THREE.Vector3(), []);
  const mouseInfluence = useRef(false);
  
  useEffect(() => {
    if (mouseInteractive) {
      const handleMouseMove = (event: MouseEvent) => {
        // Convert mouse position to normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);
        mouse.z = 0;
        
        mouseInfluence.current = true;
      };
      
      const handleMouseLeave = () => {
        mouseInfluence.current = false;
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [mouse, mouseInteractive]);
  
  // Animation
  useFrame((state) => {
    // Simple update for performance
    for (let i = 0; i < count; i++) {
      const p = particles[i];
      
      // Basic movement
      p.x += p.vx * speed;
      p.y += p.vy * speed;
      p.z += p.vz * speed;
      
      // Boundary check
      const halfSize = areaSize / 2;
      if (Math.abs(p.x) > halfSize) p.vx *= -1;
      if (Math.abs(p.y) > halfSize) p.vy *= -1;
      if (Math.abs(p.z) > halfSize) p.vz *= -1;
      
      // Update positions
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    }
    
    // Update points geometry
    if (points.current) {
      points.current.geometry.attributes.position.array = positions;
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <group position={position}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      
      {connected && (
        <primitive object={lines} ref={linesMesh} />
      )}
    </group>
  );
}
