'use client';

import React from 'react';
import { Stats } from '@react-three/drei';

export interface DebugProfilerProps {
  showStats?: boolean;
}

export const DebugProfiler: React.FC<DebugProfilerProps> = ({ showStats = true }) => {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction || !showStats) return null;

  return <Stats className="!fixed !left-4 !top-4 !z-50" />;
};
