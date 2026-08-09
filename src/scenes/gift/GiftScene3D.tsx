'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh, PointLight, MeshStandardMaterial } from 'three';
import { LightingManager } from '@/three/lighting/LightingManager';
import { EnvironmentManager } from '@/three/environment/EnvironmentManager';
import { ParticleEngine } from '@/three/particles/ParticleEngine';
import { useDeviceTier } from '@/hooks/useDeviceTier';
import { pointerManager } from '@/three/events/PointerManager';
import { eventBus } from '@/three/events/EventBus';
import { useGiftInteraction } from './useGiftInteraction';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const GiftScene3D: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const lidPivotRef = useRef<Group>(null);
  const pointLightRef = useRef<PointLight>(null);
  const interiorLightRef = useRef<PointLight>(null);

  const ribbonMatXRef = useRef<MeshStandardMaterial>(null);
  const ribbonMatZRef = useRef<MeshStandardMaterial>(null);
  const ribbonXRef = useRef<Mesh>(null);
  const ribbonZRef = useRef<Mesh>(null);

  const tier = useDeviceTier();
  const prefersReducedMotion = useReducedMotion();
  const { isDiscovered } = useGiftInteraction();
  const [glowPulse, setGlowPulse] = useState(false);

  // Animation targets
  const targetLidAngle = useRef(0);
  const targetRibbonOffset = useRef(0);
  const targetInteriorLight = useRef(0);

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

  useEffect(() => {
    const unsubDiscovered = eventBus.on('gift:discovered', () => {
      setGlowPulse(true);
    });

    const unsubRibbon = eventBus.on('gift:ribbon-separate', () => {
      targetRibbonOffset.current = 0.25;
    });

    const unsubLid = eventBus.on('gift:lid-open', () => {
      targetLidAngle.current = -1.4;
    });

    const unsubLight = eventBus.on('gift:interior-light', () => {
      targetInteriorLight.current = 4.0;
    });

    return () => {
      unsubDiscovered();
      unsubRibbon();
      unsubLid();
      unsubLight();
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();

      // Idle breathing oscillation & rotation
      const breathY = Math.sin(time * 0.5) * 0.08;
      const idleRotY = time * 0.15;

      // Pointer-driven tilt (disabled in reduced motion)
      const targetRotX = prefersReducedMotion ? 0 : pointerManager.y * 0.35;
      const targetRotY = prefersReducedMotion ? 0 : idleRotY + pointerManager.x * 0.4;

      groupRef.current.position.y += (breathY - groupRef.current.position.y) * 0.05;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
    }

    // Lid hinge rotation interpolation
    if (lidPivotRef.current) {
      lidPivotRef.current.rotation.x +=
        (targetLidAngle.current - lidPivotRef.current.rotation.x) * 0.04;
    }

    // Ribbon separation interpolation
    if (ribbonXRef.current && ribbonZRef.current) {
      ribbonXRef.current.position.y +=
        (targetRibbonOffset.current - ribbonXRef.current.position.y) * 0.04;
      ribbonZRef.current.position.y +=
        (targetRibbonOffset.current - ribbonZRef.current.position.y) * 0.04;
    }

    // Interior light intensity interpolation
    if (interiorLightRef.current) {
      interiorLightRef.current.intensity +=
        (targetInteriorLight.current - interiorLightRef.current.intensity) * 0.05;
    }

    // Light position following pointer
    if (pointLightRef.current && !prefersReducedMotion) {
      const targetLightX = pointerManager.x * 1.5;
      const targetLightY = 1.8 + pointerManager.y * 0.8;
      pointLightRef.current.position.x += (targetLightX - pointLightRef.current.position.x) * 0.05;
      pointLightRef.current.position.y += (targetLightY - pointLightRef.current.position.y) * 0.05;
    }

    // Ribbon emission pulse upon discovery
    const targetEmissive = glowPulse ? 0.35 : 0.0;
    if (ribbonMatXRef.current) {
      ribbonMatXRef.current.emissiveIntensity +=
        (targetEmissive - ribbonMatXRef.current.emissiveIntensity) * 0.05;
    }
    if (ribbonMatZRef.current) {
      ribbonMatZRef.current.emissiveIntensity +=
        (targetEmissive - ribbonMatZRef.current.emissiveIntensity) * 0.05;
    }
  });

  return (
    <group name="gift-scene-3d">
      {/* Deep Void Atmosphere & Restrained Fog */}
      <EnvironmentManager backgroundColor="#050508" fogColor="#050508" fogDensity={0.012} useExpFog />

      {/* Warm Golden Point & Ambient Illumination */}
      <LightingManager preset="golden" ambientIntensity={0.2} directionalIntensity={1.8} />
      <pointLight
        ref={pointLightRef}
        position={[0, 1.8, 2.5]}
        intensity={isDiscovered ? 3.0 : 2.2}
        color="#d4af37"
        distance={10}
        decay={2}
      />

      {/* Floating 3D Gift Box Geometry */}
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Main Gift Body: Deep Charcoal Box Outer Shell */}
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

        {/* Interior Cavity Volume */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.48, 1.32, 1.48]} />
          <meshStandardMaterial color="#0b0b10" roughness={0.9} metalness={0.1} />
        </mesh>

        {/* Warm Golden Interior Cavity Light */}
        <pointLight
          ref={interiorLightRef}
          position={[0, 0.2, 0]}
          intensity={0.0}
          color="#fcf6ba"
          distance={6}
          decay={2}
        />

        {/* Rear Hinge Pivot Group for Lid Assembly (pivoted at back edge: z = -0.8, y = 0.7) */}
        <group ref={lidPivotRef} position={[0, 0.7, -0.8]}>
          <group position={[0, 0.05, 0.8]}>
            {/* Gift Lid Top */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.68, 0.2, 1.68]} />
              <meshPhysicalMaterial
                color="#181924"
                roughness={0.18}
                metalness={0.85}
                clearcoat={0.4}
              />
            </mesh>

            {/* Champagne Gold Knot/Bow Top */}
            <mesh position={[0, 0.15, 0]}>
              <torusGeometry args={[0.18, 0.05, 16, 32]} />
              <meshStandardMaterial color="#fcf6ba" roughness={0.1} metalness={0.95} />
            </mesh>
          </group>
        </group>

        {/* Ribbon Cross Vertical (X-axis) */}
        <mesh ref={ribbonXRef} position={[0, 0.01, 0]}>
          <boxGeometry args={[1.64, 1.42, 0.22]} />
          <meshStandardMaterial
            ref={ribbonMatXRef}
            color="#fcf6ba"
            emissive="#d4af37"
            emissiveIntensity={0.0}
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>

        {/* Ribbon Cross Vertical (Z-axis) */}
        <mesh ref={ribbonZRef} position={[0, 0.01, 0]}>
          <boxGeometry args={[0.22, 1.42, 1.64]} />
          <meshStandardMaterial
            ref={ribbonMatZRef}
            color="#fcf6ba"
            emissive="#d4af37"
            emissiveIntensity={0.0}
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>
      </group>

      {/* Dynamic Performance Particle Atmosphere */}
      <ParticleEngine preset="Sparkles" customCount={particleCount} />
    </group>
  );
};
