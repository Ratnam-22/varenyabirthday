'use client';

import React from 'react';
import { CanvasRoot } from './CanvasRoot';
import { SceneManager } from '@/scenes/SceneManager';
import { DebugControls } from '../debug/DebugControls';
import { PreloaderExperience } from '@/components/loading/PreloaderExperience';

export const Experience: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] text-[#fdfbf7]">
      {/* Asset Preloader Experience Overlay */}
      <PreloaderExperience />

      {/* Persistent WebGL Canvas Layer */}
      <CanvasRoot />

      {/* Persistent UI Layer & Scene UI Manager */}
      <div className="relative z-10 min-h-screen w-full pointer-events-none">
        <SceneManager />
      </div>

      {/* Development Debug System */}
      <DebugControls />
    </div>
  );
};
