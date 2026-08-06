'use client';

import { rendererManager } from '@/three/renderer/RendererManager';

export function useCanvas() {
  return {
    rendererConfig: rendererManager.config,
    setDpr: (dpr: number) => rendererManager.setDpr(dpr),
  };
}
