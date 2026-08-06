'use client';

import React, { createContext } from 'react';
import { PerformanceContextType } from '@/types/performance';
import { useDeviceTier } from '@/hooks/useDeviceTier';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useViewport } from '@/hooks/useViewport';
import { BREAKPOINTS } from '@/constants/breakpoints';

export const PerformanceContext = createContext<PerformanceContextType | null>(null);

export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tier = useDeviceTier();
  const prefersReducedMotion = useReducedMotion();
  const { width } = useViewport();

  const isMobile = width < BREAKPOINTS.TABLET;
  const fps = 60;

  return (
    <PerformanceContext.Provider
      value={{
        tier,
        prefersReducedMotion,
        isMobile,
        fps,
      }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};
