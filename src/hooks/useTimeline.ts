'use client';

import { useContext } from 'react';
import { AnimationContext } from '@/animations/AnimationContext';

export function useTimeline() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useTimeline must be used within an AnimationProvider');
  }
  return context;
}
