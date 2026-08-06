'use client';

import React from 'react';
import { LightingManager } from '@/three/lighting/LightingManager';
import { EnvironmentManager } from '@/three/environment/EnvironmentManager';
import { ParticleEngine } from '@/three/particles/ParticleEngine';

export const InvitationScene3D: React.FC = () => {
  return (
    <group name="invitation-scene-3d">
      {/* Dark Midnight Atmosphere */}
      <EnvironmentManager backgroundColor="#07070c" fogColor="#07070c" fogDensity={0.015} useExpFog />

      {/* Warm Golden Ambient & Directional Lighting */}
      <LightingManager preset="night" ambientIntensity={0.3} directionalIntensity={1.0} />

      {/* Low-Density Firefly Atmosphere */}
      <ParticleEngine preset="Fireflies" customCount={200} />
    </group>
  );
};
