'use client';

import React, { useEffect } from 'react';
import { rendererManager } from '../renderer/RendererManager';
import { effectRegistry } from '../postprocessing/EffectRegistry';

export const MobilePerformanceController: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const isMobileDevice =
      typeof window !== 'undefined' &&
      (new RegExp('Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop', 'i').test(navigator.userAgent) ||
        window.innerWidth < 768);

    if (isMobileDevice) {
      rendererManager.setDpr(1.0);
      effectRegistry.updateSettings({
        bloomIntensity: 0.5,
        noiseEnabled: false,
        chromaticAberrationEnabled: false,
      });
    }
  }, []);

  return <group name="mobile-performance-controller">{children}</group>;
};
