'use client';

import { useScene } from './useScene';
import { usePerformance } from './usePerformance';
import { useAudio } from './useAudio';
import { useTheme } from './useTheme';

export function useExperience() {
  const scene = useScene();
  const performance = usePerformance();
  const audio = useAudio();
  const theme = useTheme();

  return {
    scene,
    performance,
    audio,
    theme,
  };
}
