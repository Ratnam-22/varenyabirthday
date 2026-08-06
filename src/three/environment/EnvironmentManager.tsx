'use client';

import React from 'react';
import { EnvironmentConfig } from './types';

export type EnvironmentManagerProps = Partial<EnvironmentConfig>;

export const EnvironmentManager: React.FC<EnvironmentManagerProps> = ({
  backgroundColor = '#0a0a0f',
  fogColor = '#0a0a0f',
  fogDensity = 0.015,
  useExpFog = true,
}) => {
  return (
    <group name="environment-manager">
      <color attach="background" args={[backgroundColor]} />
      {useExpFog ? (
        <fogExp2 attach="fog" args={[fogColor, fogDensity]} />
      ) : (
        <fog attach="fog" args={[fogColor, 10, 50]} />
      )}
    </group>
  );
};
