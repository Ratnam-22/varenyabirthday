'use client';

import React from 'react';
import { LightingPreset } from './types';

export interface LightingManagerProps {
  preset?: LightingPreset;
  ambientIntensity?: number;
  directionalIntensity?: number;
  shadows?: boolean;
}

const presets: Record<LightingPreset, { ambient: number; directional: number; color: string }> = {
  night: { ambient: 0.2, directional: 0.8, color: '#1a1b2e' },
  golden: { ambient: 0.4, directional: 1.5, color: '#d4af37' },
  studio: { ambient: 0.6, directional: 1.2, color: '#ffffff' },
  magic: { ambient: 0.3, directional: 1.0, color: '#b76e79' },
};

export const LightingManager: React.FC<LightingManagerProps> = ({
  preset = 'night',
  ambientIntensity,
  directionalIntensity,
  shadows = true,
}) => {
  const currentPreset = presets[preset];
  const ambInt = ambientIntensity ?? currentPreset.ambient;
  const dirInt = directionalIntensity ?? currentPreset.directional;

  return (
    <group name="lighting-manager">
      <ambientLight intensity={ambInt} />
      <directionalLight
        position={[10, 15, 10]}
        intensity={dirInt}
        color={currentPreset.color}
        castShadow={shadows}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
    </group>
  );
};
