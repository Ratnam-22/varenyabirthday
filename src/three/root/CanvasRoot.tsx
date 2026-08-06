'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { World } from '../world/World';
import { rendererManager } from '../renderer/RendererManager';

export const CanvasRoot: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 h-full w-full pointer-events-auto bg-[#0a0a0f]">
      <Canvas
        gl={{
          powerPreference: rendererManager.config.powerPreference,
          antialias: true,
          alpha: false,
        }}
        dpr={rendererManager.config.dpr}
        onCreated={({ gl }) => {
          rendererManager.configureRenderer(gl);
        }}
      >
        <Suspense fallback={null}>
          <World />
        </Suspense>
      </Canvas>
    </div>
  );
};
