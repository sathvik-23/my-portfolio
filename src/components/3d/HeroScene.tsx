"use client";

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  OrbitControls, 
  PerspectiveCamera,
  ContactShadows,
  Float,
  useProgress,
  Html
} from '@react-three/drei';
import AIBrain from './AIBrain';
import ParticleField from './ParticleField';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <span className="loader"></span>
        <p className="mt-4 text-sm font-mono">{progress.toFixed(2)}% loaded</p>
      </div>
    </Html>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-[100vh]">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
          
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#4f46e5" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
          
          <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <AIBrain scale={1.2} position={[0, 0, 0]} />
          </Float>
          
          <ParticleField 
            count={500}
            areaSize={10}
            position={[0, 0, 0]}
          />
          
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.5}
            scale={10}
            blur={1}
            far={5}
            resolution={256}
            color="#000000"
          />
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
