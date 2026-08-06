'use client';

import React from 'react';
import { usePerformanceMonitor } from '@react-three/drei';
import { PerformancePreset, PerformanceSettings } from './types';
import { rendererManager } from '../renderer/RendererManager';

export interface PerformanceEngineProps {
  initialPreset?: PerformancePreset;
  children?: React.ReactNode;
}

const presets: Record<PerformancePreset, PerformanceSettings> = {
  Ultra: { preset: 'Ultra', dpr: 2, shadowMapSize: 2048, particleBudget: 5000, postProcessingEnabled: true },
  High: { preset: 'High', dpr: 1.5, shadowMapSize: 1024, particleBudget: 2500, postProcessingEnabled: true },
  Medium: { preset: 'Medium', dpr: 1.25, shadowMapSize: 512, particleBudget: 1000, postProcessingEnabled: true },
  Low: { preset: 'Low', dpr: 1.0, shadowMapSize: 256, particleBudget: 500, postProcessingEnabled: false },
  BatterySaver: { preset: 'BatterySaver', dpr: 0.75, shadowMapSize: 128, particleBudget: 200, postProcessingEnabled: false },
};

export const PerformanceEngine: React.FC<PerformanceEngineProps> = ({
  initialPreset = 'High',
  children,
}) => {
  const [currentPreset, setCurrentPreset] = React.useState<PerformancePreset>(initialPreset);
  const settings = presets[currentPreset];

  usePerformanceMonitor({
    onDecline: () => {
      if (currentPreset === 'Ultra') setCurrentPreset('High');
      else if (currentPreset === 'High') setCurrentPreset('Medium');
      else if (currentPreset === 'Medium') setCurrentPreset('Low');
      else if (currentPreset === 'Low') setCurrentPreset('BatterySaver');
    },
    onIncline: () => {
      if (currentPreset === 'BatterySaver') setCurrentPreset('Low');
      else if (currentPreset === 'Low') setCurrentPreset('Medium');
    },
    onChange: ({ factor }) => {
      rendererManager.setDpr(Math.max(0.75, settings.dpr * factor));
    },
  });

  return <group name="performance-engine">{children}</group>;
};
