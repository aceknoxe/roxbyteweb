"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';
import * as THREE from 'three';

function Box() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      rotation={[0.5, 0.5, 0]}
      scale={[2, 2, 2]}
      position={[0, 0, -5]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={0x0066ff}
        metalness={0.5}
        roughness={0.2}
        emissive={0x000066}
      />
    </mesh>
  );
}

const Scene = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [0, 0, 10] }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
          />
          <Box />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Scene), {
  ssr: false,
  loading: () => <LoadingSpinner />
});