'use client';

import React from 'react';
import { CameraRig } from '../camera/CameraRig';
import { LightingManager } from '../lighting/LightingManager';
import { EnvironmentManager } from '../environment/EnvironmentManager';
import { SceneRuntime } from '../runtime/SceneRuntime';
import { PerformanceEngine } from '../performance/PerformanceEngine';
import { MobilePerformanceController } from '../performance/MobilePerformanceController';
import { PostProcessingPipeline } from '../postprocessing/PostProcessingPipeline';
import { ParticleEngine } from '../particles/ParticleEngine';
import { ClockProvider } from '../time/ClockProvider';
import { DebugProfiler } from '../debug/DebugProfiler';

export const World: React.FC = () => {
  return (
    <ClockProvider>
      <group name="world-scene-graph">
        <CameraRig position={[0, 0, 10]} target={[0, 0, 0]} fov={50} />
        <EnvironmentManager backgroundColor="#0a0a0f" fogColor="#0a0a0f" useExpFog />
        <LightingManager preset="night" />

        <PerformanceEngine initialPreset="High">
          <MobilePerformanceController>
            <ParticleEngine preset="Fireflies" />
            <SceneRuntime />
            <PostProcessingPipeline bloomEnabled vignetteEnabled />
          </MobilePerformanceController>
        </PerformanceEngine>

        <DebugProfiler />
      </group>
    </ClockProvider>
  );
};
