'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';
import { LightingManager } from '@/three/lighting/LightingManager';
import { EnvironmentManager } from '@/three/environment/EnvironmentManager';
import { ParticleEngine } from '@/three/particles/ParticleEngine';
import { useDeviceTier } from '@/hooks/useDeviceTier';

export const GiftScene3D: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const lidRef = useRef<Mesh>(null);
  const tier = useDeviceTier();

  // Dynamic particle count based on device performance tier
  const particleCount = useMemo(() => {
    switch (tier) {
      case 'high':
        return 300;
      case 'medium':
        return 180;
      case 'low':
        return 80;
      default:
        return 40;
    }
  }, [tier]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      // Sinusoidal floating oscillation & slow luxury idle rotation
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.08;
      groupRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <group name="gift-scene-3d">
      {/* Deep Void Atmosphere & Restrained Fog */}
      <EnvironmentManager backgroundColor="#050508" fogColor="#050508" fogDensity={0.012} useExpFog />

      {/* Warm Golden Point & Ambient Illumination */}
      <LightingManager preset="golden" ambientIntensity={0.2} directionalIntensity={1.8} />
      <pointLight position={[0, 1.8, 2.5]} intensity={2.2} color="#d4af37" distance={10} decay={2} />

      {/* Floating 3D Gift Box Geometry */}
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Main Gift Body: Deep Charcoal Box */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.6, 1.4, 1.6]} />
          <meshPhysicalMaterial
            color="#12131a"
            roughness={0.2}
            metalness={0.8}
            clearcoat={0.3}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Gift Lid: Deep Charcoal Top */}
        <mesh ref={lidRef} position={[0, 0.75, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.68, 0.2, 1.68]} />
          <meshPhysicalMaterial
            color="#181924"
            roughness={0.18}
            metalness={0.85}
            clearcoat={0.4}
          />
        </mesh>

        {/* Ribbon Cross Vertical (X-axis) */}
        <mesh position={[0, 0.01, 0]}>
          <boxGeometry args={[1.64, 1.42, 0.22]} />
          <meshStandardMaterial color="#fcf6ba" roughness={0.1} metalness={0.95} />
        </mesh>

        {/* Ribbon Cross Vertical (Z-axis) */}
        <mesh position={[0, 0.01, 0]}>
          <boxGeometry args={[0.22, 1.42, 1.64]} />
          <meshStandardMaterial color="#fcf6ba" roughness={0.1} metalness={0.95} />
        </mesh>

        {/* Champagne Gold Knot/Bow Top */}
        <mesh position={[0, 0.9, 0]}>
          <torusGeometry args={[0.18, 0.05, 16, 32]} />
          <meshStandardMaterial color="#fcf6ba" roughness={0.1} metalness={0.95} />
        </mesh>
      </group>

      {/* Dynamic Performance Particle Atmosphere */}
      <ParticleEngine preset="Sparkles" customCount={particleCount} />
    </group>
  );
};
