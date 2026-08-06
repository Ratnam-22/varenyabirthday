'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { PerformanceProvider } from './PerformanceProvider';
import { SceneProvider } from './SceneProvider';
import { AudioProvider } from './AudioProvider';
import { AnimationProvider } from '@/animations/AnimationProvider';

export const ExperienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <PerformanceProvider>
        <SceneProvider>
          <AudioProvider>
            <AnimationProvider>{children}</AnimationProvider>
          </AudioProvider>
        </SceneProvider>
      </PerformanceProvider>
    </ThemeProvider>
  );
};
