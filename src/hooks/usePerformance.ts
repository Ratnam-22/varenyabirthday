'use client';

import { useContext } from 'react';
import { PerformanceContext } from '@/providers/PerformanceProvider';
import { PerformanceContextType } from '@/types/performance';

export function usePerformance(): PerformanceContextType {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
}
