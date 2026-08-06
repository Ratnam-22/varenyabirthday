'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
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
  const [currentPreset, setCurrentPreset] = useState<PerformancePreset>(initialPreset);
  const settings = presets[currentPreset];
  const frameCount = useRef(0);
  const lastTime = useRef(0);

  useFrame((state) => {
    frameCount.current += 1;
    const time = state.clock.getElapsedTime();
    if (time - lastTime.current >= 2) {
      const fps = frameCount.current / (time - lastTime.current);
      frameCount.current = 0;
      lastTime.current = time;

      if (fps < 30) {
        if (currentPreset === 'Ultra') setCurrentPreset('High');
        else if (currentPreset === 'High') setCurrentPreset('Medium');
        else if (currentPreset === 'Medium') setCurrentPreset('Low');
        else if (currentPreset === 'Low') setCurrentPreset('BatterySaver');
        rendererManager.setDpr(Math.max(0.75, settings.dpr * 0.8));
      } else if (fps > 55) {
        if (currentPreset === 'BatterySaver') setCurrentPreset('Low');
      }
    }
  });

  return <group name="performance-engine">{children}</group>;
};
